function add(a,b){
console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
     console.log(a*b)
}

function div(a,b){
    console.log(a/b)
}

module.exports={  //module.exports allow this file to be usab
    addition:add,
    subtraction:sub,
    multiplication:mul,
    division:div
}