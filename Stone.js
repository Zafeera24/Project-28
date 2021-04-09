class Stone{
    constructor(x,y,w,h){
 
     var options={
         isStatic:true,
         friction: 1,
         resitution: 0,

     }
     this.body= Bodies.rectangle(x,y,w,h,options);
     World.add(world,this.body);
     this.x=x;
     this.y=y;
     this.w=w;
     this.h=h;
     this.image = loadImage("images/stone.png")
  

    }
 
 
 display(){
    var pos= this.body.position;
    var angle= this.body.angle;
 
    push ()
    translate(pos.x,pos.y)
    rotate(angle)
    fill("brown")
    imageMode(CENTER);
    image(this.image,0,0,this.w, this.h)
    pop()
 
 
 
 }
 
 }