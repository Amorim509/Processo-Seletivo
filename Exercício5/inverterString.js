
function inverterString(string) {
    
    let resultado = '';

    for (let i = string.length - 1; i >= 0; i--) {
        resultado += string[i];
    }
    
    return resultado;
}

const stringOriginal = 'Paralelepipedo'
const stringInversa = inverterString(stringOriginal);
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInversa}`);

