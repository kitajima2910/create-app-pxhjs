#!/usr/bin/env node
const degit = require("degit");
const path = require("path");
const { exec } = require("child_process");
const fs = require("fs");

const appName = process.argv[2];
if (!appName) {
    console.error("[ERROR] Please enter project name. Example:");
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

console.log("[INFO] Creating project PXHJS...");

emitter
    .clone(dest)
    .then(() => {
        console.log("\n[OK] Project PXHJS has been created at: ", dest);

        console.log("\nNext steps:");
        console.log("  cd " + appName);
        console.log("  npm install");
        console.log("  npm start\n");

        const extensionPath = path.join(
            dest,
            "vscode-extension",
            "pxh-language-0.0.4.vsix"
        );

        if (fs.existsSync(extensionPath)) {
            exec(
                `code --install-extension "${extensionPath}"`,
                (error, stdout, stderr) => {
                    if (error) {
                        console.warn(
                            "[WARN] Cannot install VS Code extension:"
                        );
                        console.warn(`       ${error.message}`);
                    } else {
                        console.log(
                            "[OK] VS Code extension has been installed successfully"
                        );
                        console.log("Waiting...");
                    }
                }
            );
        } else {
            console.warn(
                "[WARN] File extension does not exist, skipping extension installation"
            );
            console.log("Waiting...");
        }
    })
    .catch((err) => {
        console.error("[ERROR] Cannot create project:", err);
    });
