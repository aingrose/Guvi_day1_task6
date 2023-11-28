
class Circle {
    constructor(radius,color){
       this.radius = radius;
       this.color = color ;

    }
    getradius(){
        return this.radius
    }
    set setradius(radius){
       this.radius = radius;
    }
    getcolor(){
       return this.color 
    }
    set colorset(color){
        this.color = color;
    }
    toString(){
        return `Circle radius =${this.radius}, color = ${this.color}`
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    getcircumtance(){
        return 2 * Math.PI * this.radius;
    }

}
var round = new Circle(1.0,"red");

var getradius = round.getradius();
console.log(getradius.toFixed(1));

round.setradius = 2;
console.log(round.toString());

var getcolor = round.getcolor();
console.log(getcolor)

round.colorset = "blue";
console.log(round.toString());

var getArea = round.getArea();
console.log(Math.round(getArea));

var getcircumtance = round.getcircumtance();
console.log(Math.round(getcircumtance));










