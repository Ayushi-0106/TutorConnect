from rest_framework import serializers
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    student_name = serializers.CharField(source='student.username', read_only=True)
    tutor_name = serializers.CharField(source='tutor.name', read_only=True)
    
    class Meta:
        model = Review
        fields = ['id', 'booking', 'student', 'student_name', 'tutor', 'tutor_name', 'rating', 'comment', 'created_at']
        read_only_fields = ['student', 'tutor', 'booking', 'created_at']