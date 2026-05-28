import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '30px', color: '#111827' }}>
        About <span style={{ color: '#FFD700' }}>TutorConnect</span>
      </h1>
      
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{ color: '#FFD700', marginBottom: '20px' }}>Our Mission</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4B5563', marginBottom: '30px' }}>
          At TutorConnect, our mission is to bridge the gap between students and expert tutors, 
          making quality education accessible to everyone from the comfort of their homes.
        </p>

        <h2 style={{ color: '#FFD700', marginBottom: '20px' }}>What We Offer</h2>
        <ul style={{ fontSize: '1rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '30px', paddingLeft: '20px' }}>
          <li>✅ 500+ Verified Expert Tutors</li>
          <li>✅ 50+ Subjects to Choose From</li>
          <li>✅ Flexible Scheduling</li>
          <li>✅ Affordable Pricing</li>
          <li>✅ One-on-One Personalized Sessions</li>
        </ul>

        <h2 style={{ color: '#FFD700', marginBottom: '20px' }}>Why Choose Us?</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#4B5563' }}>
          We carefully vet all our tutors to ensure they have the right qualifications and teaching experience. 
          Our platform makes it easy to find, book, and learn from the best tutors in your area.
        </p>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/tutors" style={{
            background: '#FFD700',
            color: '#111827',
            padding: '12px 35px',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            display: 'inline-block',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#F59E0B';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#FFD700';
            e.target.style.transform = 'translateY(0)';
          }}>
            Find a Tutor →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;