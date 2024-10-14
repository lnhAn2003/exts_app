interface IAnimal {
    name: string;
    makeSound(): void;
}

class Dog implements IAnimal{
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log('Bark');
    }
}

const dog = new Dog('Buddy');
dog.makeSound(); 

interface ICar {
    brand: string;
    model?: string;
}

class Car implements ICar{
    brand: string;
    model?: string;

    constructor(brand: string, model?: string){
        this.brand = brand;
        this.model = model;
    }

    showDetail() {
        console.log(`Brand: ${this.brand}, Model: ${this.model ? this.model : "this is Unknown"}`);
    }
}

const car1 = new Car("Toyota", "Corolla");
car1.showDetail();

const car2 = new Car("Honda");
car2.showDetail();

interface ICalculator {
    calculate: (x: number, y: number) => number;
}

class Calculator implements ICalculator {
    calculate(x: number, y: number): number{
        return x + y;
    }
}

const Calc = new Calculator();
console.log(Calc.calculate(5, 3));

//Implements
interface IPerson {
    name: string;
    age: number;
}

interface IEmployee extends IPerson {
    employeeID: number;
}

class Employee implements IEmployee {
    name: string;
    age: number;
    employeeID: number;;

    constructor(name: string, age: number, employeeID: number) {
        this.name = name;
        this.age = age;
        this.employeeID = employeeID;
    }

    showDetail(){
        console.log(`Name: ${this.name}, age: ${this.age}, employee ID: ${this.employeeID}`);
    }
}

const emp = new Employee("Alice", 25, 123456);
emp.showDetail();