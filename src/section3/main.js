const ImportClass = require('./class.js');
const Animal = require('./constructor.js');
const User = require('./private.js')

const example = new ImportClass();

class Dog extends Animal {
    constructor(name, bread){
        super(name);
        this.bread = bread;
    }

    showBreed() {
        console.log(`${this.name} is a ${this.bread}`);
    }
}

const dog = new Dog('Golden', 'Retriever');
dog.showBreed();
dog.makeSound();

const user = new User("HoaiAn", '123456789');
user.setPassword('9876');
console.log(user.authenticate('123456789'));

