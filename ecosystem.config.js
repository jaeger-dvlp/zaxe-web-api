module.exports = {
  apps: [
    {
      name: 'api.zaxe.com',
      script: 'yarn start',
      namespace: 'zaxe',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      version: '1.0.0',
    },
  ],
};
