from django.urls import path
from .views import create_booking, get_bookings, get_student_bookings, get_tutor_bookings, update_booking_status, cancel_booking

urlpatterns = [
    path('', create_booking),
    path('list/', get_bookings),
    path('student-bookings/', get_student_bookings),
    path('tutor-bookings/', get_tutor_bookings),
    path('<int:booking_id>/status/', update_booking_status),  
    path('<int:booking_id>/cancel/', cancel_booking),
]