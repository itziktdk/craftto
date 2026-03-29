// Dashboard Component - CraftTO Modrinth Style with Fluid Animations
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
            name: 'Minecraft Server',
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

    // Animation effect on mount
    useEffect(() => {
        const cards = document.querySelectorAll('.animate-on-scroll');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('stagger-item');
        });
    }, []);

    const ProjectCard = ({ project, index }) => (
        <div 
            className="animate-on-scroll smooth-scale"
            style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.5s var(--spring-smooth)',
                border: '1px solid rgba(255,255,255,0.1)',
                minWidth: '300px',
                backdropFilter: 'blur(10px)',
                position: 'relative'
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.boxShadow = '0 20px 60px rgba(76,175,80,0.2), 0 0 0 1px rgba(76,175,80,0.3)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            }}>
            
            {/* Project Image with Overlay */}
            <div style={{
                height: '140px',
                background: `linear-gradient(135deg, rgba(76,175,80,0.8), rgba(76,175,80,0.6)), url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated background particles */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                    animation: 'smoothFloat 4s ease-in-out infinite'
                }}></div>
                
                {/* Version Badge */}
                <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(0,0,0,0.8)',
                    padding: '6px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: 'white',
                    fontWeight: '600',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>
                    {project.version}
                </div>
                
                {/* Play Button with Smooth Animation */}
                <div 
                    className="smooth-scale"
                    style={{
                        position: 'absolute',
                        bottom: '15px',
                        right: '15px',
                        background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'all 0.3s var(--spring-bounce)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 15px rgba(76,175,80,0.4)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = '0 6px 25px rgba(76,175,80,0.6)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 4px 15px rgba(76,175,80,0.4)';
                    }}>
                    <span style={{ fontSize: '12px' }}>▶</span>
                    שחק
                </div>
            </div>
            
            {/* Project Info with Smooth Transitions */}
            <div style={{ 
                padding: '20px',
                background: 'linear-gradient(180deg, rgba(26,26,26,0.95) 0%, rgba(45,45,45,0.95) 100%)'
            }}>
                <h3 style={{ 
                    fontSize: '18px', 
                    marginBottom: '8px', 
                    color: 'white',
                    fontWeight: '600',
                    transition: 'color 0.3s ease'
                }}>
                    {project.name}
                </h3>
                <p style={{ 
                    fontSize: '14px', 
                    color: '#999', 
                    marginBottom: '12px',
                    opacity: 0.8,
                    transition: 'opacity 0.3s ease'
                }}>
                    {project.subtitle}
                </p>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span style={{ 
                        fontSize: '13px', 
                        color: '#666',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}>
                        <span style={{ fontSize: '12px' }}>[CLOCK]</span>
                        {project.lastPlayed}
                    </span>
                    <span style={{
                        fontSize: '12px',
                        background: 'linear-gradient(135deg, rgba(76,175,80,0.2), rgba(76,175,80,0.1))',
                        color: '#4CAF50',
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontWeight: '500',
                        border: '1px solid rgba(76,175,80,0.3)'
                    }}>
                        {project.modpack}
                    </span>
                </div>
            </div>
        </div>
    );

    const ModCard = ({ mod, index }) => (
        <div 
            className="animate-on-scroll smooth-scale"
            style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.5s var(--spring-smooth)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                position: 'relative'
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.boxShadow = '0 20px 60px rgba(76,175,80,0.15), 0 0 0 1px rgba(76,175,80,0.3)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            }}>
            
            {/* Mod Image/Icon with Gradient Overlay */}
            <div style={{
                height: '160px',
                background: `linear-gradient(135deg, rgba(76,175,80,0.1), rgba(45,45,45,0.9)), url(${mod.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated Background Effect */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `conic-gradient(from ${index * 60}deg, transparent, rgba(76,175,80,0.1), transparent)`,
                    animation: `spin ${8 + index * 2}s linear infinite`
                }}></div>
                
                {mod.image ? (
                    <img 
                        src={mod.image} 
                        style={{ 
                            width: '72px', 
                            height: '72px', 
                            borderRadius: '16px',
                            transition: 'transform 0.3s var(--spring-bounce)',
                            filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))',
                            position: 'relative',
                            zIndex: 2
                        }} 
                    />
                ) : (
                    <div style={{
                        width: '72px',
                        height: '72px',
                        background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 20px rgba(76,175,80,0.4)',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        {mod.name[0]}
                    </div>
                )}
            </div>
            
            {/* Mod Info with Enhanced Styling */}
            <div style={{ padding: '24px' }}>
                <h3 style={{ 
                    fontSize: '20px', 
                    marginBottom: '10px', 
                    color: 'white',
                    fontWeight: '600',
                    lineHeight: '1.3'
                }}>
                    {mod.name}
                </h3>
                <p style={{ 
                    fontSize: '14px', 
                    color: '#ccc', 
                    marginBottom: '18px', 
                    lineHeight: '1.5',
                    opacity: 0.9
                }}>
                    {mod.description}
                </p>
                
                {/* Enhanced Stats */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '18px',
                    padding: '12px',
                    background: 'rgba(76,175,80,0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(76,175,80,0.1)'
                }}>
                    <span style={{ 
                        fontSize: '13px', 
                        color: '#4CAF50',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontWeight: '500'
                    }}>
                        <span style={{ fontSize: '11px' }}>↓</span>
                        {(mod.downloads / 1000000).toFixed(1)}M
                    </span>
                    <span style={{ 
                        fontSize: '13px', 
                        color: '#FFD700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontWeight: '500'
                    }}>
                        <span style={{ fontSize: '11px' }}>★</span>
                        {(mod.rating / 1000).toFixed(1)}K
                    </span>
                    <span style={{
                        fontSize: '12px',
                        background: 'linear-gradient(135deg, rgba(76,175,80,0.2), rgba(76,175,80,0.1))',
                        color: '#4CAF50',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontWeight: '500',
                        border: '1px solid rgba(76,175,80,0.3)'
                    }}>
                        {mod.category}
                    </span>
                </div>
                
                {/* Author */}
                <p style={{ 
                    fontSize: '13px', 
                    color: '#888', 
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                }}>
                    <span style={{ fontSize: '11px' }}>[USER]</span>
                    by {mod.author}
                </p>
                
                {/* Tags with Smooth Animation */}
                <div style={{ 
                    display: 'flex', 
                    gap: '8px', 
                    marginBottom: '20px',
                    flexWrap: 'wrap'
                }}>
                    {mod.tags.map((tag, tagIndex) => (
                        <span 
                            key={tag} 
                            className="smooth-scale"
                            style={{
                                fontSize: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                color: '#ccc',
                                padding: '6px 12px',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                transition: 'all 0.3s var(--spring-smooth)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'rgba(76,175,80,0.2)';
                                e.target.style.color = '#4CAF50';
                                e.target.style.borderColor = 'rgba(76,175,80,0.3)';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255,255,255,0.05)';
                                e.target.style.color = '#ccc';
                                e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                e.target.style.transform = 'scale(1)';
                            }}>
                            {tag}
                        </span>
                    ))}
                </div>
                
                {/* Enhanced Install Button */}
                <button 
                    className="smooth-scale"
                    style={{
                        width: '100%',
                        background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                        color: 'white',
                        border: 'none',
                        padding: '14px 0',
                        borderRadius: '12px',
                        fontSize: '15px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s var(--spring-bounce)',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 20px rgba(76,175,80,0.3)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.02)';
                        e.target.style.boxShadow = '0 6px 30px rgba(76,175,80,0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 4px 20px rgba(76,175,80,0.3)';
                    }}
                    onMouseDown={(e) => {
                        e.target.style.transform = 'scale(0.98)';
                    }}
                    onMouseUp={(e) => {
                        e.target.style.transform = 'scale(1.02)';
                    }}>
                    <span style={{ fontSize: '12px' }}>⬇</span>
                    התקן
                </button>
            </div>
        </div>
    );

    return (
        <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '40px 20px',
            position: 'relative'
        }}>
            {/* Welcome Header with Smooth Animation */}
            <div 
                className="animate-on-scroll"
                style={{ 
                    marginBottom: '50px',
                    opacity: 0,
                    animation: 'slideInFromLeft 0.8s var(--spring-smooth) 0.2s forwards'
                }}>
                <h1 style={{ 
                    fontSize: '56px', 
                    fontWeight: '700', 
                    color: 'white', 
                    marginBottom: '16px',
                    fontFamily: 'Orbitron, sans-serif',
                    background: 'linear-gradient(135deg, #fff, #4CAF50)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 4px 20px rgba(76,175,80,0.3)',
                    transition: 'all 0.3s var(--spring-smooth)'
                }}>
                    Welcome back!
                </h1>
                <p style={{ 
                    fontSize: '20px', 
                    color: '#bbb', 
                    marginBottom: '0',
                    opacity: 0.9,
                    animation: 'slideInFromLeft 0.8s var(--spring-smooth) 0.4s forwards'
                }}>
                    <span style={{ marginRight: '8px' }}>[TARGET]</span>
                    מוכן להמשיך את ההרפתקה?
                </p>
            </div>

            {/* Jump Back In Section with Stagger Animation */}
            <section style={{ marginBottom: '70px' }}>
                <h2 
                    className="animate-on-scroll"
                    style={{ 
                        fontSize: '28px', 
                        fontWeight: '600', 
                        color: 'white', 
                        marginBottom: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        opacity: 0,
                        animation: 'slideInFromRight 0.8s var(--spring-smooth) 0.6s forwards'
                    }}>
                    <span style={{ 
                        color: '#4CAF50', 
                        fontSize: '24px',
                        transition: 'transform 0.3s var(--spring-bounce)'
                    }}>→</span> 
                    Jump back in
                </h2>
                
                <div style={{
                    display: 'flex',
                    gap: '25px',
                    overflowX: 'auto',
                    paddingBottom: '15px',
                    scrollSnapType: 'x mandatory'
                }}>
                    {recentProjects.map((project, index) => (
                        <div key={project.id} style={{ scrollSnapAlign: 'start' }}>
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Discover Mods Section with Enhanced Animation */}
            <section>
                <div 
                    className="animate-on-scroll"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '30px',
                        opacity: 0,
                        animation: 'fadeInScale 0.8s var(--spring-smooth) 0.8s forwards'
                    }}>
                    <h2 style={{ 
                        fontSize: '28px', 
                        fontWeight: '600', 
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <span style={{ 
                            color: '#4CAF50', 
                            fontSize: '24px',
                            transition: 'transform 0.3s var(--spring-bounce)'
                        }}>↗</span> 
                        Discover mods
                    </h2>
                    
                    <button 
                        className="smooth-scale"
                        style={{
                            background: 'linear-gradient(135deg, transparent, rgba(76,175,80,0.1))',
                            border: '2px solid #4CAF50',
                            color: '#4CAF50',
                            padding: '12px 24px',
                            borderRadius: '12px',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.4s var(--spring-smooth)',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
                            e.target.style.color = 'white';
                            e.target.style.transform = 'translateY(-2px) scale(1.05)';
                            e.target.style.boxShadow = '0 8px 25px rgba(76,175,80,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, transparent, rgba(76,175,80,0.1))';
                            e.target.style.color = '#4CAF50';
                            e.target.style.transform = 'translateY(0) scale(1)';
                            e.target.style.boxShadow = 'none';
                        }}>
                        <span>[PACK]</span>
                        View all mods 
                        <span style={{ fontSize: '12px' }}>→</span>
                    </button>
                </div>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '30px'
                }}>
                    {featuredMods.map((mod, index) => (
                        <ModCard key={mod.id} mod={mod} index={index} />
                    ))}
                </div>
            </section>

            {/* Floating Action Button */}
            <button 
                className="fab"
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                    color: 'white',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                    zIndex: 1000,
                    boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
                    transition: 'all 0.3s var(--spring-bounce)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 8px 30px rgba(76, 175, 80, 0.6)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
                }}
                onMouseDown={(e) => {
                    e.target.style.transform = 'scale(0.9)';
                }}
                onMouseUp={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                }}>
                <span>+</span>
            </button>
        </div>
    );
}