module.exports = {
  apps: [
    {
      name: 'wlt-site-prod',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 9002',
      cwd: './',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 9002
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 9002
      }
    }
  ]
};
