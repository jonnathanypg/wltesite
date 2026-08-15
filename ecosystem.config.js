module.exports = {
  apps: [
    {
      name: 'wlt-site-prod',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: './',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000
      }
    }
  ]
};
