const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp'); // Make sure sharp is installed

const srcDir = path.join(__dirname, '../public/Models 5');
const destDir = path.join(__dirname, '../public/models');

async function processDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        // Generate a random string to avoid name collisions
        const randomString = crypto.randomBytes(4).toString('hex');
        const filename = path.basename(entry.name, ext).replace(/[^a-zA-Z0-9]/g, '');
        const webpPath = path.join(destDir, `model5_${filename}_${randomString}.webp`);
        
        console.log(`Converting ${fullPath} to ${webpPath}`);
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
        } catch (e) {
          console.error(`Failed to convert ${fullPath}: ${e}`);
        }
      }
    }
  }
}

async function run() {
  await processDirectory(srcDir);
  console.log("Done adding Models 5");
}

run();
