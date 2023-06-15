// ? Calculator

// * addition - subtraction - multiplication - division

const addition = (x: number, y: number) => {
  return x + y
}
const subtraction = (x: number, y: number) => {
  return x - y
}
const multiplication = (x: number, y: number) => {
  return x * y
}
const division = (x: number, y: number) => {
  return x / y
}



const operators = {
  addition: "+",
  subtraction: "-",
  multiplication: "*",
  division: "/",
  equal: "="
}



const operations = []

const resultOperation = (operator: string, x: number, y: number): number => {
  switch (operator) {
    case operators.addition:
      return addition(x, y);

    case operators.subtraction:
      return subtraction(x, y);

    case operators.multiplication:
      console.log('aqui');
      return multiplication(x, y);

    case operators.division:
      return division(x, y);

    default:
      return 0
  }
}

let x: number = 0;
let operator: string = '';
let y: number = 0;
let result: number = 0;
const changeX = (number: number) => x = number;
const changeY = (number: number) => y = number;
const changeOperator = (string: string) => {
  if (y > 0 && x > 0) {
    x = resultOperation(operator, x, y);
    y = 0;
  }
  return operator = string
};
const equal = () => {
  if (x > 0 && y > 0) {
    result = resultOperation(operator, x, y);
    x = result;
    y = 0;
  }
}
const cc = () => {
  x = 0;
  y = 0;
  result = 0;
}


changeX(8);
changeOperator("*");
changeY(2)
changeOperator("+");
changeY(9);
changeOperator("-");
changeY(24);
changeOperator("+");
changeY(40);
equal();


console.log(`The operation of ${operator} between ${x} and ${y} is equal to ${result}`);





