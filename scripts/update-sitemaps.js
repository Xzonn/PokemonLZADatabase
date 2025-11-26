#!/usr/bin/env node
const fs = require("fs").promises;
const path = require("path");

const lastmodRegex = /<lastmod>[^<]*<\/lastmod>/g;
const locRegex = /^(( *)<loc>[^<]*<\/loc>)/gm;

(async () => {
  try {
    const dir = path.join(__dirname, "..", "build", "sitemap");
    // Check directory exists
    try {
      const s = await fs.stat(dir);
      if (!s.isDirectory()) throw new Error("Not a directory");
    } catch (err) {
      console.error(`Directory not found: ${dir}`);
      process.exit(2);
    }

    const files = [...(await fs.readdir(dir)), path.join("..", "sitemap.xml")];
    const now = new Date().toISOString();
    let updated = 0;

    for (const f of files) {
      const fp = path.join(dir, f);
      const stat = await fs.stat(fp);
      if (!stat.isFile()) continue;

      let content = await fs.readFile(fp, "utf8");
      if (lastmodRegex.test(content)) {
        const newContent = content.replace(lastmodRegex, `<lastmod>${now}</lastmod>`);
        if (newContent !== content) {
          await fs.writeFile(fp, newContent, "utf8");
          console.log(`Updated: ${fp}`);
          updated++;
        } else {
          console.log(`No change needed: ${fp}`);
        }
      } else {
        const newContent = content.replace(locRegex, `$1\n$2<lastmod>${now}</lastmod>`);
        if (newContent !== content) {
          await fs.writeFile(fp, newContent, "utf8");
          console.log(`Updated: ${fp}`);
          updated++;
        } else {
          console.log(`No change needed: ${fp}`);
        }
      }
    }

    console.log(`Done. Files updated: ${updated}`);
    process.exit(0);
  } catch (err) {
    console.error("Error updating sitemaps:", err);
    process.exit(1);
  }
})();
