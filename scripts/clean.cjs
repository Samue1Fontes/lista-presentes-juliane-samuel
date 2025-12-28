const fs = require('fs');
const path = require('path');

function rm(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const stat = fs.statSync(dirPath);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(dirPath)) {
      rm(path.join(dirPath, entry));
    }
    fs.rmdirSync(dirPath);
  } else {
    fs.unlinkSync(dirPath);
  }
}

const root = path.resolve(__dirname, '..');
console.log('Cleaning dist and optimized assets...');
rm(path.join(root, 'dist'));
rm(path.join(root, 'src', 'assets', 'optimized'));
console.log('Done');
