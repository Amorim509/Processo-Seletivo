
function fibonacci(n) {
    
    let a = 0;
    let b = 1;
    let calc;

    if (a === n || b === n) {
        return `O número ${n} pertence a sequencia de fibonacci`
    }

    while (b < n) {
        calc = a + b;
        a = b;
        b = calc;
    }

    if (b === n) {
        return `O número ${n} pertence a sequencia de fibonacci`
    } else {
        return `O número ${n} não pertence a sequencia de fibonacci`
    }
}

const numero = 8;
const resultado = fibonacci(numero);
console.log(resultado);

const numero2 = 4;
const resultado2 = fibonacci(numero2);
console.log(resultado2);
