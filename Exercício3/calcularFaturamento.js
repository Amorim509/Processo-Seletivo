
function calcularFaturamento(faturamentoMensal) {

    const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);
    
    //Calcula o maior e menor faturamento
    let menorFaturamento = diasComFaturamento[0].valor;
    let maiorFaturamento = diasComFaturamento[0].valor;

    for (const dia of diasComFaturamento) {
        if (dia.valor < menorFaturamento) {
            menorFaturamento = dia.valor;
        }
        if (dia.valor > maiorFaturamento) {
            maiorFaturamento = dia.valor;
        }
    }
    
    //Calcula a média de faturamento
    const totalFaturamento = diasComFaturamento.reduce((calc, dia) => calc + dia.valor, 0);
    const mediaFaturamento = totalFaturamento / diasComFaturamento.length;
    
    //Verifica os dias acima da media
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;
    
    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}
    
const faturamentoMensal = require('./faturamento.json');

const resultado = calcularFaturamento(faturamentoMensal);

console.log(`Menor valor de faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior valor de faturamento: ${resultado.maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);