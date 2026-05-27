# 📚 TutorConnect - Freelance Tutor Booking Platform

A full-stack web application that connects students with expert tutors. Students can search for tutors, book sessions, and leave reviews. Tutors can manage booking requests, accept/reject sessions, and track their bookings. Admin has full control over users and bookings.

##  Live Demo

soon..

##  Features

### Student
- Signup / Login with JWT Authentication
- Search tutors by subject
- View tutor profile with qualifications and fees
- Book a tutor
- View booking history
- Cancel pending bookings
- Write reviews and ratings

### Tutor
- Signup / Login
- View booking requests from students
- Accept or reject booking requests
- View contact details after accepting
- Dashboard with all bookings

###  Admin
- Manage all students and tutors
- View all bookings
- Delete users
- Admin panel access

##  Tech Stack

### Backend
- **Django** 6.0.3
- **Django REST Framework** 3.17.1
- **JWT Authentication** (djangorestframework-simplejwt)
- **SQLite** (can be upgraded to PostgreSQL)

### Frontend
- **ReactJS** 19.2.6
- **React Router DOM** 7.15.1
- **Axios** for API calls
- **React Icons** 5.6.0
- **CSS** (custom styling with gradient themes)

## Installation

### Prerequisites
- Python 3.13+
- Node.js 18+
- pip
- npm

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/Ayushi-0106/TutorConnect.git
cd TutorConnect/backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
# Or install manually:
pip install djangorestframework djangorestframework-simplejwt django-cors-headers

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser (admin)
python manage.py createsuperuser

# Run backend server
python manage.py runserver

Frontend Setup..
cd ../frontend

# Install dependencies
npm install

# Add additional packages
npm install axios react-router-dom react-icons

# Run frontend server
npm start

TutorConnect/
├── backend/
│   ├── users/          # Custom user model with roles
│   ├── tutors/         # Tutor management
│   ├── bookings/       # Booking system
│   ├── reviews/        # Review and rating system
│   └── backend/        # Django project settings
├── frontend/
│   ├── src/
│   │   ├── components/ # Navbar, Footer, ReviewForm
│   │   ├── pages/      # Home, TutorList, Dashboard, Login, Signup
│   │   ├── context/    # AuthContext for JWT
│   │   └── App.js
│   └── public/
└── .gitignore


<!-- API Endpoints -->
Method	Endpoint	Description
POST	/api/auth/register/	User registration
POST	/api/auth/login/	User login with JWT
GET	/api/tutors/	Get all tutors
POST	/api/bookings/	Create booking
GET	/api/bookings/student-bookings/	Student's bookings
GET	/api/bookings/tutor-bookings/	Tutor's bookings
PUT	/api/bookings/{id}/status/	Update booking status
DELETE	/api/bookings/{id}/cancel/	Cancel booking
POST	/api/reviews/create/	Submit review


<!-- Workflow -->
Student → Search Tutor → Book Tutor → Pending Request
                                          ↓
                                   Tutor Accept/Reject
                                          ↓
Student ← Status Updated ← Contact Details Visible

 <!-- Author -->
Ayushi Kumari

<!--License-->
This project is for educational purposes.

<!-- Acknowledgements -->
Django REST Framework Documentation
ReactJS Documentation
Unsplash for background images
