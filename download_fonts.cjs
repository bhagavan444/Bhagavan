const fs = require('fs');
const https = require('https');
const path = require('path');

const fontsDir = path.join(__dirname, 'src', 'assets', 'fonts', 'sf-pro');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to download ${url}: ${res.statusCode}`);
        resolve();
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${path.basename(dest)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${url}: ${err.message}`);
      resolve();
    });
  });
};

const weights = {
  'Thin': '100',
  'Ultralight': '200',
  'Light': '300',
  'Regular': '400',
  'Medium': '500',
  'Semibold': '600',
  'Bold': '700',
  'Heavy': '800',
  'Black': '900'
};

// Based on typical cdnfonts naming mapping for SF Pro Display
const displayMapping = {
  '100': 'UltralightItalic', // cdnfonts uses specific names, we will use a reliable css to get the urls
};

// Wait, getting them from CDNFonts by guessing URL is error prone.
// Let's just download the CSS file, parse it, and download the woff files!
const cssUrls = [
  'https://fonts.cdnfonts.com/css/sf-pro-display',
  'https://fonts.cdnfonts.com/css/sf-pro-text'
];

async function run() {
  for (const cssUrl of cssUrls) {
    await new Promise((resolve) => {
      let data = '';
      https.get(cssUrl, (res) => {
        res.on('data', chunk => data += chunk);
        res.on('end', async () => {
          const urls = [...data.matchAll(/url\('(https:\/\/[^']+\.woff)'\)/g)].map(m => m[1]);
          for (const u of urls) {
            const filename = u.split('/').pop();
            await download(u, path.join(fontsDir, filename));
          }
          resolve();
        });
      });
    });
  }
}

run();
