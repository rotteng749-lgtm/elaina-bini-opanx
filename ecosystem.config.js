module.exports = {
    apps: [
        {
            name: 'elaina-bot',
            script: 'index.js',
            instances: 1, // DO NOT use cluster mode with Baileys
            autorestart: true,
            watch: false,
            max_memory_restart: '500M',
            restart_delay: 5000,
            env: {
                NODE_ENV: 'production',
            },
        },
    ],
};
