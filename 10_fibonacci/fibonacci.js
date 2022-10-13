

const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {return "OOPS";}
    else if(num === 1){return 1;}
    else {

    let a = 0;
    let b = 1;
    let resultado = 0;

        for (let i = 2; i <= num; i++){
        resultado = a + b;
        a = b;
        b = resultado;       
        }

    return resultado;

    }
};

// Do not edit below this line
module.exports = fibonacci;

/*
function fibonacci(num){
    num = parseInt(num);
    if (num < 0) {return "OOPS");}
    else if(num === 1){return 1);}
    else {

    let a = 0;
    let b = 1;
    let resultado = 0;

        for (let i = 2; i <= num; i++){
        resultado = a + b;
        a = b;
        b = resultado;       
        }

    return resultado);

    }
};

fibonacci(8);
*/