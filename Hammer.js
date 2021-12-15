class Hammer extends BaseClass{
  constructor(x,y, width,height){
    var options = {

    };
    super(x,y,width,height,options);

  }
  display(){
  this.body.position.x = mouseX;
  this.body.position.y = mouseY;
  super.display();
  }
}