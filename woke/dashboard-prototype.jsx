import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Fake data
const activityData = [
  { time: '00:00', value: 12 }, { time: '04:00', value: 8 },
  { time: '08:00', value: 25 }, { time: '12:00', value: 45 },
  { time: '16:00', value: 38 }, { time: '20:00', value: 52 },
  { time: '23:59', value: 31 }
];

const financeData = [
  { month: 'Jan', in: 2000, out: 200 },
  { month: 'Fév', in: 500, out: 350 },
  { month: 'Mar', in: 0, out: 180 },
  { month: 'Avr', in: 1500, out: 420 }
];

const categoryData = [
  { name: 'Infrastructure', value: 200, color: '#90EE90' },
  { name: 'Communication', value: 150, color: '#DDA0DD' },
  { name: 'Déplacements', value: 380, color: '#5dade2' },
  { name: 'Indemnités', value: 420, color: '#ffd93d' }
];

const missions = [
  { code: 'GHOST_COUNCIL', name: 'Fantôme au Conseil', progress: 65, participants: 23, xp: 150 },
  { code: 'PILIER_MAP', name: 'Cartographie Piliers', progress: 82, participants: 8, xp: 300 },
  { code: 'KERN_WATCH', name: 'Surveillance KERN', progress: 41, participants: 15, xp: 200 },
  { code: 'COALITION_01', name: 'Coalition Building', progress: 23, participants: 5, xp: 500 }
];

const alerts = [
  { type: 'critical', time: '14:45', message: 'Conseil communal Schaerbeek — ce soir 19h', icon: '🔴' },
  { type: 'warning', time: '14:30', message: 'Nouveau participant : @citizen_42', icon: '🟡' },
  { type: 'success', time: '14:15', message: 'Mission GHOST_COUNCIL validée par @user_17', icon: '🟢' },
  { type: 'info', time: '13:52', message: 'Commit: "Ajout ressource KERN"', icon: '🔵' },
  { type: 'info', time: '12:30', message: 'Atelier "Anatomie du KERN" complété par 3 participants', icon: '🔵' }
];

