from django.urls import path
from .views import CreateReviewView, TutorReviewsView

urlpatterns = [
    path('create/', CreateReviewView.as_view(), name='create-review'),
    path('tutor/<int:tutor_id>/', TutorReviewsView.as_view(), name='tutor-reviews'),
]