// Dashboard Component - CraftTO Main Overview
function Dashboard() {
    const [stats, setStats] = useState({
        totalMods: 47,
        activeMods: 32,
        totalWorlds: 8,
        favoriteWorlds: 3,
        totalPlaytime: '142 שעות',
        memoryUsage: '4.2GB',
        lastUpdated: 'לפני 2 שעות'
    });

    const [recentActivity, setRecentActivity] = useState([
        { type: 'mod_installed', name: 'JEI (Just Enough Items)', time: 'לפני 5 דקות', icon: '📦' },
        { type: 'world_created', name: 'עולם הישרדות חדש', time: 'לפני שעה', icon: '🌍' },
        { type: 'mod_updated', name: 'OptiFine', time: 'לפני 3 שעות', icon: '🔄' },
        { type: 'world_backup', name: 'גיבוי העולם הראשי', time: 'היום', icon: '💾' }
    ]);

    const [recommendedMods, setRecommendedMods] = useState([
        {
            name: 'Sodium',
            description: 'אופטימיזציה לביצועים מעולים',
            downloads: '45M',
            rating: 4.9,
            category: 'אופטימיזציה',
            icon: '⚡'
        },
        {
            name: 'Biomes O\' Plenty',
            description: 'מוסיף ביומים חדשים ומגניבים',
            downloads: '32M',
            rating: 4.7,
            category: 'תוכן',
            icon: '🌲'
        },
        {
            name: 'Iron Chests',
            description: 'תיבות אחסון משופרות',
            downloads: '28M',
            rating: 4.6,
            category: 'כלים',
            icon: '📦'
        },
        {
            name: 'Waystones',
            description: 'מערכת טלפורטציה נוחה',
            downloads: '15M',
            rating: 4.8,
            category: 'תחבורה',
            icon: '🗿'
        }
    ]);

    const [quickActions, setQuickActions] = useState([
        { action: 'launch_minecraft', label: 'הפעל מיינקראפט', icon: '🚀', color: '#4CAF50' },
        { action: 'backup_worlds', label: 'גבה עולמות', icon: '💾', color: '#2196F3' },
        { action: 'update_mods', label: 'עדכן מודים', icon: '🔄', color: '#FF9800' },
        { action: 'cleanup_cache', label: 'נקה זיכרון', icon: '🧹', color: '#9C27B0' }
    ]);

    const StatCard = ({ title, value, icon, color = '#4CAF50' }) => (
        <div className="card" style={{ borderTop: `4px solid ${color}` }}>
            <div className="d-flex align-center justify-between">
                <div>
                    <h3 style={{ color: '#999', fontSize: '14px', marginBottom: '8px' }}>{title}</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>{value}</p>
                </div>
                <div style={{ fontSize: '32px', opacity: 0.7 }}>{icon}</div>
            </div>
        </div>
    );

    const ActivityItem = ({ activity }) => (
        <div className="d-flex align-center gap-20 mb-20" style={{ 
            padding: '15px', 
            background: 'rgba(255,255,255,0.05)', 
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.1)'
        }}>
            <div style={{ fontSize: '24px' }}>{activity.icon}</div>
            <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>{activity.name}</h4>
                <p style={{ fontSize: '14px', color: '#999' }}>{activity.time}</p>
            </div>
        </div>
    );

    const ModCard = ({ mod }) => (
        <div className="card" style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
             onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
             onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            <div className="d-flex align-center gap-20">
                <div style={{ fontSize: '32px' }}>{mod.icon}</div>
                <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>{mod.name}</h4>
                    <p style={{ fontSize: '14px', color: '#999', marginBottom: '10px' }}>{mod.description}</p>
                    <div className="d-flex align-center justify-between">
                        <span style={{ fontSize: '12px', color: '#4CAF50' }}>
                            ⭐ {mod.rating} • 📥 {mod.downloads}
                        </span>
                        <span style={{ 
                            fontSize: '12px', 
                            padding: '4px 8px', 
                            background: 'rgba(76, 175, 80, 0.2)', 
                            borderRadius: '12px',
                            color: '#4CAF50'
                        }}>
                            {mod.category}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    const QuickActionButton = ({ action }) => (
        <button 
            className="card text-center" 
            style={{ 
                border: `2px solid ${action.color}`,
                background: `${action.color}15`,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
                e.target.style.background = `${action.color}25`;
                e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
                e.target.style.background = `${action.color}15`;
                e.target.style.transform = 'translateY(0)';
            }}
        >
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>{action.icon}</div>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: action.color }}>{action.label}</p>
        </button>
    );

    return (
        <div>
            {/* Welcome Section */}
            <div className="card" style={{ 
                background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)', 
                color: 'white', 
                marginBottom: '30px' 
            }}>
                <div className="d-flex align-center justify-between">
                    <div>
                        <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>
                            ברוך הבא ל-CraftTO! ⛏️
                        </h1>
                        <p style={{ fontSize: '16px', opacity: 0.9 }}>
                            מנהל המודים המתקדם ביותר למיינקראפט
                        </p>
                    </div>
                    <div style={{ fontSize: '64px', opacity: 0.7 }}>🎮</div>
                </div>
            </div>

            {/* Stats Overview */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '20px', 
                marginBottom: '30px' 
            }}>
                <StatCard title="מודים מותקנים" value={stats.totalMods} icon="📦" color="#4CAF50" />
                <StatCard title="מודים פעילים" value={stats.activeMods} icon="⚡" color="#FF9800" />
                <StatCard title="עולמות" value={stats.totalWorlds} icon="🌍" color="#2196F3" />
                <StatCard title="זמן משחק" value={stats.totalPlaytime} icon="⏱️" color="#9C27B0" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                {/* Recent Activity */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <span className="card-title-icon">📈</span>
                            פעילות אחרונה
                        </h3>
                    </div>
                    <div>
                        {recentActivity.map((activity, index) => (
                            <ActivityItem key={index} activity={activity} />
                        ))}
                    </div>
                </div>

                {/* System Info */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <span className="card-title-icon">💻</span>
                            מצב המערכת
                        </h3>
                    </div>
                    <div>
                        <div className="mb-20">
                            <div className="d-flex justify-between mb-10">
                                <span>שימוש זיכרון</span>
                                <span style={{ color: '#4CAF50' }}>{stats.memoryUsage}</span>
                            </div>
                            <div style={{ 
                                width: '100%', 
                                height: '8px', 
                                background: 'rgba(255,255,255,0.1)', 
                                borderRadius: '4px' 
                            }}>
                                <div style={{ 
                                    width: '68%', 
                                    height: '100%', 
                                    background: '#4CAF50', 
                                    borderRadius: '4px' 
                                }}></div>
                            </div>
                        </div>
                        <div className="mb-20">
                            <div className="d-flex justify-between">
                                <span>עדכון אחרון</span>
                                <span style={{ color: '#999' }}>{stats.lastUpdated}</span>
                            </div>
                        </div>
                        <div className="d-flex gap-10">
                            <button className="btn btn-primary" style={{ fontSize: '12px' }}>
                                🔄 בדק עדכונים
                            </button>
                            <button className="btn btn-secondary" style={{ fontSize: '12px' }}>
                                📊 פרטים מלאים
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="card mb-20">
                <div className="card-header">
                    <h3 className="card-title">
                        <span className="card-title-icon">⚡</span>
                        פעולות מהירות
                    </h3>
                </div>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                    gap: '15px' 
                }}>
                    {quickActions.map((action, index) => (
                        <QuickActionButton key={index} action={action} />
                    ))}
                </div>
            </div>

            {/* Recommended Mods */}
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                        <span className="card-title-icon">🌟</span>
                        מודים מומלצים
                    </h3>
                    <button className="btn btn-secondary">
                        👀 צפה בכל המודים
                    </button>
                </div>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '15px' 
                }}>
                    {recommendedMods.map((mod, index) => (
                        <ModCard key={index} mod={mod} />
                    ))}
                </div>
            </div>
        </div>
    );
}