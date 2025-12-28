const fs = require('fs');
const path = require('path');

const assetsDir = path.resolve(__dirname, '..', 'src', 'assets');
const rawDir = path.join(assetsDir, 'raw_assets');
const threshold = 500 * 1024; // 500 KB

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function shouldSkip(file) {
  const skip = ['optimized', 'polaroids'];
  return skip.some((s) => file.includes(s));
}

function moveFile(file) {
  const src = path.join(assetsDir, file);
  const dst = path.join(rawDir, file);
  const dstDir = path.dirname(dst);
  if (!fs.existsSync(dstDir)) fs.mkdirSync(dstDir, { recursive: true });
  fs.renameSync(src, dst);
  console.log('Moved', src, '->', dst);
}

function run() {
  ensureDir(rawDir);
  const files = fs.readdirSync(assetsDir);
  for (const f of files) {
    const full = path.join(assetsDir, f);
    const stat = fs.statSync(full);
    if (stat.isFile() && shouldSkip(f) === false && stat.size > threshold) {
      moveFile(f);
    }
  }
  console.log('Archive complete');
}

run();
