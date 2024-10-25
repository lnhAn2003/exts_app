{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;
    console.log(length);
}

{
    let text = "HELLO WORLD";
    let char = text.charAt(0);
    console.log(char);
}

//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().
{
    let str = "Apple, Banana, Kiwi";
    let part = str.substring(7, 13);
    console.log(part)
}

//substr() is similar to slice().
//The difference is that the second parameter specifies the length of the extracted part.

{
    let str = "Apple, Banana, Kiwi";
    let part = str.substr(7, 6);
    console.log(part)
    let part2 = str.substr(-4);
    console.log(part2)
}

//UpperCase

{
    let text1 = "Hello World!";
    let text2 = text1.toUpperCase();
    let text3 = text1.toLowerCase();
    console.log(text2)
    console.log(text3)
}

//concat
//The concat() method can be used instead of the plus operator.
{
    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);
    console.log(text3)
}

//trim
//The trim() method removes whitespace from both sides of a string
//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
{
    let text1 = "      Hello World!      ";
    let text2 = text1.trim();
    console.log(text2)
}

//The padStart() method pads a string from the start.
//It pads a string with another string (multiple times) until it reaches a given length.
{
    let numb = 5;
    let text = numb.toString();
    let padded = text.padStart(4,"0");
    console.log(padded)
}

//The padEnd() method pads a string from the end.
//It pads a string with another string (multiple times) until it reaches a given length.
{
    let numb = 5;
    let text = numb.toString();
    let padded = text.padEnd(4,"0");
    console.log(padded)
}

//The repeat() method returns a string with a number of copies of a string.
//The repeat() method returns a new string.
//The repeat() method does not change the original string.
{
    let text = "Hello world!";
    let result = text.repeat(4);
    console.log(result);
}

// The replace() method replaces a specified value with another value in a string
// To replace case insensitive, use a regular expression with an /i flag (insensitive)
// To replace all matches, use a regular expression with a /g flag (global match):
{
    let text = "Please visit Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools");
}

//A string can be converted to an array with the split() method
{
    let text = "a,b,c,d,e,f";
    const myArray = text.split(",");
    console.log(myArray)
}