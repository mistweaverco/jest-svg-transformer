const path = require('path');

exports.default = {
  process (_, sourcePath) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`
    }
  },
  getCacheKey () {
    return 'svgTransform'
  }
}
