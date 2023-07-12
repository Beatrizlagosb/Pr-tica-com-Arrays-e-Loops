const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let menorNota = notas[0];
let maiorNota = notas[0];
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {

    somaDasNotas += notas[i];

    if (notas[i] < menorNota) {
        menorNota = notas[i];
    }
    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    }

}

somaDasNotas = somaDasNotas - maiorNota - menorNota;
let dividor = notas.length - 2;
let media = somaDasNotas / dividor;
console.log(media);
