/* 
Type Inference

Types are inferred by TypeScript compiler when:
Variables are initialized
Default values are set for parameters
Function return types are determined

*/
var arr = [0, 1, "test"];
console.log(arr);

// Ok
arr.push("str")
console.log(arr);

// Compiler Error
arr.push(true);
console.log(arr);
