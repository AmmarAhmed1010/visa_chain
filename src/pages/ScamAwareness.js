import React from "react";

const ScamAwareness = () => (
  <div className="page-container">
    {/* Executive Summary */}
    <section className="hero fade-in">
      <div style={{textAlign: 'center', marginBottom: '2rem'}}>
        <h1 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#1a365d', marginBottom: '1rem'}}>VisaChain</h1>
        <p style={{fontSize: '1.2rem', color: '#4a5568', fontStyle: 'italic'}}>Revolutionizing Embassy Appointment Systems with Blockchain Technology</p>
      </div>
      <hr style={{border: '2px solid #3182ce', margin: '2rem 0'}} />
      
      <h2 style={{color: '#2d3748', fontSize: '1.8rem'}}>🎯 Executive Summary</h2>
      <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '2rem', borderRadius: '15px', margin: '1rem 0'}}>
        <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
          <strong>VisaChain</strong> addresses a $2.5B+ global market inefficiency in embassy appointment systems through blockchain-powered transparency and fairness. Our white-label SaaS solution eliminates appointment scalping while providing embassies with secure, auditable booking infrastructure.
        </p>
      </div>
      
      <h2 style={{color: '#c53030', fontSize: '1.8rem', marginTop: '3rem'}}>🚨 The $2.5B Problem</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0'}}>
        <div style={{background: '#fed7d7', padding: '1.5rem', borderRadius: '10px', border: '2px solid #fc8181'}}>
          <h3 style={{color: '#c53030'}}>Market Impact</h3>
          <ul style={{listStyle: 'none', padding: 0}}>
            <li>📊 <strong>50M+</strong> visa applications annually</li>
            <li>⏰ <strong>1-2 years</strong> average wait times</li>
            <li>💰 <strong>$500-$2,000</strong> black market premium</li>
            <li>🌍 <strong>25+ countries</strong> severely affected</li>
          </ul>
        </div>
        
        <div style={{background: '#fef5e7', padding: '1.5rem', borderRadius: '10px', border: '2px solid #f6ad55'}}>
          <h3 style={{color: '#c05621'}}>Root Causes</h3>
          <ul>
            <li><strong>Bot Networks:</strong> Automated bulk booking</li>
            <li><strong>Insider Access:</strong> Corrupt officials</li>
            <li><strong>No Transparency:</strong> Zero audit trail</li>
            <li><strong>Centralized Systems:</strong> Single points of failure</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Solution Overview */}
    <section className="solution-section fade-in" style={{marginTop: '4rem'}}>
      <h2 style={{color: '#38a169', fontSize: '2rem'}}>💡 Our Solution: VisaChain Platform</h2>
      <hr style={{border: '2px solid #38a169', margin: '2rem 0'}} />
      
      <div style={{background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)', color: 'white', padding: '2rem', borderRadius: '15px', margin: '2rem 0'}}>
        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Blockchain-Powered Appointment System</h3>
        <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>
          A transparent, tamper-proof embassy appointment platform built on Solana blockchain, ensuring fair access through immutable smart contracts and eliminating scalping through cryptographic identity verification.
        </p>
      </div>
      
      <h3 style={{color: '#2d3748', fontSize: '1.5rem', marginTop: '2rem'}}>🏗️ System Architecture</h3>
      <div style={{background: '#1a202c', color: '#e2e8f0', padding: '2rem', borderRadius: '15px', margin: '1rem 0', fontFamily: 'monospace'}}>
        <div style={{textAlign: 'center', fontSize: '1.1rem', lineHeight: '2'}}>
          <div style={{color: '#63b3ed'}}>👤 User Interface (React)</div>
          <div style={{color: '#9f7aea'}}>↓</div>
          <div style={{color: '#f6ad55'}}>🔗 API Gateway (Node.js)</div>
          <div style={{color: '#9f7aea'}}>↓</div>
          <div style={{color: '#48bb78'}}>⛓️ Solana Smart Contracts</div>
          <div style={{color: '#9f7aea'}}>↓</div>
          <div style={{color: '#ed8936'}}>🔐 Encrypted Database</div>
          <div style={{color: '#9f7aea'}}>↓</div>
          <div style={{color: '#4299e1'}}>🎛️ Embassy Admin Dashboard</div>
        </div>
      </div>
      <h3 style={{color: '#2d3748', fontSize: '1.5rem', marginTop: '2rem'}}>🔑 Key Features & Competitive Advantages</h3>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0'}}>
        <div style={{background: '#e6fffa', padding: '1.5rem', borderRadius: '10px', border: '2px solid #4fd1c7'}}>
          <h4 style={{color: '#234e52'}}>🔐 Cryptographic Security</h4>
          <ul style={{color: '#2d3748'}}>
            <li><strong>Identity Hashing:</strong> SHA-256 protection</li>
            <li><strong>AES-256 Encryption:</strong> Military-grade security</li>
            <li><strong>Zero-Knowledge Proofs:</strong> Privacy-preserving</li>
            <li><strong>Immutable Audit Trail:</strong> Permanent records</li>
          </ul>
        </div>
        
        <div style={{background: '#f0fff4', padding: '1.5rem', borderRadius: '10px', border: '2px solid #68d391'}}>
          <h4 style={{color: '#22543d'}}>⚡ Smart Contract Logic</h4>
          <ul style={{color: '#2d3748'}}>
            <li><strong>One Booking Per Identity:</strong> Prevents hoarding</li>
            <li><strong>Non-Transferable Slots:</strong> Eliminates resale</li>
            <li><strong>Automated Cleanup:</strong> Expires unused bookings</li>
            <li><strong>Real-time Updates:</strong> Instant availability</li>
          </ul>
        </div>
        
        <div style={{background: '#faf5ff', padding: '1.5rem', borderRadius: '10px', border: '2px solid #b794f6'}}>
          <h4 style={{color: '#44337a'}}>🎛️ Enterprise Dashboard</h4>
          <ul style={{color: '#2d3748'}}>
            <li><strong>White-Label Branding:</strong> Custom themes</li>
            <li><strong>Advanced Analytics:</strong> Booking insights</li>
            <li><strong>Role-Based Access:</strong> Permission control</li>
            <li><strong>Compliance Reporting:</strong> Automated audits</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Business Model */}
    <section className="business-model fade-in" style={{marginTop: '4rem'}}>
      <h2 style={{color: '#805ad5', fontSize: '2rem'}}>💼 Business Model & Revenue Streams</h2>
      <hr style={{border: '2px solid #805ad5', margin: '2rem 0'}} />
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', margin: '2rem 0'}}>
        <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '2rem', borderRadius: '15px'}}>
          <h3 style={{fontSize: '1.4rem', marginBottom: '1rem'}}>🏛️ Government Licensing</h3>
          <div style={{fontSize: '1.1rem'}}>
            <p><strong>$50,000 - $200,000</strong> per embassy setup</p>
            <p><strong>$10,000 - $25,000</strong> annual maintenance</p>
            <p style={{fontSize: '0.9rem', marginTop: '1rem', opacity: '0.9'}}>One-time implementation + ongoing support</p>
          </div>
        </div>
        
        <div style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', padding: '2rem', borderRadius: '15px'}}>
          <h3 style={{fontSize: '1.4rem', marginBottom: '1rem'}}>☁️ SaaS Subscription</h3>
          <div style={{fontSize: '1.1rem'}}>
            <p><strong>$5,000 - $15,000</strong> per month per embassy</p>
            <p><strong>$0.50 - $2.00</strong> per transaction</p>
            <p style={{fontSize: '0.9rem', marginTop: '1rem', opacity: '0.9'}}>Scalable pricing based on volume</p>
          </div>
        </div>
        
        <div style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', padding: '2rem', borderRadius: '15px'}}>
          <h3 style={{fontSize: '1.4rem', marginBottom: '1rem'}}>🔧 Professional Services</h3>
          <div style={{fontSize: '1.1rem'}}>
            <p><strong>$100,000 - $500,000</strong> custom integrations</p>
            <p><strong>$1,000 - $5,000</strong> per day consulting</p>
            <p style={{fontSize: '0.9rem', marginTop: '1rem', opacity: '0.9'}}>Training, integration, compliance</p>
          </div>
        </div>
      </div>
      
      <div style={{background: '#1a202c', color: 'white', padding: '2rem', borderRadius: '15px', margin: '2rem 0'}}>
        <h3 style={{color: '#63b3ed', fontSize: '1.4rem'}}>📈 5-Year Revenue Projection</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginTop: '1.5rem', textAlign: 'center'}}>
          <div style={{background: 'rgba(72, 187, 120, 0.2)', padding: '1rem', borderRadius: '8px'}}>
            <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Year 1</div>
            <div style={{fontSize: '1.5rem', color: '#48bb78'}}>$2M</div>
            <div style={{fontSize: '0.8rem', opacity: '0.8'}}>5 embassies</div>
          </div>
          <div style={{background: 'rgba(66, 153, 225, 0.2)', padding: '1rem', borderRadius: '8px'}}>
            <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Year 2</div>
            <div style={{fontSize: '1.5rem', color: '#4299e1'}}>$8M</div>
            <div style={{fontSize: '0.8rem', opacity: '0.8'}}>20 embassies</div>
          </div>
          <div style={{background: 'rgba(237, 137, 54, 0.2)', padding: '1rem', borderRadius: '8px'}}>
            <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Year 3</div>
            <div style={{fontSize: '1.5rem', color: '#ed8936'}}>$25M</div>
            <div style={{fontSize: '0.8rem', opacity: '0.8'}}>50 embassies</div>
          </div>
          <div style={{background: 'rgba(159, 122, 234, 0.2)', padding: '1rem', borderRadius: '8px'}}>
            <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Year 4</div>
            <div style={{fontSize: '1.5rem', color: '#9f7aea'}}>$60M</div>
            <div style={{fontSize: '0.8rem', opacity: '0.8'}}>100 embassies</div>
          </div>
          <div style={{background: 'rgba(245, 101, 101, 0.2)', padding: '1rem', borderRadius: '8px'}}>
            <div style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Year 5</div>
            <div style={{fontSize: '1.5rem', color: '#f56565'}}>$150M</div>
            <div style={{fontSize: '0.8rem', opacity: '0.8'}}>200+ embassies</div>
          </div>
        </div>
      </div>
      
      <h2 style={{color: '#d69e2e', fontSize: '1.8rem', marginTop: '3rem'}}>🎯 Investment Ask & Use of Funds</h2>
      <div style={{background: 'linear-gradient(135deg, #f6ad55 0%, #d69e2e 100%)', color: 'white', padding: '2rem', borderRadius: '15px', margin: '2rem 0'}}>
        <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Seeking $5M Series A</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1rem'}}>
          <div>
            <h4>40% - Product Development</h4>
            <p>Smart contract audits, platform scaling, security enhancements</p>
          </div>
          <div>
            <h4>30% - Sales & Marketing</h4>
            <p>Embassy partnerships, pilot programs, regulatory compliance</p>
          </div>
          <div>
            <h4>20% - Team Expansion</h4>
            <p>Blockchain developers, sales team, compliance officers</p>
          </div>
          <div>
            <h4>10% - Operations</h4>
            <p>Infrastructure, legal, working capital</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ScamAwareness;
