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

const portfolioItems = [
  {
    id: "resellerpro",
    title: "ResellerPro - SaaS CRM Platform",
    category: "SaaS Product · Full-Stack Development",
    localFile: "public/images/portfolio/www.resellerpro.in_.webp",
    url: "https://resellerpro.in",
    order: 1,
  },
  {
    id: "axion-technology-co",
    title: "Axion Technology Company - Business Website",
    category: "Web Design & Development",
    localFile: "public/images/portfolio/axiontechgroup.com_ (1).webp",
    url: "https://axiontechgroup.com",
    order: 2,
  },
  {
    id: "wcc-fashions",
    title: "WCC Fashions - Western Clothing Co",
    category: "B2B-Website",
    localFile: "public/images/portfolio/www.wccfashions.com_.webp",
    url: "https://wccfashions.com",
    order: 3,
  },
  {
    id: "nexa-network",
    title: "Nexa Network Solutions",
    category: "Web Design & Development",
    localFile: "public/images/portfolio/nexa.com.qa_ (1).webp",
    url: "https://nexa.com.qa",
    order: 4,
  },
  {
    id: "griva",
    title: "The Griva - Electronics",
    category: "Web Design & E-Commerce",
    localFile: "public/images/portfolio/www.thegriva.com1_.webp",
    url: "https://thegriva.com",
    order: 5,
  },
  {
    id: "ambiayu-natureproducts",
    title: "Ambiayu - Ayurvedic Products",
    category: "Web Design & Shopify",
    localFile: "public/images/portfolio/ambiayu.com_.webp",
    url: "https://ambiayu.com",
    order: 6,
  },
  {
    id: "editron-studio",
    title: "Editron Studio - Creative Agency",
    category: "Web Design & Development · UAE",
    localFile: "public/images/portfolio/www.editronstudio.com_.webp",
    url: "https://editronstudio.com",
    order: 7,
  },
  {
    id: "kl-59-mens-fashion",
    title: "KL-59 Men's Fashion",
    category: "E-Commerce",
    localFile: "public/images/portfolio/www.kl-59mensfashion.in_ (4).webp",
    url: "https://kl-59mensfashion.in",
    order: 8,
  },
  {
    id: "magnat",
    title: "Magnat - Engineering & IT",
    category: "Corporate Website",
    localFile: "public/images/portfolio/www.magnat.in_.webp",
    url: "https://magnat.in",
    order: 9,
  },
  {
    id: "vidya-academy",
    title: "Vidya Academy",
    category: "Educational Portal",
    localFile: "public/images/portfolio/vidyaacademy.ekodrix.com_.webp",
    url: "https://vidyaacademy.ekodrix.com",
    order: 10,
  },
  {
    id: "er-groups",
    title: "ER Groups - Logistics",
    category: "Web Application",
    localFile: "public/images/portfolio/er-groups.vercel.app_ (2).webp",
    url: "https://er-groups.vercel.app",
    order: 11,
  },
  {
    id: "care-pro-health",
    title: "Care Pro Health",
    category: "Healthcare Portal",
    localFile: "public/images/portfolio/care-pro-health.vercel.app_.webp",
    url: "https://care-pro-health.vercel.app",
    order: 12,
  },
  {
    id: "ekodrix-events",
    title: "Ekodrix Event Management",
    category: "Interactive Web Platform",
    localFile: "public/images/portfolio/ekodrix-event-management-demo.vercel.app_.webp",
    url: "https://ekodrix-event-management-demo.vercel.app",
    order: 13,
  },
];

async function migrate() {
  console.log('🚀 Starting migration of portfolio images to Sanity CDN...');

  const uploadedResults = [];

  for (const item of portfolioItems) {
    const fullPath = path.resolve(process.cwd(), item.localFile);
    if (!fs.existsSync(fullPath)) {
      console.warn(`⚠️ File not found: ${fullPath}`);
      continue;
    }

    console.log(`📤 Uploading ${item.title}...`);
    try {
      const fileStream = fs.createReadStream(fullPath);
      const asset = await client.assets.upload('image', fileStream, {
        filename: path.basename(fullPath),
      });

      console.log(`✅ Asset created: ${asset.url}`);

      // Create or replace document in Sanity
      const doc = {
        _type: 'project',
        _id: `project-${item.id}`,
        title: item.title,
        slug: { _type: 'slug', current: item.id },
        category: item.category,
        url: item.url,
        order: item.order,
        featured: true,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
        },
      };

      await client.createOrReplace(doc);
      console.log(`✨ Document created in Sanity: project-${item.id}`);

      uploadedResults.push({
        id: item.id,
        title: item.title,
        category: item.category,
        url: item.url,
        cdnUrl: asset.url,
      });
    } catch (err) {
      console.error(`❌ Failed to upload ${item.title}:`, err.message);
    }
  }

  // Save the CDN mappings to a JSON file so the frontend can load instantly from Sanity CDN!
  fs.writeFileSync(
    path.resolve(process.cwd(), 'src/lib/sanity-portfolio-cdn.json'),
    JSON.stringify(uploadedResults, null, 2)
  );
  console.log('🎉 Migration complete! CDN mappings saved to src/lib/sanity-portfolio-cdn.json');
}

migrate().catch(console.error);
