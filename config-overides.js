const rewriteLess = require('react-app-rewire-less')

module.exports = function override (config, env) {
  config = rewriteLess(config, env)
  
  return config
}