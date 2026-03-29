import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';
import { existsSync, mkdirSync } from 'fs';

const PUBLIC = './public';
const MAX_WIDTH = 1200;
const QUALITY = 82;

let totalOrig = 0, totalNew = 0, count = 0, errors = 0;

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (e.isFile() && extname(e.name).toLowerCase() === '.png') yield full;
  }
}

async function compress(file) {
  const s = await stat(file);
  const origSize = s.size;

  // Skip if already small (< 200 KB)
  if (origSize < 200 * 1024) return;

  try {
    const img = sharp(file);
    const meta = await img.metadata();

    // Resize only if wider than MAX_WIDTH
    let pipeline = img;
    if (meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    // Write compressed PNG back (overwrite)
    const buf = await pipeline
      .png({ quality: QUALITY, compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();

    const newSize = buf.length;

    // Only overwrite if smaller
    if (newSize < origSize) {
      await import('fs').then(fs => fs.promises.writeFile(file, buf));
      totalOrig += origSize;
      totalNew += newSize;
      count++;
      const saved = Math.round((1 - newSize / origSize) * 100);
      if (saved > 5) {
        const mb = (origSize / 1024 / 1024).toFixed(1);
        const mbn = (newSize / 1024 / 1024).toFixed(1);
        console.log(`✓ ${saved}% │ ${mb}MB → ${mbn}MB │ ${file.replace('./public/', '')}`);
      }
    }
  } catch (e) {
    errors++;
    console.error(`✗ ${file}: ${e.message}`);
  }
}

console.log('Compressing PNG images in public/...\n');
const start = Date.now();

for await (const file of walk(PUBLIC)) {
  await compress(file);
}

const elapsed = ((Date.now() - start) / 1000).toFixed(0);
const savedMB = ((totalOrig - totalNew) / 1024 / 1024).toFixed(0);
const savedPct = totalOrig > 0 ? Math.round((1 - totalNew / totalOrig) * 100) : 0;

console.log(`\n✅ Done in ${elapsed}s`);
console.log(`   Compressed: ${count} files`);
console.log(`   Saved: ${savedMB} MB (${savedPct}%)`);
console.log(`   Errors: ${errors}`);
if (errors > 0) console.log('   Run again if any files were locked.');
