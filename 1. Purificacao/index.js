const dadoCorrompido = "Felis) silvestris *catus& ";

let dadoPurificado = "";

for (let caractere of dadoCorrompido) {
    if (/[!@#$%&*()]/.test(caractere)) {
        caractere === "!" ||
            caractere === "@" ||
            caractere === "#" ||
            caractere === "$" ||
            caractere === "%" ||
            caractere === "&" ||
            caractere === "*" ||
            caractere === "(" ||
            caractere === ")";
    } else {
        dadoPurificado += caractere;
    }
}
console.log(dadoPurificado);