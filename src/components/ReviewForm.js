import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { FaStar, FaTimes } from 'react-icons/fa';

function ReviewForm({ bookingId, tutorName, onClose, onSuccess }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    console.log("Submitting:", { booking: bookingId, rating, comment });
    
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/reviews/create/`,
        { booking: bookingId, rating, comment },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success('Review submitted successfully!');
      onSuccess();
    } catch (err) {
      console.log("Error:", err.response?.data);
      toast.error(err.response?.data?.error || 'Failed to submit review');
    }
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '30px',
        width: '500px',
        maxWidth: '90%',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: '15px', right: '15px',
          background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer'
        }}><FaTimes /></button>

        <h2>Rate Your Tutor</h2>
        <p>How was your session with <strong>{tutorName}</strong>?</p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label>Rating:</label>
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              {[1, 2, 3, 4, 5].map(star => (
                <FaStar
                  key={star}
                  size={35}
                  style={{ cursor: 'pointer', color: (hover >= star || rating >= star) ? '#FFD700' : '#e4e5e9' }}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label>Your Review:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="4"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: '2px solid #e0e0e0',
                fontSize: '0.9rem',
                marginTop: '10px'
              }}
              placeholder="Share your experience with this tutor..."
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit" disabled={loading} style={{
              flex: 1, background: '#FFD700', color: '#111827', padding: '12px',
              border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer'
            }}>
              {loading ? 'Submitting...' : 'Submit Review'}
            </button>
            <button type="button" onClick={onClose} style={{
              padding: '12px 20px', background: '#dc2626', color: 'white',
              border: 'none', borderRadius: '10px', cursor: 'pointer'
            }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;