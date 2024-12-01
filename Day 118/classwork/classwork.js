class Dog {
    constructor(name, owner) {
        this._name = name;
        this._owner = owner;
    }
    
    get name() {
        return this._name;
    }
}

const dog1 = new Dog('tobi', 'saba');
console.log(dog1.name);

console.log(process)