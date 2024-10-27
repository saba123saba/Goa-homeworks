class Human {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    printInfo() {
        console.log(this.firstname, this.lastname)
    }
}

class Worker extends Human {
    constructor(firstname, lastname, position) {
        super(firstname, lastname);
        this.position = position;
    }
}

const Worker1 = new Worker('saba', 'kublashvili', 'child');
console.log(Worker1)


        // დავალებაა

//1. ძირითადი კლასი და შვილები: შექმენი ძირითადი კლასი Animal, რომელსაც ექნება name და age თვისებები და მეთოდი speak(), რომელიც გამოაქვეყნებს ტექსტს: "This animal makes a sound." შემდეგ შექმენი ორი შვილკლასი Dog და Cat, რომლებიც მემკვიდრეობით მიიღებენ Animal-ს და გააფართოვებენ speak() მეთოდს ისე, რომ Dog კლასი გამოაქვეყნებს "Bark!" და Cat - "Meow!".


class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    speak() {
        console.log( "This animal makes a sound.");
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    
    speak() {
        console.log('Bark!')
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    
    speak() {
        console.log('Meow!')
    }
}

const Animal1 = new Animal('tobi', 6);
Animal1.speak();

const dog1 = new Dog('tobi', 6);
dog1.speak();

const Cat1 = new Cat('tobi', 6);
Cat1.speak();