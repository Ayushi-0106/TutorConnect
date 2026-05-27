from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Review
from .serializers import ReviewSerializer
from bookings.models import Booking

class CreateReviewView(generics.CreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        booking_id = request.data.get('booking')
        rating = request.data.get('rating')
        comment = request.data.get('comment')
        
        try:
            booking = Booking.objects.get(id=booking_id)
        except Booking.DoesNotExist:
            return Response({"error": "Booking not found"}, status=404)
        
        # Check if user is the student who made the booking
        if booking.student != request.user:
            return Response({"error": "You can only review your own bookings"}, status=403)
        
        # Check if already reviewed
        if Review.objects.filter(booking=booking).exists():
            return Response({"error": "You already reviewed this booking"}, status=400)
        
        # Create review
        review = Review.objects.create(
            booking=booking,
            student=request.user,
            tutor=booking.tutor,
            rating=rating,
            comment=comment
        )
        
        # Update tutor rating
        booking.tutor.update_rating()
        
        return Response({
            "message": "Review submitted successfully",
            "review_id": review.id
        }, status=201)


# ADD THIS CLASS - TutorReviewsView
class TutorReviewsView(generics.ListAPIView):
    serializer_class = ReviewSerializer
    
    def get_queryset(self):
        tutor_id = self.kwargs['tutor_id']
        return Review.objects.filter(tutor_id=tutor_id).order_by('-created_at')