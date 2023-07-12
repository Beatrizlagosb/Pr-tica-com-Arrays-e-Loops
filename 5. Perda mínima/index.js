
const precos = [8, 11, 4, 1];

let perdaMinima = Number.MAX_VALUE;;

for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {

        if (precos[i] - precos[j] >= 0) {
            if (precos[i] - precos[j] < perdaMinima) {
                perdaMinima = precos[i] - precos[j];
            }
        }

    }
}
console.log(perdaMinima);