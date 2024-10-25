//Function Declarations
{
    function greet(name) {
        return `hello ${name}`;
    }

    console.log(greet("Function Declarations"));
}

//Function Expressions
{
    const greet = function(name) {
        return `hello ${name}`
    }

    console.log(greet("Function Expressions"));
}

//Self-Invoking Functions
{
    (function(name){
        console.log(`hello ${name}`);
    })("Self-Invoking Functions");
}

//Arrow Functions
{
    function Person(){
        this.age = 2;

        const count = setInterval(() => {
            this.age *= this.age;
            console.log(this.age)
        }, 1000)

        setTimeout(() => {
            clearInterval(count);
            console.log('It stop!')
        }, 5000);
    }

    const person = new Person();
}
//Arguments Function
{
    function sumAll(){
        let sum = 0;
        for (let i = 0; i < arguments.length; i++ ) {
            sum += arguments[i];
        }
        return sum;
    }

    console.log(sumAll(1, 2, 3, 5));
}