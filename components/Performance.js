// Performance Monitor Component - CraftTO
function Performance() {
    const [systemMetrics, setSystemMetrics] = useState({
        cpu: 45,
        memory: 68,
        disk: 72,
        gpu: 35
    });

    const [gameMetrics, setGameMetrics] = useState({
        fps: 120,
        renderDistance: 12,
        allocatedRAM: '4GB',
        usedRAM: '2.8GB',
        mods: 32
    });

    const [optimizationTips, setOptimizationTips] = useState([
        { 
            title: 'הפעל Sodium', 
            description: 'מוד אופטימיזציה שיכול להכפיל את ה-FPS',
            impact: 'גבוה',
            type: 'mod'
        },
        { 
            title: 'הגבל FPS ל-60', 
            description: 'חסכון באנרגיה וחום נמוך יותר',
            impact: 'בינוני',
            type: 'setting'
        },
        { 
            title: 'הקטן render distance', 
            description: 'מרחק רינדור נמוך = ביצועים טובים יותר',
            impact: 'גבוה',
            type: 'setting'
        }
    ]);

    useEffect(() => {
        // Simulate real-time metrics updates
        const interval = setInterval(() => {
            setSystemMetrics(prev => ({
                cpu: Math.max(10, Math.min(90, prev.cpu + (Math.random() - 0.5) * 10)),
                memory: Math.max(30, Math.min(95, prev.memory + (Math.random() - 0.5) * 5)),
                disk: prev.disk,
                gpu: Math.max(5, Math.min(80, prev.gpu + (Math.random() - 0.5) * 15))
            }));
            
            setGameMetrics(prev => ({
                ...prev,
                fps: Math.max(30, Math.min(200, prev.fps + (Math.random() - 0.5) * 20))
            }));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const MetricCard = ({ title, value, unit = '%', icon, color = '#4CAF50', description }) => {
        const percentage = typeof value === 'number' ? value : 0;
        
        return (
            <div className="card">
                <div className="d-flex align-center justify-between mb-15">
                    <div>
                        <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>{title}</h4>
                        {description && (
                            <p style={{ fontSize: '12px', color: '#999' }}>{description}</p>
                        )}
                    </div>
                    <div style={{ fontSize: '24px' }}>{icon}</div>
                </div>
                
                <div className="d-flex align-center justify-between mb-10">
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color }}>
                        {value}{unit}
                    </span>
                    <span style={{ 
                        fontSize: '12px', 
                        color: percentage > 80 ? '#f44336' : percentage > 60 ? '#FF9800' : '#4CAF50' 
                    }}>
                        {percentage > 80 ? 'גבוה' : percentage > 60 ? 'בינוני' : 'תקין'}
                    </span>
                </div>
                
                <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        width: `${Math.min(percentage, 100)}%`,
                        height: '100%',
                        background: percentage > 80 ? '#f44336' : percentage > 60 ? '#FF9800' : color,
                        borderRadius: '4px',
                        transition: 'width 1s ease'
                    }}></div>
                </div>
            </div>
        );
    };

    const OptimizationTip = ({ tip }) => (
        <div className="d-flex align-center gap-20" style={{
            padding: '15px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            marginBottom: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div style={{ 
                fontSize: '24px',
                background: tip.impact === 'גבוה' ? 'rgba(76, 175, 80, 0.2)' : 
                           tip.impact === 'בינוני' ? 'rgba(255, 152, 0, 0.2)' : 
                           'rgba(33, 150, 243, 0.2)',
                padding: '10px',
                borderRadius: '50%'
            }}>
                {tip.type === 'mod' ? '📦' : '⚙️'}
            </div>
            
            <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>{tip.title}</h4>
                <p style={{ fontSize: '14px', color: '#999', marginBottom: '8px' }}>
                    {tip.description}
                </p>
                <span style={{
                    fontSize: '12px',
                    padding: '4px 8px',
                    background: tip.impact === 'גבוה' ? 'rgba(76, 175, 80, 0.2)' : 
                               tip.impact === 'בינוני' ? 'rgba(255, 152, 0, 0.2)' : 
                               'rgba(33, 150, 243, 0.2)',
                    borderRadius: '12px',
                    color: tip.impact === 'גבוה' ? '#4CAF50' : 
                           tip.impact === 'בינוני' ? '#FF9800' : '#2196F3'
                }}>
                    השפעה: {tip.impact}
                </span>
            </div>
            
            <button className="btn btn-primary" style={{ fontSize: '14px' }}>
                ✅ החל
            </button>
        </div>
    );

    return (
        <div>
            {/* Header */}
            <div className="card mb-20">
                <div className="d-flex align-center justify-between">
                    <div>
                        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>
                            📊 מוניטור ביצועים
                        </h1>
                        <p style={{ color: '#999' }}>
                            עקוב אחר ביצועי המערכת והמשחק בזמן אמת
                        </p>
                    </div>
                    <div className="d-flex gap-10">
                        <button className="btn btn-primary">
                            🚀 אופטימיזציה אוטומטית
                        </button>
                        <button className="btn btn-secondary">
                            📋 ייצא דוח
                        </button>
                    </div>
                </div>
            </div>

            {/* Current Game Status */}
            <div className="card mb-20" style={{ 
                background: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
                color: 'white'
            }}>
                <div className="d-flex align-center justify-between">
                    <div>
                        <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>
                            🎮 מצב המשחק הנוכחי
                        </h3>
                        <div className="d-flex align-center gap-30">
                            <div>
                                <span style={{ fontSize: '14px', opacity: 0.8 }}>FPS:</span>
                                <span style={{ fontSize: '24px', fontWeight: 'bold', marginLeft: '8px' }}>
                                    {Math.round(gameMetrics.fps)}
                                </span>
                            </div>
                            <div>
                                <span style={{ fontSize: '14px', opacity: 0.8 }}>זיכרון:</span>
                                <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '8px' }}>
                                    {gameMetrics.usedRAM}/{gameMetrics.allocatedRAM}
                                </span>
                            </div>
                            <div>
                                <span style={{ fontSize: '14px', opacity: 0.8 }}>מודים:</span>
                                <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '8px' }}>
                                    {gameMetrics.mods}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{ fontSize: '48px', opacity: 0.7 }}>⚡</div>
                </div>
            </div>

            {/* System Metrics */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '20px', 
                marginBottom: '30px' 
            }}>
                <MetricCard
                    title="מעבד (CPU)"
                    value={Math.round(systemMetrics.cpu)}
                    icon="🔥"
                    color="#FF9800"
                    description="שימוש במעבד"
                />
                <MetricCard
                    title="זיכרון (RAM)"
                    value={Math.round(systemMetrics.memory)}
                    icon="💾"
                    color="#2196F3"
                    description="שימוש בזיכרון"
                />
                <MetricCard
                    title="דיסק קשיח"
                    value={Math.round(systemMetrics.disk)}
                    icon="💿"
                    color="#9C27B0"
                    description="שטח דיסק תפוס"
                />
                <MetricCard
                    title="כרטיס מסך (GPU)"
                    value={Math.round(systemMetrics.gpu)}
                    icon="🎮"
                    color="#4CAF50"
                    description="שימוש בגרפיקה"
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                {/* Performance Chart */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <span className="card-title-icon">📈</span>
                            גרף ביצועים
                        </h3>
                    </div>
                    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                        <div style={{ fontSize: '64px', marginBottom: '20px' }}>📊</div>
                        <p style={{ color: '#999' }}>גרף ביצועים בזמן אמת</p>
                        <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
                            (יתווסף בגרסה עתידית)
                        </p>
                    </div>
                </div>

                {/* Hardware Info */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <span className="card-title-icon">💻</span>
                            פרטי חומרה
                        </h3>
                    </div>
                    <div>
                        <div className="d-flex justify-between mb-15" style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <span>מעבד:</span>
                            <span style={{ color: '#4CAF50' }}>Intel Core i7-12700K</span>
                        </div>
                        <div className="d-flex justify-between mb-15" style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <span>זיכרון:</span>
                            <span style={{ color: '#2196F3' }}>16GB DDR4</span>
                        </div>
                        <div className="d-flex justify-between mb-15" style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <span>כרטיס מסך:</span>
                            <span style={{ color: '#FF9800' }}>RTX 4070</span>
                        </div>
                        <div className="d-flex justify-between" style={{ padding: '10px 0' }}>
                            <span>Java:</span>
                            <span style={{ color: '#9C27B0' }}>OpenJDK 21.0.2</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Optimization Tips */}
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                        <span className="card-title-icon">💡</span>
                        המלצות אופטימיזציה
                    </h3>
                    <button className="btn btn-secondary">
                        🔄 רענן המלצות
                    </button>
                </div>
                <div>
                    {optimizationTips.map((tip, index) => (
                        <OptimizationTip key={index} tip={tip} />
                    ))}
                </div>
            </div>
        </div>
    );
}