const liveFeed = [
  { time: '14:47:23', event: 'commit', user: '@dev_01', detail: 'feat: add KERN scraper' },
  { time: '14:45:11', event: 'join', user: '@citizen_42', detail: 'joined via Matrix' },
  { time: '14:42:55', event: 'mission', user: '@user_17', detail: 'completed GHOST_COUNCIL' },
  { time: '14:38:02', event: 'post', user: '@admin', detail: 'new update published' },
  { time: '14:31:44', event: 'comment', user: '@user_08', detail: 'feedback on atelier #3' }
];

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTab, setSelectedTab] = useState('overview');
  const [systemHealth, setSystemHealth] = useState(94);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulated real-time stats
  const [stats, setStats] = useState({
    treasury: 1847,
    participants: 127,
    missions: 42,
    health: 94
  });

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#05050a',
      color: '#e8e8ec',
      fontFamily: "'Inter', sans-serif",
      padding: '1rem'
    }}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        borderBottom: '1px solid rgba(144, 238, 144, 0.15)',
        marginBottom: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#90EE90',
            boxShadow: '0 0 10px #90EE90',
            animation: 'pulse 2s infinite'
          }} />
          <h1 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: '1.2rem',
            color: '#90EE90',
            letterSpacing: '0.15em',
            margin: 0
          }}>
            KERN_BREACH COMMAND CENTER
          </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.85rem',
            color: '#8888a0'
          }}>
            {currentTime.toLocaleDateString('fr-BE')} • {currentTime.toLocaleTimeString('fr-BE')}
          </span>
          <div style={{
            padding: '0.4rem 0.8rem',
            border: '1px solid rgba(144, 238, 144, 0.3)',
            borderRadius: '4px',
            fontSize: '0.75rem',
            color: '#90EE90'
          }}>
            v0.1.0-alpha
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        borderBottom: '1px solid rgba(144, 238, 144, 0.1)',
        paddingBottom: '0.5rem'
      }}>
        {['overview', 'finances', 'missions', 'politique', 'réseau'].map(tab => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              background: selectedTab === tab ? 'rgba(144, 238, 144, 0.1)' : 'transparent',
              border: selectedTab === tab ? '1px solid rgba(144, 238, 144, 0.3)' : '1px solid transparent',
              color: selectedTab === tab ? '#90EE90' : '#8888a0',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              transition: 'all 0.2s'
            }}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Main Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        <StatCard
          value={`€${stats.treasury.toLocaleString()}`}
          label="TRÉSORERIE"
          change="+€200"
          positive={true}
          icon="💰"
        />
        <StatCard
          value={stats.participants}
          label="PARTICIPANTS"
          change="+12"
          positive={true}
          icon="👥"
        />
        <StatCard
          value={stats.missions}
          label="MISSIONS"
          change="+3"
          positive={true}
          icon="🎯"
        />
        <StatCard
          value={`${stats.health}%`}
          label="SANTÉ SYSTÈME"
          change="+2%"
          positive={true}
          icon="💚"
          health={true}
        />
      </div>

      {/* Main Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        {/* Activity Chart */}
        <div style={{
          background: '#0a0a12',
          border: '1px solid rgba(144, 238, 144, 0.15)',
          padding: '1.5rem',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: '0.85rem',
            color: '#DDA0DD',
            letterSpacing: '0.1em',
            marginTop: 0,
            marginBottom: '1rem'
          }}>
            📊 ACTIVITÉ 24H
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={activityData}>
              <defs>
                <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#90EE90" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#90EE90" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" stroke="#8888a0" fontSize={10} />
              <YAxis stroke="#8888a0" fontSize={10} />
              <Tooltip
                contentStyle={{
                  background: '#12121f',
                  border: '1px solid rgba(144, 238, 144, 0.3)',
                  borderRadius: '4px'
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#90EE90"
                strokeWidth={2}
                fill="url(#colorActivity)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Live Feed */}
        <div style={{
          background: '#0a0a12',
          border: '1px solid rgba(144, 238, 144, 0.15)',
          padding: '1.5rem',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: '0.85rem',
            color: '#DDA0DD',
            letterSpacing: '0.1em',
            marginTop: 0,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#ff4757',
              animation: 'pulse 1s infinite'
            }} />
            LIVE FEED
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {liveFeed.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '0.75rem',
                padding: '0.5rem',
                background: 'rgba(144, 238, 144, 0.03)',
                borderRadius: '4px',
                fontSize: '0.75rem'
              }}>
                <span style={{ color: '#8888a0', fontFamily: "'JetBrains Mono', monospace" }}>
                  {item.time}
                </span>
                <span style={{
                  color: item.event === 'commit' ? '#90EE90' :
                         item.event === 'join' ? '#DDA0DD' :
                         item.event === 'mission' ? '#ffd93d' : '#5dade2'
                }}>
                  {item.user}
                </span>
                <span style={{ color: '#8888a0', flex: 1 }}>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        {/* Finances Chart */}
        <div style={{
          background: '#0a0a12',
          border: '1px solid rgba(144, 238, 144, 0.15)',
          padding: '1.5rem',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: '0.85rem',
            color: '#DDA0DD',
            letterSpacing: '0.1em',
            marginTop: 0,
            marginBottom: '1rem'
          }}>
            💰 FLUX FINANCIER
          </h3>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ flex: 1 }}>
              <ResponsiveContainer width="100%" height={150}>
                <AreaChart data={financeData}>
                  <defs>
                    <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#90EE90" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#90EE90" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff4757" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#ff4757" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#8888a0" fontSize={10} />
                  <YAxis stroke="#8888a0" fontSize={10} />
                  <Tooltip contentStyle={{ background: '#12121f', border: '1px solid rgba(144, 238, 144, 0.3)' }} />
                  <Area type="monotone" dataKey="in" stroke="#90EE90" fill="url(#colorIn)" />
                  <Area type="monotone" dataKey="out" stroke="#ff4757" fill="url(#colorOut)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div style={{ width: '120px' }}>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={35}
                    outerRadius={55}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Missions Progress */}
        <div style={{
          background: '#0a0a12',
          border: '1px solid rgba(144, 238, 144, 0.15)',
          padding: '1.5rem',
          borderRadius: '4px'
        }}>
          <h3 style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: '0.85rem',
            color: '#DDA0DD',
            letterSpacing: '0.1em',
            marginTop: 0,
            marginBottom: '1rem'
          }}>
            🎯 MISSIONS EN COURS
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {missions.map(mission => (
              <div key={mission.code} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  color: '#90EE90',
                  width: '110px'
                }}>
                  {mission.code}
                </span>
                <div style={{
                  flex: 1,
                  height: '8px',
                  background: 'rgba(144, 238, 144, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${mission.progress}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, #90EE90, #DDA0DD)`,
                    borderRadius: '4px',
                    transition: 'width 0.3s'
                  }} />
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  color: '#8888a0',
                  width: '40px',
                  textAlign: 'right'
                }}>
                  {mission.progress}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div style={{
        background: '#0a0a12',
        border: '1px solid rgba(144, 238, 144, 0.15)',
        padding: '1.5rem',
        borderRadius: '4px'
      }}>
        <h3 style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: '0.85rem',
          color: '#DDA0DD',
          letterSpacing: '0.1em',
          marginTop: 0,
          marginBottom: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>📡 ALERTES & ÉVÉNEMENTS</span>
          <span style={{
            fontSize: '0.7rem',
            color: '#8888a0',
            cursor: 'pointer'
          }}>
            Voir tout →
          </span>
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {alerts.map((alert, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem',
              background: alert.type === 'critical' ? 'rgba(255, 71, 87, 0.1)' :
                         alert.type === 'warning' ? 'rgba(255, 217, 61, 0.05)' :
                         alert.type === 'success' ? 'rgba(144, 238, 144, 0.05)' :
                         'rgba(93, 173, 226, 0.05)',
              borderLeft: `3px solid ${
                alert.type === 'critical' ? '#ff4757' :
                alert.type === 'warning' ? '#ffd93d' :
                alert.type === 'success' ? '#90EE90' : '#5dade2'
              }`,
              borderRadius: '0 4px 4px 0'
            }}>
              <span>{alert.icon}</span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#8888a0'
              }}>
                {alert.time}
              </span>
              <span style={{ fontSize: '0.85rem', flex: 1 }}>{alert.message}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Status Bar */}
      <footer style={{
        marginTop: '1.5rem',
        padding: '1rem',
        borderTop: '1px solid rgba(144, 238, 144, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <StatusIndicator label="API" status="online" />
          <StatusIndicator label="GitHub" status="online" />
          <StatusIndicator label="Matrix" status="online" />
          <StatusIndicator label="Scraper" status="warning" />
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.7rem',
          color: '#8888a0'
        }}>
          Last sync: {currentTime.toLocaleTimeString('fr-BE')} • Made with 🖤 in Belgium
        </span>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

