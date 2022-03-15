# basic-frontend
# init 
npm init -y

# Serve
use 
first
npm install serve
npm serve for serve server in localhost:3000

# Module
for use module by 
<script src="./index.js" type="module"></script>
by type="module"

# Bundle
for don't use module
must use buddle.js for transplier all module.js to buddle.js

# Rollup
use rollup for transplier
ref: https://rollupjs.org/guide/en/
This command

complier in iife 
# compile to a <script> containing a self-executing function ('iife')
rollup main.js --file bundle.js --format iife

# compile to a CommonJS module ('cjs')
rollup main.js --file bundle.js --format cjs

# UMD format requires a bundle name
rollup main.js --file bundle.js --format umd --name "myBundle"

# Use Rollup
1st 
npm install rollup

2nd
In package.json  add build in scripts 
  "scripts": {
    "build": "rollup [mainfilename].js --file bundle.js --format [format]"
  }

3rd
npm run build

4th
have bundle.js file

# App.svelte
use rollup.config.js transplier to bundle.js

crate 
1. App.svelte 
2. main.js or use index.js then I choose that create new main.js
3. rollup.config.js
import css from 'rollup-plugin-css-only';
4. npm install rollup-plugin-svelte @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-css-only
4. add script in package.json
  "scripts": {
    "build-svelte":"rollup -c",
  }