<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> e9e3c85a029a0df1766191dc03aaa69cfd948c83
