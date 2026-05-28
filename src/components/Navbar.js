import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaHome, FaChalkboardTeacher, FaBook, FaInfoCircle, FaEnvelope, FaSignInAlt, FaBookOpen, FaChevronDown, FaGraduationCap, FaTachometerAlt } from 'react-icons/fa';

function Navbar() {
  const [showSubjects, setShowSubjects] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const subjects = [
    "Python", "JavaScript", "Java", "C++",
    "Mathematics", "Physics", "Chemistry", "Biology",
    "English", "Hindi", "History", "Geography",
    "Web Development", "Data Science", "AI/ML", "Database"
  ];

  return (
    <nav style={{
      background: '#111827',
      padding: '12px 30px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      flexWrap: 'wrap'
    }}>
      {/* Logo */}
      <Link to="/" style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#FFD700',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <FaGraduationCap /> TutorConnect
      </Link>

      {/* Navigation Links */}
      <div style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <Link to="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '0.9rem',
          transition: 'all 0.3s',
          padding: '8px 12px',
          borderRadius: '25px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#FFD700';
          e.target.style.color = '#111827';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'white';
        }}>
          <FaHome /> Home
        </Link>
        
        <Link to="/tutors" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '0.9rem',
          transition: 'all 0.3s',
          padding: '8px 12px',
          borderRadius: '25px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#FFD700';
          e.target.style.color = '#111827';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'white';
        }}>
          <FaChalkboardTeacher /> Tutors
        </Link>
        
        {/* Subjects Dropdown */}
        <div style={{ position: 'relative' }}
          onMouseEnter={() => setShowSubjects(true)}
          onMouseLeave={() => setShowSubjects(false)}>
          <button style={{
            background: 'transparent',
            color: 'white',
            border: 'none',
            fontSize: '0.9rem',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '25px',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#FFD700';
            e.target.style.color = '#111827';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'white';
          }}>
            <FaBookOpen /> Subjects <FaChevronDown style={{ fontSize: '0.7rem' }} />
          </button>
          
          {showSubjects && (
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '0',
              background: '#1F2937',
              minWidth: '220px',
              borderRadius: '10px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              zIndex: 100,
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '5px',
                padding: '10px'
              }}>
                {subjects.map((subject, index) => (
                  <Link
                    key={index}
                    to={`/tutors?subject=${encodeURIComponent(subject)}`}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      padding: '6px 10px',
                      fontSize: '0.8rem',
                      borderRadius: '5px',
                      transition: 'all 0.2s',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#FFD700';
                      e.target.style.color = '#111827';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'white';
                    }}
                  >
                    📚 {subject}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link to="/about" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '0.9rem',
          transition: 'all 0.3s',
          padding: '8px 12px',
          borderRadius: '25px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#FFD700';
          e.target.style.color = '#111827';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'white';
        }}>
          <FaInfoCircle /> About
        </Link>

        <Link to="/contact" style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '0.9rem',
          transition: 'all 0.3s',
          padding: '8px 12px',
          borderRadius: '25px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#FFD700';
          e.target.style.color = '#111827';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = 'white';
        }}>
          <FaEnvelope /> Contact
        </Link>
        
        {/* Bookings Link - SIRF ADMIN KE LIYE */}
        {isAuthenticated && user?.role === 'admin' && (
          <Link to="/bookings" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'all 0.3s',
            padding: '8px 12px',
            borderRadius: '25px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#FFD700';
            e.target.style.color = '#111827';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'white';
          }}>
            <FaBook /> All Bookings
          </Link>
        )}

        {/* Dashboard Link - Role wise */}
        {isAuthenticated && user?.role === 'student' && (
          <Link to="/student-dashboard" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'all 0.3s',
            padding: '8px 12px',
            borderRadius: '25px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#FFD700';
            e.target.style.color = '#111827';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'white';
          }}>
            <FaTachometerAlt /> Dashboard
          </Link>
        )}

        {isAuthenticated && user?.role === 'tutor' && (
          <Link to="/tutor-dashboard" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'all 0.3s',
            padding: '8px 12px',
            borderRadius: '25px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#FFD700';
            e.target.style.color = '#111827';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = 'white';
          }}>
            <FaTachometerAlt /> Dashboard
          </Link>
        )}

        {/* Login/Logout Button */}
        {isAuthenticated ? (
          <button onClick={logout} style={{
            background: '#dc2626',
            color: 'white',
            border: 'none',
            padding: '8px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => e.target.style.background = '#b91c1c'}
          onMouseLeave={(e) => e.target.style.background = '#dc2626'}>
            <FaSignInAlt /> Logout ({user?.username})
          </button>
        ) : (
          <Link to="/login" style={{
            background: '#FFD700',
            color: '#111827',
            border: 'none',
            padding: '8px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 5px 15px rgba(255,215,0,0.4)';
            e.target.style.background = '#F59E0B';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
            e.target.style.background = '#FFD700';
          }}>
            <FaSignInAlt /> Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;