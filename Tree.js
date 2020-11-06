class Tree{

    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,height,width,options); 
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png")
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.image, 560, 510, this.width, this.height);
        pop();
    }

}