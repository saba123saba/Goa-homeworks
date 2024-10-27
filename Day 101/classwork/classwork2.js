// მშობლის მეთოდის გამოყენება შვილიდან: შექმენი კლასი Vehicle, რომელსაც ექნება თვისებები make, model, და მეთოდი displayInfo(), რომელიც კონსოლში დაბეჭდავს მანქანის ინფორმაციას. შემდეგ შექმენი შვილი კლასი Car, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატებს თვისებას fuelType. გააფართოვე displayInfo() მეთოდი ისე, რომ ის გამოძახებულ იქნას მშობელი კლასიდან და შემდეგ დაემატოს ახალი ინფორმაცია fuelType-ზე.


class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    
    displayInfo() {
        console.log('Car is in best situation!')
    }
}

class Car extends Vehicle {
    constructor(make, model, fueltype) {
        super(make, model, fueltype);
    }
    
    displayInfo() {
        console.log('is the best standarts')
    }
}

const Vehicle1 = new Vehicle('japan', 'Mercedes Benz');
Vehicle1.displayInfo();

const Car1 = new Car('japan', 'Mercedes Benz');
Car1.displayInfo();

