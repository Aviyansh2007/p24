class Dustbin{
    constructor(x,y){
        var options={
            isStatic:true

        }
        this.bottom = Bodies.rectangle(x,y,200,20,options);
        World.add(world,this.bottom);
        this.bottomWidth = 200;
        this.bottomHeight = 20;

        this.left = Bodies.rectangle(x-100,y-40,20,100,options);
        World.add(world,this.left);
        this.leftWidth = 20;
        this.leftHeight = 100;

        this.right = Bodies.rectangle(x+100,y-40,20,100,options);
        World.add(world,this.right);
        this.rightWidth = 20;
        this.rightHeight = 100;
    }
    display(){
        fill("green");
        var bottompos = this.bottom.position;
        push()
        translate(bottompos.x,bottompos.y);
        rectMode(CENTER);
        rect(0,0,this.bottomWidth,this.bottomHeight);
        pop();

        var leftpos = this.left.position;
        push()
        translate(leftpos.x,leftpos.y);
        rectMode(CENTER);
        rect(0,0,this.leftWidth,this.leftHeight);
        pop();

        var rightpos = this.right.position;
        push()
        translate(rightpos.x,rightpos.y);
        rectMode(CENTER);
        rect(0,0,this.rightWidth,this.rightHeight);
        pop();
    }
}
