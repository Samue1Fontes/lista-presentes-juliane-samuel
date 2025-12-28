const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.resolve(__dirname, '..', 'src', 'assets');
const outDir = path.resolve(srcDir, 'optimized');
const sizes = [480, 768, 1200];
const quality = 80; // ajuste padrão

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function isImage(file) {
  return /\.(jpe?g|png)$/i.test(file);
}

// collect image files recursively, ignoring the optimized output folder
function collectFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (path.resolve(full) === path.resolve(outDir)) continue;
      results = results.concat(collectFiles(full));
    } else if (e.isFile() && isImage(e.name)) {
      results.push(full);
    }
  }
  return results;
}

async function processFile(inputPath) {
  const name = path.parse(inputPath).name;
  try {
    const img = sharp(inputPath, { failOnError: false });
    const metadata = await img.metadata();

    // gerar webp e avif para várias larguras
    for (const w of sizes) {
      if (metadata.width && metadata.width < w) continue; // não ampliar
      const outWebp = path.join(outDir, `${name}-${w}.webp`);
      const outAvif = path.join(outDir, `${name}-${w}.avif`);
      await img.resize(w).webp({ quality }).toFile(outWebp);
      await img.resize(w).avif({ quality }).toFile(outAvif);
      console.log('Written', outWebp);
      console.log('Written', outAvif);
    }

    // gerar webp/avif original size
    const outWebpOrig = path.join(outDir, `${name}.webp`);
    const outAvifOrig = path.join(outDir, `${name}.avif`);
    await img.webp({ quality }).toFile(outWebpOrig);
    await img.avif({ quality }).toFile(outAvifOrig);
    console.log('Written', outWebpOrig);
    console.log('Written', outAvifOrig);
  } catch (e) {
    console.error('Error processing', inputPath, e.message || e);
  }
}

async function run() {
  ensureDir(outDir);
  const files = collectFiles(srcDir);
  for (const f of files) {
    await processFile(f);
  }
  console.log('Done');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
