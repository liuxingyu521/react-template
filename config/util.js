const { execSync } = require('child_process')

/** 获取最近一次 commit Hash */
function getLastCommitHash() {
  const cmdLastCommitHash = 'git rev-parse HEAD'
  let hashStr = ''

  try {
    hashStr = execSync(cmdLastCommitHash).toString()
  } catch (error) {
    hashStr = Date.now()
    console.log('parse git info failed.')
  }

  return hashStr
}

module.exports = {
  getLastCommitHash,
}
