import React from 'react';

const Benefits = () => {
  return (
    <div className="page-container">
      <section className="hero fade-in">
        <h1>Benefits & Impact</h1>
        <p>How blockchain transforms the visa appointment ecosystem</p>
      </section>

      {/* Comparison Table */}
      <section className="benefits-table fade-in">
        <h2 className="text-center gradient-text mb-2">Current System vs. VisaChain</h2>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Current System</th>
              <th>VisaChain Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bot Prevention</strong></td>
              <td>❌ Bots dominate booking within seconds</td>
              <td>✅ Smart contracts block automated systems</td>
            </tr>
            <tr>
              <td><strong>Black Market</strong></td>
              <td>❌ Appointments resold at 10x price</td>
              <td>✅ Non-transferable NFTs eliminate resale</td>
            </tr>
            <tr>
              <td><strong>Transparency</strong></td>
              <td>❌ No visibility into booking process</td>
              <td>✅ All transactions publicly auditable</td>
            </tr>
            <tr>
              <td><strong>Fairness</strong></td>
              <td>❌ Only wealthy can afford broker fees</td>
              <td>✅ Equal access for all verified users</td>
            </tr>
            <tr>
              <td><strong>Wait Times</strong></td>
              <td>❌ 1-2 years in many countries</td>
              <td>✅ Reduced to actual embassy capacity</td>
            </tr>
            <tr>
              <td><strong>Corruption Risk</strong></td>
              <td>❌ Insider manipulation possible</td>
              <td>✅ Immutable blockchain prevents tampering</td>
            </tr>
            <tr>
              <td><strong>User Experience</strong></td>
              <td>❌ Frustrating, uncertain process</td>
              <td>✅ Clear, predictable, user-friendly</td>
            </tr>
            <tr>
              <td><strong>Scalability</strong></td>
              <td>❌ Each embassy has separate system</td>
              <td>✅ Global standard, easily deployable</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Stakeholder Benefits */}
      <section className="solution-section fade-in">
        <h2 className="text-center">Benefits for All Stakeholders</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>👥 For Applicants</h3>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0}}>
              <li>• Fair access regardless of financial status</li>
              <li>• Transparent booking process</li>
              <li>• No more broker exploitation</li>
              <li>• Reduced wait times</li>
              <li>• Mobile-friendly interface</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>🏛️ For Embassies</h3>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0}}>
              <li>• Reduced fraud and corruption</li>
              <li>• Better resource utilization</li>
              <li>• Real-time analytics and insights</li>
              <li>• Improved public trust</li>
              <li>• Standardized global system</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>🏛️ For Governments</h3>
            <ul style={{textAlign: 'left', listStyle: 'none', padding: 0}}>
              <li>• Enhanced diplomatic relations</li>
              <li>• Reduced citizen complaints</li>
              <li>• Better immigration data</li>
              <li>• Modernized public services</li>
              <li>• International cooperation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="problem-section fade-in">
        <h2 className="text-center gradient-text">Expected Impact</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <h3>📈 90% Reduction in Wait Times</h3>
            <p>By eliminating artificial scarcity created by bots and brokers, actual wait times reflect true embassy capacity.</p>
          </div>
          <div className="problem-card">
            <h3>💰 $2B+ Black Market Eliminated</h3>
            <p>Conservative estimate of global black market value that would be eliminated through non-transferable NFTs.</p>
          </div>
          <div className="problem-card">
            <h3>🌍 50M+ People Affected Annually</h3>
            <p>Millions of students, workers, and families worldwide would benefit from fair access to visa appointments.</p>
          </div>
          <div className="problem-card">
            <h3>🏛️ 100+ Embassies Potential Deployment</h3>
            <p>System can be deployed across major embassies worldwide, creating a global standard for fair appointments.</p>
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="architecture-diagram fade-in">
        <h2 className="text-center gradient-text">Technical Advantages</h2>
        
        <div className="flow-step">
          <div className="step-number">🔒</div>
          <div>
            <h3>Immutable Security</h3>
            <p>Blockchain ensures that once an appointment is booked, the record cannot be altered or manipulated by any party, including embassy staff or system administrators.</p>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">⚡</div>
          <div>
            <h3>Smart Contract Automation</h3>
            <p>Automated enforcement of rules eliminates human error and bias. Contracts execute exactly as programmed, ensuring consistent fair treatment for all users.</p>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">🌐</div>
          <div>
            <h3>Decentralized Architecture</h3>
            <p>No single point of failure or control. The system continues to operate even if individual nodes go offline, ensuring high availability.</p>
          </div>
        </div>

        <div className="flow-step">
          <div className="step-number">📊</div>
          <div>
            <h3>Real-time Transparency</h3>
            <p>All stakeholders can view system status, booking statistics, and audit trails in real-time, building trust and accountability.</p>
          </div>
        </div>
      </section>

      {/* ROI Analysis */}
      <section className="solution-section fade-in">
        <h2 className="text-center">Return on Investment</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>💼 For Embassies</h3>
            <p><strong>Cost Savings:</strong> Reduced fraud investigation, fewer complaints, automated processes</p>
            <p><strong>Revenue:</strong> Potential for premium services, better resource allocation</p>
          </div>
          <div className="feature-card">
            <h3>🏛️ For Governments</h3>
            <p><strong>Diplomatic Benefits:</strong> Improved relations, reduced citizen dissatisfaction</p>
            <p><strong>Economic Impact:</strong> Faster visa processing enables more tourism and business</p>
          </div>
          <div className="feature-card">
            <h3>🌍 For Society</h3>
            <p><strong>Social Justice:</strong> Equal access regardless of economic status</p>
            <p><strong>Economic Growth:</strong> Reduced barriers to international mobility</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-2">
        <h2 className="gradient-text">Ready to Implement VisaChain?</h2>
        <p style={{color: 'white', fontSize: '1.1rem', margin: '1rem 0'}}>
          Join the revolution in fair and transparent visa appointment systems
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button className="cta-button">
            📧 Contact Us
          </button>
          <button className="cta-button">
            📄 Download Whitepaper
          </button>
          <button className="cta-button">
            🎯 Schedule Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
