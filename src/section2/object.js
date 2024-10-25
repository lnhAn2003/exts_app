//Declare an object 
{
    const Person = {
        name    : "Nam",
        age     : "18",
        address : "HCM",
        greet() {
            return `hello my name is ${this.name}. I'm ${this.age} year old and live in ${this.address} city!`
        }
    };
    console.log(Person.name);
    console.log(Person.greet());
}

//Constructor Function
{
    function Person(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    const person_1 = new Person("Nam", "18", "HCM");
    console.log(`Hello ${person_1.name}! Whose is ${person_1.age} year old and live in ${person_1.address} city!`);
}

//Parent
{
    const parent = {
        greet(){
            return 'hello';
        }
    };

    const child = Object.create(parent);
    console.log(child.greet());
}

//[]
{
    const person = {
        name: "Nam",
        age: 30
    };

    console.log(person["name"]);

    const propName = "age";
    person[propName] = 31;
    console.log(person.age)
}

//add 
{
    const person = {
        name: "Nam"
    };

    person.age = 30;
    console.log(person);
}

//delete 
{
    const person = {
        name: "Nam",
        age: 30
    };

    Object.seal(person);//cannot add or delete 

    delete person.age;
    console.log(person);
}

//for . . . in
{
    const person = {
        name: "Nam",
        age: 30,
        city: 'HCM'
    };

    Object.freeze(person); //freeze the object
    person.age = 3;

    for (let a in person) {
        console.log(`${a}: ${person[a]}`);
    }

    console.log(Object.keys(person));
    console.log(Object.values(person));
    console.log(Object.entries(person));
}

//Object.assign()
{
    const target = {a: 2};
    const source = {a: 1, b: 2, c: 3};

    Object.assign(target, source);
    console.log(target);
}