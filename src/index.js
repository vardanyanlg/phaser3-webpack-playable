import Phaser from 'phaser';
import PreloaderScene from './js/PreloaderScene.js';
import MainScene from './js/MainScene.js';

const gameConfig = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 960,
    height: 540,
    scale: {
        mode:  Phaser.Scale.FIT,
        autoCenter:  Phaser.Scale.CENTER_BOTH
    },
    scene: null
};

const game = new Phaser.Game(gameConfig);

game.scene.add("Preload", PreloaderScene);
game.scene.add("Main", MainScene);

game.scene.start("Preload");

