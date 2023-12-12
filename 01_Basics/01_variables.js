const id = "123"

/*
id=10
console.log(id);

this will give error as id is declared as constant. so its value os fixed!!
*/

let namee = "Rishi"
var age = 20
place = "mangad"

console.table([namee , age, place]);    // print in tabular format


namee = "kesh"
age = 0
place = "uk"

console.table([namee , age , place ])



/* 
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.



var should not be used!!
reason: scope allocation - var provide global scope whereas on case of let the scope limits within the block



//scope of const
The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, 
but if a constant is an object, its properties can be added, updated, or removed.




*/