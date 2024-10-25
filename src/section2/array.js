//simple array
{
    //Created standard array
    const fruits = ["Táo", "Chuối", "Cam"];
    console.log(fruits);

    //Created new array with new
    const numbers = new Array(1, 2, 3, 4);
    console.log(numbers); 

    //Search
    console.log(fruits[0]);

    //Add 
    fruits.push('Bơ');
    console.log(fruits);

    //Add new item to the index[0]
    fruits.unshift('Dưa');
    console.log(fruits);

    //Delete the last item
    fruits.pop();
    console.log(fruits);

    //Delete the first item
    fruits.shift();
    console.log(fruits);

    //Update the data
    fruits[0] = "Xoài";
    console.log(fruits);

    //How long is array
    console.log(fruits.length);

    //Combine 2 array
    const array1 = [1, 2];
    const array2 = [3, 4];
    const combined = array1.concat(array2);
    console.log(combined); 

    //Create new data from the previous one
    const sliced = fruits.slice(1, 3);
    console.log(sliced); 

    //splice
    fruits.splice(1, 1, "Xoài");
    console.log(fruits); 

    //find the first and last item of array
    console.log(fruits.indexOf("Xoài"));
    console.log(fruits.lastIndexOf("Xoài"));

    //Check if item in array
    console.log(fruits.includes('Xoài'));

    //Change array to string
    console.log(fruits.join(", "));

    //reverse
    console.log(fruits.reverse());

    //sort
    console.log(fruits.sort());

    //map
    const doubled = numbers.map(x => x * 2);
    console.log(doubled); 

    //filter
    const even = numbers.filter(x => x % 2 === 0);
    console.log(even);

    //reduce
    const sum = numbers.reduce((acc, current) => acc + current, 0);
    console.log(sum);

    //matrix 
    const matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    console.log(matrix[0][1]);
    console.log(Array.isArray(matrix));
}

