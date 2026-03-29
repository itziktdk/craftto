// Main App Component - CraftTO
const { useState, useEffect } = React;

function App() {
    const [currentView, setCurrentView] = useState('dashboard');
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [minecraftVersion, setMinecraftVersion] = useState('1.20.4');
    const [modLoader, setModLoader] = useState('Fabric');

    // Initialize app
    useEffect(() => {
        const loadingSteps = [
            { text: 'סורק עולמות מיינקראפט...', progress: 15 },
            { text: 'מטעין מודים מותקנים...', progress: 30 },
            { text: 'מתחבר לשרתי המודים...', progress: 50 },
            { text: 'מעדכן בסיס נתונים...', progress: 70 },
            { text: 'מכין ממשק המשתמש...', progress: 85 },
            { text: 'כמעט מוכן...', progress: 95 },
            { text: 'ברוכים הבאים ל-CraftTO! [PICK]', progress: 100 }
        ];

        let currentStep = 0;
        const loadingInterval = setInterval(() => {
            const step = loadingSteps[currentStep];
            const progressBar = document.getElementById('loading-progress');
            const loadingText = document.getElementById('loading-text');
            
            if (progressBar && loadingText) {
                progressBar.style.width = `${step.progress}%`;
                loadingText.textContent = step.text;
            }
            
            currentStep++;
            
            if (currentStep >= loadingSteps.length) {
                clearInterval(loadingInterval);
                setTimeout(() => {
                    setIsLoading(false);
                    const loadingScreen = document.getElementById('loading-screen');
                    if (loadingScreen) {
                        loadingScreen.classList.add('hidden');
                        setTimeout(() => {
                            loadingScreen.remove();
                        }, 500);
                    }
                }, 300);
            }
        }, 500);

        return () => clearInterval(loadingInterval);
    }, []);

    const renderView = () => {
        if (isLoading) return null;

        switch(currentView) {
            case 'dashboard':
                return <Dashboard />;
            case 'mods':
                return <ModsBrowser searchQuery={searchQuery} version={minecraftVersion} loader={modLoader} />;
            case 'worlds':
                return <WorldManager />;
            case 'performance':
                return <Performance />;
            case 'settings':
                return <Settings />;
            default:
                return <Dashboard />;
        }
    };

    const NavItem = ({ view, icon, label, isActive, onClick }) => (
        <button 
            className={`nav-item smooth-scale ${isActive ? 'active' : ''}`}
            onClick={onClick}
            style={{
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s var(--spring-smooth)'
            }}
            onMouseEnter={(e) => {
                if (!isActive) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.background = 'rgba(76, 175, 80, 0.1)';
                }
            }}
            onMouseLeave={(e) => {
                if (!isActive) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = 'transparent';
                }
            }}>
            <span className="nav-icon" style={{
                transition: 'all 0.3s var(--spring-bounce)',
                transform: isActive ? 'scale(1.1)' : 'scale(1)'
            }}>
                {icon}
            </span>
            {label}
            
            {/* Active indicator */}
            {isActive && (
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, #4CAF50, #45a049)',
                    animation: 'slideInFromLeft 0.3s var(--spring-smooth)'
                }}></div>
            )}
        </button>
    );

    if (isLoading) {
        return null; // Loading screen is in HTML
    }

    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <a href="#" className="logo">
                        <span className="logo-icon-small">[PICK]</span>
                        <span>CraftTO</span>
                    </a>
                    
                    <div className="search-bar">
                        <span className="search-icon">[SEARCH]</span>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="חפש מודים, עולמות, או הגדרות..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    
                    <div className="header-actions">
                        <div className="header-btn">
                            [GAME] {minecraftVersion}
                        </div>
                        <div className="header-btn">
                            [TOOL] {modLoader}
                        </div>
                        <button className="header-btn" onClick={() => setCurrentView('settings')}>
                            [GEAR] הגדרות
                        </button>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="nav">
                <div className="nav-content">
                    <NavItem
                        view="dashboard"
                        icon="[HOME]"
                        label="דשבורד"
                        isActive={currentView === 'dashboard'}
                        onClick={() => setCurrentView('dashboard')}
                    />
                    <NavItem
                        view="mods"
                        icon="[MOD]"
                        label="מודים"
                        isActive={currentView === 'mods'}
                        onClick={() => setCurrentView('mods')}
                    />
                    <NavItem
                        view="worlds"
                        icon="[WORLD]"
                        label="עולמות"
                        isActive={currentView === 'worlds'}
                        onClick={() => setCurrentView('worlds')}
                    />
                    <NavItem
                        view="performance"
                        icon="[STATS]"
                        label="ביצועים"
                        isActive={currentView === 'performance'}
                        onClick={() => setCurrentView('performance')}
                    />
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                {renderView()}
            </main>
        </div>
    );
}

// Error Boundary
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('CraftTO Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f23 100%)',
                    color: 'white',
                    textAlign: 'center',
                    padding: '20px'
                }}>
                    <div style={{ fontSize: '80px', marginBottom: '20px' }}>[ERROR]</div>
                    <h2>אופס! CraftTO נתקע</h2>
                    <p style={{ marginBottom: '20px', opacity: 0.8 }}>
                        משהו השתבש במנהל המודים
                    </p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="btn btn-primary"
                    >
                        [RELOAD] טען מחדש
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

// Initialize app
ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>, 
    document.getElementById('root')
);