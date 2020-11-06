class Mango {
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.body = Bodies.circle(x,y,30/2,options);
        this.image = loadImage("mango.png");

        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;

       push();
       imageMode(CENTER);
       image(this.image, pos.x, pos.y, 50, 50);
        pop();

    }
}