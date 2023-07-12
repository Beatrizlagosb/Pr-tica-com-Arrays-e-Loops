const letra = "a";
const palavras = ["amanda", "ana", "maria", "anna", "carol"];


let quantidadePerderam = 0;

for (let palavra of palavras) {

    const letraInicial = palavra[0];

    if (letraInicial !== letra) {
        quantidadePerderam++;
    }

}

console.log(quantidadePerderam);