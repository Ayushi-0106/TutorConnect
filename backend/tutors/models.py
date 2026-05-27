from django.db import models
from users.models import User
  

class Tutor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)  
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    experience = models.IntegerField()
    hourly_fee = models.IntegerField()
    avg_rating = models.FloatField(default=0)
    total_reviews = models.IntegerField(default=0)
    phone = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)

    def update_rating(self):

        from reviews.models import Review
        reviews = Review.objects.filter(tutor=self)
        if reviews.exists():
            total = sum(r.rating for r in reviews)
            self.avg_rating = total / reviews.count()
            self.total_reviews = reviews.count()
        else:
            self.avg_rating = 0
            self.total_reviews = 0
        self.save()

    def __str__(self):
        return self.name
