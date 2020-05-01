const { execSync } = require('child_process')

/** 获取最近一次 commit Hash */
function getLastCommitHash() {
  const cmdLastCommitHash = 'git rev-parse HEAD'
  const stdBuffer = execSync(cmdLastCommitHash)
  return stdBuffer.toString()
}

module.exports = {
  getLastCommitHash,
}
