
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

//calcula o faturamento total
let faturamentoTotal = 0;
for (let estado in faturamento) {
    faturamentoTotal += faturamento[estado];
}

// Calcula e exibe o percentual de cada estado
for (let estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    console.log(`O estado ${estado} representa ${percentual.toFixed(2)}% do faturamento total.`);
}