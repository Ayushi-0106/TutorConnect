import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '30px', color: '#111827' }}>
        Contact <span style={{ color: '#FFD700' }}>Us</span>
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px'
      }}>
        {/* Contact Info with Icons */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{ color: '#FFD700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaMapMarkerAlt /> Get in Touch
          </h2>
          
          <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <FaMapMarkerAlt style={{ color: '#FFD700', fontSize: '1.2rem', marginTop: '3px' }} />
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '5px', color: '#111827' }}>Address</h3>
              <p style={{ color: '#6B7280', margin: 0 }}>123 Education Street, Tech Park,<br />New Delhi, India - 110001</p>
            </div>
          </div>

          <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <FaPhoneAlt style={{ color: '#FFD700', fontSize: '1.2rem', marginTop: '3px' }} />
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '5px', color: '#111827' }}>Phone</h3>
              <p style={{ color: '#6B7280', margin: 0 }}>+91 98765 43210<br />+91 12345 67890</p>
            </div>
          </div>

          <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <FaEnvelope style={{ color: '#FFD700', fontSize: '1.2rem', marginTop: '3px' }} />
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '5px', color: '#111827' }}>Email</h3>
              <p style={{ color: '#6B7280', margin: 0 }}>support@tutorconnect.com<br />info@tutorconnect.com</p>
            </div>
          </div>

          <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <FaClock style={{ color: '#FFD700', fontSize: '1.2rem', marginTop: '3px' }} />
            <div>
              <h3 style={{ fontSize: '1rem', marginBottom: '5px', color: '#111827' }}>Working Hours</h3>
              <p style={{ color: '#6B7280', margin: 0 }}>Monday - Saturday: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
        }}>
          <h2 style={{ color: '#FFD700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaPaperPlane /> Send us a Message
          </h2>
          
          {submitted && (
            <div style={{
              background: '#FEF3C7',
              color: '#F59E0B',
              padding: '10px',
              borderRadius: '10px',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              ✅ Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#111827' }}>Your Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '2px solid #E5E7EB',
                  fontSize: '1rem'
                }}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#111827' }}>Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '2px solid #E5E7EB',
                  fontSize: '1rem'
                }}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#111827' }}>Message *</label>
              <textarea
                required
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: '2px solid #E5E7EB',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                background: '#FFD700',
                color: '#111827',
                border: 'none',
                padding: '12px',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
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
              }}
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;