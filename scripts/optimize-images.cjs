/* Pipeline one-off: optimiza imágenes del portfolio → src/assets/works/ */
const path = require('path');
const fs = require('fs');
const PROJECT = 'F:/AIUXUI/PortfolioProject2/PortfolioV3GonzaloPerezdg';
const sharp = require(path.join(PROJECT, 'node_modules', 'sharp'));

const SRC = 'F:/AIUXUI/PortfolioProject2/Contenido/Imagenes/ImagenesPortfolio';
const OUT = path.join(PROJECT, 'src/assets/works');
fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(SRC);
const find = (re) => files.filter(f => re.test(f)).sort();

async function report(file) {
  const kb = Math.round(fs.statSync(file).size / 1024);
  const meta = await sharp(file).metadata();
  console.log(`${path.basename(file).padEnd(28)} ${String(meta.width).padStart(5)}x${String(meta.height).padEnd(6)} ${kb} KB`);
  return kb;
}

async function main() {
  // ── 1. Hero InsurTech: mockup flotante con alfa. Sin recorte, sin blur:
  //     va sin marco sobre el fondo de la página, así que la transparencia se conserva. ──
  const hero = files.find(f => f.startsWith('1Hero'));
  await sharp(path.join(SRC, hero))
    .resize({ width: 1200 })
    .webp({ quality: 80, alphaQuality: 100 })
    .toFile(path.join(OUT, 'hero-insurtech.webp'));

  // ── 2. Foto Coderhouse: jfif → webp, portrait tal cual ──
  const clase = files.find(f => f.startsWith('4Foto'));
  await sharp(path.join(SRC, clase))
    .webp({ quality: 82 })
    .toFile(path.join(OUT, 'coderhouse-clase.webp'));

  // ── 3. RATT ANTES (3, landscape) ──
  const antes = find(/ANTES/);
  for (let i = 0; i < antes.length; i++) {
    const src = path.join(SRC, antes[i]);
    await sharp(src).resize({ width: 1600 }).webp({ quality: 75 })
      .toFile(path.join(OUT, `ratt-antes-${i + 1}-full.webp`));
    await sharp(src).resize(800, 600, { fit: 'cover', position: 'top' }).webp({ quality: 75 })
      .toFile(path.join(OUT, `ratt-antes-${i + 1}-thumb.webp`));
  }

  // ── 4. RATT DESPUÉS (7, ultra-tall scrolls) ──
  const despues = find(/DESPUES/);
  for (let i = 0; i < despues.length; i++) {
    const src = path.join(SRC, despues[i]);
    await sharp(src).resize({ width: 1100 }).webp({ quality: 70 })
      .toFile(path.join(OUT, `ratt-despues-${i + 1}-full.webp`));
    // thumb: región superior 4:3, luego 800×600
    const meta = await sharp(src).metadata();
    const cropH = Math.min(Math.round(meta.width * 0.75), meta.height);
    await sharp(src).extract({ left: 0, top: 0, width: meta.width, height: cropH })
      .resize(800, 600).webp({ quality: 75 })
      .toFile(path.join(OUT, `ratt-despues-${i + 1}-thumb.webp`));
  }

  console.log('--- RESULTADOS ---');
  let total = 0;
  for (const f of fs.readdirSync(OUT).sort()) total += await report(path.join(OUT, f));
  console.log(`TOTAL: ${total} KB en ${fs.readdirSync(OUT).length} archivos`);
}

main().catch(e => { console.error(e); process.exit(1); });
