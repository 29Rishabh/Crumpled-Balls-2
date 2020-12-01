class Paper{
    constructor(x,y){
        var paper_options={
            isStaic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body=Bodies.circle(x,y,25,paper_options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,70,70);
    }
}
