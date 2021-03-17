class Player extends Creature {


    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        this.scene = scene;
    } // end of constructor


    init() {
        this.name = "Random Name";
        this.speed = 100;
        this.body.setSize(50, 50);
    } // end of init


    create() {
        this.scene.input.on('pointerdown', (pointer) => {
            this.lastPointerX = pointer.worldX;
            this.lastPointerY = pointer.worldY;
            this.scene.physics.moveToObject(this, {x: this.lastPointerX, y: this.lastPointerY}, this.speed);
        });
    } // end of create


    update() {
        let distance = Phaser.Math.Distance.Between(this.body.x + this.body.width/2, this.body.y + this.body.height/2, this.lastPointerX, this.lastPointerY);
        if(this.body.speed > 0) {
            if(distance < 4) {
                this.body.setVelocity(0);
            }
        }
    } // end of update


} // end of Mario