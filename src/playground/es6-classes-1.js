class Person{
    constructor(name='anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
    getGreeting(){
        return `Hi i am ${this.name}`;
    }
}
class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description=super.getDescription();
        if(this.hasMajor()){
            description+=`their major is ${this.major}`;
        }
        return description;
    }
    
}
class Traveler extends Person{
    constructor(name,age,location){
        super(name,age)
        this.location=location;
    }
    getGreeting(){
        let greeting=super.getGreeting();
        if(!!this.location){greeting+=` I am in ${this.location}`;}
        return greeting;
    }
}
const me= new Traveler('luisMa',31);
console.log(me.getGreeting());

const him= new Traveler(undefined,23,'Ontario');
console.log(him.getGreeting());

const her= new Traveler( );
console.log(her.getGreeting());