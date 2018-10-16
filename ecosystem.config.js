module.exports = {
  apps : [
    {
      name: "love394-dev",
      script: "npm",
      args: "run dev"
    },
    {
      name:"love394-prod",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        ENABLE_NODE_LOG: "YES"
      }
    }
  ]
}