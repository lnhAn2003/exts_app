class Animal{
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} make sound!`);
    }
}

module.exports = Animal;