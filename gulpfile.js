const { src, dest } = require('gulp');
const sysName = (process.argv.slice(-1)[0]).split("=")[1]||"pc";
function copy() {
  return src('public/*')
    .pipe(dest(`dist/${sysName}/public`));
}

exports.copy = copy;