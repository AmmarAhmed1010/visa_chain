import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>VisaChain</h1>
        <p>Revolutionary Blockchain-Powered Embassy Visa Appointment System</p>
        <p>Eliminating $2B+ black market, reducing wait times by 90%, and ensuring fair access for 50M+ people annually</p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
          <Link to="/demo" className="cta-button">
            🚀 See Live Demo
          </Link>
          <Link to="/tech-specs" className="cta-button">
            📋 Technical Specs
          </Link>
        </div>
        
        {/* Statistics */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0'}}>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#ffffff'}}>90%</div>
            <div style={{fontSize: '1rem', opacity: 0.9}}>Reduction in Wait Times</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#ffffff'}}>$2B+</div>
            <div style={{fontSize: '1rem', opacity: 0.9}}>Black Market Eliminated</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#ffffff'}}>50M+</div>
            <div style={{fontSize: '1rem', opacity: 0.9}}>People Affected Annually</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#ffffff'}}>100+</div>
            <div style={{fontSize: '1rem', opacity: 0.9}}>Potential Embassy Partners</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section fade-in">
        <h2 className="text-center gradient-text">The Problem We Solve</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>🤖 Bot Domination</h3>
            <p>Automated bots book appointments in bulk within seconds of release, leaving genuine applicants with no options.</p>
          </div>
          <div className="problem-card">
            <h3>💰 Black Market Resale</h3>
            <p>Brokers resell appointments at 10x the original price, creating unfair access based on financial capability.</p>
          </div>
          <div className="problem-card">
            <h3>⏰ Extreme Delays</h3>
            <p>Students, workers, and families face 1-2 year delays, missing opportunities and being separated from loved ones.</p>
          </div>
          <div className="problem-card">
            <h3>🔒 Lack of Transparency</h3>
            <p>No visibility into the booking process, leading to suspicion of insider manipulation and corruption.</p>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="solution-section fade-in">
        <h2 className="text-center">Market Analysis & Opportunity</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Market Size</h3>
            <p><strong>$15B+ Annual Visa Processing Market</strong></p>
            <p>200M+ visa applications processed annually across major embassies worldwide</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Black Market Value</h3>
            <p><strong>$2-3B Estimated Annual Revenue</strong></p>
            <p>Brokers charging 5-10x markup on appointment fees, creating massive inefficiency</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Time Cost</h3>
            <p><strong>$5B+ in Lost Productivity</strong></p>
            <p>Students missing semesters, workers losing jobs, families separated for years</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏢</div>
            <h3>Embassy Pain Points</h3>
            <p><strong>Operational Inefficiencies</strong></p>
            <p>Fraud investigations, public complaints, diplomatic tensions, resource waste</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Growth Potential</h3>
            <p><strong>300% Market Expansion</strong></p>
            <p>Post-pandemic travel recovery, increasing global mobility, digital transformation</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Target Market</h3>
            <p><strong>100+ Major Embassies</strong></p>
            <p>US, UK, Schengen, Canada, Australia embassies in 50+ high-volume countries</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section fade-in">
        <h2 className="text-center">Our Blockchain Solution</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Blockchain Transparency</h3>
            <p>All bookings recorded on immutable blockchain for complete transparency</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Identity Verification</h3>
            <p>KYC integration ensures only verified users can book appointments</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎫</div>
            <h3>NFT Appointments</h3>
            <p>Each slot is a unique, non-transferable NFT preventing resale</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Smart Contracts</h3>
            <p>Automated enforcement of fair booking rules and anti-bot measures</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Analytics</h3>
            <p>Embassy staff can monitor and audit all activities in real-time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Scalability</h3>
            <p>Can be deployed across any embassy or appointment system worldwide</p>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="problem-section fade-in">
        <h2 className="text-center gradient-text">Investment Opportunity</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem'}}>
          <div style={{textAlign: 'center'}}>
            <h3 style={{color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem'}}>Funding Required</h3>
            <div style={{fontSize: '3rem', fontWeight: '800', color: '#667eea', marginBottom: '0.5rem'}}>$5M</div>
            <p>Series A funding for 18-month development and pilot deployment</p>
            <ul style={{textAlign: 'left', marginTop: '1rem'}}>
              <li>Development: $3M</li>
              <li>Operations: $1M</li>
              <li>Marketing: $0.5M</li>
              <li>Legal & Compliance: $0.5M</li>
            </ul>
          </div>
          <div style={{textAlign: 'center'}}>
            <h3 style={{color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem'}}>Revenue Projection</h3>
            <div style={{fontSize: '3rem', fontWeight: '800', color: '#667eea', marginBottom: '0.5rem'}}>$50M</div>
            <p>Annual recurring revenue by year 3 with 50+ embassy partnerships</p>
            <ul style={{textAlign: 'left', marginTop: '1rem'}}>
              <li>SaaS licensing: $30M</li>
              <li>Transaction fees: $15M</li>
              <li>Premium services: $5M</li>
            </ul>
          </div>
          <div style={{textAlign: 'center'}}>
            <h3 style={{color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem'}}>Market Capture</h3>
            <div style={{fontSize: '3rem', fontWeight: '800', color: '#667eea', marginBottom: '0.5rem'}}>10%</div>
            <p>Conservative market share of global visa appointment market</p>
            <ul style={{textAlign: 'left', marginTop: '1rem'}}>
              <li>20M appointments/year</li>
              <li>$2.50 average fee</li>
              <li>95% gross margin</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-2">
        <h2 className="gradient-text">Ready to Transform Visa Appointments?</h2>
        <p style={{color: 'white', fontSize: '1.2rem', margin: '1.5rem 0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
          Join us in creating a fair, transparent, and efficient visa appointment system that benefits millions of people worldwide
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
          <Link to="/tech-specs" className="cta-button">
            📋 View Technical Specs
          </Link>
          <Link to="/competitive-analysis" className="cta-button">
            📊 Competitive Analysis
          </Link>
          <Link to="/demo" className="cta-button">
            🚀 Try Interactive Demo
          </Link>
          <a href="mailto:contact@visachain.org" className="cta-button">
            📧 Contact for Partnership
          </a>
        </div>
        
        {/* Contact Information */}
        <div style={{marginTop: '3rem', padding: '2rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)'}}>
          <h3 style={{color: 'white', marginBottom: '1rem'}}>Get in Touch</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', color: 'rgba(255, 255, 255, 0.9)'}}>
            <div>
              <strong>📧 Email:</strong><br/>
              contact@visachain.org
            </div>
            <div>
              <strong>📞 Phone:</strong><br/>
              +1 (555) 123-4567
            </div>
            <div>
              <strong>📍 Location:</strong><br/>
              Silicon Valley, CA
            </div>
            <div>
              <strong>🔗 LinkedIn:</strong><br/>
              /company/visachain
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
