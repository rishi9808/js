const score = 33;
console.log(typeof score);

const value = "33";
console.log(typeof value);

// conversion operation

const numValue = Number(value);
console.log(typeof numValue);
console.log(numValue)


// !!Note special case

const strValue = "11abc"
const numStrValue = Number(strValue)
console.log(typeof numStrValue)
console.log(numStrValue)        //NaN (not a number)


// !!Note special case-2

// const boolVal = true
// const numBoolVal = Number(boolVal)
// console.log(typeof numBoolVal)
// console.log(numBoolVal)

// // !!Note special case-3
// const nullVal = null
// const numNullVal = Number(nullVal)
// console.log(typeof numNullVal)
// console.log(numNullVal)

// !!Note special case-4
const undefinedVal = undefined
const numUndefinedlVal = Number(undefinedVal)
console.log(typeof numUndefinedlVal)
console.log(numUndefinedlVal)



//conversion to number

// conversion_data    -     log output

// "33"               -     33
// "33abc"            -     NaN (Not a number)
// "null"             -     0
//  true              -     1
//  false"            -     0
//  undefined         -     NaN
//  "" (empty string) -     0
//  "abc" (non-empty) -     1







