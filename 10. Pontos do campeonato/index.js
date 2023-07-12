const resultados = ["V", "E", "V", "E", "D"];

let pontosGanhos = 0;

for (let resultado of resultados) {
    if (resultado === "V") {
        pontosGanhos += 3;
    } else if (resultado === "E") {
        pontosGanhos += 1
    }
}
console.log(pontosGanhos);

