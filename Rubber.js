class Rubber extends BaseClass{
	constructor(x,y,width, height){
	  var options = {
		'restitution':0.3,
		'friction': 50,
		'density': 1

	  };
	  super(x,y,width,height,options);
  
	}
  }