// World Manager Component - CraftTO
function WorldManager() {
    const [worlds, setWorlds] = useState([
        {
            id: 'survival_main',
            name: 'עולם הישרדות ראשי',
            lastPlayed: new Date('2024-03-28T14:30:00'),
            size: '245MB',
            version: '1.20.4',
            gameMode: 'survival',
            difficulty: 'normal',
            screenshot: '[LAND]',
            playtime: '48 שעות',
            seed: '1234567890'
        },
        {
            id: 'creative_builds',
            name: 'עולם בנייה יצירתי',
            lastPlayed: new Date('2024-03-27T19:15:00'),
            size: '89MB',
            version: '1.20.4',
            gameMode: 'creative',
            difficulty: 'peaceful',
            screenshot: '[BUILD]',
            playtime: '23 שעות',
            seed: '9876543210'
        },
        {
            id: 'modded_adventure',
            name: 'הרפתקה מודדת',
            lastPlayed: new Date('2024-03-25T12:00:00'),
            size: '512MB',
            version: '1.19.4',
            gameMode: 'survival',
            difficulty: 'hard',
            screenshot: '[DRAG]',
            playtime: '87 שעות',
            seed: 'DRAGONS123'
        }
    ]);

    const [backupHistory, setBackupHistory] = useState([
        { worldId: 'survival_main', date: new Date('2024-03-28T10:00:00'), size: '243MB' },
        { worldId: 'creative_builds', date: new Date('2024-03-27T15:30:00'), size: '87MB' },
        { worldId: 'survival_main', date: new Date('2024-03-26T20:00:00'), size: '241MB' }
    ]);

    const formatFileSize = (size) => {
        return size;
    };

    const formatLastPlayed = (date) => {
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        
        if (diffDays > 0) return `לפני ${diffDays} ימים`;
        if (diffHours > 0) return `לפני ${diffHours} שעות`;
        return 'היום';
    };

    const getGameModeIcon = (mode) => {
        const icons = {
            'survival': '[SWORD]',
            'creative': '[PAINT]',
            'adventure': '[MAP]',
            'spectator': '[GHOST]'
        };
        return icons[mode] || '[GAME]';
    };

    const getDifficultyColor = (difficulty) => {
        const colors = {
            'peaceful': '#4CAF50',
            'easy': '#8BC34A',
            'normal': '#FF9800',
            'hard': '#f44336'
        };
        return colors[difficulty] || '#999';
    };

    const WorldCard = ({ world }) => (
        <div className="card" style={{ cursor: 'pointer' }}>
            <div className="d-flex gap-20">
                {/* World Screenshot/Icon */}
                <div style={{
                    fontSize: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100px',
                    height: '100px',
                    background: 'rgba(76, 175, 80, 0.1)',
                    borderRadius: '12px'
                }}>
                    {world.screenshot}
                </div>

                <div style={{ flex: 1 }}>
                    <div className="d-flex align-center justify-between mb-10">
                        <h3 style={{ fontSize: '20px' }}>{world.name}</h3>
                        <div className="d-flex align-center gap-10">
                            <span style={{ 
                                fontSize: '12px',
                                padding: '4px 8px',
                                background: getDifficultyColor(world.difficulty),
                                borderRadius: '12px',
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                {world.difficulty}
                            </span>
                            <span style={{ 
                                fontSize: '12px',
                                padding: '4px 8px',
                                background: 'rgba(76, 175, 80, 0.2)',
                                borderRadius: '12px',
                                color: '#4CAF50'
                            }}>
                                {world.version}
                            </span>
                        </div>
                    </div>

                    <div className="d-flex align-center gap-20 mb-15">
                        <span style={{ fontSize: '14px', color: '#999' }}>
                            {getGameModeIcon(world.gameMode)} {world.gameMode}
                        </span>
                        <span style={{ fontSize: '14px', color: '#999' }}>
                            📁 {world.size}
                        </span>
                        <span style={{ fontSize: '14px', color: '#999' }}>
                            ⏱️ {world.playtime}
                        </span>
                        <span style={{ fontSize: '14px', color: '#999' }}>
                            🎲 {world.seed}
                        </span>
                    </div>

                    <div className="d-flex align-center justify-between">
                        <span style={{ fontSize: '14px', color: '#888' }}>
                            משחק אחרון: {formatLastPlayed(world.lastPlayed)}
                        </span>

                        <div className="d-flex gap-10">
                            <button className="btn btn-primary" style={{ fontSize: '14px' }}>
                                🚀 שחק
                            </button>
                            <button className="btn btn-secondary" style={{ fontSize: '14px' }}>
                                💾 גבה
                            </button>
                            <button className="btn btn-secondary" style={{ fontSize: '14px' }}>
                                [GEAR] הגדרות
                            </button>
                            <button className="btn btn-danger" style={{ fontSize: '14px' }}>
                                🗑️ מחק
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const BackupItem = ({ backup }) => {
        const world = worlds.find(w => w.id === backup.worldId);
        return (
            <div className="d-flex align-center justify-between" style={{
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                marginBottom: '10px'
            }}>
                <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>
                        {world?.name || 'עולם לא ידוע'}
                    </h4>
                    <p style={{ fontSize: '14px', color: '#999' }}>
                        {backup.date.toLocaleDateString('he-IL')} {backup.date.toLocaleTimeString('he-IL')}
                    </p>
                </div>
                <div className="d-flex align-center gap-15">
                    <span style={{ fontSize: '14px', color: '#888' }}>
                        📁 {backup.size}
                    </span>
                    <div className="d-flex gap-10">
                        <button className="btn btn-secondary" style={{ fontSize: '12px' }}>
                            📥 שחזר
                        </button>
                        <button className="btn btn-danger" style={{ fontSize: '12px' }}>
                            🗑️
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {/* Header */}
            <div className="card mb-20">
                <div className="d-flex align-center justify-between">
                    <div>
                        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>
                            [WORLD] מנהל עולמות
                        </h1>
                        <p style={{ color: '#999' }}>
                            נהל את עולמות המיינקראפט שלך - שחק, גבה ושחזר
                        </p>
                    </div>
                    <div className="d-flex gap-10">
                        <button className="btn btn-primary">
                            ➕ עולם חדש
                        </button>
                        <button className="btn btn-secondary">
                            📥 ייבא עולם
                        </button>
                        <button className="btn btn-secondary">
                            💾 גבה הכל
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '20px', 
                marginBottom: '30px' 
            }}>
                <div className="card" style={{ borderTop: '4px solid #4CAF50', textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>[WORLD]</div>
                    <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>{worlds.length}</h3>
                    <p style={{ color: '#999', fontSize: '14px' }}>עולמות סה"כ</p>
                </div>
                <div className="card" style={{ borderTop: '4px solid #2196F3', textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>💾</div>
                    <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>{backupHistory.length}</h3>
                    <p style={{ color: '#999', fontSize: '14px' }}>גיבויים</p>
                </div>
                <div className="card" style={{ borderTop: '4px solid #FF9800', textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>📁</div>
                    <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>846MB</h3>
                    <p style={{ color: '#999', fontSize: '14px' }}>שטח תפוס</p>
                </div>
                <div className="card" style={{ borderTop: '4px solid #9C27B0', textAlign: 'center' }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>⏱️</div>
                    <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>158h</h3>
                    <p style={{ color: '#999', fontSize: '14px' }}>זמן משחק</p>
                </div>
            </div>

            {/* Worlds List */}
            <div className="card mb-20">
                <div className="card-header">
                    <h3 className="card-title">
                        <span className="card-title-icon">[WORLD]</span>
                        העולמות שלי
                    </h3>
                </div>
                <div style={{ display: 'grid', gap: '20px' }}>
                    {worlds.map(world => (
                        <WorldCard key={world.id} world={world} />
                    ))}
                </div>
            </div>

            {/* Recent Backups */}
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                        <span className="card-title-icon">💾</span>
                        גיבויים אחרונים
                    </h3>
                    <button className="btn btn-secondary">
                        [STATS] כל הגיבויים
                    </button>
                </div>
                <div>
                    {backupHistory.map((backup, index) => (
                        <BackupItem key={index} backup={backup} />
                    ))}
                </div>
            </div>
        </div>
    );
}