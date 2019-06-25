const { override, addLessLoader } = require('customize-cra')
/**
 *  ERROR: 
 *  The "getBabelLoader" helper 
 *  has been deprecated as of v2.0. 
 *  You can use customize-cra plugins in replacement - 
 *  https://github.com/arackaf/customize-cra#available-plugins
 *  yarn add customize-cra
 * 
 *  module.exports = function override (config, env) {
 *    config = rewriteLess(config, env)
 *    return config
 *  }
 */
module.exports = override(
  /** 
   *  less-loader 
   */
  addLessLoader({})
)



