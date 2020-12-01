class dustbinObject{
    constructor(x,y,width,height){
        var dustbin_options={
            isStatic: true
        }
        this.body=Bodies.rectangle(x,y,width,height,dustbin_options);
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body);
    }
    display(){
            imageMode(CENTER);
            image(this.image,this.body.position.x-10,this.body.position.y-60,200,160);
        }
    }
