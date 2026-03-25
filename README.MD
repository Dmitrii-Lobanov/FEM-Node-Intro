# Course Notes

[Course Notes](https://scottmoss.notion.site/Intro-to-Node-js-V3-7c8e4ccaebf94b839f425fff13dcc44c)

## Creating a CLI

Setting up a `bin` command is slightly different from a standard script. While `scripts` are just aliases, the `bin` field actually **installs** your script as an executable command in your system's path (or the local `node_modules/.bin` folder).

Here is exactly how to set it up so you can run your project like a real CLI tool.

---

### 1. Prepare your `index.js`

For a script to be "executable" by the shell, you must add a **shebang** line at the very top of the file. This tells the OS to use Node.js to run the file.

**index.js**

```javascript
#!/usr/bin/env node

console.log("Success! Your custom command is running.");
```

### 2. Configure `package.json`

Add the `bin` field. The key is the **command name** you want to type in your terminal, and the value is the **path** to the file.

**package.json**

```json
{
  "name": "my-tool",
  "version": "1.0.0",
  "bin": {
    "my-command": "./index.js"
  }
}
```

---

### 3. How to Execute It

There are two ways to run this, depending on whether you want to use it globally or just locally for testing.

#### A. Local Testing (The Quick Way)

If you just want to run it while developing, use `npx`. This looks into your local `bin` configuration:
`npx my-command`

#### B. Global Installation (The "Real" Way)

To use the command anywhere on your computer (like `git` or `mkdir`), you need to link it:

1.  In your project folder, run: `npm link`
2.  Now, simply type your command from any folder: `my-command`

---

### Important Checklist

- **Permissions:** On macOS or Linux, you might need to give the file execution permissions if it fails. Run `chmod +x index.js`.
- **The Shebang:** If you forget `#!/usr/bin/env node`, the terminal will try to run the file as a shell script instead of JavaScript, leading to syntax errors.

**Would you like me to help you set up command-line arguments so your new command can accept inputs, like `my-command --user=admin`?**

## Modules
