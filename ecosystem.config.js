module.exports = {
  apps: [{
    name: "cms",
    script: 'yarn',
    args: 'start:prod',
    cwd: 'src/cms/',
    interpreter: '/bin/bash',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  },
  {
    name: "web",
    script: 'yarn',
    args: 'start:prod',
    interpreter: '/bin/bash',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};