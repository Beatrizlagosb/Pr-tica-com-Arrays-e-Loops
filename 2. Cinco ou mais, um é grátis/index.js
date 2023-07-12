const valoresProdutos = [100, 200, 300, 400, 500, 600];

let somaProdutos = 0;
let menorValor = valoresProdutos[0];

if (valoresProdutos.length >= 5) {
    for (let i = 0; i < valoresProdutos.length; i++) {
        somaProdutos += valoresProdutos[i];

        if (valoresProdutos[i] < menorValor) {
            menorValor = valoresProdutos[i];
        }
    }
    somaProdutos = somaProdutos - menorValor;
    console.log(somaProdutos);
} else {

    for (let j = 0; j < valoresProdutos.length; j++) {
        somaProdutos += valoresProdutos[j];
    }
    console.log(somaProdutos);
}