// 1. **კლასის შექმნა და ინიციალიზაცია**: შექმენი კლასი `User`, რომელსაც ექნება თვისებები `name` და `email`. კონსტრუქტორის მეშვეობით ინიციალიზაცია გაუკეთე ამ თვისებებს და შექმენი რამდენიმე `User` ობიექტი.

// Answer: 

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// const user1 = new User('saba', 'saba123saba@gmail.com');
// console.log(user1)

// 2. **მეთოდის შექმნა და გამოძახება**: დაამატე `User` კლასს მეთოდი `displayInfo()`, რომელიც კონსოლში დაბეჭდავს მომხმარებლის სახელს და ელფოსტას. შექმენი რამდენიმე `User` ობიექტი და გამოძახე ეს მეთოდი თითოეულზე.

// Answer: 

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    displayInfo() {
        console.log(this.name, this.email)
    }
}

const user = new User('saba', 'saba123saba@gmail.com');
user.displayInfo();

// 3. **სტატიკური მეთოდების გამოყენება**: დაამატე `User` კლასს სტატიკური მეთოდი `compareUsers(user1, user2)`, რომელიც შეადარებს ორ მომხმარებელს მათი `email`-ის მიხედვით. სცადე ამ მეთოდის გამოძახება ორ `User` ობიექტზე.

// Answer: 

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    displayInfo() {
        console.log(this.name, this.email)
    }
    
    static compareUsers(user1, user2) {
        return user1.email === user2.email;
    }
}

const user1 = new User('saba', 'saba123saba@gmail.com');
const user2 = new User('saba', 'saba123saba@gmail.com');
const user3 = new User('saba', 'saba1233saba@gmail.com');

console.log(User.compareUsers(user1, user2));
console.log(User.compareUsers(user1, user3)); 