function StatCard({ value, label, change, positive, icon, health }) {
  return (
    <div style={{
      background: '#0a0a12',
      border: '1px solid rgba(144, 238, 144, 0.15)',
      padding: '1.25rem',
      borderRadius: '4px',
      transition: 'all 0.3s'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1.5rem' }}>{icon}</span>
        <span style={{
          fontSize: '0.7rem',
          color: positive ? '#90EE90' : '#ff4757',
          fontFamily: "'JetBrains Mono', monospace"
        }}>
          {positive ? '▲' : '▼'} {change}
        </span>
      </div>
      <div style={{
        fontFamily: "'Orbitron', monospace",
        fontSize: '2rem',
        fontWeight: 700,
        color: health ? '#90EE90' : '#e8e8ec',
        marginTop: '0.5rem'
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem',
        color: '#8888a0',
        letterSpacing: '0.15em',
        marginTop: '0.25rem'
      }}>
        {label}
      </div>
      {health && (
        <div style={{
          marginTop: '0.5rem',
          height: '4px',
          background: 'rgba(144, 238, 144, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${parseInt(value)}%`,
            height: '100%',
            background: '#90EE90',
            borderRadius: '2px'
          }} />
        </div>
      )}
    </div>
  );
}

function StatusIndicator({ label, status }) {
  const colors = {
    online: '#90EE90',
    warning: '#ffd93d',
    offline: '#ff4757'
  };
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <div style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: colors[status],
        boxShadow: `0 0 6px ${colors[status]}`
      }} />
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.7rem',
        color: '#8888a0'
      }}>
        {label}
      </span>
    </div>
  );
}
