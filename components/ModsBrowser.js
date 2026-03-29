// Mods Browser Component - CraftTO
function ModsBrowser({ searchQuery, version, loader }) {
    const [mods, setMods] = useState([]);
    const [filteredMods, setFilteredMods] = useState([]);
    const [categories, setCategories] = useState(['הכל', 'אופטימיזציה', 'תוכן', 'כלים', 'קוסמטי']);
    const [selectedCategory, setSelectedCategory] = useState('הכל');
    const [sortBy, setSortBy] = useState('downloads');
    const [loading, setLoading] = useState(false);

    // Mock mods data
    useEffect(() => {
        const mockMods = [
            {
                id: 'sodium',
                name: 'Sodium',
                description: 'מוד אופטימיזציה מתקדם שמשפר ביצועים דרמטית',
                author: 'JellySquid',
                downloads: 45000000,
                rating: 4.9,
                category: 'אופטימיזציה',
                icon: '[PERF]',
                installed: false,
                featured: true
            },
            {
                id: 'jei',
                name: 'Just Enough Items',
                description: 'מציג מתכונים ומידע על פריטים במשחק',
                author: 'mezz',
                downloads: 38000000,
                rating: 4.8,
                category: 'כלים',
                icon: '[INFO]',
                installed: true,
                featured: true
            },
            {
                id: 'biomes',
                name: 'Biomes O\' Plenty',
                description: 'מוסיף מעל 90 ביומים חדשים למשחק',
                author: 'Forstride',
                downloads: 32000000,
                rating: 4.7,
                category: 'תוכן',
                icon: '[BIOME]',
                installed: false,
                featured: true
            }
        ];
        
        setMods(mockMods);
        setFilteredMods(mockMods);
    }, []);

    // Filter and search
    useEffect(() => {
        let filtered = mods;
        
        if (selectedCategory !== 'הכל') {
            filtered = filtered.filter(mod => mod.category === selectedCategory);
        }
        
        if (searchQuery) {
            filtered = filtered.filter(mod => 
                mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                mod.description.includes(searchQuery)
            );
        }
        
        // Sort
        filtered.sort((a, b) => {
            switch(sortBy) {
                case 'downloads': return b.downloads - a.downloads;
                case 'rating': return b.rating - a.rating;
                case 'name': return a.name.localeCompare(b.name);
                default: return 0;
            }
        });
        
        setFilteredMods(filtered);
    }, [mods, selectedCategory, searchQuery, sortBy]);

    const ModCard = ({ mod }) => (
        <div className="card" style={{ 
            border: mod.featured ? '2px solid #4CAF50' : undefined,
            position: 'relative'
        }}>
            {mod.featured && (
                <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#4CAF50',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                }}>
                    מומלץ
                </div>
            )}
            
            <div className="d-flex gap-20">
                <div style={{ 
                    fontSize: '48px', 
                    background: 'rgba(76, 175, 80, 0.1)', 
                    padding: '15px',
                    borderRadius: '12px'
                }}>
                    {mod.icon}
                </div>
                
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{mod.name}</h3>
                    <p style={{ color: '#999', marginBottom: '10px' }}>מאת {mod.author}</p>
                    <p style={{ fontSize: '14px', marginBottom: '15px' }}>{mod.description}</p>
                    
                    <div className="d-flex align-center justify-between">
                        <div className="d-flex align-center gap-20">
                            <span style={{ fontSize: '14px', color: '#4CAF50' }}>
                                ⭐ {mod.rating}
                            </span>
                            <span style={{ fontSize: '14px', color: '#999' }}>
                                📥 {(mod.downloads / 1000000).toFixed(1)}M
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
                        
                        <div className="d-flex gap-10">
                            {mod.installed ? (
                                <button className="btn btn-danger" style={{ fontSize: '14px' }}>
                                    🗑️ הסר
                                </button>
                            ) : (
                                <button className="btn btn-primary" style={{ fontSize: '14px' }}>
                                    📥 התקן
                                </button>
                            )}
                            <button className="btn btn-secondary" style={{ fontSize: '14px' }}>
                                👁️ פרטים
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {/* Header */}
            <div className="card mb-20">
                <h1 style={{ fontSize: '24px', marginBottom: '15px' }}>
                    [MODS] דפדפן מודים
                </h1>
                <p style={{ color: '#999' }}>
                    גלה והתקן מודים למיינקראפט {version} עם {loader}
                </p>
            </div>

            {/* Filters */}
            <div className="card mb-20">
                <div className="d-flex align-center justify-between mb-20">
                    <div className="d-flex gap-10">
                        <label style={{ color: '#999' }}>קטגוריה:</label>
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            style={{
                                padding: '8px 12px',
                                border: '1px solid #555',
                                borderRadius: '4px',
                                background: '#2d2d2d',
                                color: 'white'
                            }}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="d-flex gap-10">
                        <label style={{ color: '#999' }}>מיון לפי:</label>
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            style={{
                                padding: '8px 12px',
                                border: '1px solid #555',
                                borderRadius: '4px',
                                background: '#2d2d2d',
                                color: 'white'
                            }}
                        >
                            <option value="downloads">הורדות</option>
                            <option value="rating">דירוג</option>
                            <option value="name">שם</option>
                        </select>
                    </div>
                </div>
                
                <div style={{ color: '#999', fontSize: '14px' }}>
                    נמצאו {filteredMods.length} מודים
                </div>
            </div>

            {/* Mods Grid */}
            <div style={{ display: 'grid', gap: '20px' }}>
                {filteredMods.map(mod => (
                    <ModCard key={mod.id} mod={mod} />
                ))}
            </div>

            {filteredMods.length === 0 && (
                <div className="card text-center" style={{ padding: '60px 20px' }}>
                    <div style={{ fontSize: '64px', marginBottom: '20px' }}>[SEARCH]</div>
                    <h3>לא נמצאו מודים</h3>
                    <p style={{ color: '#999', marginTop: '10px' }}>
                        נסה לשנות את הקטגוריה או חיפוש אחר
                    </p>
                </div>
            )}
        </div>
    );
}