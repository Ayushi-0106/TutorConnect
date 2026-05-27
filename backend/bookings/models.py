from django.db import models
from tutors.models import Tutor
from users.models import User

class Booking(models.Model):
    STATUS_CHOICES = (
        ('pending', '⏳ Pending'),
        ('accepted', '✅ Accepted'),
        ('rejected', '❌ Rejected'),
        ('completed', '🏆 Completed'),
    )
    
    tutor = models.ForeignKey(Tutor, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    student_name = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.student_name} - {self.tutor.name} ({self.status})"
