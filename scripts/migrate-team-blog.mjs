import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId: '3sq1n5yp',
  dataset: 'production',
  apiVersion: '2024-03-25',
  token: 'skDKsAJCCquk3CftMKHVaQkbr4iwoxBEUH7KGQzE2u7OxQxxdeBMedK7NXIIkcTYOlplZVAiWZvo4JOKtHYSPlfNscGoNB0eCLnlyntPYhy3wZVUTW35HcuTNOdKeaMCHhFq1gvtGvU5eopWxC5k6xVXodxg5KWlKd0oE8iNQHH5Nn3XTmo7',
  useCdn: false,
});

async function uploadDir(dirPath) {
  const fullDirPath = path.resolve(process.cwd(), dirPath);
  if (!fs.existsSync(fullDirPath)) return {};

  const files = fs.readdirSync(fullDirPath);
  const mappings = {};

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) continue;

    const filePath = path.join(fullDirPath, file);
    try {
      console.log(`📤 Uploading ${dirPath}/${file}...`);
      const stream = fs.createReadStream(filePath);
      const asset = await client.assets.upload('image', stream, {
        filename: file,
      });
      console.log(`✅ Uploaded: ${asset.url}`);
      mappings[`/${dirPath.replace(/\\/g, '/')}/${file}`] = asset.url;
    } catch (e) {
      console.error(`❌ Error uploading ${file}:`, e.message);
    }
  }

  return mappings;
}

async function run() {
  console.log('🚀 Starting Team and Blog image upload to Sanity...');
  const blog = await uploadDir('public/images/blog');
  const hero = await uploadDir('public/images/hero');
  const team = await uploadDir('public/team');

  const all = { ...blog, ...hero, ...team };
  fs.writeFileSync(
    path.resolve(process.cwd(), 'src/lib/sanity-media-cdn.json'),
    JSON.stringify(all, null, 2)
  );
  console.log('🎉 Upload complete! Saved to src/lib/sanity-media-cdn.json');
}

run().catch(console.error);
