import React from 'react';

const Architecture = () => {
  return (
    <div className="page-container">
      <section className="hero fade-in">
        <h1>System Architecture</h1>
        <p>Complete technical flow and component breakdown</p>
      </section>

      {/* Architecture Overview */}
      <section className="architecture-diagram fade-in">
        <h2 className="text-center gradient-text mb-2">Architecture Flow</h2>
        
        <div className="flow-step">
          <div className="step-number">1</div>
          <div>
            <h3>User Registration & KYC</h3>
            <p>Users register on the embassy portal and complete identity verification (passport, biometrics) through a secure off-chain process. Upon approval, they receive a blockchain wallet or link their existing one.</p>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">2</div>
          <div>
            <h3>Identity Verification Service</h3>
            <p>Off-chain service handles KYC, passport verification, and biometric checks. Issues cryptographic proof or whitelists wallet addresses for blockchain interaction.</p>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">3</div>
          <div>
            <h3>Slot Discovery & Booking</h3>
            <p>Users browse available visa appointment slots through web/mobile app. Smart contracts check eligibility (one slot per verified user, anti-bot measures) before allowing booking.</p>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">4</div>
          <div>
            <h3>NFT Appointment Token</h3>
            <p>Successful booking mints a unique, non-transferable NFT to user's wallet. This token represents their appointment and cannot be resold or transferred.</p>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">5</div>
          <div>
            <h3>Blockchain Recording</h3>
            <p>All bookings, cancellations, and waitlist movements are recorded on-chain for complete transparency and immutability.</p>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">6</div>
          <div>
            <h3>Admin Dashboard & Analytics</h3>
            <p>Embassy staff monitor bookings, detect suspicious activity, and access real-time analytics through a comprehensive dashboard.</p>
          </div>
        </div>
      </section>

      {/* Technical Components */}
      <section className="solution-section fade-in">
        <h2 className="text-center">Technical Components</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Frontend Layer</h3>
            <p>React.js/Flutter app providing intuitive user interface for registration, KYC, slot booking, and wallet management</p>
          </div>
          <div className="feature-card">
            <h3>Blockchain Layer</h3>
            <p>Ethereum/Polygon smart contracts managing slot creation, booking logic, NFT issuance, and waitlist operations</p>
          </div>
          <div className="feature-card">
            <h3>Identity Service</h3>
            <p>Secure off-chain KYC service with passport verification, biometric checks, and cryptographic proof generation</p>
          </div>
          <div className="feature-card">
            <h3>Smart Contracts</h3>
            <p>Solidity contracts enforcing booking rules, preventing bots, managing waitlists, and ensuring fair access</p>
          </div>
          <div className="feature-card">
            <h3>NFT System</h3>
            <p>ERC-721 tokens representing appointment slots with soulbound properties to prevent resale</p>
          </div>
          <div className="feature-card">
            <h3>Admin Dashboard</h3>
            <p>Real-time monitoring, analytics, and oversight tools for embassy staff with audit capabilities</p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="problem-section fade-in">
        <h2 className="text-center gradient-text">Security & Anti-Fraud Measures</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>🔐 Multi-layer Verification</h3>
            <p>KYC + blockchain wallet + biometric verification ensures only legitimate users can participate</p>
          </div>
          <div className="problem-card">
            <h3>🤖 Bot Prevention</h3>
            <p>Smart contracts enforce rate limiting, CAPTCHA integration, and behavioral analysis to block automated systems</p>
          </div>
          <div className="problem-card">
            <h3>🚫 Transfer Restrictions</h3>
            <p>Soulbound NFTs cannot be transferred or sold, eliminating the black market entirely</p>
          </div>
          <div className="problem-card">
            <h3>📊 Real-time Monitoring</h3>
            <p>AI-powered anomaly detection identifies suspicious patterns and automatically flags potential fraud</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="architecture-diagram fade-in">
        <h2 className="text-center gradient-text">Recommended Tech Stack</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
          <div style={{background: '#f8f9ff', padding: '2rem', borderRadius: '15px'}}>
            <h3 style={{color: '#667eea', marginBottom: '1rem'}}>Frontend</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li>• React.js / Next.js</li>
              <li>• Web3.js / Ethers.js</li>
              <li>• MetaMask Integration</li>
              <li>• Responsive Design</li>
            </ul>
          </div>
          <div style={{background: '#f8f9ff', padding: '2rem', borderRadius: '15px'}}>
            <h3 style={{color: '#667eea', marginBottom: '1rem'}}>Blockchain</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li>• Ethereum / Polygon</li>
              <li>• Solidity Smart Contracts</li>
              <li>• ERC-721 NFTs</li>
              <li>• IPFS for metadata</li>
            </ul>
          </div>
          <div style={{background: '#f8f9ff', padding: '2rem', borderRadius: '15px'}}>
            <h3 style={{color: '#667eea', marginBottom: '1rem'}}>Backend</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li>• Node.js / Express</li>
              <li>• MongoDB / PostgreSQL</li>
              <li>• KYC API Integration</li>
              <li>• Real-time Notifications</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Architecture;
