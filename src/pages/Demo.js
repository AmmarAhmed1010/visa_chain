import React, { useState, useEffect } from 'react';

const Demo = () => {
  const [currentScenario, setCurrentScenario] = useState('traditional');
  const [userWallet, setUserWallet] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    totalUsers: 15847,
    appointmentsBooked: 3421,
    blackMarketPrevented: 892,
    avgWaitTime: '3.2 days',
    fraudAttempts: 127
  });
  const [selectedEmbassy, setSelectedEmbassy] = useState('US Embassy - New Delhi');
  const [userProfile, setUserProfile] = useState(null);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeMetrics(prev => ({
        ...prev,
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 3),
        appointmentsBooked: prev.appointmentsBooked + Math.floor(Math.random() * 2),
        blackMarketPrevented: prev.blackMarketPrevented + Math.floor(Math.random() * 1),
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const embassies = [
    { name: 'US Embassy - New Delhi', country: 'India', currentWait: '18 months', visaChainWait: '2-3 days', volume: '2,500/day' },
    { name: 'UK Embassy - Lagos', country: 'Nigeria', currentWait: '14 months', visaChainWait: '1-2 days', volume: '1,800/day' },
    { name: 'Schengen - Mumbai', country: 'India', currentWait: '12 months', visaChainWait: '2-4 days', volume: '3,200/day' },
    { name: 'Canada Embassy - Manila', country: 'Philippines', currentWait: '16 months', visaChainWait: '1-3 days', volume: '1,200/day' },
  ];

  const userScenarios = [
    {
      id: 'student',
      name: 'Priya - Computer Science Student',
      avatar: '👩‍🎓',
      story: 'Needs F-1 visa for Stanford University. Classes start in 3 months.',
      urgency: 'High',
      traditionalOutcome: 'Forced to defer admission, lost $50K scholarship',
      visaChainOutcome: 'Booked appointment in 2 days, on track for studies'
    },
    {
      id: 'worker',
      name: 'Ahmed - Software Engineer',
      avatar: '👨‍💻',
      story: 'H-1B approved, needs visa stamp to start job at Google.',
      urgency: 'Critical',
      traditionalOutcome: 'Job offer rescinded, career opportunity lost',
      visaChainOutcome: 'Secured appointment, started job on time'
    },
    {
      id: 'family',
      name: 'Maria - Family Reunion',
      avatar: '👨‍👩‍👧‍👦',
      story: 'Visiting sick parent in US, needs emergency visa.',
      urgency: 'Emergency',
      traditionalOutcome: 'Could not visit, parent passed away',
      visaChainOutcome: 'Emergency slot available, family reunited'
    }
  ];

  const mockSlots = [
    { id: 1, date: '2024-07-28', time: '09:00 AM', embassy: selectedEmbassy, available: true, type: 'Regular', price: 'Free' },
    { id: 2, date: '2024-07-28', time: '10:30 AM', embassy: selectedEmbassy, available: true, type: 'Regular', price: 'Free' },
    { id: 3, date: '2024-07-29', time: '02:00 PM', embassy: selectedEmbassy, available: false, type: 'Regular', price: 'Unavailable', bookedBy: 'Bot/Broker' },
    { id: 4, date: '2024-07-30', time: '11:00 AM', embassy: selectedEmbassy, available: true, type: 'Priority', price: 'Free' },
    { id: 5, date: '2024-07-31', time: '03:30 PM', embassy: selectedEmbassy, available: true, type: 'Emergency', price: 'Free' },
    { id: 6, date: '2024-08-01', time: '09:30 AM', embassy: selectedEmbassy, available: false, type: 'Regular', price: 'Black Market: $2,500', bookedBy: 'Broker' },
    { id: 7, date: '2024-08-02', time: '01:00 PM', embassy: selectedEmbassy, available: true, type: 'Regular', price: 'Free' },
    { id: 8, date: '2024-08-03', time: '04:00 PM', embassy: selectedEmbassy, available: true, type: 'Student Priority', price: 'Free' },
  ];

  const handleConnectWallet = () => {
    setUserWallet('0x742d35Cc6634C0532925a3b8D4C2C4e');
    setCurrentStep(2);
  };

  const handleKYCVerification = () => {
    setIsVerified(true);
    setCurrentStep(3);
  };

  const handleBookSlot = (slotId) => {
    if (bookedSlots.length > 0) {
      alert('You can only book one appointment per verified identity!');
      return;
    }
    
    setBookedSlots([...bookedSlots, slotId]);
    setRealTimeMetrics(prev => ({
      ...prev,
      appointmentsBooked: prev.appointmentsBooked + 1,
      blackMarketPrevented: prev.blackMarketPrevented + 1
    }));
    alert('🎉 Appointment booked successfully! NFT minted to your wallet.');
  };

  const handleCancelSlot = (slotId) => {
    setBookedSlots(bookedSlots.filter(id => id !== slotId));
    alert('Appointment cancelled. Slot released back to the pool.');
  };

  const selectUserScenario = (scenario) => {
    setUserProfile(scenario);
    setCurrentStep(1);
    setUserWallet('');
    setIsVerified(false);
    setBookedSlots([]);
  };

  const simulateTraditionalSystem = () => {
    setCurrentScenario('traditional');
  };

  const simulateVisaChain = () => {
    setCurrentScenario('visachain');
  };

  return (
    <div className="page-container">
      <section className="hero fade-in">
        <h1>Live System Demo</h1>
        <p>Experience the transformation from broken traditional systems to VisaChain</p>
        <p style={{fontSize: '1.1rem', opacity: 0.9, marginTop: '1rem'}}>See real-time metrics, user scenarios, and the dramatic impact on wait times and costs</p>
      </section>

      {/* Real-time Metrics Dashboard */}
      <section className="problem-section fade-in">
        <h2 className="text-center gradient-text">Live System Metrics</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
          <div style={{textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '15px', color: 'white'}}>
            <div style={{fontSize: '2.5rem', fontWeight: '800'}}>{realTimeMetrics.totalUsers.toLocaleString()}</div>
            <div style={{fontSize: '0.9rem', opacity: 0.9}}>Verified Users</div>
            <div style={{fontSize: '0.8rem', marginTop: '0.5rem', color: '#90EE90'}}>↗ +{Math.floor(Math.random() * 5) + 1} in last hour</div>
          </div>
          <div style={{textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #28a745, #20c997)', borderRadius: '15px', color: 'white'}}>
            <div style={{fontSize: '2.5rem', fontWeight: '800'}}>{realTimeMetrics.appointmentsBooked.toLocaleString()}</div>
            <div style={{fontSize: '0.9rem', opacity: 0.9}}>Appointments Booked</div>
            <div style={{fontSize: '0.8rem', marginTop: '0.5rem', color: '#90EE90'}}>↗ +{Math.floor(Math.random() * 3) + 1} in last 10 min</div>
          </div>
          <div style={{textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #dc3545, #e83e8c)', borderRadius: '15px', color: 'white'}}>
            <div style={{fontSize: '2.5rem', fontWeight: '800'}}>{realTimeMetrics.blackMarketPrevented.toLocaleString()}</div>
            <div style={{fontSize: '0.9rem', opacity: 0.9}}>Black Market Prevented</div>
            <div style={{fontSize: '0.8rem', marginTop: '0.5rem', color: '#90EE90'}}>$2.2M saved this month</div>
          </div>
          <div style={{textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #fd7e14, #ffc107)', borderRadius: '15px', color: 'white'}}>
            <div style={{fontSize: '2.5rem', fontWeight: '800'}}>{realTimeMetrics.avgWaitTime}</div>
            <div style={{fontSize: '0.9rem', opacity: 0.9}}>Average Wait Time</div>
            <div style={{fontSize: '0.8rem', marginTop: '0.5rem', color: '#90EE90'}}>vs 18 months traditional</div>
          </div>
          <div style={{textAlign: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #6f42c1, #e83e8c)', borderRadius: '15px', color: 'white'}}>
            <div style={{fontSize: '2.5rem', fontWeight: '800'}}>{realTimeMetrics.fraudAttempts}</div>
            <div style={{fontSize: '0.9rem', opacity: 0.9}}>Fraud Attempts Blocked</div>
            <div style={{fontSize: '0.8rem', marginTop: '0.5rem', color: '#90EE90'}}>99.8% success rate</div>
          </div>
        </div>
      </section>

      {/* Embassy Selection */}
      <section className="demo-container fade-in">
        <h2 className="text-center gradient-text">Select Embassy to Simulate</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem'}}>
          {embassies.map((embassy, index) => (
            <div 
              key={index}
              onClick={() => setSelectedEmbassy(embassy.name)}
              style={{
                padding: '1.5rem',
                background: selectedEmbassy === embassy.name ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f8f9ff',
                color: selectedEmbassy === embassy.name ? 'white' : '#333',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: selectedEmbassy === embassy.name ? '2px solid #fff' : '2px solid transparent'
              }}
            >
              <h3 style={{marginBottom: '1rem'}}>{embassy.name}</h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem'}}>
                <div>
                  <strong>Current Wait:</strong><br/>
                  <span style={{color: selectedEmbassy === embassy.name ? '#ffcccb' : '#dc3545'}}>{embassy.currentWait}</span>
                </div>
                <div>
                  <strong>VisaChain Wait:</strong><br/>
                  <span style={{color: selectedEmbassy === embassy.name ? '#90EE90' : '#28a745'}}>{embassy.visaChainWait}</span>
                </div>
                <div>
                  <strong>Daily Volume:</strong><br/>
                  {embassy.volume}
                </div>
                <div>
                  <strong>Country:</strong><br/>
                  {embassy.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* System Comparison */}
      <section className="demo-container fade-in">
        <h2 className="text-center gradient-text">Live System Comparison</h2>
        <div style={{display: 'flex', gap: '2rem', marginTop: '2rem', justifyContent: 'center'}}>
          <button 
            onClick={simulateTraditionalSystem}
            style={{
              padding: '1rem 2rem',
              background: currentScenario === 'traditional' ? '#dc3545' : 'rgba(220, 53, 69, 0.2)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            🚫 Traditional System
          </button>
          <button 
            onClick={simulateVisaChain}
            style={{
              padding: '1rem 2rem',
              background: currentScenario === 'visachain' ? '#28a745' : 'rgba(40, 167, 69, 0.2)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            ✅ VisaChain System
          </button>
        </div>
        
        {currentScenario === 'traditional' && (
          <div style={{marginTop: '2rem', padding: '2rem', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '15px', border: '2px solid rgba(220, 53, 69, 0.3)'}}>
            <h3 style={{color: '#dc3545', textAlign: 'center', marginBottom: '2rem'}}>Traditional Embassy System Simulation</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(220, 53, 69, 0.2)', borderRadius: '10px'}}>
                <div style={{fontSize: '2rem', color: '#dc3545', marginBottom: '0.5rem'}}>⏰</div>
                <h4 style={{color: '#dc3545'}}>Wait Time</h4>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545'}}>18+ Months</p>
                <p style={{fontSize: '0.8rem', opacity: 0.8}}>Due to bot booking</p>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(220, 53, 69, 0.2)', borderRadius: '10px'}}>
                <div style={{fontSize: '2rem', color: '#dc3545', marginBottom: '0.5rem'}}>💰</div>
                <h4 style={{color: '#dc3545'}}>Black Market Price</h4>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545'}}>$2,500</p>
                <p style={{fontSize: '0.8rem', opacity: 0.8}}>Broker markup</p>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(220, 53, 69, 0.2)', borderRadius: '10px'}}>
                <div style={{fontSize: '2rem', color: '#dc3545', marginBottom: '0.5rem'}}>🤖</div>
                <h4 style={{color: '#dc3545'}}>Bot Success Rate</h4>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545'}}>95%</p>
                <p style={{fontSize: '0.8rem', opacity: 0.8}}>Slots taken by bots</p>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(220, 53, 69, 0.2)', borderRadius: '10px'}}>
                <div style={{fontSize: '2rem', color: '#dc3545', marginBottom: '0.5rem'}}>😢</div>
                <h4 style={{color: '#dc3545'}}>User Satisfaction</h4>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545'}}>15%</p>
                <p style={{fontSize: '0.8rem', opacity: 0.8}}>Frustrated users</p>
              </div>
            </div>
            <div style={{marginTop: '2rem', padding: '1.5rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '10px'}}>
              <h4 style={{color: '#dc3545', marginBottom: '1rem'}}>🚨 System Status: BROKEN</h4>
              <p style={{color: 'white', opacity: 0.9}}>• Bots booking 95% of slots within seconds</p>
              <p style={{color: 'white', opacity: 0.9}}>• Brokers reselling at 1000% markup</p>
              <p style={{color: 'white', opacity: 0.9}}>• Students missing university deadlines</p>
              <p style={{color: 'white', opacity: 0.9}}>• Workers losing job opportunities</p>
              <p style={{color: 'white', opacity: 0.9}}>• Families separated for years</p>
            </div>
          </div>
        )}
        
        {currentScenario === 'visachain' && (
          <div style={{marginTop: '2rem', padding: '2rem', background: 'rgba(40, 167, 69, 0.1)', borderRadius: '15px', border: '2px solid rgba(40, 167, 69, 0.3)'}}>
            <h3 style={{color: '#28a745', textAlign: 'center', marginBottom: '2rem'}}>VisaChain System Simulation</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(40, 167, 69, 0.2)', borderRadius: '10px'}}>
                <div style={{fontSize: '2rem', color: '#28a745', marginBottom: '0.5rem'}}>⚡</div>
                <h4 style={{color: '#28a745'}}>Wait Time</h4>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745'}}>2-3 Days</p>
                <p style={{fontSize: '0.8rem', opacity: 0.8}}>Fair queue system</p>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(40, 167, 69, 0.2)', borderRadius: '10px'}}>
                <div style={{fontSize: '2rem', color: '#28a745', marginBottom: '0.5rem'}}>🆓</div>
                <h4 style={{color: '#28a745'}}>Cost</h4>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745'}}>FREE</p>
                <p style={{fontSize: '0.8rem', opacity: 0.8}}>No black market</p>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(40, 167, 69, 0.2)', borderRadius: '10px'}}>
                <div style={{fontSize: '2rem', color: '#28a745', marginBottom: '0.5rem'}}>🛡️</div>
                <h4 style={{color: '#28a745'}}>Bot Prevention</h4>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745'}}>99.8%</p>
                <p style={{fontSize: '0.8rem', opacity: 0.8}}>Success rate</p>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(40, 167, 69, 0.2)', borderRadius: '10px'}}>
                <div style={{fontSize: '2rem', color: '#28a745', marginBottom: '0.5rem'}}>😊</div>
                <h4 style={{color: '#28a745'}}>User Satisfaction</h4>
                <p style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745'}}>96%</p>
                <p style={{fontSize: '0.8rem', opacity: 0.8}}>Happy users</p>
              </div>
            </div>
            <div style={{marginTop: '2rem', padding: '1.5rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '10px'}}>
              <h4 style={{color: '#28a745', marginBottom: '1rem'}}>✅ System Status: OPTIMIZED</h4>
              <p style={{color: 'white', opacity: 0.9}}>• KYC verification prevents bots and fraud</p>
              <p style={{color: 'white', opacity: 0.9}}>• Non-transferable NFTs eliminate black market</p>
              <p style={{color: 'white', opacity: 0.9}}>• Fair queue ensures equal access</p>
              <p style={{color: 'white', opacity: 0.9}}>• Real-time transparency builds trust</p>
              <p style={{color: 'white', opacity: 0.9}}>• Emergency slots for urgent cases</p>
            </div>
          </div>
        )}
      </section>

      {/* Interactive Booking Demo */}
      <section className="demo-container fade-in">
        <h2 className="text-center gradient-text">Interactive Booking Demo</h2>
        
        {/* Step 1: Connect Wallet */}
        <div className="demo-interface">
          <h3>Step 1: Connect Your Wallet</h3>
          {!userWallet ? (
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <p>Connect your blockchain wallet to get started</p>
              <button className="cta-button" onClick={handleConnectWallet}>
                🔗 Connect MetaMask Wallet
              </button>
            </div>
          ) : (
            <div style={{background: '#e8f5e8', padding: '1rem', borderRadius: '10px', margin: '1rem 0'}}>
              <p>✅ Wallet Connected: {userWallet}</p>
            </div>
          )}
        </div>

        {/* Step 2: KYC Verification */}
        {currentStep >= 2 && (
          <div className="demo-interface">
            <h3>Step 2: Identity Verification (KYC)</h3>
            {!isVerified ? (
              <div style={{textAlign: 'center', padding: '2rem'}}>
                <p>Complete identity verification to book appointments</p>
                <div style={{margin: '1rem 0'}}>
                  <p>📄 Upload Passport: ✅</p>
                  <p>📸 Biometric Scan: ✅</p>
                  <p>🏠 Address Verification: ✅</p>
                </div>
                <button className="cta-button" onClick={handleKYCVerification}>
                  ✅ Complete Verification
                </button>
              </div>
            ) : (
              <div style={{background: '#e8f5e8', padding: '1rem', borderRadius: '10px', margin: '1rem 0'}}>
                <p>✅ Identity Verified: You can now book appointments</p>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Book Appointments */}
        {currentStep >= 3 && (
          <div className="demo-interface">
            <h3>Step 3: Available Appointment Slots - {selectedEmbassy}</h3>
            <p style={{marginBottom: '1rem'}}>Real-time appointment availability with transparent pricing and fair access</p>
            
            <div style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
              {mockSlots.map(slot => {
                const isBooked = bookedSlots.includes(slot.id);
                const isUnavailable = !slot.available && !isBooked;
                const isBrokerSlot = slot.bookedBy === 'Broker' || slot.bookedBy === 'Bot/Broker';
                
                return (
                  <div 
                    key={slot.id} 
                    className={`appointment-card ${isBooked ? 'booked' : ''}`}
                    style={{
                      opacity: isUnavailable ? 0.6 : 1,
                      background: isBooked ? '#e8f5e8' : isBrokerSlot ? '#ffe6e6' : slot.available ? '#f8fff9' : '#f5f5f5',
                      border: isBooked ? '2px solid #28a745' : isBrokerSlot ? '2px solid #dc3545' : '2px solid #e0e0e0',
                      position: 'relative'
                    }}
                  >
                    {isBrokerSlot && (
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: '#dc3545',
                        color: 'white',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '12px',
                        fontSize: '0.7rem',
                        fontWeight: 'bold'
                      }}>
                        BLACK MARKET
                      </div>
                    )}
                    
                    <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem', alignItems: 'center'}}>
                      <div>
                        <h4 style={{marginBottom: '0.5rem', color: isBooked ? '#28a745' : isBrokerSlot ? '#dc3545' : '#333'}}>
                          {slot.embassy}
                        </h4>
                        <p style={{margin: '0.3rem 0', fontSize: '0.95rem'}}>
                          📅 <strong>{slot.date}</strong> at <strong>{slot.time}</strong>
                        </p>
                        <p style={{margin: '0.3rem 0', fontSize: '0.9rem', color: '#666'}}>
                          🏷️ Type: <span style={{fontWeight: 'bold', color: slot.type.includes('Emergency') ? '#dc3545' : slot.type.includes('Priority') ? '#fd7e14' : '#28a745'}}>{slot.type}</span>
                        </p>
                        <p style={{margin: '0.3rem 0', fontSize: '0.85rem', color: '#666'}}>
                          {isBooked ? '🎟️ Your Blockchain NFT Appointment' : 
                           isBrokerSlot ? '🤖 Booked by Bot/Broker - Resold on Black Market' :
                           isUnavailable ? '❌ Unavailable' : 
                           '✅ Available for Verified Users'}
                        </p>
                      </div>
                      
                      <div style={{textAlign: 'center'}}>
                        <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: isBrokerSlot ? '#dc3545' : '#28a745'}}>
                          {slot.price}
                        </div>
                        {isBrokerSlot && (
                          <div style={{fontSize: '0.8rem', color: '#666', textDecoration: 'line-through'}}>
                            Official: Free
                          </div>
                        )}
                      </div>
                      
                      <div style={{textAlign: 'center'}}>
                        {isBooked ? (
                          <button 
                            className="book-button" 
                            style={{background: '#dc3545', fontSize: '0.9rem', padding: '0.6rem 1rem'}}
                            onClick={() => handleCancelSlot(slot.id)}
                          >
                            Cancel
                          </button>
                        ) : slot.available ? (
                          <button 
                            className="book-button"
                            style={{fontSize: '0.9rem', padding: '0.6rem 1rem'}}
                            onClick={() => handleBookSlot(slot.id)}
                          >
                            Book Free
                          </button>
                        ) : isBrokerSlot ? (
                          <button 
                            className="book-button" 
                            disabled
                            style={{background: '#6c757d', fontSize: '0.8rem', padding: '0.6rem 1rem'}}
                          >
                            Black Market
                          </button>
                        ) : (
                          <button 
                            className="book-button" 
                            disabled
                            style={{fontSize: '0.9rem', padding: '0.6rem 1rem'}}
                          >
                            Unavailable
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Booking Statistics */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem'}}>
              <div style={{textAlign: 'center', padding: '1rem', background: '#e8f5e8', borderRadius: '10px'}}>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745'}}>
                  {mockSlots.filter(s => s.available).length}
                </div>
                <div style={{fontSize: '0.9rem', color: '#666'}}>Available Slots</div>
              </div>
              <div style={{textAlign: 'center', padding: '1rem', background: '#ffe6e6', borderRadius: '10px'}}>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#dc3545'}}>
                  {mockSlots.filter(s => s.bookedBy === 'Broker' || s.bookedBy === 'Bot/Broker').length}
                </div>
                <div style={{fontSize: '0.9rem', color: '#666'}}>Black Market Slots</div>
              </div>
              <div style={{textAlign: 'center', padding: '1rem', background: '#fff3cd', borderRadius: '10px'}}>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#856404'}}>
                  $0
                </div>
                <div style={{fontSize: '0.9rem', color: '#666'}}>Your Cost (vs $2,500)</div>
              </div>
              <div style={{textAlign: 'center', padding: '1rem', background: '#d1ecf1', borderRadius: '10px'}}>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#0c5460'}}>
                  2-3 days
                </div>
                <div style={{fontSize: '0.9rem', color: '#666'}}>Wait Time (vs 18 months)</div>
              </div>
            </div>
          </div>
        )}

        {/* Blockchain Activity Log */}
        {bookedSlots.length > 0 && (
          <div className="demo-interface">
            <h3>Blockchain Activity Log</h3>
            <div style={{background: '#1a1a1a', color: '#00ff00', padding: '1rem', borderRadius: '10px', fontFamily: 'monospace'}}>
              <p>🔗 Transaction Hash: 0x8f2a7b3c9d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b</p>
              <p>⛽ Gas Used: 125,000</p>
              <p>🎫 NFT Minted: VisaAppointment#{bookedSlots[0]}</p>
              <p>📊 Block Number: 18,945,672</p>
              <p>✅ Status: Confirmed</p>
            </div>
          </div>
        )}
      </section>

      {/* ROI Calculator */}
      <section className="problem-section fade-in">
        <h2 className="text-center gradient-text">Investment ROI Calculator</h2>
        <p style={{textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem'}}>See the financial impact of VisaChain deployment at scale</p>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
          <div style={{padding: '2rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '15px', color: 'white', textAlign: 'center'}}>
            <h3 style={{marginBottom: '1rem'}}>Embassy Revenue Model</h3>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>$2.50</div>
            <p style={{opacity: 0.9, marginBottom: '1rem'}}>Per appointment transaction fee</p>
            <div style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>2,500 appointments/day</div>
            <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>= $6,250/day revenue</div>
            <div style={{fontSize: '1.2rem', marginTop: '1rem', opacity: 0.9}}>$2.3M annual revenue per embassy</div>
          </div>
          
          <div style={{padding: '2rem', background: 'linear-gradient(135deg, #28a745, #20c997)', borderRadius: '15px', color: 'white', textAlign: 'center'}}>
            <h3 style={{marginBottom: '1rem'}}>Cost Savings</h3>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>$5M</div>
            <p style={{opacity: 0.9, marginBottom: '1rem'}}>Annual savings per embassy</p>
            <div style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Reduced fraud investigation</div>
            <div style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Lower customer service costs</div>
            <div style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Automated processes</div>
            <div style={{fontSize: '1.2rem', marginTop: '1rem', opacity: 0.9}}>95% operational efficiency gain</div>
          </div>
          
          <div style={{padding: '2rem', background: 'linear-gradient(135deg, #dc3545, #e83e8c)', borderRadius: '15px', color: 'white', textAlign: 'center'}}>
            <h3 style={{marginBottom: '1rem'}}>Market Impact</h3>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>$2B</div>
            <p style={{opacity: 0.9, marginBottom: '1rem'}}>Black market eliminated annually</p>
            <div style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>50M+ people affected</div>
            <div style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>100+ embassy potential</div>
            <div style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>90% wait time reduction</div>
            <div style={{fontSize: '1.2rem', marginTop: '1rem', opacity: 0.9}}>Massive social impact</div>
          </div>
        </div>
        
        <div style={{padding: '2rem', background: 'rgba(102, 126, 234, 0.1)', borderRadius: '15px', border: '2px solid rgba(102, 126, 234, 0.3)'}}>
          <h3 style={{textAlign: 'center', color: '#667eea', marginBottom: '2rem'}}>5-Year Financial Projection</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', textAlign: 'center'}}>
            <div>
              <h4 style={{color: '#667eea'}}>Year 1</h4>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea'}}>$5M</div>
              <p style={{fontSize: '0.9rem', color: '#666'}}>5 embassies</p>
            </div>
            <div>
              <h4 style={{color: '#667eea'}}>Year 2</h4>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea'}}>$25M</div>
              <p style={{fontSize: '0.9rem', color: '#666'}}>20 embassies</p>
            </div>
            <div>
              <h4 style={{color: '#667eea'}}>Year 3</h4>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea'}}>$50M</div>
              <p style={{fontSize: '0.9rem', color: '#666'}}>50 embassies</p>
            </div>
            <div>
              <h4 style={{color: '#667eea'}}>Year 4</h4>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea'}}>$100M</div>
              <p style={{fontSize: '0.9rem', color: '#666'}}>80 embassies</p>
            </div>
            <div>
              <h4 style={{color: '#667eea'}}>Year 5</h4>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea'}}>$150M</div>
              <p style={{fontSize: '0.9rem', color: '#666'}}>100+ embassies</p>
            </div>
          </div>
          <div style={{marginTop: '2rem', textAlign: 'center'}}>
            <p style={{fontSize: '1.2rem', fontWeight: 'bold', color: '#667eea'}}>Total 5-Year Revenue: $330M</p>
            <p style={{fontSize: '1rem', color: '#666', marginTop: '0.5rem'}}>Conservative estimates with 95% gross margins</p>
          </div>
        </div>
      </section>

      {/* Key Features Demonstrated */}
      <section className="solution-section fade-in">
        <h2 className="text-center">Key Features Demonstrated</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🔐 Identity Gating</h3>
            <p>Only KYC-verified users can book appointments - eliminates 99.8% of bot activity</p>
          </div>
          <div className="feature-card">
            <h3>🎟️ NFT Appointments</h3>
            <p>Each booking creates a unique, non-transferable token - impossible to resell</p>
          </div>
          <div className="feature-card">
            <h3>📊 Real-time Transparency</h3>
            <p>All transactions visible on blockchain - builds trust and prevents corruption</p>
          </div>
          <div className="feature-card">
            <h3>🚫 Anti-Scalping</h3>
            <p>One appointment per verified identity - ensures fair access for everyone</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Instant Processing</h3>
            <p>2-3 day wait times vs 18 months - 90% reduction in appointment delays</p>
          </div>
          <div className="feature-card">
            <h3>💰 Cost Elimination</h3>
            <p>Free appointments vs $2,500 black market - saves users billions annually</p>
          </div>
        </div>
        
        <div style={{marginTop: '3rem', textAlign: 'center', padding: '2rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px'}}>
          <h3 style={{color: 'white', marginBottom: '1rem'}}>Ready to Transform Global Visa Processing?</h3>
          <p style={{color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', marginBottom: '2rem'}}>This demo shows just a fraction of VisaChain's potential impact</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="mailto:invest@visachain.org" className="cta-button">
              💼 Schedule Investor Meeting
            </a>
            <a href="/tech-specs" className="cta-button">
              📋 View Technical Specifications
            </a>
            <a href="mailto:partnerships@visachain.org" className="cta-button">
              🌍 Embassy Partnership Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
