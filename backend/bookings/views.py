from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Booking
from tutors.models import Tutor


# CREATE BOOKING
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_booking(request):
    tutor_id = request.data.get("tutor")

    tutor = Tutor.objects.get(id=tutor_id)

    Booking.objects.create(
        tutor=tutor,
        student=request.user,
        student_name=request.user.username
    )

    return Response({
        "message": "Booking created successfully"
    })


# GET ALL BOOKINGS (ADMIN ONLY - Optional)
@api_view(['GET'])
def get_bookings(request):

    bookings = Booking.objects.all()

    data = []

    for booking in bookings:
        data.append({
            "id": booking.id,
            "student_name": booking.student_name,
            "tutor_name": booking.tutor.name,
            "subject": booking.tutor.subject,
            "created_at": booking.created_at,
            "status": booking.status,
        })

    return Response(data)


# GET LOGGED-IN STUDENT BOOKINGS
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_student_bookings(request):

    bookings = Booking.objects.filter(student=request.user)

    data = []

    for booking in bookings:
        data.append({
            "id": booking.id,
            "student_name": booking.student_name,
            "tutor_name": booking.tutor.name,
            "subject": booking.tutor.subject,
            "created_at": booking.created_at,
            "status": booking.status,
            "tutor_phone": booking.tutor.phone if booking.status == 'accepted' else None,
            "tutor_email": booking.tutor.email if booking.status == 'accepted' else None,
        })

    return Response(data)


# GET LOGGED-IN TUTOR BOOKINGS (Sirf us tutor ki bookings)
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_tutor_bookings(request):
    """Sirf us tutor ki bookings dikhaye jo logged-in hai"""
    
    
    try:
        tutor = Tutor.objects.get(user=request.user)
    except Tutor.DoesNotExist:
        return Response({"message": "You are not registered as a tutor"}, status=400)
    
    
    bookings = Booking.objects.filter(tutor=tutor)

    data = []
    for booking in bookings:
        data.append({
            "id": booking.id,
            "student_name": booking.student_name,
            "tutor_name": booking.tutor.name,
            "subject": booking.tutor.subject,
            "created_at": booking.created_at,
            "status": booking.status,
        })

    return Response(data)


# UPDATE BOOKING STATUS (Accept/Reject)
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_booking_status(request, booking_id):
    """Tutor booking ko accept/reject kar sakta hai"""
    try:
        booking = Booking.objects.get(id=booking_id)
    except Booking.DoesNotExist:
        return Response({"error": "Booking not found"}, status=404)
    
    # Sirf wahi tutor jo booking ke liye assigned hai, status update kar sakta hai
    if booking.tutor.user != request.user:
        return Response({"error": "You are not authorized"}, status=403)
    
    status = request.data.get('status')
    if status not in ['accepted', 'rejected', 'completed']:
        return Response({"error": "Invalid status"}, status=400)
    
    # AGAR REJECT KAREGA TO DELETE
    if status == 'rejected':
        booking.delete()
        return Response({"message": "Booking rejected and deleted successfully"})
    
    booking.status = status
    booking.save()
    
    return Response({
        "message": f"Booking {status} successfully",
        "status": booking.status
    })


# CANCEL BOOKING (Student only)
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def cancel_booking(request, booking_id):
    """Student apni pending booking cancel kar sakta hai"""
    try:
        booking = Booking.objects.get(id=booking_id, student=request.user)
    except Booking.DoesNotExist:
        return Response({"error": "Booking not found"}, status=404)
    
    # Sirf pending booking cancel kar sakte hain
    if booking.status != 'pending':
        return Response({"error": "Only pending bookings can be cancelled"}, status=400)
    
    booking.delete()
    return Response({"message": "Booking cancelled successfully"})

    