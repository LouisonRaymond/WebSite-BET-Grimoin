module.exports = {
  apps: [{
    name: "cms",
    script: "yarn",
    args: "start:prod",
    cwd: "~app/WebSite-BET-Grimoin/src/cms/",
    interpreter: "/bin/bash",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  },
  {
    name: "site",
    script: "yarn",
    args: "start:prod",
    cwd: "~app/WebSite-BET-Grimoin/",
    interpreter: "/bin/bash",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};