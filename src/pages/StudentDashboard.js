import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaBookOpen, FaCalendarAlt, FaCheckCircle, FaSpinner, FaClock, FaTimesCircle, FaStar, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import ReviewForm from '../components/ReviewForm';

function StudentDashboard() {
  const { user, token } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const fetchBookings = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/bookings/student-bookings/`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchBookings();
      const interval = setInterval(fetchBookings, 5000);
      return () => clearInterval(interval);
    } else {
      setLoading(false);
    }
  }, [token]);

  const cancelBooking = async (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/api/bookings/${bookingId}/cancel/`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        toast.success('Booking cancelled successfully!');
        fetchBookings();
      } catch (err) {
        toast.error(err.response?.data?.error || 'Failed to cancel booking');
      }
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return { bg: '#FEF3C7', color: '#D97706', icon: <FaClock />, text: 'Pending Approval' };
      case 'accepted':
        return { bg: '#D1FAE5', color: '#059669', icon: <FaCheckCircle />, text: 'Accepted' };
      case 'rejected':
        return { bg: '#FEE2E2', color: '#DC2626', icon: <FaTimesCircle />, text: 'Rejected' };
      case 'completed':
        return { bg: '#DBEAFE', color: '#2563EB', icon: <FaCheckCircle />, text: 'Completed' };
      default:
        return { bg: '#E5E7EB', color: '#6B7280', icon: null, text: status || 'Pending' };
    }
  };

  const handleReviewClick = (booking) => {
    setSelectedBooking(booking);
    setShowReviewModal(true);
  };

  const handleReviewSuccess = () => {
    setShowReviewModal(false);
    setSelectedBooking(null);
    fetchBookings();
    toast.success('Review submitted successfully!');
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <FaSpinner style={{ animation: 'spin 1s linear infinite', fontSize: '2rem', color: '#FFD700' }} />
        <p>Loading your bookings...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <FaUser style={{ color: '#FFD700' }} /> Student Dashboard
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Welcome, <strong>{user?.username}</strong>! Here are your booked sessions.
      </p>

      {bookings.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', background: '#f9f9f9', borderRadius: '15px' }}>
          <p>You haven't booked any tutors yet.</p>
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
          {bookings.map((booking, index) => {
            const statusBadge = getStatusBadge(booking.status);
            const canReview = booking.status === 'accepted' && !booking.reviewed;
            return (
              <div key={index} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                borderLeft: `4px solid ${statusBadge.color}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '10px' }}>{booking.tutor_name}</h3>
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

                    {/* Cancel Button  */}
                    {booking.status === 'pending' && (
                      <button
                        onClick={() => cancelBooking(booking.id)}
                        style={{
                          background: '#dc2626',
                          color: 'white',
                          border: 'none',
                          padding: '6px 15px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          marginTop: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <FaTimesCircle /> Cancel Booking
                      </button>
                    )}

                    {/* Contact Details  */}
                    {booking.status === 'accepted' && (
                      <div style={{
                        marginTop: '15px',
                        padding: '12px',
                        background: '#f0fdf4',
                        borderRadius: '10px',
                        borderLeft: '4px solid #10b981'
                      }}>
                        <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>📞 Tutor Contact Details:</p>
                        {booking.tutor_phone && (
                          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px', flexWrap: 'wrap' }}>
                            <FaPhoneAlt style={{ color: '#25D366' }} />
                            <strong>Phone:</strong> {booking.tutor_phone}
                            <a href={`tel:${booking.tutor_phone}`} style={{
                              background: '#10b981',
                              color: 'white',
                              padding: '3px 10px',
                              borderRadius: '15px',
                              textDecoration: 'none',
                              fontSize: '0.7rem'
                            }}>Call</a>
                            <a href={`https://wa.me/${booking.tutor_phone}`} target="_blank" style={{
                              background: '#25D366',
                              color: 'white',
                              padding: '3px 10px',
                              borderRadius: '15px',
                              textDecoration: 'none',
                              fontSize: '0.7rem'
                            }}>WhatsApp</a>
                          </p>
                        )}
                        {booking.tutor_email && (
                          <p style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            <FaEnvelope style={{ color: '#3b82f6' }} />
                            <strong>Email:</strong> {booking.tutor_email}
                            <a href={`mailto:${booking.tutor_email}`} style={{
                              background: '#3b82f6',
                              color: 'white',
                              padding: '3px 10px',
                              borderRadius: '15px',
                              textDecoration: 'none',
                              fontSize: '0.7rem'
                            }}>Send Email</a>
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    {canReview && (
                      <button
                        onClick={() => handleReviewClick(booking)}
                        style={{
                          background: '#FFD700',
                          color: '#111827',
                          border: 'none',
                          padding: '10px 20px',
                          borderRadius: '10px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontWeight: 'bold'
                        }}
                      >
                        <FaStar /> Write a Review
                      </button>
                    )}
                    {booking.reviewed && (
                      <span style={{
                        background: '#D1FAE5',
                        color: '#059669',
                        padding: '8px 20px',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <FaCheckCircle /> Reviewed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showReviewModal && selectedBooking && (
        <ReviewForm
          bookingId={selectedBooking.id}
          tutorId={selectedBooking.tutor_id}
          tutorName={selectedBooking.tutor_name}
          onClose={() => setShowReviewModal(false)}
          onSuccess={handleReviewSuccess}
        />
      )}
    </div>
  );
}

export default StudentDashboard;