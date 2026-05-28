import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaSearch, FaUser, FaBookOpen, FaGraduationCap, FaCalendarAlt, FaRupeeSign, FaStar, FaChalkboardTeacher } from 'react-icons/fa';

function TutorList() {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const [studentName, setStudentName] = useState("");
  
  const location = useLocation();
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subjectParam = params.get('subject');
    if (subjectParam) {
      setSearch(subjectParam);
    }
  }, [location.search]);

  const bookTutor = (tutorId) => {
    if (studentName === "") {
      toast.warning("Please enter your name");
      return;
    }

    axios.post(`${process.env.REACT_APP_API_URL}/api/bookings/`, {
      tutor: tutorId,
      student_name: studentName
    })
    .then(() => {
      toast.success("✅ Tutor booked successfully!");
      setStudentName("");
    })
    .catch((error) => {
      console.log(error);
      toast.error("❌ Booking failed!");
    });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/tutors/`)
      .then((response) => {
        setTutors(response.data);
      })
      .catch((error) => {
        console.log("ERROR:", error);
        toast.error("Failed to load tutors");
      });
  }, []);

  const filteredTutors = tutors.filter((tutor) =>
    tutor.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <FaChalkboardTeacher /> Find Your Perfect Tutor
      </h1>

      {/* Search Section */}
      {search && (
        <div style={{ 
          background: '#f0f0f0', 
          padding: '10px 20px', 
          borderRadius: '50px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0 }}>
            <FaSearch style={{ marginRight: '8px' }} /> Showing tutors for <strong style={{ color: '#FFD700' }}>"{search}"</strong>
            <button 
              onClick={() => setSearch('')}
              style={{
                marginLeft: '10px',
                background: '#111827',
                color: 'white',
                border: 'none',
                padding: '5px 12px',
                borderRadius: '20px',
                cursor: 'pointer'
              }}
            >
              Clear ✕
            </button>
          </p>
        </div>
      )}

      {/* Input Fields */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <FaSearch style={{
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#888'
          }} />
          <input
            type="text"
            placeholder="Search by subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px',
              paddingLeft: '40px',
              borderRadius: '50px',
              border: '2px solid #e0e0e0',
              fontSize: '16px'
            }}
          />
        </div>
        
        <div style={{ flex: 1, position: 'relative' }}>
          <FaUser style={{
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#888'
          }} />
          <input
            type="text"
            placeholder="Enter your name to book..."
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px',
              paddingLeft: '40px',
              borderRadius: '50px',
              border: '2px solid #e0e0e0',
              fontSize: '16px'
            }}
          />
        </div>
      </div>

      {/* Tutors Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '25px'
      }}>
        {filteredTutors.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px', gridColumn: '1/-1' }}>
            <p>No tutors found for "{search}". Try another subject!</p>
          </div>
        ) : (
          filteredTutors.map((tutor, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ color: '#667eea', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaChalkboardTeacher /> {tutor.name}
                </h3>
                <span style={{ background: '#FFD700', padding: '5px 10px', borderRadius: '50px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FaStar /> 4.8
                </span>
              </div>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '10px 0' }}>
                <FaBookOpen style={{ color: '#FFD700' }} /> <strong>Subject:</strong> {tutor.subject}
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '10px 0' }}>
                <FaGraduationCap style={{ color: '#FFD700' }} /> <strong>Qualification:</strong> {tutor.qualification}
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '10px 0' }}>
                <FaCalendarAlt style={{ color: '#FFD700' }} /> <strong>Experience:</strong> {tutor.experience} years
              </p>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#10b981', margin: '15px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaRupeeSign /> {tutor.hourly_fee}/hour
              </p>
              <button
                onClick={() => bookTutor(tutor.id)}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: '#FFD700',
                  color: '#111827',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#F59E0B';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#FFD700';
                  e.target.style.transform = 'translateY(0)';
                }}>
                <FaBookOpen /> Book Tutor
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TutorList;