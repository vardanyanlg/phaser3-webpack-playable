import Phaser from "phaser";

const items = [];
const objectsArt = [];
let bg;

export default class MainScene extends Phaser.Scene {
    constructor () {
        super({ key: 'Main' });
    }
    create() {
		console.log('%cSTATE::MainScene', 'color: #fff; background: #f0f;');

        bg = this.add.image(480, 270,'bg').setScale(1).setDepth(0.01);
        this.tweens.add({targets: bg,scaleX: 1.1,scaleY:1.1,duration: 500,ease: 'Quad.InOut',delay: 0,yoyo:true,repeat:-1 });

        this.music =  this.sound.add('sound_fx').play();

    }
    update() {

    }
}