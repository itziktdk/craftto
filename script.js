// CraftTO Core JavaScript
console.log('[PICK] CraftTO - Minecraft Mod Manager Loading...');

// Global CraftTO object
window.CraftTO = {
    version: '1.0',
    author: 'Lyrbox',
    buildDate: new Date().toISOString(),
    features: [
        '[MOD] Advanced Mod Management',
        '[WORLD] World Organization & Backup',
        '[POWER] Performance Optimization',
        '[SEARCH] Smart Mod Discovery',
        '[STATS] Real-time System Monitoring',
        '[GAME] Minecraft Profile Management',
        '[SAVE] Automatic Backup System',
        '[PLAY] One-Click Game Launch'
    ],
    minecraftVersions: [
        '1.20.4', '1.20.3', '1.20.2', '1.20.1', '1.20',
        '1.19.4', '1.19.3', '1.19.2', '1.19.1', '1.19',
        '1.18.2', '1.18.1', '1.18'
    ],
    modLoaders: ['Fabric', 'Forge', 'Quilt', 'NeoForge'],
    performance: {
        startTime: performance.now(),
        loadTime: null,
        memoryUsage: 0
    }
};

// Minecraft Integration Helper
class MinecraftManager {
    constructor() {
        this.minecraftPath = this.detectMinecraftPath();
        this.profiles = new Map();
        this.installedMods = new Map();
        this.worlds = new Map();
        this.init();
    }

    init() {
        console.log('[GAME] Initializing Minecraft Manager...');
        this.scanProfiles();
        this.scanMods();
        this.scanWorlds();
    }

    detectMinecraftPath() {
        // Simulate detecting Minecraft installation
        const possiblePaths = [
            '%APPDATA%\\.minecraft',
            '~/Library/Application Support/minecraft',
            '~/.minecraft'
        ];
        return possiblePaths[0]; // Default for demo
    }

    scanProfiles() {
        // Simulate scanning launcher profiles
        const profiles = [
            { id: 'latest', name: 'Latest Release', version: '1.20.4', loader: 'Vanilla' },
            { id: 'fabric', name: 'Fabric Modded', version: '1.20.4', loader: 'Fabric' },
            { id: 'forge', name: 'Forge Modded', version: '1.19.4', loader: 'Forge' }
        ];

        profiles.forEach(profile => {
            this.profiles.set(profile.id, profile);
        });

        console.log(`[FOLDER] Found ${profiles.length} Minecraft profiles`);
    }

    scanMods() {
        // Simulate scanning installed mods
        const mods = [
            { id: 'sodium', name: 'Sodium', version: '0.5.3', loader: 'Fabric', enabled: true },
            { id: 'jei', name: 'Just Enough Items', version: '15.2.0', loader: 'Fabric', enabled: true },
            { id: 'optifine', name: 'OptiFine', version: 'HD_U_I5', loader: 'Forge', enabled: false },
            { id: 'rei', name: 'Roughly Enough Items', version: '12.0.684', loader: 'Fabric', enabled: true }
        ];

        mods.forEach(mod => {
            this.installedMods.set(mod.id, mod);
        });

        console.log(`[MOD] Found ${mods.length} installed mods`);
    }

    scanWorlds() {
        // Simulate scanning worlds
        const worlds = [
            { 
                id: 'survival_world', 
                name: 'עולם הישרדות', 
                lastPlayed: new Date('2024-03-28'),
                size: '245MB',
                version: '1.20.4'
            },
            { 
                id: 'creative_build', 
                name: 'עולם יצירה', 
                lastPlayed: new Date('2024-03-27'),
                size: '89MB',
                version: '1.20.4'
            },
            { 
                id: 'modded_adventure', 
                name: 'הרפתקה מודדת', 
                lastPlayed: new Date('2024-03-26'),
                size: '512MB',
                version: '1.19.4'
            }
        ];

        worlds.forEach(world => {
            this.worlds.set(world.id, world);
        });

        console.log(`[WORLD] Found ${worlds.length} worlds`);
    }

