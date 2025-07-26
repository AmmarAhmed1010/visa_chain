import React from 'react';

const TechSpecs = () => {
  return (
    <div className="page-container">
      <section className="hero fade-in">
        <h1>Technical Specifications</h1>
        <p>Comprehensive technical details and implementation roadmap</p>
      </section>

      {/* Blockchain Infrastructure */}
      <section className="problem-section fade-in">
        <h2 className="text-center gradient-text">Blockchain Infrastructure</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>🔗 Primary Blockchain</h3>
            <p><strong>Ethereum Mainnet</strong> for maximum security and decentralization</p>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>Proven security with $200B+ TVL</li>
              <li>Extensive developer ecosystem</li>
              <li>Wide wallet compatibility</li>
              <li>Established legal frameworks</li>
            </ul>
          </div>
          <div className="problem-card">
            <h3>⚡ Layer 2 Solution</h3>
            <p><strong>Polygon (MATIC)</strong> for cost-effective transactions</p>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>$0.01 average transaction cost</li>
              <li>2-second confirmation times</li>
              <li>Ethereum security inheritance</li>
              <li>Carbon-neutral operations</li>
            </ul>
          </div>
          <div className="problem-card">
            <h3>📄 Smart Contracts</h3>
            <p><strong>Solidity 0.8.19+</strong> with OpenZeppelin libraries</p>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>ERC-721 for appointment NFTs</li>
              <li>Access control mechanisms</li>
              <li>Upgradeable proxy patterns</li>
              <li>Gas optimization techniques</li>
            </ul>
          </div>
          <div className="problem-card">
            <h3>🔐 Security Audits</h3>
            <p><strong>Multi-tier security validation</strong></p>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>ConsenSys Diligence audit</li>
              <li>OpenZeppelin security review</li>
              <li>Automated testing with 100% coverage</li>
              <li>Bug bounty program</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="solution-section fade-in">
        <h2 className="text-center">System Architecture Components</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Frontend Layer</h3>
            <p><strong>React.js 18+ with TypeScript</strong></p>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginTop: '1rem'}}>
              <li>• Next.js for SSR and SEO</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Web3.js/Ethers.js integration</li>
              <li>• PWA capabilities</li>
              <li>• Multi-language support</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Backend Services</h3>
            <p><strong>Node.js with Express.js</strong></p>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginTop: '1rem'}}>
              <li>• RESTful API design</li>
              <li>• GraphQL for complex queries</li>
              <li>• Redis for caching</li>
              <li>• JWT authentication</li>
              <li>• Rate limiting & DDoS protection</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Database Layer</h3>
            <p><strong>Hybrid Database Architecture</strong></p>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginTop: '1rem'}}>
              <li>• PostgreSQL for relational data</li>
              <li>• MongoDB for document storage</li>
              <li>• IPFS for metadata storage</li>
              <li>• Automated backups</li>
              <li>• GDPR compliance</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Identity Verification</h3>
            <p><strong>Multi-Provider KYC Integration</strong></p>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginTop: '1rem'}}>
              <li>• Jumio for document verification</li>
              <li>• Onfido for biometric checks</li>
              <li>• Civic for identity proofs</li>
              <li>• Zero-knowledge proofs</li>
              <li>• Privacy-preserving design</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Monitoring & Analytics</h3>
            <p><strong>Real-time System Monitoring</strong></p>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginTop: '1rem'}}>
              <li>• Grafana dashboards</li>
              <li>• Prometheus metrics</li>
              <li>• ELK stack for logging</li>
              <li>• Sentry error tracking</li>
              <li>• Custom fraud detection</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>DevOps & Infrastructure</h3>
            <p><strong>Cloud-Native Deployment</strong></p>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginTop: '1rem'}}>
              <li>• Kubernetes orchestration</li>
              <li>• AWS/Azure multi-region</li>
              <li>• CI/CD with GitHub Actions</li>
              <li>• Infrastructure as Code</li>
              <li>• 99.9% uptime SLA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Smart Contract Details */}
      <section className="architecture-diagram fade-in">
        <h2 className="text-center gradient-text">Smart Contract Architecture</h2>
        
        <div className="flow-step">
          <div className="step-number">📋</div>
          <div>
            <h3>AppointmentRegistry.sol</h3>
            <p><strong>Main contract managing all appointment slots</strong></p>
            <div style={{background: '#1a1a1a', color: '#00ff00', padding: '1rem', borderRadius: '8px', fontFamily: 'JetBrains Mono', fontSize: '0.9rem', marginTop: '1rem'}}>
              <code>
                contract AppointmentRegistry &#123;<br/>
                &nbsp;&nbsp;mapping(uint256 => Appointment) public appointments;<br/>
                &nbsp;&nbsp;mapping(address => bool) public verifiedUsers;<br/>
                &nbsp;&nbsp;mapping(address => uint256) public userAppointments;<br/>
                &#125;
              </code>
            </div>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">🎫</div>
          <div>
            <h3>AppointmentNFT.sol</h3>
            <p><strong>ERC-721 implementation for appointment tokens</strong></p>
            <div style={{background: '#1a1a1a', color: '#00ff00', padding: '1rem', borderRadius: '8px', fontFamily: 'JetBrains Mono', fontSize: '0.9rem', marginTop: '1rem'}}>
              <code>
                contract AppointmentNFT is ERC721, Ownable &#123;<br/>
                &nbsp;&nbsp;bool public soulbound = true;<br/>
                &nbsp;&nbsp;function _beforeTokenTransfer() override &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;require(!soulbound, "Token is soulbound");<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </code>
            </div>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">🔐</div>
          <div>
            <h3>IdentityVerifier.sol</h3>
            <p><strong>KYC verification and user whitelisting</strong></p>
            <div style={{background: '#1a1a1a', color: '#00ff00', padding: '1rem', borderRadius: '8px', fontFamily: 'JetBrains Mono', fontSize: '0.9rem', marginTop: '1rem'}}>
              <code>
                contract IdentityVerifier &#123;<br/>
                &nbsp;&nbsp;mapping(address => bytes32) public identityHashes;<br/>
                &nbsp;&nbsp;mapping(bytes32 => bool) public usedIdentities;<br/>
                &nbsp;&nbsp;event IdentityVerified(address user, bytes32 hash);<br/>
                &#125;
              </code>
            </div>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">⏰</div>
          <div>
            <h3>WaitlistManager.sol</h3>
            <p><strong>Fair queue management for cancelled slots</strong></p>
            <div style={{background: '#1a1a1a', color: '#00ff00', padding: '1rem', borderRadius: '8px', fontFamily: 'JetBrains Mono', fontSize: '0.9rem', marginTop: '1rem'}}>
              <code>
                contract WaitlistManager &#123;<br/>
                &nbsp;&nbsp;struct QueueEntry &#123;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;address user;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;uint256 timestamp;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;uint256 priority;<br/>
                &nbsp;&nbsp;&#125;<br/>
                &#125;
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="problem-section fade-in">
        <h2 className="text-center gradient-text">Security & Anti-Fraud Measures</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>🛡️ Multi-Layer Authentication</h3>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>Passport document verification</li>
              <li>Biometric facial recognition</li>
              <li>Liveness detection</li>
              <li>Address verification</li>
              <li>Phone number validation</li>
            </ul>
          </div>
          <div className="problem-card">
            <h3>🤖 Bot Prevention</h3>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>CAPTCHA v3 integration</li>
              <li>Behavioral analysis</li>
              <li>Rate limiting per IP/wallet</li>
              <li>Device fingerprinting</li>
              <li>Machine learning detection</li>
            </ul>
          </div>
          <div className="problem-card">
            <h3>🔒 Data Protection</h3>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>End-to-end encryption</li>
              <li>Zero-knowledge proofs</li>
              <li>GDPR compliance</li>
              <li>Data minimization</li>
              <li>Right to be forgotten</li>
            </ul>
          </div>
          <div className="problem-card">
            <h3>📊 Fraud Monitoring</h3>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>Real-time anomaly detection</li>
              <li>Pattern recognition AI</li>
              <li>Suspicious activity alerts</li>
              <li>Manual review workflows</li>
              <li>Automated blocking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="architecture-diagram fade-in">
        <h2 className="text-center gradient-text">Implementation Roadmap</h2>
        
        <div className="flow-step">
          <div className="step-number">Q1</div>
          <div>
            <h3>Foundation Phase (Months 1-3)</h3>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>Smart contract development and testing</li>
              <li>Security audits and bug bounty</li>
              <li>Core frontend development</li>
              <li>KYC provider integrations</li>
              <li>MVP deployment on testnet</li>
            </ul>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">Q2</div>
          <div>
            <h3>Pilot Phase (Months 4-6)</h3>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>Mainnet deployment</li>
              <li>Pilot program with 2-3 embassies</li>
              <li>User testing and feedback</li>
              <li>Performance optimization</li>
              <li>Admin dashboard development</li>
            </ul>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">Q3</div>
          <div>
            <h3>Expansion Phase (Months 7-9)</h3>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>Scale to 10+ embassies</li>
              <li>Mobile app development</li>
              <li>Advanced analytics features</li>
              <li>Multi-language support</li>
              <li>API for third-party integrations</li>
            </ul>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">Q4</div>
          <div>
            <h3>Global Phase (Months 10-12)</h3>
            <ul style={{marginTop: '1rem', paddingLeft: '1.5rem'}}>
              <li>50+ embassy partnerships</li>
              <li>Government integrations</li>
              <li>Advanced fraud detection</li>
              <li>Compliance certifications</li>
              <li>Open-source components</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="solution-section fade-in">
        <h2 className="text-center">Development & Operational Costs</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>💻 Development Costs</h3>
            <p><strong>$2.5M - $3.5M (12 months)</strong></p>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginTop: '1rem'}}>
              <li>• Smart contract development: $500K</li>
              <li>• Frontend/Backend: $800K</li>
              <li>• Security audits: $300K</li>
              <li>• DevOps & Infrastructure: $400K</li>
              <li>• Testing & QA: $300K</li>
              <li>• Project management: $200K</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>🔧 Operational Costs</h3>
            <p><strong>$500K - $800K annually</strong></p>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginTop: '1rem'}}>
              <li>• Cloud infrastructure: $200K</li>
              <li>• KYC provider fees: $150K</li>
              <li>• Blockchain gas fees: $100K</li>
              <li>• Monitoring & security: $100K</li>
              <li>• Support & maintenance: $150K</li>
              <li>• Legal & compliance: $100K</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>📈 Revenue Model</h3>
            <p><strong>Sustainable & Scalable</strong></p>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0, marginTop: '1rem'}}>
              <li>• SaaS licensing to embassies</li>
              <li>• Transaction fees (0.5-1%)</li>
              <li>• Premium features</li>
              <li>• Integration services</li>
              <li>• Training & support</li>
              <li>• White-label solutions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechSpecs;
