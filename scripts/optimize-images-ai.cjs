/* Pipeline: capturas de Portfolio Builder y Cátedra → src/assets/works/
   Mismo criterio que optimize-images.cjs: par thumb (4:3, recorte superior)
   + full (ancho 1600) en WebP. Las fuentes son capturas landscape ~1850x950. */
const path = require('path');
const fs = require('fs');
const PROJECT = 'F:/AIUXUI/PortfolioProject2/PortfolioV3GonzaloPerezdg';
const sharp = require(path.join(PROJECT, 'node_modules', 'sharp'));

const BASE = 'F:/AIUXUI/PortfolioProject2/Contenido/Imagenes';
const OUT = path.join(PROJECT, 'src/assets/works');
fs.mkdirSync(OUT, { recursive: true });

// slug de salida ← carpeta de origen
const GROUPS = [
  { dir: 'Portfolio-builder', slug: 'portfolio-builder' },
  { dir: 'catedra', slug: 'catedra' },
];

async function main() {
  let total = 0;

  for (const { dir, slug } of GROUPS) {
    const src = path.join(BASE, dir);
    const files = fs
      .readdirSync(src)
      .filter((f) => /\.(png|jpe?g|jfif|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));

    for (let i = 0; i < files.length; i += 1) {
      const file = path.join(src, files[i]);
      const n = i + 1;

      await sharp(file)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(path.join(OUT, `${slug}-${n}-full.webp`));

      await sharp(file)
        .resize(800, 600, { fit: 'cover', position: 'top' })
        .webp({ quality: 75 })
        .toFile(path.join(OUT, `${slug}-${n}-thumb.webp`));

      const kbFull = Math.round(fs.statSync(path.join(OUT, `${slug}-${n}-full.webp`)).size / 1024);
      const kbThumb = Math.round(fs.statSync(path.join(OUT, `${slug}-${n}-thumb.webp`)).size / 1024);
      total += kbFull + kbThumb;
      console.log(`${slug}-${n}`.padEnd(22) + `full ${String(kbFull).padStart(4)} KB   thumb ${String(kbThumb).padStart(4)} KB   ← ${files[i]}`);
    }
  }

  console.log(`\nTotal generado: ${total} KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
