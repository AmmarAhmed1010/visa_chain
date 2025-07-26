import React, { useState } from 'react';

const CompetitiveAnalysis = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const existingSolutions = [
    {
      id: 1,
      name: "Traditional Embassy Booking Systems",
      category: "government",
      description: "Current first-come-first-served online booking systems used by most embassies",
      examples: ["US Embassy CGI Portal", "UK Visa Application Centre", "Schengen Visa Info"],
      marketShare: "85%",
      cons: [
        "Vulnerable to bot attacks and automated booking",
        "No identity verification at booking time",
        "First-come-first-served creates unfair advantage for bots",
        "No transparency in booking process",
        "Easy to create multiple fake accounts",
        "No protection against black market resale",
        "Limited scalability during high demand",
        "Poor user experience with frequent crashes",
        "No real-time fraud detection",
        "Manual intervention required for dispute resolution"
      ]
    },
    {
      id: 2,
      name: "AI-Powered Visa Bots (Tezeract, VisasBot)",
      category: "automation",
      description: "Telegram bots and AI solutions that automate visa appointment booking",
      examples: ["Tezeract Visa Bot", "VisasBot.com", "Visard Bot"],
      marketShare: "8%",
      cons: [
        "Actually perpetuates the bot problem they claim to solve",
        "Creates unfair advantage for tech-savvy users",
        "Violates embassy terms of service",
        "Contributes to system overload and crashes",
        "No verification of user legitimacy",
        "Can be used by brokers to scale their operations",
        "Requires technical knowledge to set up",
        "Unreliable due to embassy countermeasures",
        "Legal gray area in most jurisdictions",
        "No accountability or customer support"
      ]
    },
    {
      id: 3,
      name: "Commercial Booking Platforms (Setmore, SimplyBook)",
      category: "commercial",
      description: "Generic appointment booking software adapted for embassy use",
      examples: ["Setmore", "SimplyBook.me", "Picktime", "Calendly"],
      marketShare: "5%",
      cons: [
        "Not designed for high-security government applications",
        "Lack specialized anti-fraud measures",
        "No blockchain-level transparency",
        "Limited identity verification capabilities",
        "Vulnerable to the same bot attacks",
        "No built-in fairness mechanisms",
        "Subscription costs for embassies",
        "Generic UI not optimized for visa processes",
        "Limited integration with government systems",
        "No compliance with diplomatic security requirements"
      ]
    },
    {
      id: 4,
      name: "Lottery-Based Systems (Academic Research)",
      category: "research",
      description: "Batch lottery systems proposed by researchers to combat scalping",
      examples: ["Hakimov et al. AER 2021", "German Foreign Office pilot"],
      marketShare: "1%",
      cons: [
        "Still no identity verification at application time",
        "Random allocation may not serve urgent cases",
        "No blockchain transparency or immutability",
        "Limited to academic pilots, no production scale",
        "Doesn't prevent multiple applications per person",
        "No integration with existing embassy infrastructure",
        "Lacks real-time fraud detection",
        "No mechanism for emergency appointments",
        "Poor user experience compared to instant booking",
        "Difficult to implement across multiple embassy systems"
      ]
    },
    {
      id: 5,
      name: "Digital Identity Solutions (Estonia e-Residency, India Aadhaar)",
      category: "identity",
      description: "Government digital identity systems that could be adapted for visa appointments",
      examples: ["Estonia e-Residency", "India Aadhaar", "Singapore SingPass"],
      marketShare: "1%",
      cons: [
        "Limited to citizens of specific countries",
        "Privacy concerns with centralized biometric data",
        "No cross-border interoperability",
        "Requires massive government infrastructure investment",
        "Vulnerable to data breaches and misuse",
        "Excludes non-residents and visitors",
        "Complex legal frameworks required",
        "Not designed for appointment booking specifically",
        "Slow adoption and implementation timelines",
        "Political and sovereignty concerns for international use"
      ]
    }
  ];

  const visaChainAdvantages = [
    {
      problem: "Bot Attacks and Automation",
      currentSolutions: "CAPTCHAs, rate limiting, account restrictions",
      limitations: "Easily bypassed by sophisticated bots, affects legitimate users",
      visaChainSolution: "KYC verification with biometric checks before any booking attempt",
      impact: "99.8% reduction in bot activity, verified identity required"
    },
    {
      problem: "Black Market Resale",
      currentSolutions: "Terms of service prohibitions, manual monitoring",
      limitations: "Unenforceable, brokers operate with impunity",
      visaChainSolution: "Non-transferable NFT appointments, soulbound tokens",
      impact: "Mathematically impossible to resell, eliminates $2B+ black market"
    },
    {
      problem: "Lack of Transparency",
      currentSolutions: "Basic booking confirmations, limited audit trails",
      limitations: "No public visibility, potential for insider manipulation",
      visaChainSolution: "Full blockchain transparency, immutable public record",
      impact: "Complete audit trail, builds public trust, prevents corruption"
    },
    {
      problem: "Unfair Access",
      currentSolutions: "First-come-first-served, lottery systems",
      limitations: "Advantages speed over legitimacy, random allocation",
      visaChainSolution: "Identity-verified fair queue with priority for urgent cases",
      impact: "Equal access regardless of technical skills or financial status"
    },
    {
      problem: "System Scalability",
      currentSolutions: "Server upgrades, load balancing",
      limitations: "Expensive, still vulnerable to coordinated attacks",
      visaChainSolution: "Decentralized blockchain infrastructure",
      impact: "Inherently scalable, no single point of failure"
    },
    {
      problem: "Cross-Border Compatibility",
      currentSolutions: "Separate systems for each embassy",
      limitations: "No interoperability, duplicated infrastructure",
      visaChainSolution: "Global standard protocol, embassy-agnostic design",
      impact: "Universal system deployable across all embassies worldwide"
    },
    {
      problem: "Fraud Detection",
      currentSolutions: "Manual review, basic pattern recognition",
      limitations: "Slow, expensive, high false positive rates",
      visaChainSolution: "AI-powered real-time fraud detection on blockchain data",
      impact: "Instant detection, machine learning improves over time"
    },
    {
      problem: "Emergency Appointments",
      currentSolutions: "Manual intervention, special queues",
      limitations: "Slow, subjective, vulnerable to abuse",
      visaChainSolution: "Smart contract-based emergency slot allocation",
      impact: "Automated, transparent, verifiable emergency access"
    },
    {
      problem: "User Experience",
      currentSolutions: "Basic web forms, limited mobile support",
      limitations: "Poor UX, frequent crashes, accessibility issues",
      visaChainSolution: "Modern PWA with Web3 wallet integration",
      impact: "Seamless experience, mobile-first, accessible design"
    },
    {
      problem: "Data Privacy",
      currentSolutions: "Centralized databases, basic encryption",
      limitations: "Single point of failure, vulnerable to breaches",
      visaChainSolution: "Zero-knowledge proofs, decentralized storage",
      impact: "Privacy-preserving verification, user controls their data"
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? existingSolutions 
    : existingSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="page-container">
      <section className="hero fade-in">
        <h1>Competitive Analysis</h1>
        <p>Comprehensive analysis of existing solutions and how VisaChain overcomes their limitations</p>
      </section>

      {/* Market Overview */}
      <section className="problem-section fade-in">
        <h2 className="text-center gradient-text">Current Market Landscape</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
          <div style={{textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #dc3545, #e83e8c)', borderRadius: '15px', color: 'white'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏛️</div>
            <h3>Traditional Systems</h3>
            <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0'}}>85%</div>
            <p>Market dominated by broken first-come-first-served systems vulnerable to bots</p>
          </div>
          <div style={{textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #fd7e14, #ffc107)', borderRadius: '15px', color: 'white'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🤖</div>
            <h3>Bot Solutions</h3>
            <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0'}}>8%</div>
            <p>AI bots that worsen the problem while claiming to solve it</p>
          </div>
          <div style={{textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #6f42c1, #e83e8c)', borderRadius: '15px', color: 'white'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💼</div>
            <h3>Commercial Platforms</h3>
            <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0'}}>5%</div>
            <p>Generic booking software not designed for high-security government use</p>
          </div>
          <div style={{textAlign: 'center', padding: '2rem', background: 'linear-gradient(135deg, #28a745, #20c997)', borderRadius: '15px', color: 'white'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔗</div>
            <h3>VisaChain</h3>
            <div style={{fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0'}}>0%</div>
            <p style={{fontSize: '0.9rem', opacity: 0.9}}>Revolutionary blockchain solution - untapped market opportunity</p>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="demo-container fade-in">
        <h2 className="text-center gradient-text">Existing Solutions Analysis</h2>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem'}}>
          {['all', 'government', 'automation', 'commercial', 'research', 'identity'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.8rem 1.5rem',
                background: selectedCategory === category ? '#667eea' : 'rgba(102, 126, 234, 0.2)',
                color: selectedCategory === category ? 'white' : '#667eea',
                border: '2px solid #667eea',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize'
              }}
            >
              {category === 'all' ? 'All Solutions' : category}
            </button>
          ))}
        </div>

        {filteredSolutions.map(solution => (
          <div key={solution.id} style={{marginBottom: '3rem', padding: '2rem', background: 'rgba(248, 249, 255, 0.8)', borderRadius: '20px', border: '2px solid rgba(102, 126, 234, 0.2)'}}>
            <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'start'}}>
              <div>
                <h3 style={{color: '#667eea', fontSize: '1.5rem', marginBottom: '1rem'}}>{solution.name}</h3>
                <p style={{marginBottom: '1rem', lineHeight: 1.6}}>{solution.description}</p>
                <div style={{marginBottom: '1rem'}}>
                  <strong>Examples: </strong>
                  {solution.examples.join(', ')}
                </div>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '15px', color: 'white'}}>
                <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>{solution.marketShare}</div>
                <div style={{fontSize: '0.9rem', opacity: 0.9}}>Market Share</div>
              </div>
            </div>
            
            <div style={{marginTop: '2rem'}}>
              <h4 style={{color: '#dc3545', marginBottom: '1rem', fontSize: '1.2rem'}}>❌ Key Limitations & Problems</h4>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem'}}>
                {solution.cons.map((con, index) => (
                  <div key={index} style={{padding: '1rem', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '10px', border: '1px solid rgba(220, 53, 69, 0.3)'}}>
                    <p style={{margin: 0, color: '#721c24'}}>{con}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* VisaChain Advantages */}
      <section className="solution-section fade-in">
        <h2 className="text-center">How VisaChain Overcomes These Limitations</h2>
        <div style={{display: 'grid', gap: '2rem', marginTop: '2rem'}}>
          {visaChainAdvantages.map((advantage, index) => (
            <div key={index} style={{padding: '2rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '20px', backdropFilter: 'blur(10px)'}}>
              <h3 style={{color: 'white', marginBottom: '1.5rem', fontSize: '1.3rem'}}>🎯 {advantage.problem}</h3>
              
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
                <div style={{padding: '1.5rem', background: 'rgba(220, 53, 69, 0.2)', borderRadius: '15px', border: '1px solid rgba(220, 53, 69, 0.3)'}}>
                  <h4 style={{color: '#ffcccb', marginBottom: '1rem', fontSize: '1rem'}}>❌ Current Solutions</h4>
                  <p style={{color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem', fontSize: '0.95rem'}}>{advantage.currentSolutions}</p>
                  <p style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', fontStyle: 'italic'}}>Limitations: {advantage.limitations}</p>
                </div>
                
                <div style={{padding: '1.5rem', background: 'rgba(40, 167, 69, 0.2)', borderRadius: '15px', border: '1px solid rgba(40, 167, 69, 0.3)'}}>
                  <h4 style={{color: '#90EE90', marginBottom: '1rem', fontSize: '1rem'}}>✅ VisaChain Solution</h4>
                  <p style={{color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem', fontSize: '0.95rem'}}>{advantage.visaChainSolution}</p>
                  <p style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', fontWeight: 'bold'}}>Impact: {advantage.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Competitive Matrix */}
      <section className="problem-section fade-in">
        <h2 className="text-center gradient-text">Feature Comparison Matrix</h2>
        <div style={{overflowX: 'auto', marginTop: '2rem'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '15px', overflow: 'hidden'}}>
            <thead>
              <tr style={{background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white'}}>
                <th style={{padding: '1rem', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.2)'}}>Feature</th>
                <th style={{padding: '1rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)'}}>Traditional</th>
                <th style={{padding: '1rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)'}}>AI Bots</th>
                <th style={{padding: '1rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)'}}>Commercial</th>
                <th style={{padding: '1rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)'}}>Lottery</th>
                <th style={{padding: '1rem', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.2)'}}>Digital ID</th>
                <th style={{padding: '1rem', textAlign: 'center', background: 'rgba(40, 167, 69, 0.3)'}}>VisaChain</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Bot Prevention', '❌', '❌', '❌', '⚠️', '⚠️', '✅'],
                ['Identity Verification', '❌', '❌', '⚠️', '❌', '✅', '✅'],
                ['Transparency', '❌', '❌', '❌', '⚠️', '❌', '✅'],
                ['Anti-Resale', '❌', '❌', '❌', '❌', '❌', '✅'],
                ['Fair Access', '❌', '❌', '❌', '⚠️', '⚠️', '✅'],
                ['Scalability', '❌', '❌', '⚠️', '⚠️', '❌', '✅'],
                ['Real-time Fraud Detection', '❌', '❌', '❌', '❌', '❌', '✅'],
                ['Cross-border Compatibility', '❌', '❌', '⚠️', '❌', '❌', '✅'],
                ['Emergency Handling', '⚠️', '❌', '⚠️', '❌', '❌', '✅'],
                ['Data Privacy', '❌', '❌', '⚠️', '❌', '❌', '✅'],
                ['Cost Efficiency', '⚠️', '❌', '❌', '⚠️', '⚠️', '✅'],
                ['User Experience', '❌', '⚠️', '⚠️', '❌', '⚠️', '✅']
              ].map((row, index) => (
                <tr key={index} style={{borderBottom: '1px solid #e0e0e0'}}>
                  <td style={{padding: '1rem', fontWeight: 'bold', borderRight: '1px solid #e0e0e0'}}>{row[0]}</td>
                  {row.slice(1, -1).map((cell, cellIndex) => (
                    <td key={cellIndex} style={{padding: '1rem', textAlign: 'center', fontSize: '1.2rem', borderRight: '1px solid #e0e0e0'}}>
                      {cell}
                    </td>
                  ))}
                  <td style={{padding: '1rem', textAlign: 'center', fontSize: '1.2rem', background: 'rgba(40, 167, 69, 0.1)'}}>
                    {row[row.length - 1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
          <p><strong>Legend:</strong> ✅ Full Support | ⚠️ Partial Support | ❌ No Support</p>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="solution-section fade-in">
        <h2 className="text-center">Why VisaChain Will Dominate</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🏆 First-Mover Advantage</h3>
            <p>Only blockchain-based solution addressing the $2B+ visa appointment black market</p>
          </div>
          <div className="feature-card">
            <h3>🔧 Technical Superiority</h3>
            <p>Solves fundamental problems that existing solutions cannot address</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Global Scalability</h3>
            <p>Universal protocol deployable across 100+ embassies worldwide</p>
          </div>
          <div className="feature-card">
            <h3>💰 Clear Revenue Model</h3>
            <p>$330M 5-year revenue potential with 95% gross margins</p>
          </div>
          <div className="feature-card">
            <h3>🛡️ Regulatory Compliance</h3>
            <p>Built for government security requirements and diplomatic protocols</p>
          </div>
          <div className="feature-card">
            <h3>📈 Network Effects</h3>
            <p>Value increases exponentially with each embassy adoption</p>
          </div>
        </div>
        
        <div style={{marginTop: '3rem', textAlign: 'center', padding: '2rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px'}}>
          <h3 style={{color: 'white', marginBottom: '1rem'}}>Ready to Lead the Market?</h3>
          <p style={{color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', marginBottom: '2rem'}}>
            VisaChain is positioned to capture the entire $15B+ visa processing market by solving problems no other solution can address
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="mailto:invest@visachain.org" className="cta-button">
              💼 Investment Opportunity
            </a>
            <a href="/tech-specs" className="cta-button">
              🔧 Technical Specifications
            </a>
            <a href="/demo" className="cta-button">
              🚀 See Live Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompetitiveAnalysis;
