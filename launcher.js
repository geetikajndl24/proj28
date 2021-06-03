class launcher{
    constructor(body, pointB){
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }

        this.bodyA= body
        this.launcher = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.launcher);
    }

    attach(body)
    {
        this.launcher.bodyA=body;
    }

    fly(){
        this.launcher.bodyA = null;
    }
    
    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}