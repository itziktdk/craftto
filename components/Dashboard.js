// Dashboard Component - CraftTO Modrinth Style
function Dashboard() {
    const [recentProjects, setRecentProjects] = useState([
        {
            id: 'fabric_survival',
            name: 'Fabric 1.21.1',
            subtitle: 'הרפתקת הישרדות',
            lastPlayed: 'לפני 33 דקות',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop',
            version: '1.21.1',
            modpack: 'רגיל'
        },
        {
            id: 'custom_pack',
            name: 'ng2custom pack 1',
            subtitle: 'פרויקט אישי',
            lastPlayed: 'לפני 15 דקות',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=200&fit=crop',
            version: '1.20.4',
            modpack: 'אישי'
        },
        {
            id: 'minecraft_server',
            name: 'Minecraft S...',
            subtitle: 'שרת רב-משתתפים',
            lastPlayed: 'לפני 3 ימים',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=200&fit=crop',
            version: '1.20.1',
            modpack: 'שרת'
        }
    ]);

    const [featuredMods, setFeaturedMods] = useState([
        {
            id: 'sodium',
            name: 'Sodium',
            description: 'The fastest and most compatible rendering optimization mod for Minecraft.',
            downloads: 136080000,
            rating: 34400,
            category: 'Optimization',
            author: 'JellySquid',
            image: 'https://cdn.modrinth.com/data/AANobbMI/icon.png',
            featured: true,
            tags: ['Performance', 'Client-side']
        },
        {
            id: 'fabric_api', 
            name: 'Fabric API',
            description: 'Lightweight and modular API providing common hooks and intercompatibility.',
            downloads: 149380000,
            rating: 28900,
            category: 'Library',
            author: 'FabricMC',
            image: 'https://cdn.modrinth.com/data/P7dR8mSH/icon.png',
            featured: true,
            tags: ['Fabric', 'API']
        },
        {
            id: 'iris',
            name: 'Iris Shaders',
            description: 'A modern shader pack loader for Minecraft intended to be compatible with existing OptiFine shader packs.',
            downloads: 105500000,
            rating: 24900,
            category: 'Graphics',
            author: 'IrisShaders',
            image: 'https://cdn.modrinth.com/data/YL57xq9U/icon.png',
            featured: true,
            tags: ['Shaders', 'Graphics']
        },
        {
            id: 'modmenu',
            name: 'Mod Menu',
            description: 'Adds a mod menu to view the list of mods you have installed.',
            downloads: 90500000,
            rating: 23200,
            category: 'Utility',
            author: 'ProspectorDev',
            image: 'https://cdn.modrinth.com/data/mOgUt4GM/icon.png',
            featured: true,
            tags: ['Client-side', 'Utility']
        }
    ]);

    const ProjectCard = ({ project }) => (
        <div style={{
            background: '#1a1a1a',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '1px solid #333',
            minWidth: '280px'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            
            {/* Project Image */}
            <div style={{
                height: '120px',
                background: `linear-gradient(135deg, rgba(76,175,80,0.8), rgba(76,175,80,0.6)), url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(0,0,0,0.7)',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    color: 'white'
                }}>
                    {project.version}
                </div>
                
                <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    background: '#4CAF50',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }}>
                    שחק
                </div>
            </div>
            
            {/* Project Info */}
            <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'white' }}>
                    {project.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#999', marginBottom: '10px' }}>
                    {project.subtitle}
                </p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span style={{ fontSize: '14px', color: '#666' }}>
                        {project.lastPlayed}
                    </span>
                    <span style={{
                        fontSize: '12px',
                        background: 'rgba(76,175,80,0.2)',
                        color: '#4CAF50',
                        padding: '4px 8px',
                        borderRadius: '12px'
                    }}>
                        {project.modpack}
                    </span>
                </div>
            </div>
        </div>
    );

    const ModCard = ({ mod }) => (
        <div style={{
            background: '#1a1a1a',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: '1px solid #333'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            
            {/* Mod Image/Icon */}
            <div style={{
                height: '150px',
                background: `linear-gradient(135deg, rgba(76,175,80,0.1), rgba(45,45,45,0.9)), url(${mod.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {mod.image ? (
                    <img src={mod.image} style={{ width: '64px', height: '64px', borderRadius: '12px' }} />
                ) : (
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: '#4CAF50',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: 'bold'
                    }}>
                        {mod.name[0]}
                    </div>
                )}
            </div>
            
            {/* Mod Info */}
            <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'white' }}>
                    {mod.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#999', marginBottom: '15px', lineHeight: '1.4' }}>
                    {mod.description}
                </p>
                
                {/* Stats */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '15px'
                }}>
                    <span style={{ fontSize: '14px', color: '#888' }}>
                        ↓ {(mod.downloads / 1000000).toFixed(1)}M
                    </span>
                    <span style={{ fontSize: '14px', color: '#888' }}>
                        ★ {(mod.rating / 1000).toFixed(1)}K
                    </span>
                    <span style={{
                        fontSize: '12px',
                        background: 'rgba(76,175,80,0.2)',
                        color: '#4CAF50',
                        padding: '4px 8px',
                        borderRadius: '12px'
                    }}>
                        {mod.category}
                    </span>
                </div>
                
                {/* Author */}
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                    by {mod.author}
                </p>
                
                {/* Tags */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '15px' }}>
                    {mod.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '12px',
                            background: '#333',
                            color: '#ccc',
                            padding: '4px 8px',
                            borderRadius: '8px'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
                
                {/* Actions */}
                <button style={{
                    width: '100%',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '12px 0',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.background = '#45a049'}
                onMouseLeave={(e) => e.target.style.background = '#4CAF50'}>
                    התקן
                </button>
            </div>
        </div>
    );

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
            {/* Welcome Header */}
            <div style={{ marginBottom: '40px' }}>
                <h1 style={{ 
                    fontSize: '48px', 
                    fontWeight: '700', 
                    color: 'white', 
                    marginBottom: '10px',
                    fontFamily: 'Orbitron, sans-serif'
                }}>
                    Welcome back!
                </h1>
                <p style={{ 
                    fontSize: '18px', 
                    color: '#999', 
                    marginBottom: '0'
                }}>
                    מוכן להמשיך את ההרפתקה?
                </p>
            </div>

            {/* Jump Back In Section */}
            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                    fontSize: '24px', 
                    fontWeight: '600', 
                    color: 'white', 
                    marginBottom: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <span style={{ color: '#4CAF50' }}>→</span> Jump back in
                </h2>
                
                <div style={{
                    display: 'flex',
                    gap: '20px',
                    overflowX: 'auto',
                    paddingBottom: '10px'
                }}>
                    {recentProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            {/* Discover Mods Section */}
            <section>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '25px'
                }}>
                    <h2 style={{ 
                        fontSize: '24px', 
                        fontWeight: '600', 
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <span style={{ color: '#4CAF50' }}>↗</span> Discover mods
                    </h2>
                    
                    <button style={{
                        background: 'transparent',
                        border: '1px solid #4CAF50',
                        color: '#4CAF50',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = '#4CAF50';
                        e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#4CAF50';
                    }}>
                        View all mods →
                    </button>
                </div>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '25px'
                }}>
                    {featuredMods.map(mod => (
                        <ModCard key={mod.id} mod={mod} />
                    ))}
                </div>
            </section>
        </div>
    );
}