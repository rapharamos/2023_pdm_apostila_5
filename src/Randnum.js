function randNum() {
    var numeros = []
    while (numeros.length <6) {
        var numero = Math.floor(Math.random() * 60) +1
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    return numeros;
}