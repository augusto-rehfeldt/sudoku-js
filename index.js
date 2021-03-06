import { nuevoTablero } from "./generarTablero.js"

var range = function(start, end, step) {
    var range = [];
    var typeofStart = typeof start;
    var typeofEnd = typeof end;

    if (step === 0) {
        throw TypeError("Step cannot be zero.");
    }

    if (typeofStart == "undefined" || typeofEnd == "undefined") {
        throw TypeError("Must pass start and end arguments.");
    } else if (typeofStart != typeofEnd) {
        throw TypeError("Start and end arguments must be of same type.");
    }

    typeof step == "undefined" && (step = 1);

    if (end < start) {
        step = -step;
    }

    if (typeofStart == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }

    } else if (typeofStart == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Only strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    } else {
        throw TypeError("Only string and number types are supported");
    }

    return range;

}

const arrayWithoutElementAtIndex = function (arr, index) {
    return arr.filter(function(value, arrIndex) {
      return index !== arrIndex;
    });
  }

function enCuadrilatero(numero, i, k, inputs) {
    let cuadrilateros = {
        0: [inputs[0][0].value, inputs[0][1].value, inputs[0][2].value, 
        inputs[1][0].value, inputs[1][1].value, inputs[1][2].value,
        inputs[2][0].value, inputs[2][1].value, inputs[2][2].value],
        1: [inputs[0][3].value, inputs[0][4].value, inputs[0][5].value, 
        inputs[1][3].value, inputs[1][4].value, inputs[1][5].value,
        inputs[2][3].value, inputs[2][4].value, inputs[2][5].value],
        2: [inputs[0][6].value, inputs[0][7].value, inputs[0][8].value, 
        inputs[1][6].value, inputs[1][7].value, inputs[1][8].value,
        inputs[2][6].value, inputs[2][7].value, inputs[2][8].value],
        3: [inputs[3][0].value, inputs[3][1].value, inputs[3][2].value, 
        inputs[4][0].value, inputs[4][1].value, inputs[4][2].value,
        inputs[5][0].value, inputs[5][1].value, inputs[5][2].value],
        4: [inputs[3][3].value, inputs[3][4].value, inputs[3][5].value, 
        inputs[4][3].value, inputs[4][4].value, inputs[4][5].value,
        inputs[5][3].value, inputs[5][4].value, inputs[5][5].value],
        5: [inputs[3][6].value, inputs[3][7].value, inputs[3][8].value, 
        inputs[4][6].value, inputs[4][7].value, inputs[4][8].value,
        inputs[5][6].value, inputs[5][7].value, inputs[5][8].value],
        6: [inputs[6][0].value, inputs[6][1].value, inputs[6][2].value, 
        inputs[7][0].value, inputs[7][1].value, inputs[7][2].value,
        inputs[8][0].value, inputs[8][1].value, inputs[8][2].value],
        7: [inputs[6][3].value, inputs[6][4].value, inputs[6][5].value, 
        inputs[7][3].value, inputs[7][4].value, inputs[7][5].value,
        inputs[8][3].value, inputs[8][4].value, inputs[8][5].value],
        8: [inputs[6][6].value, inputs[6][7].value, inputs[6][8].value, 
        inputs[7][6].value, inputs[7][7].value, inputs[7][8].value,
        inputs[8][6].value, inputs[8][7].value, inputs[8][8].value],
    }

    if (1 <= numero && numero <= 9) {

        if (i === 0) {
            if (0 <= k && k <= 2) {
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[0], cuadrilateros[0].indexOf(cuadrilateros[0][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else if (3 <= k && k <= 5) {
                k = k - 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[1], cuadrilateros[1].indexOf(cuadrilateros[1][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else {
                k = k - 6
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[2], cuadrilateros[2].indexOf(cuadrilateros[2][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            }
        } else if (i === 1) {
            if (0 <= k && k <= 2) {
                k = k + 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[0], cuadrilateros[0].indexOf(cuadrilateros[0][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else if (3 <= k && k <= 5) {
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[1], cuadrilateros[1].indexOf(cuadrilateros[1][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else {
                k = k - 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[2], cuadrilateros[2].indexOf(cuadrilateros[2][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            }
        } else if (i === 2) {
            if (0 <= k && k <= 2) {
                k = k + 6
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[0], cuadrilateros[0].indexOf(cuadrilateros[0][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else if (3 <= k && k <= 5) {
                k = k + 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[1], cuadrilateros[1].indexOf(cuadrilateros[1][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else {
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[2], cuadrilateros[2].indexOf(cuadrilateros[2][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            }
        } else if (i === 3) {
            if (0 <= k && k <= 2) {
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[3], cuadrilateros[3].indexOf(cuadrilateros[3][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else if (3 <= k && k <= 5) {
                k = k - 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[4], cuadrilateros[4].indexOf(cuadrilateros[4][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else {
                k = k - 6
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[5], cuadrilateros[5].indexOf(cuadrilateros[5][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            }
        } else if (i === 4) {
            if (0 <= k && k <= 2) {
                k = k + 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[3], cuadrilateros[3].indexOf(cuadrilateros[3][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else if (3 <= k && k <= 5) {
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[4], cuadrilateros[4].indexOf(cuadrilateros[4][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else {
                k = k - 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[5], cuadrilateros[5].indexOf(cuadrilateros[5][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            }
        } else if (i === 5) {
            if (0 <= k && k <= 2) {
                k = k + 6
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[3], cuadrilateros[3].indexOf(cuadrilateros[3][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else if (3 <= k && k <= 5) {
                k = k + 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[4], cuadrilateros[4].indexOf(cuadrilateros[4][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else {
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[5], cuadrilateros[5].indexOf(cuadrilateros[5][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            }
        } else if (i === 6) {
            if (0 <= k && k <= 2) {
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[6], cuadrilateros[6].indexOf(cuadrilateros[6][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else if (3 <= k && k <= 5) {
                k = k - 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[7], cuadrilateros[7].indexOf(cuadrilateros[7][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else {
                k = k - 6
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[8], cuadrilateros[8].indexOf(cuadrilateros[8][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            }
        } else if (i === 7) {
            if (0 <= k && k <= 2) {
                k = k + 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[6], cuadrilateros[6].indexOf(cuadrilateros[6][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else if (3 <= k && k <= 5) {
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[7], cuadrilateros[7].indexOf(cuadrilateros[7][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else {
                k = k - 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[8], cuadrilateros[8].indexOf(cuadrilateros[8][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            }
        } else if (i === 8) {
            if (0 <= k && k <= 2) {
                k = k + 6
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[6], cuadrilateros[6].indexOf(cuadrilateros[6][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else if (3 <= k && k <= 5) {
                k = k + 3
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[7], cuadrilateros[7].indexOf(cuadrilateros[7][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            } else {
                var arrAux = arrayWithoutElementAtIndex(cuadrilateros[8], cuadrilateros[8].indexOf(cuadrilateros[8][k]))
                if (arrAux.includes(numero)) {
                    return true
                }
            }
        }
        // var arrAux = arrayWithoutElementAtIndex(cuadrilateros[x], cuadrilateros[x].indexOf(cuadrilateros[x][y]))
        
    }

    return false
}
  
function checkearTableroAll(inputOriginal, inputs) {
    let numero = inputOriginal.value
    if (!(1 <= numero && numero <= 9)) {
        inputOriginal.value = ""
    }
    for (let fila of inputs) {
        let indexY = 0
        for (let inp of fila) {
            checkearTablero(inp, inputs.indexOf(fila), indexY, inputs)
            indexY += 1
        }
    }
}

function checkearTablero(inputOriginal, x, y, inputs) {
    let numero = inputOriginal.value
    // filas
    let filas = arrayWithoutElementAtIndex(inputs[x], inputs[x].indexOf(inputOriginal))
    for (let inp of filas) {
        if (numero === inp.value) {
            if (1 <= numero && numero <= 9) {
                inputOriginal.style.color = "red"
                return false
            }
        }
        inputOriginal.style.color = "black"
    }
    // columnas
    for (let j of range(0, 8)) {
        if (j === x) {
            continue
        } else {
            if (numero === inputs[j][y].value) {
                if (1 <= numero && numero <= 9) {
                    inputOriginal.style.color = "red"
                    return false
                }
            }
        }
        inputOriginal.style.color = "black"
    }
    // cuadrilatero
    if (enCuadrilatero(numero, x, y, inputs)) {
        if (1 <= numero && numero <= 9) {
            inputOriginal.style.color = "red"
            return false
        }
    } 
    inputOriginal.style.color = "black"
}


function movimiento(direccion, valor_x, valor_y, inputs) {
    console.log(direccion, valor_x, valor_y)
    if (direccion === "arriba") {
        console.log("arriba")
        if (valor_x == 0) {
            console.log("1")
            for (let i of range(8, 0, 1)) {
                for (let fila of inputs) {
                    for (let inp of fila) {
                        if ((fila.indexOf(inp) == valor_y) && (inputs.indexOf(fila) == i)) {
                            if (!(inp.disabled === true)) {
                                console.log("caso 1", valor_x, valor_y)
                                inp.focus()
                                return false
                            }
                        }
                    }
                }
            }
        } else if (valor_x >= 1) {
            for (let i of range(valor_x-1, -1, 1)) {
                for (let fila of inputs) {
                    for (let inp of fila) {
                        if ((fila.indexOf(inp) == valor_y) && (inputs.indexOf(fila) == i)) {
                            if (!(inp.disabled === true)) {
                                console.log("caso 2", valor_x, valor_y)
                                inp.focus()
                                return false
                            }
                        }
                    }
                }
            }
            for (let k of range(8, -1, 1)) {
                if (k != valor_x) {
                    for (let fila of inputs) {
                        for (let inp of fila) {
                            if ((fila.indexOf(inp) == valor_y) && (inputs.indexOf(fila) == k)) {
                                if (!(inp.disabled === true)) {
                                    console.log("caso 3", valor_x, valor_y)
                                    inp.focus()
                                    return false
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (direccion === "abajo") {
        if (valor_x < 8) {
            for (let i of range(valor_x+1, 8)) {
                for (let fila of inputs) {
                    for (let inp of fila) {
                        if ((fila.indexOf(inp) == valor_y) && (inputs.indexOf(fila) == i)) {
                            if (!(inp.disabled === true)) {
                                console.log(valor_x, valor_y)
                                inp.focus()
                                return false
                            }
                        }
                    }
                }
            }
            for (let k of range(0, 8)) {
                if (k != valor_x) {
                    for (let fila of inputs) {
                        for (let inp of fila) {
                            if ((fila.indexOf(inp) == valor_y) && (inputs.indexOf(fila) == k)) {
                                if (!(inp.disabled === true)) {
                                    console.log(valor_x, valor_y)
                                    inp.focus()
                                    return false
                                }
                            }
                        }
                    }
                }
            }
        } else if (valor_x == 8) {
            for (let i of range(0, 8)) {
                for (let fila of inputs) {
                    for (let inp of fila) {
                        if ((fila.indexOf(inp) == valor_y) && (inputs.indexOf(fila) == i)) {
                            if (!(inp.disabled === true)) {
                                console.log(valor_x, valor_y)
                                inp.focus()
                                return false
                            }
                        }
                    }
                }
            }
        }
    } else if (direccion === "derecha") {
        if (valor_y < 8) {
            for (let i of range(valor_y+1, 8)) {
                for (let fila of inputs) {
                    for (let inp of fila) {
                        if ((fila.indexOf(inp) == i) && (inputs.indexOf(fila) == valor_x)) {
                            if (!(inp.disabled === true)) {
                                console.log(valor_x, valor_y)
                                inp.focus()
                                return false
                            }
                        }
                    }
                }
            }
            for (let k of range(0, 8)) {
                if (k != valor_x) {
                    for (let fila of inputs) {
                        for (let inp of fila) {
                            if ((fila.indexOf(inp) == k) && (inputs.indexOf(fila) == valor_x)) {
                                if (!(inp.disabled === true)) {
                                    console.log(valor_x, valor_y)
                                    inp.focus()
                                    return false
                                }
                            }
                        }
                    }
                }
            }
        } else if (valor_y == 8) {
            for (let i of range(0, 8)) {
                for (let fila of inputs) {
                    for (let inp of fila) {
                        if ((fila.indexOf(inp) == i) && (inputs.indexOf(fila) == valor_x)) {
                            if (!(inp.disabled === true)) {
                                console.log(valor_x, valor_y)
                                inp.focus()
                                return false
                            }
                        }
                    }
                }
            }
        }
    } else if (direccion === "izquierda") {
        if (valor_y == 0) {
            for (let i of range(8, 1, 1)) {
                for (let fila of inputs) {
                    for (let inp of fila) {
                        if ((fila.indexOf(inp) == i) && (inputs.indexOf(fila) == valor_x)) {
                            if (!(inp.disabled === true)) {
                                console.log(valor_x, valor_y)
                                inp.focus()
                                return false
                            }
                        }
                    }
                }
            }
        } else if (valor_y >= 1) {
            for (let i of range(valor_y-1, 0, 1)) {
                for (let fila of inputs) {
                    for (let inp of fila) {
                        if ((fila.indexOf(inp) == i) && (inputs.indexOf(fila) == valor_x)) {
                            if (!(inp.disabled === true)) {
                                console.log(valor_x, valor_y)
                                inp.focus()
                                return false
                            }
                        }
                    }
                }
            }
            for (let k of range(8, 0, 1)) {
                if (k != valor_y) {
                    for (let fila of inputs) {
                        for (let inp of fila) {
                            if ((fila.indexOf(inp) == k) && (inputs.indexOf(fila) == valor_x)) {
                                if (!(inp.disabled === true)) {
                                    console.log(valor_x, valor_y)
                                    inp.focus()
                                    return false
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


function generarTablero(htmlId, tablero_resuelto, dificultad) {
    var inputs = []

    for (let fila of tablero_resuelto) {
        var fila_inputs = []
        var row = document.createElement("div");
        row.className = "row d-flex p-0 m-0";
        row.id = `fila-${tablero_resuelto.indexOf(fila)}`
        document.getElementById(htmlId).appendChild(row);
        for (let valor of fila) {
            var casilla = document.createElement("input")
            casilla.type = "text"
            casilla.value = valor
            if (0 <= tablero_resuelto.indexOf(fila) && tablero_resuelto.indexOf(fila) <= 2) {
                if (0 <= fila.indexOf(valor) && fila.indexOf(valor) <= 2) {
                    casilla.className = "casilla par"
                } else if (3 <= fila.indexOf(valor) && fila.indexOf(valor) <= 5) {
                    casilla.className = "casilla"
                } else {
                    casilla.className = "casilla par"
                }
            } else if (3 <= tablero_resuelto.indexOf(fila) && tablero_resuelto.indexOf(fila) <= 5) {
                if (0 <= fila.indexOf(valor) && fila.indexOf(valor) <= 2) {
                    casilla.className = "casilla"
                } else if (3 <= fila.indexOf(valor) && fila.indexOf(valor) <= 5) {
                    casilla.className = "casilla par"
                } else {
                    casilla.className = "casilla"
                }
            } else {
                if (0 <= fila.indexOf(valor) && fila.indexOf(valor) <= 2) {
                    casilla.className = "casilla par"
                } else if (3 <= fila.indexOf(valor) && fila.indexOf(valor) <= 5) {
                    casilla.className = "casilla"
                } else {
                    casilla.className = "casilla par"
                }
            }
            casilla.disabled = true
            document.getElementById(`fila-${tablero_resuelto.indexOf(fila)}`).appendChild(casilla)
            fila_inputs.push(casilla)
        }
        inputs.push(fila_inputs)
    }

    var contador = 0
    var casillas_utilizadas = []

    while (contador <= dificultad) {
        let x = range(0, 8)[Math.floor(Math.random()*range(0, 8).length)]
        let y = range(0, 8)[Math.floor(Math.random()*range(0, 8).length)]
        if (casillas_utilizadas.includes(inputs[x][y])) {
            continue
        }
        inputs[x][y].disabled = false
        inputs[x][y].value = ""
        inputs[x][y].addEventListener('keydown', function (e) {
            e = e || window.event;
            switch (e.key || e.code) {
                case "ArrowUp": movimiento("arriba", x, y, inputs)
                    break;
                case "ArrowDown": movimiento("abajo", x, y, inputs)
                    break;
                case "ArrowLeft": movimiento("izquierda", x, y, inputs)
                    break;
                case "ArrowRight": movimiento("derecha", x, y, inputs);
                    break;
            }
        })
        casillas_utilizadas.push(inputs[x][y])
        contador += 1
    }

    for (let fila of inputs) {
        for (let inp of fila) {
            inp.addEventListener('keyup', function () {
                checkearTableroAll(inp, inputs)
            }) 
        }
    }

    async function funcionCheckearVictoria(inputs, tablero_resuelto) {
        let contadorVictoria = 0


        for (let fila of inputs) {
            for (let inp of fila) {
                if (inp.value == tablero_resuelto[inputs.indexOf(fila)][fila.indexOf(inp)]) {
                    contadorVictoria += 1
                }
            }
        }

        if (contadorVictoria === 81) {
            alert(`??Ganaste!\n${document.getElementById("timer").innerHTML}`)
            tiempoSegundos = document.getElementById("timerAux").innerHTML
            // pedir confirmacion para enviar tiempo con tiempoAux a una base de datos, 
            // pedir nombre de usuario
            // y mostrar mejores tiempos del server
            return false
        }
         

         setTimeout(() => {
            funcionCheckearVictoria(inputs, tablero_resuelto);
          }, 500); 
    }
        
    funcionCheckearVictoria(inputs, tablero_resuelto)

}

window.onLoad = generarTablero("tablero", nuevoTablero(), 55)


async function funcionTimer(fechaPrevia) {
    setTimeout(() => {
        funcionTimer(fechaPrevia);
      }, 100);
    let tiempoSegundos = (new Date().getTime()/1000 - fechaPrevia).toFixed(1)
    let tiempoMinutos = parseInt(tiempoSegundos / 60)
    let tiempoHoras = parseInt(tiempoMinutos / 60)
    document.getElementById("timer").innerHTML = `Tiempo: ${(tiempoHoras < 10) 
        ? '0' + (tiempoHoras) : tiempoHoras}:${((tiempoMinutos - 
            parseInt(60*tiempoHoras)) < 10) ? ("0" + (tiempoMinutos - 
                parseInt(60*tiempoHoras))) : (tiempoMinutos 
                    - parseInt(60*tiempoHoras))}:${((tiempoSegundos 
                        - parseInt(60*tiempoMinutos)).toFixed(1) < 10) 
                        ? ("0" + (tiempoSegundos - parseInt(60*tiempoMinutos)
                        ).toFixed(1)) : (tiempoSegundos - parseInt(60*tiempoMinutos)
                        ).toFixed(1)}`
    document.getElementById("timerAux").innerHTML = tiempoSegundos
}

let flag = false

document.onkeypress = inicioTimer

function inicioTimer() {
    if (!flag) {
        document.getElementById("timer").style.setProperty("opacity", "1", "important");
        funcionTimer(new Date().getTime()/1000)
        flag = true
    }
}