    launchMinecraft(profileId) {
        console.log(`[PLAY] Launching Minecraft with profile: ${profileId}`);
        // Simulate launching
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ success: true, message: 'Minecraft launched successfully!' });
            }, 2000);
        });
    }

    installMod(modData) {
        console.log(`[DOWNLOAD] Installing mod: ${modData.name}`);
        // Simulate mod installation
        return new Promise((resolve) => {
            setTimeout(() => {
                this.installedMods.set(modData.id, { ...modData, enabled: true });
                resolve({ success: true, message: `${modData.name} installed successfully!` });
            }, 3000);
        });
    }

    backupWorld(worldId) {
        const world = this.worlds.get(worldId);
        if (!world) {
            return Promise.reject('World not found');
        }

        console.log(`[BACKUP] Backing up world: ${world.name}`);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ 
                    success: true, 
                    message: `${world.name} backed up successfully!`,
                    backupPath: `backups/${world.id}_${Date.now()}.zip`
                });
            }, 4000);
        });
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            fps: 0,
            memoryUsage: 0,
            cpuUsage: 0,
            diskUsage: 0
        };
        this.init();
    }

    init() {
        this.startMonitoring();
        this.measureLoadTime();
    }

    startMonitoring() {
        // Monitor memory usage
        if ('memory' in performance) {
            setInterval(() => {
                this.metrics.memoryUsage = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
                window.CraftTO.performance.memoryUsage = this.metrics.memoryUsage;
            }, 5000);
        }

        // Simulate system metrics
        setInterval(() => {
            this.metrics.cpuUsage = Math.random() * 30 + 20; // 20-50%
            this.metrics.diskUsage = 65 + Math.random() * 10; // 65-75%
        }, 10000);
    }

    measureLoadTime() {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            window.CraftTO.performance.loadTime = Math.round(loadTime);
            console.log(`[POWER] CraftTO loaded in ${Math.round(loadTime)}ms`);
        });
    }

    getMetrics() {
        return {
            ...this.metrics,
            timestamp: new Date().toISOString()
        };
    }
}

// Mod API Integration
class ModAPIManager {
    constructor() {
        this.apiEndpoints = {
            modrinth: 'https://api.modrinth.com/v2',
            curseforge: 'https://api.curseforge.com/v1',
            fabricmc: 'https://meta.fabricmc.net/v2'
        };
        this.cache = new Map();
    }

    async searchMods(query, loader = 'fabric', version = '1.20.4') {
        const cacheKey = `search_${query}_${loader}_${version}`;
        
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // Simulate API call
        console.log(`[SEARCH] Searching for mods: "${query}"`);
        
        const mockResults = [
            {
                id: 'sodium',
                name: 'Sodium',
                description: 'Modern rendering engine and client-side optimization mod',
                downloads: 45000000,
                rating: 4.9,
                author: 'JellySquid',
                categories: ['optimization'],
                icon: '⚡',
                versions: ['1.20.4', '1.20.3', '1.19.4'],
                loaders: ['Fabric']
            },
            {
                id: 'jei',
                name: 'Just Enough Items (JEI)',
                description: 'Item and Recipe viewing mod',
                downloads: 38000000,
                rating: 4.8,
                author: 'mezz',
                categories: ['utility'],
                icon: '[SEARCH]',
                versions: ['1.20.4', '1.20.3', '1.19.4'],
                loaders: ['Fabric', 'Forge']
            }
        ];

        this.cache.set(cacheKey, mockResults);
        return mockResults;
    }

    async getModDetails(modId) {
        console.log(`[MOD] Fetching details for mod: ${modId}`);
        
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: modId,
                    name: 'Example Mod',
                    description: 'This is an example mod description',
                    longDescription: 'A longer description with more details about the mod...',
                    downloads: 1000000,
                    rating: 4.5,
                    versions: ['1.20.4', '1.20.3'],
                    screenshots: [],
                    dependencies: []
                });
            }, 1000);
        });
    }

    async downloadMod(modId, version) {
        console.log(`[DOWNLOAD] Downloading mod: ${modId} v${version}`);
        
        return new Promise((resolve) => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress >= 100) {
                    clearInterval(interval);
                    resolve({
                        success: true,
                        message: 'Mod downloaded successfully',
                        filePath: `mods/${modId}-${version}.jar`
                    });
                }
            }, 500);
        });
    }
}

