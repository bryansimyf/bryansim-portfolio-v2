import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const packageJsonPath = path.resolve(__dirname, "../package.json");
// const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
// const PACKAGE_VERSION = packageJson.version;

const CONSTANT_PATH = path.resolve(__dirname, "../src/constants/index.ts");
const TODAY = new Date().toISOString().split("T")[0]; // format: YYYY-MM-DD

// Read the file
let content = fs.readFileSync(CONSTANT_PATH, "utf8");

// Match only the lastUpdated line inside APP_INFO
content = content.replace(
  /(lastUpdated:\s*dayjs\(")[\d-]+("\))/,
  `$1${TODAY}$2`
);

// content = content.replace(
//   /version:\s*`v.*?`/,
//   `version: \`v${PACKAGE_VERSION}\``
// );

// Write back to the file
fs.writeFileSync(CONSTANT_PATH, content);

console.log(`✅ Updated APP_INFO.lastUpdated to ${TODAY}`);
