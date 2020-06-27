class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':0.5,
          'friction':0.2,
          'density':0.5,
      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius=r
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    
    }
  }