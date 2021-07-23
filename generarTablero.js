Array.range = function(a, b, step){
    var A = [];
    if(typeof a == 'number'){
        A[0] = a;
        step = step || 1;
        while(a+step <= b){
            A[A.length]= a+= step;
        }
    }
    else {
        var s = 'abcdefghijklmnñopqrstuvwxyz';
        if(a === a.toUpperCase()){
            b = b.toUpperCase();
            s = s.toUpperCase();
        }
        s = s.substring(s.indexOf(a), s.indexOf(b)+ 1);
        A = s.split('');        
    }
    return A;
}

function crearTablero() {
    var tablero = []

    for (let i of Array.range(0, 8)) {
        tablero.push([0, 0, 0, 0, 0, 0, 0, 0, 0])
    }

    return tablero
}

function enCuadrilatero(numero, i, k, tablero) {
    var cuadrilateros = {
        "0": [tablero[0][0], tablero[0][1], tablero[0][2], 
        tablero[1][0], tablero[1][1], tablero[1][2],
        tablero[2][0], tablero[2][1], tablero[2][2]],
        "1": [tablero[0][3], tablero[0][4], tablero[0][5], 
        tablero[1][3], tablero[1][4], tablero[1][5],
        tablero[2][3], tablero[2][4], tablero[2][5]],
        "2": [tablero[0][6], tablero[0][7], tablero[0][8], 
        tablero[1][6], tablero[1][7], tablero[1][8],
        tablero[2][6], tablero[2][7], tablero[2][8]],
        "3": [tablero[3][0], tablero[3][1], tablero[3][2], 
        tablero[4][0], tablero[4][1], tablero[4][2],
        tablero[5][0], tablero[5][1], tablero[5][2]],
        "4": [tablero[3][3], tablero[3][4], tablero[3][5], 
        tablero[4][3], tablero[4][4], tablero[4][5],
        tablero[5][3], tablero[5][4], tablero[5][5]],
        "5": [tablero[3][6], tablero[3][7], tablero[3][8], 
        tablero[4][6], tablero[4][7], tablero[4][8],
        tablero[5][6], tablero[5][7], tablero[5][8]],
        "6": [tablero[6][0], tablero[6][1], tablero[6][2], 
        tablero[7][0], tablero[7][1], tablero[7][2],
        tablero[8][0], tablero[8][1], tablero[8][2]],
        "7": [tablero[6][3], tablero[6][4], tablero[6][5], 
        tablero[7][3], tablero[7][4], tablero[7][5],
        tablero[8][3], tablero[8][4], tablero[8][5]],
        "8": [tablero[6][6], tablero[6][7], tablero[6][8], 
        tablero[7][6], tablero[7][7], tablero[7][8],
        tablero[8][6], tablero[8][7], tablero[8][8]],
    }

    if (0 <= i && i <= 2) {
        if (0 <= k && k <= 2) {
            if (cuadrilateros["0"].includes(numero)) {
                return true
            }
        }
        else if (3 <= k && k <= 5) {
            if (cuadrilateros["1"].includes(numero)) {
                return true
            }
        }
        else {
            if (cuadrilateros["2"].includes(numero)) {
                return true
            }
        }
    }
    else if (3 <= i && i <= 5) {
        if (0 <= k && k <= 2) {
            if (cuadrilateros["3"].includes(numero)) {
                return true
            }
        }
        else if (3 <= k && k <= 5) {
            if (cuadrilateros["4"].includes(numero)) {
                return true
            }
        }
        else {
            if (cuadrilateros["5"].includes(numero)) {
                return true
            }
        }
    }
    else {
        if (0 <= k && k <= 2) {
            if (cuadrilateros["6"].includes(numero)) {
                return true
            }
        }
        else if (3 <= k && k <= 5) {
            if (cuadrilateros["7"].includes(numero)) {
                return true
            }
        }
        else {
            if (cuadrilateros["8"].includes(numero)) {
                return true
            }
        }
    }

    return false
}

function rellenarTablero(tablero) {
    for (let i of Array.range(0, 8)) {
        for (let k of Array.range(0, 8)) {
            var numeros_a_utilizar = Array.range(1, 9)
            while (true) {
                if (numeros_a_utilizar.length === 0) {
                    return false
                }
                var numero = numeros_a_utilizar[
                    Math.floor(Math.random()*numeros_a_utilizar.length)
                ]
                if (tablero[i].includes(numero)) {
                    var index = numeros_a_utilizar.indexOf(numero)
                    numeros_a_utilizar.splice(index, 1)
                    continue
                } else {
                    var flag = false
                    for (let j of Array.range(0, 8)) {
                        if (numero === tablero[j][k]) {
                            var index = numeros_a_utilizar.indexOf(numero)
                            numeros_a_utilizar.splice(index, 1)
                            flag = true
                            break
                        }
                    }
                    if (flag) {
                        continue
                    }
                    if (enCuadrilatero(numero, i, k, tablero)) {
                        var index = numeros_a_utilizar.indexOf(numero)
                        numeros_a_utilizar.splice(index, 1)
                        continue
                    }
                    var index = numeros_a_utilizar.indexOf(numero)
                    numeros_a_utilizar.splice(index, 1)
                    tablero[i][k] = numero
                    break
                }
            }
        }
    }

    return tablero
}


export function nuevoTablero() {
    while (true) {
        var tablero = rellenarTablero(crearTablero())
        if (tablero) {
            return tablero
        }
    }
}

/* function sumarValores(arr) {
    var suma = 0
    for (let valor of arr) {
        suma += valor
    }
    return suma
}

var tiempos = []

start = +new Date();

for (let i of Array.range(1, 1000)) {
    start2 = +new Date();
    nuevoTablero()
    console.log(i)
    end2 = +new Date();
    tiempos.push(end2 - start2)
}

end = +new Date();

console.log("generado en:", (end - start)/1000, "s")
console.log("tiempo promedio por iteración:", (sumarValores(tiempos)/tiempos.length)/1000, "s")
console.log("Tiempo mínimo de rellenado:", Math.min(...tiempos)/1000, "s")
console.log("Tiempo máximo de rellenado:", Math.max(...tiempos)/1000, "s") */