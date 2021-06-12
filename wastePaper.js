class WastePaper {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false, 
        restitution:0.4,
        friction:0.05,
        density:1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);}
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("red");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };