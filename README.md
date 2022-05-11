![phaser3-parcel-playable-logo](/src/img/logo.png)
# Playable Ads in one file
## Phaser 3 + Webpack 5 with auto base64 assets decode
> A Phaser 3 project template for JavaScript (ES6 support via Babel) and Webpack 5 that includes local server with  hot-reloading for development and production builds in one file with assets on base64.

[You can also try Parcel Template](https://github.com/vardanyanlg/phaser3-webpack-playable "Phaser 3 Playable Ads")

### Features
- The project is assembled into one file and is ready for any ad networks.
- Final build with minification and code optimization
- All assets will automatically be base64 encoded and embedded in the project
- Modern code with inheritance classes, arrow functions, as well as asynchronous code, and all this will work even in older browsers thanks to the built-in BabelJS

### Requirements
[Node.js](https://nodejs.org/) (with npm) and I recommend installing and using [Yarn 3](https://yarnpkg.com/).

### Getting Started
You need to either download this project or clone it:
```bash
git clone https://github.com/vardanyanlg/phaser3-webpack-playable.git
```
Make sure you are in the project, if not then go there:
```bash
cd phaser3-webpack-playable
```
Now you need to install all the necessary dependencies for the project to work:
```bash
yarn install
```

Everything is ready to start the project.
For local testing use (localhost:8000 will open auto in browser) and without stat warnings
```bash
yarn watch
```
Or use `yarn start` for start dev server with show stat warnings

To build the final file use
```bash
yarn build
```

The finished `index.html` file is waiting for you in the `dist` folder

#### Assets Loading
Resource loading is declared in `js/PreloaderScene.js`
`import filenameCustom from '../img/filename.png'` or `import filenameCustom from '../audio/filename.mp3'` for each asset

##### Load Audio
Use `this.addAudio("custom_name",filenameCustom)` function to load sounds.

##### Load Image
Use `this.addTexture("custom_name", filenameCustom)` function to load images
