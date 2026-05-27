from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Tutor


# GET ALL TUTORS
@api_view(['GET'])
def get_tutors(request):
    tutors = Tutor.objects.all()

    data = []

    for tutor in tutors:
        data.append({
            "id": tutor.id,
            "name": tutor.name,
            "subject": tutor.subject,
            "qualification": tutor.qualification,
            "experience": tutor.experience,
            "hourly_fee": tutor.hourly_fee,
            "avg_rating": tutor.avg_rating, 
            "total_reviews": tutor.total_reviews
        })

    return Response(data)


# CREATE TUTOR PROFILE
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_tutor_profile(request):

    if Tutor.objects.filter(user=request.user).exists():
        return Response(
            {"message": "Profile already exists"},
            status=400
        )

    tutor = Tutor.objects.create(
        user=request.user,
        name=request.user.username,
        subject=request.data.get('subject'),
        qualification=request.data.get('qualification'),
        experience=request.data.get('experience'),
        hourly_fee=request.data.get('hourly_fee')
        
    )

    return Response({
        "message": "Tutor profile created successfully",
        "id": tutor.id,
        "name": tutor.name,
        "subject": tutor.subject
    })