import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBookOpen, FaChalkboardTeacher, FaUser, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/bookings/list/")
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <FaBookOpen style={{ color: '#FFD700' }} /> My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px',
          background: '#f9f9f9',
          borderRadius: '15px'
        }}>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>No bookings yet.</p>
          <a href="/tutors" style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '12px 30px',
            background: '#FFD700',
            color: '#111827',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 'bold'
          }}>Browse Tutors →</a>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {bookings.map((booking, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              borderLeft: '4px solid #FFD700',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '15px',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
              <div>
                <h3 style={{ color: '#111827', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaChalkboardTeacher style={{ color: '#FFD700' }} /> {booking.tutor_name}
                </h3>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0' }}>
                  <FaUser style={{ color: '#FFD700' }} /> <strong>Student:</strong> {booking.student_name}
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0' }}>
                  <FaBookOpen style={{ color: '#FFD700' }} /> <strong>Subject:</strong> {booking.subject}
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0' }}>
                  <FaCalendarAlt style={{ color: '#FFD700' }} /> <strong>Booked on:</strong> {new Date().toLocaleDateString()}
                </p>
              </div>
              <div>
                <span style={{
                  background: '#10b981',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <FaCheckCircle /> Confirmed
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;