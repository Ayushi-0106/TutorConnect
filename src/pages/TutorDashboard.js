import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { FaChalkboardTeacher, FaUser, FaBookOpen, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaClock } from 'react-icons/fa';

function TutorDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuth();

  useEffect(() => {
    if (token) {
      fetchBookings();
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/bookings/tutor-bookings/", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (bookingId, status) => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/bookings/${bookingId}/status/`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Refresh bookings list
      fetchBookings();
    } catch (err) {
      console.log(err);
      alert("Failed to update status");
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending':
        return { bg: '#FEF3C7', color: '#D97706', icon: <FaClock />, text: 'Pending' };
      case 'accepted':
        return { bg: '#D1FAE5', color: '#059669', icon: <FaCheckCircle />, text: 'Accepted' };
      case 'rejected':
        return { bg: '#FEE2E2', color: '#DC2626', icon: <FaTimesCircle />, text: 'Rejected' };
      default:
        return { bg: '#E5E7EB', color: '#6B7280', icon: null, text: status };
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <FaChalkboardTeacher style={{ color: '#FFD700' }} /> Tutor Dashboard
      </h1>
      
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Welcome, <strong>{user?.username}</strong>! Students who booked you:
      </p>

      {bookings.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', background: '#f9f9f9', borderRadius: '15px' }}>
          <p>No students have booked you yet.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '20px' }}>
          {bookings.map((booking) => {
            const statusBadge = getStatusBadge(booking.status);
            return (
              <div key={booking.id} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                borderLeft: `4px solid ${statusBadge.color}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
                  <div>
                    <h3><FaUser style={{ color: '#FFD700' }} /> {booking.student_name}</h3>
                    <p><FaBookOpen style={{ color: '#FFD700' }} /> <strong>Subject:</strong> {booking.subject}</p>
                    <p><FaCalendarAlt style={{ color: '#FFD700' }} /> <strong>Booked on:</strong> {new Date(booking.created_at).toLocaleDateString()}</p>
                    <p style={{ marginTop: '10px' }}>
                      <strong>Status:</strong>{' '}
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: statusBadge.bg,
                        color: statusBadge.color,
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}>
                        {statusBadge.icon} {statusBadge.text}
                      </span>
                    </p>
                  </div>
                  
                  {booking.status === 'pending' && (
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <button
                        onClick={() => updateStatus(booking.id, 'accepted')}
                        style={{
                          background: '#10b981',
                          color: 'white',
                          border: 'none',
                          padding: '10px 24px',
                          borderRadius: '10px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontWeight: 'bold'
                        }}
                      >
                        <FaCheckCircle /> Accept
                      </button>
                      <button
                        onClick={() => updateStatus(booking.id, 'rejected')}
                        style={{
                          background: '#dc2626',
                          color: 'white',
                          border: 'none',
                          padding: '10px 24px',
                          borderRadius: '10px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontWeight: 'bold'
                        }}
                      >
                        <FaTimesCircle /> Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TutorDashboard;