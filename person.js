class Person {
    constructor(name,age,gmail,number,gender,city,state){
        this.name = name;
        this.age  = age ;
        this.gmail = gmail;
        this.number = number;
        this.gender = gender;
        this.city = city;
        this.state = state;
    }   

    getperson(){
        return this.name;
    }
}
var Details = new Person("Mahesh","23","123@gmail.com","1234567890","Male","Coimbatore","Tamilnadu");
console.log(Details.getperson());
