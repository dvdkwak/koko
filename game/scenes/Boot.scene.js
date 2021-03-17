class Boot extends Phaser.Scene {

    constructor() {
        super({key: "Boot"});
    }


    init() {
        this.player = new Player(this, 100, 100, null);
        this.player.init();

        // connecting to the sockets ^^
        this.socket = io();

        this.socket.on('mario', (res) => {
            if(res === "moveUp") {
                this.player.body.setVelocityY(-this.player.speed);
                this.player.body.setVelocityX(0);
            }
            if(res === "moveDown") {
                this.player.body.setVelocityY(this.player.speed);
                this.player.body.setVelocityX(0);
            }
            if(res === "moveLeft") {
                this.player.body.setVelocityX(-this.player.speed);
                this.player.body.setVelocityY(0);
            }
            if(res === "moveRight") {
                this.player.body.setVelocityX(this.player.speed);
                this.player.body.setVelocityY(0);
            }
        });
    }


    create() {
        this.player.create();
    }


    update() {
        this.player.update();
    }

}