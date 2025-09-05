#!/usr/bin/env node
const degit = require("degit");
const path = require("path");

const appName = process.argv[2];
if (!appName) {
    console.error("[ERROR] Please, enter name of project. Ex:");
    console.error("        npx create-app-pxhjs my-app");
    process.exit(1);
}

const repo = "https://github.com/kitajima2910/pxhjs";
const dest = path.join(process.cwd(), appName);

const emitter = degit(repo, {
    cache: false,
    force: true,
    verbose: true,
});

console.log("[INFO] Creating PXHJS project...");

emitter
    .clone(dest)
    .then(() => {
        console.log("\n[OK] Project PXHJS created at: ", dest);
        console.log("\nNext steps:");
        console.log("  cd " + appName);
        console.log("  npm install");
        console.log("  npm start\n");
    })
    .catch((err) => {
        console.error("[ERROR] Failed to create project:", err);
    });
