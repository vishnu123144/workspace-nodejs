/*
Interfaces

An interface is a keyword which is used to declare a TypeScript Interface.
An interface_name is the name of the interface.
An interface body contains variables and methods declarations.
*/

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 20, label: "Size 20 Object" };
printLabel(myObj);

/*----------------------------------------------------------------------------*/
/* 
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare);
 */
