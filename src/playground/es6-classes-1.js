
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi! I'm ${this.name}.`;
    }

    getDescription() {
        return `Hi! I'm ${this.name} and I'm ${this.age} year(s) old.`;
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name,age)
        this.major = major;
    }

    hasMajor() {
        return !!this.major   
    }

    getDescription() {
        let desciption = super.getDescription();
        if(this.hasMajor()) {
            desciption += ` And my major is ${this.major}`;
        }
        return desciption;
    }
}

class Traveler extends Person {
    constructor(name,age,homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    
    }
    
    hasHome() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        
        if(this.hasHome()) {
            greeting += ` And I came from ${this.homeLocation}`
        }

        return greeting;
    }

}

const me = new Traveler("Dor Malka",26,'Israel');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());