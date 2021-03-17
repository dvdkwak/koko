class Creature extends Phaser.GameObjects.Sprite {


    /**
     * Spawning your creature! :D
     * @param {Object} scene Scene the object lives in
     * @param {Integer} x The x position
     * @param {Integer} y The y position
     * @param {Object} texture Texture given to the creature
     */
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.body.setCollideWorldBounds(true);
        this.setOrigin(0.5);
    } // end of constructor


}