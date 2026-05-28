import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaHome, FaStar, FaRupeeSign } from 'react-icons/fa';

function Home() {
  const features = [
    { icon: <FaChalkboardTeacher />, title: "Expert Tutors", desc: "Learn from qualified professionals" },
    { icon: <FaHome />, title: "Home Tutoring", desc: "Learn from comfort of your home" },
    { icon: <FaStar />, title: "Verified Reviews", desc: "Trusted by thousands" },
    { icon: <FaRupeeSign />, title: "Best Prices", desc: "Affordable learning" }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        padding: '100px 0',
        color: 'white',
        textAlign: 'center'
      }}>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 100%)',
          zIndex: 0
        }}></div>
        
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '15px',
            fontWeight: 'bold',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
          }}>
            Find Your Perfect <span style={{ color: '#FFD700' }}>Tutor</span> Today!
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '25px', 
            opacity: 0.95,
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
          }}>
            Connect with expert tutors for personalized home tutoring. Achieve your goals faster!
          </p>
          <Link to="/tutors" style={{
            background: '#FFD700',
            color: '#111827',
            padding: '12px 35px',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            fontSize: '1rem',
            display: 'inline-block',
            transition: 'all 0.3s',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.4)';
            e.target.style.background = '#F59E0B';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
            e.target.style.background = '#FFD700';
          }}>
            Get Started →
          </Link>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '40px',
            flexWrap: 'wrap',
            gap: '17px'
          }}>
            <div style={{ 
              background: 'rgba(255,255,255,0.12)', 
              backdropFilter: 'blur(8px)',
              padding: '8px 16px', 
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.15)',
              textAlign: 'center',
              minWidth: '90px'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>500+</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>Expert Tutors</div>
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.12)', 
              backdropFilter: 'blur(8px)',
              padding: '8px 16px', 
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.15)',
              textAlign: 'center',
              minWidth: '90px'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1000+</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>Happy Students</div>
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.12)', 
              backdropFilter: 'blur(8px)',
              padding: '8px 16px', 
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.15)',
              textAlign: 'center',
              minWidth: '90px'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>50+</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>Subjects</div>
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.12)', 
              backdropFilter: 'blur(8px)',
              padding: '8px 16px', 
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.15)',
              textAlign: 'center',
              minWidth: '90px'
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>4.8★</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with React Icons */}
      <div style={{ maxWidth: '1200px', margin: '80px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '40px', fontWeight: 'bold', color: '#111827' }}>
          Why Choose <span style={{ color: '#FFD700' }}>TutorConnect?</span>
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '25px'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '30px 20px',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #f0f0f0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.12)';
              e.currentTarget.style.borderColor = '#FFD700';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
              e.currentTarget.style.borderColor = '#f0f0f0';
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#FFD700' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#111827' }}>{feature.title}</h3>
              <p style={{ color: '#6B7280', lineHeight: '1.5', fontSize: '0.9rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: '#111827',
        padding: '60px 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '15px', fontWeight: 'bold' }}>Ready to Start Your Learning Journey?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9 }}>
            Join thousands of students who have found their perfect tutor
          </p>
          <Link to="/tutors" style={{
            background: '#FFD700',
            color: '#111827',
            padding: '12px 40px',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: 'bold',
            fontSize: '1rem',
            display: 'inline-block',
            transition: 'all 0.3s',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
            e.target.style.background = '#F59E0B';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
            e.target.style.background = '#FFD700';
          }}>
            Find a Tutor Now →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;