//uber calculation
class Uber {
    constructor(costPermile,costPerMinute){
        this.costPermile =costPermile;
        this.costPerMinute = costPerMinute;
    }
  Calculate(distance,time){
   var distanceCost = distance * this.costPermile;
   var timeCost = time * this.costPerMinute;
   var totel = distanceCost + timeCost ; 
   return totel;
  }

}
var ubercost = new Uber(20, 10);
var totel = ubercost.Calculate(10,20);
console.log(totel.toFixed(2)); 


//practice

// class Uber {
//     constructor(dd,tt){
//         this.dd =dd;
//         this.tt = tt;
//     }
//     calc(distance,time){
//       var distanceMd = distance * this.dd;
//       var timemile   = time * this.tt;
//       var result = distanceMd+ timemile;
//       return result
//     }
// }
// var obj = new Uber(20,10);
// var final = obj.calc(10,20)
// console.log(final.toFixed(3))