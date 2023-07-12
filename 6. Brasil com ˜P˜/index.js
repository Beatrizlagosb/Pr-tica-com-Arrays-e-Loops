const palavras = ["amanda", "ana", "maria", "anna", "carol"];

const primeiraLetra = "a";
const segundaLetra = "n";

let contador = 0;

for (let palavra of palavras) {

    const primeiraLetraPalavra = palavra[0];
    const segundaLetraPalavra = palavra[1];

    if (primeiraLetra === primeiraLetraPalavra && segundaLetra === segundaLetraPalavra) {
        console.log(palavra);
        contador++;

    }
} if (contador === 0) {
    console.log("NENHUMA");
}

