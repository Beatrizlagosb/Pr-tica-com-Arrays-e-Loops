const disparos = [0, 50, 90, 80, 100, 80, 40];

let quantidadeDisparos = 0;

for (let pontuacao of disparos) {
    if (pontuacao > 70) {
        quantidadeDisparos++;
    }
}

if (quantidadeDisparos >= 3) {
    console.log(quantidadeDisparos);
} else {
    console.log("ELIMINADO");
}