// Notification System
class NotificationManager {
    constructor() {
        this.notifications = [];
        this.container = null;
        this.init();
    }

    init() {
        this.createContainer();
    }

    createContainer() {
        this.container = document.createElement('div');
        this.container.id = 'notification-container';
        this.container.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 10000;
            pointer-events: none;
        `;
        document.body.appendChild(this.container);
    }

    show(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        const id = Date.now();
        
        const colors = {
            success: '#4CAF50',
            error: '#f44336',
            warning: '#ff9800',
            info: '#2196F3'
        };

        notification.style.cssText = `
            background: ${colors[type]};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            margin-bottom: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            transform: translateX(-300px);
            transition: transform 0.3s ease;
            pointer-events: auto;
            cursor: pointer;
            font-size: 14px;
            max-width: 300px;
        `;

        notification.textContent = message;
        notification.onclick = () => this.hide(id);

        this.container.appendChild(notification);
        this.notifications.push({ id, element: notification });

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto hide
        if (duration > 0) {
            setTimeout(() => {
                this.hide(id);
            }, duration);
        }

        return id;
    }

    hide(id) {
        const notification = this.notifications.find(n => n.id === id);
        if (notification) {
            notification.element.style.transform = 'translateX(-300px)';
            setTimeout(() => {
                notification.element.remove();
                this.notifications = this.notifications.filter(n => n.id !== id);
            }, 300);
        }
    }

    success(message) { return this.show(message, 'success'); }
    error(message) { return this.show(message, 'error'); }
    warning(message) { return this.show(message, 'warning'); }
    info(message) { return this.show(message, 'info'); }
}

// Keyboard shortcuts
class KeyboardManager {
    constructor() {
        this.shortcuts = new Map([
            ['KeyF', () => this.toggleFullscreen()],
            ['KeyS', () => this.openSettings()],
            ['KeyM', () => this.openMods()],
            ['KeyW', () => this.openWorlds()],
            ['KeyP', () => this.openPerformance()],
            ['KeyH', () => this.goHome()],
            ['F5', () => this.refresh()]
        ]);
        
        this.setupListeners();
    }

    setupListeners() {
        document.addEventListener('keydown', (e) => {
            // Ignore if typing in input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            const key = e.ctrlKey ? `Ctrl+${e.code}` : e.code;
            const handler = this.shortcuts.get(key);
            
            if (handler) {
                e.preventDefault();
                handler();
            }
        });
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    openSettings() { console.log('[GEAR] Opening settings...'); }
    openMods() { console.log('[MOD] Opening mods browser...'); }
    openWorlds() { console.log('[WORLD] Opening worlds manager...'); }
    openPerformance() { console.log('[STATS] Opening performance monitor...'); }
    goHome() { console.log('[HOME] Going to dashboard...'); }
    refresh() { window.location.reload(); }
}

// Initialize systems when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('[TARGET] Initializing CraftTO Systems...');
    
    // Initialize core systems
    window.minecraftManager = new MinecraftManager();
    window.performanceMonitor = new PerformanceMonitor();
    window.modAPIManager = new ModAPIManager();
    window.notificationManager = new NotificationManager();
    window.keyboardManager = new KeyboardManager();
    
    // Global utilities
    window.CraftTO.utils = {
        formatBytes: (bytes) => {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        },
        
        formatDate: (date) => {
            return new Intl.DateTimeFormat('he-IL', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }).format(date);
        },
        
        notify: (message, type = 'info') => {
            window.notificationManager.show(message, type);
        }
    };
    
    console.log('[READY] CraftTO Systems Initialized!');
    console.log('[KEYS] Shortcuts: Ctrl+F (fullscreen), Ctrl+S (settings), Ctrl+M (mods)');
    console.log('[GAME] Features:', window.CraftTO.features);
});

console.log('[PICK] CraftTO Core Systems Ready!');
console.log('[DEV] Built by Lyrbox for the ultimate Minecraft experience!');