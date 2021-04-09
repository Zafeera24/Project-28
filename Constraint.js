class constraint{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB: pointB,
            stiffness: 0.0004,
            length: 1,
        }


        this.chain = Constraint.create(options)
        World.add(world, this.chain)

       this.bodyA = bodyA;
       this.pointB = pointB;

    }

    attach(body){
     this.chain.bodyA=body
    }
    fly(){
    this.chain.bodyA=null
    }

    display(){
        if(this.chain.bodyA){
       var pointA= this.bodyA.position;
       var pointB= this.pointB

       //line(x1,y1,x2,y2)
       strokeWeight(3);
       line(pointA.x, pointA.y, pointB.x,pointB.y)
        }
    

        
    }
}