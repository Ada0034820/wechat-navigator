module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: ['121.41.170.41'],
      port: '22',
      ref: 'origin/main',
      repo: 'git@github.com:Ada0034820/wechat-navigator.git',
      path: '/home/server/wechat-navigator',
      'ssh_options': 'StrictHostKeyChecking=no',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    }
  }
};