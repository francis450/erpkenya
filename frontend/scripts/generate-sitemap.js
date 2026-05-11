const fs = require("fs");
const path = require("path");

const SITE_URL = "https://erpkenya.com";
const today = new Date().toISOString().split("T")[0];

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/solutions", priority: "0.9", changefreq: "monthly" },
  { path: "/solutions/hr-payroll", priority: "0.9", changefreq: "monthly" },
  { path: "/industries", priority: "0.9", changefreq: "monthly" },
  { path: "/manufacturing", priority: "0.9", changefreq: "monthly" },
  { path: "/kra-etims", priority: "0.9", changefreq: "monthly" },
  { path: "/resources", priority: "0.8", changefreq: "weekly" },
  { path: "/resources/install-erpnext-v15-macos", priority: "0.8", changefreq: "monthly" },
  { path: "/resources/install-erpnext-v15-ubuntu-24-04", priority: "0.8", changefreq: "monthly" },
  { path: "/resources/top-erp-software-kenya-2026-comparison", priority: "0.8", changefreq: "monthly" },
  { path: "/resources/erp-implementation-kenya-checklist", priority: "0.8", changefreq: "monthly" },
  { path: "/resources/ai-companies-kenya-erp-automation", priority: "0.8", changefreq: "monthly" },
  { path: "/resources/automated-mpesa-reconciliation", priority: "0.8", changefreq: "monthly" },
  { path: "/resources/inventory-management-strategies", priority: "0.8", changefreq: "monthly" },
  { path: "/success-stories", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.6", changefreq: "monthly" },
];

function generateSitemap() {
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outputPath = path.resolve(__dirname, "../public/sitemap.xml");
  fs.writeFileSync(outputPath, sitemap, "utf-8");
  console.log(`Sitemap generated at ${outputPath} with ${routes.length} URLs`);
}

generateSitemap();
