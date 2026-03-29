// Settings Component - CraftTO
function Settings() {
    const [settings, setSettings] = useState({
        minecraftPath: 'C:\\Users\\Lyrbox\\AppData\\Roaming\\.minecraft',
        defaultVersion: '1.20.4',
        defaultLoader: 'Fabric',
        autoBackup: true,
        backupInterval: '1hour',
        maxBackups: 10,
        autoUpdate: true,
        notifications: true,
        theme: 'dark',
        language: 'he',
        allocatedRAM: 4,
        javaPath: 'auto'
    });

    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
        // Save to localStorage
        const newSettings = { ...settings, [key]: value };
        localStorage.setItem('craftto_settings', JSON.stringify(newSettings));
    };

    // Load settings on mount
    React.useEffect(() => {
        const saved = localStorage.getItem('craftto_settings');
        if (saved) {
            setSettings(JSON.parse(saved));
        }
    }, []);

    const SettingItem = ({ label, description, children }) => (
        <div className="d-flex align-center justify-between" style={{
            padding: '20px 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>{label}</h4>
                {description && (
                    <p style={{ fontSize: '14px', color: '#999' }}>{description}</p>
                )}
            </div>
            <div>
                {children}
            </div>
        </div>
    );

    const Toggle = ({ checked, onChange }) => (
        <div 
            onClick={() => onChange(!checked)}
            style={{
                width: '60px',
                height: '30px',
                background: checked ? '#4CAF50' : '#555',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative'
            }}
        >
            <div style={{
                width: '26px',
                height: '26px',
                background: 'white',
                borderRadius: '50%',
                position: 'absolute',
                top: '2px',
                left: checked ? '32px' : '2px',
                transition: 'left 0.3s ease',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
            }}></div>
        </div>
    );

    const Select = ({ value, options, onChange }) => (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
                padding: '10px 15px',
                border: '1px solid #555',
                borderRadius: '8px',
                background: '#2d2d2d',
                color: 'white',
                minWidth: '120px'
            }}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );

    const Input = ({ type = 'text', value, onChange, placeholder, style = {} }) => (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            style={{
                padding: '10px 15px',
                border: '1px solid #555',
                borderRadius: '8px',
                background: '#2d2d2d',
                color: 'white',
                ...style
            }}
        />
    );

    return (
        <div>
            {/* Header */}
            <div className="card mb-20">
                <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>
                    ⚙️ הגדרות CraftTO
                </h1>
                <p style={{ color: '#999' }}>
                    התאם את CraftTO לפי הצרכים והעדפות שלך
                </p>
            </div>

            {/* Minecraft Settings */}
            <div className="card mb-20">
                <div className="card-header">
                    <h3 className="card-title">
                        <span className="card-title-icon">⛏️</span>
                        הגדרות מיינקראפט
                    </h3>
                </div>
                
                <SettingItem 
                    label="נתיב מיינקראפט"
                    description="המיקום שבו מותקן מיינקראפט במחשב"
                >
                    <div className="d-flex gap-10">
                        <Input
                            value={settings.minecraftPath}
                            onChange={(value) => updateSetting('minecraftPath', value)}
                            style={{ minWidth: '300px' }}
                        />
                        <button className="btn btn-secondary" style={{ fontSize: '14px' }}>
                            📁 עיין
                        </button>
                    </div>
                </SettingItem>

                <SettingItem 
                    label="גרסת ברירת מחדל"
                    description="הגרסה שתיבחר כברירת מחדל לפרויקטים חדשים"
                >
                    <Select
                        value={settings.defaultVersion}
                        onChange={(value) => updateSetting('defaultVersion', value)}
                        options={[
                            { value: '1.20.4', label: '1.20.4' },
                            { value: '1.20.3', label: '1.20.3' },
                            { value: '1.19.4', label: '1.19.4' },
                            { value: '1.18.2', label: '1.18.2' }
                        ]}
                    />
                </SettingItem>

                <SettingItem 
                    label="Mod Loader ברירת מחדל"
                    description="מערכת הטעינה המועדפת למודים"
                >
                    <Select
                        value={settings.defaultLoader}
                        onChange={(value) => updateSetting('defaultLoader', value)}
                        options={[
                            { value: 'Fabric', label: 'Fabric' },
                            { value: 'Forge', label: 'Forge' },
                            { value: 'Quilt', label: 'Quilt' },
                            { value: 'NeoForge', label: 'NeoForge' }
                        ]}
                    />
                </SettingItem>

                <SettingItem 
                    label="זיכרון מוקצב"
                    description="כמה זיכרון RAM להקצות למיינקראפט (GB)"
                >
                    <div className="d-flex align-center gap-15">
                        <Input
                            type="number"
                            value={settings.allocatedRAM}
                            onChange={(value) => updateSetting('allocatedRAM', parseInt(value))}
                            style={{ width: '80px' }}
                        />
                        <span style={{ color: '#999' }}>GB</span>
                    </div>
                </SettingItem>
            </div>

            {/* Backup Settings */}
            <div className="card mb-20">
                <div className="card-header">
                    <h3 className="card-title">
                        <span className="card-title-icon">💾</span>
                        הגדרות גיבוי
                    </h3>
                </div>
                
                <SettingItem 
                    label="גיבוי אוטומטי"
                    description="בצע גיבוי אוטומטי של עולמות במרווחי זמן קבועים"
                >
                    <Toggle
                        checked={settings.autoBackup}
                        onChange={(value) => updateSetting('autoBackup', value)}
                    />
                </SettingItem>

                {settings.autoBackup && (
                    <>
                        <SettingItem 
                            label="תדירות גיבוי"
                            description="כל כמה זמן לבצע גיבוי אוטומטי"
                        >
                            <Select
                                value={settings.backupInterval}
                                onChange={(value) => updateSetting('backupInterval', value)}
                                options={[
                                    { value: '30min', label: 'כל 30 דקות' },
                                    { value: '1hour', label: 'כל שעה' },
                                    { value: '6hours', label: 'כל 6 שעות' },
                                    { value: '1day', label: 'פעם ביום' }
                                ]}
                            />
                        </SettingItem>

                        <SettingItem 
                            label="מספר גיבויים מקסימלי"
                            description="כמה גיבויים לשמור לפני מחיקת הישנים"
                        >
                            <Input
                                type="number"
                                value={settings.maxBackups}
                                onChange={(value) => updateSetting('maxBackups', parseInt(value))}
                                style={{ width: '80px' }}
                            />
                        </SettingItem>
                    </>
                )}
            </div>

            {/* App Settings */}
            <div className="card mb-20">
                <div className="card-header">
                    <h3 className="card-title">
                        <span className="card-title-icon">🎨</span>
                        הגדרות אפליקציה
                    </h3>
                </div>
                
                <SettingItem 
                    label="עדכונים אוטומטיים"
                    description="בדוק ועדכן מודים אוטומטית"
                >
                    <Toggle
                        checked={settings.autoUpdate}
                        onChange={(value) => updateSetting('autoUpdate', value)}
                    />
                </SettingItem>

                <SettingItem 
                    label="התראות"
                    description="הצג התראות על עדכונים, גיבויים ואירועים"
                >
                    <Toggle
                        checked={settings.notifications}
                        onChange={(value) => updateSetting('notifications', value)}
                    />
                </SettingItem>

                <SettingItem 
                    label="ערכת נושא"
                    description="בחר את מצב התצוגה המועדף עליך"
                >
                    <Select
                        value={settings.theme}
                        onChange={(value) => updateSetting('theme', value)}
                        options={[
                            { value: 'dark', label: 'כהה' },
                            { value: 'light', label: 'בהיר' },
                            { value: 'auto', label: 'אוטומטי' }
                        ]}
                    />
                </SettingItem>

                <SettingItem 
                    label="שפה"
                    description="שפת הממשק של האפליקציה"
                >
                    <Select
                        value={settings.language}
                        onChange={(value) => updateSetting('language', value)}
                        options={[
                            { value: 'he', label: 'עברית' },
                            { value: 'en', label: 'English' },
                            { value: 'ar', label: 'العربية' }
                        ]}
                    />
                </SettingItem>
            </div>

            {/* Advanced Settings */}
            <div className="card mb-20">
                <div className="card-header">
                    <h3 className="card-title">
                        <span className="card-title-icon">🔧</span>
                        הגדרות מתקדמות
                    </h3>
                </div>
                
                <SettingItem 
                    label="נתיב Java"
                    description="מיקום קובץ java.exe (השאר ריק לזיהוי אוטומטי)"
                >
                    <div className="d-flex gap-10">
                        <Input
                            value={settings.javaPath === 'auto' ? '' : settings.javaPath}
                            onChange={(value) => updateSetting('javaPath', value || 'auto')}
                            placeholder="זיהוי אוטומטי"
                            style={{ minWidth: '300px' }}
                        />
                        <button className="btn btn-secondary" style={{ fontSize: '14px' }}>
                            🔍 חפש
                        </button>
                    </div>
                </SettingItem>
            </div>

            {/* Action Buttons */}
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                        <span className="card-title-icon">💾</span>
                        ניהול הגדרות
                    </h3>
                </div>
                
                <div className="d-flex gap-15">
                    <button className="btn btn-primary">
                        💾 שמור הגדרות
                    </button>
                    <button className="btn btn-secondary">
                        📥 ייבא הגדרות
                    </button>
                    <button className="btn btn-secondary">
                        📤 ייצא הגדרות
                    </button>
                    <button className="btn btn-danger">
                        🔄 איפוס לברירת מחדל
                    </button>
                </div>

                <div style={{ 
                    marginTop: '20px', 
                    padding: '15px', 
                    background: 'rgba(76, 175, 80, 0.1)', 
                    borderRadius: '8px',
                    border: '1px solid rgba(76, 175, 80, 0.3)'
                }}>
                    <h4 style={{ fontSize: '14px', marginBottom: '8px', color: '#4CAF50' }}>
                        💡 טיפ מועיל
                    </h4>
                    <p style={{ fontSize: '14px', color: '#ccc' }}>
                        ההגדרות נשמרות אוטומטית במחשב שלך. אתה יכול לייצא אותן ולייבא במחשב אחר.
                    </p>
                </div>
            </div>
        </div>
    );
}