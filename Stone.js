class Stone{

    constructor(x,y,width,height){

        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.rectangle(x,y,height,width,options); 
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png")
        World.add(world, this.body);

    }

    display(){
        

        push();
        imageMode(CENTER);
        image(this.image, 58, 620, this.width, this.height);
        pop();

    }

}