from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_tutors, name='get_tutors'),
    path('create-profile/', views.create_tutor_profile, name='create_tutor_profile'),  
]