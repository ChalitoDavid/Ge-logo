class Hierro extends BaseClass{
	constructor(x,y,width, height){
	  var options = {
		'restitution':0.8,
		'friction': 3,
		'density': 30

	  };
	  super(x,y,width,height,options);
  
	}
  }