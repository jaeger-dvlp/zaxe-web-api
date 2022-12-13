module.exports = {
  apps: [
    {
      name: 'api.zaxe.com',
      script: 'yarn start',
      namespace: 'zaxe',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      version: '2.0.0',
    },
  ],
};
