let sequencia = [">", ">", ">", "<", ">", ">", ">", ">", ">", ">"];
let indice = 0;

for (let i = 0; i < sequencia.length; i++) {

    if (sequencia[i] === ">") {
        indice++;
    } else {
        indice--;
    } if (indice === -1) {
        indice = 6;
    } else if (indice > 6) {
        indice = 0;
    }
}
console.log(indice);