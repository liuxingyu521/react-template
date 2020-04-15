const path = require('path')

const rootPath = process.cwd();
const addRootPath = relativePath => path.resolve(rootPath, relativePath)

module.exports = {
  appPath: rootPath,
  appSrc: addRootPath('src'),
  appViews: addRootPath('views'),
  appDist: addRootPath('dist'),
}