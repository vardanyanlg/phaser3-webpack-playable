import Phaser from "phaser";
import MainScene from './MainScene.js';

let loadMain = false;
let countDecodedAudio = 0;
let allAudio = 0;
let countDecodedTexture = 0;
let allTextures = 0;

export default class PreloaderScene extends Phaser.Scene {
    constructor () {
        super({ key: 'Preload' })
    }

    preload () {
        console.log('%cSCENE::PreloaderScene', 'color: #fff; background: #f00;')

        this
            .addAudio('sound_fx', require('../audio/sound_fx.mp3'))
            .addTexture('bg', require('../img/logo.png'))

        this.textures.on('onload', () => countDecodedTexture++, this)
        this.sound.on('decoded', () => countDecodedAudio++, this)
    }
    addBitmapText(key,vPNG,vXML) {
        const blob = this.dataURLtoBlob(vPNG)
        const url = URL.createObjectURL(blob);
        const blob2 = this.dataURLtoBlob(vXML)
        const url2 = URL.createObjectURL(blob2);

        this.load.bitmapFont(key,url,url2)

        return this
    }
    addAtlas(key,vPNG,vXML) {
        const blob = this.dataURLtoBlob(vPNG)
        const url = URL.createObjectURL(blob);
        const blob2 = this.dataURLtoBlob(vXML)
        const url2 = URL.createObjectURL(blob2);

        this.load.atlas(key,url,url2)

        return this
    }
    dataURLtoBlob(dataurl) {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new Blob([u8arr], { type: mime });
    }
    addAudio(arg1,arg2) {
        allAudio++
        this.sound.decodeAudio(arg1, arg2)
        return this
    }
    addTexture(arg1,arg2) {
        allTextures++
        this.textures.addBase64(arg1, arg2)
        return this
    }
    create() {
        loadMain = true
    }
   update() {
        if (loadMain && (countDecodedAudio >= allAudio) && (countDecodedTexture >= allTextures)) {
            console.log('%cSCENE::Loaded', 'color: #000; background: #0f0;')
            this.scene.start("Main")
        }
    }
}


