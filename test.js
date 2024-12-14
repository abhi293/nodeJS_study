console.log('Hi')
console.log('Welcome')

const calc = require('./calculator')  //calling another file in this file using require('./fileName')
calc.addition(7,6)  //addition is for add function in another file
calc.subtraction(7,5)
calc.multiplication(3,5)
calc.division(15,3)
