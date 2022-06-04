
function resetear(){
    resultado.textContent = ""
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

function limpiar(){
    resultado.textContent = ""
}

function resolver(){
    let res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;
        case "^":
            res = Math.pow(operandoA, parseFloat(operandoB));
            break;
        case "√":
            res = Math.pow(parseFloat(operandoB), 1/operandoA);
            break;
        case "%":
            res = operandoA % (parseFloat(operandoB));
        case "logar":
            res = (Math.log(operandoA)) / (Math.log(parseFloat(operandoB)));
            
    }
    resetear()
    resultado.textContent = res
}

let operandoA;
let operandoB;
let operacion

function init(){
    //variables
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
    let raizCuadrada = document.getElementById("raizCuadrada");
    let elvCuadrado = document.getElementById("elvCuadrado");
    let elevar = document.getElementById("elevar");
    let raiz = document.getElementById("raizX");
    let bin = document.getElementById("Bin");
    let octa = document.getElementById("Octa");
    let hexa = document.getElementById("Hexa");
    let dec = document.getElementById("Dec");
    let rad = document.getElementById("Rad");
    let resid = document.getElementById("Residuo")
    let log = document.getElementById("Log");
    let ln = document.getElementById("Ln");
    let pi = document.getElementById("pi");
    let e = document.getElementById("e");

    //Eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0"
    }
    pi.onclick = function(e){
        resultado.textContent = resultado.textContent + "π"
        
    }
    e.onclick = function(e){
        resultado.textContent = resultado.textContent + "e"
    }
    



    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        if (resultado.textContent == "π"){
            operandoA = 3.14159265358979323846264338327950288419;
            operacion = "+";
            limpiar();
        }
        else if (resultado.textContent == "e"){
            operandoA = 2.7182818284590452353602874713526624977;
            operacion = "+";
            limpiar();
        }
        else{
            operandoA = resultado.textContent;
            operacion = "+";
            limpiar();
        }
        
        
    }
    resta.onclick = function(e){
        if (resultado.textContent == "π"){
            operandoA = 3.14159265358979323846264338327950288419;
            operacion = "-";
            limpiar();
        }
        else if (resultado.textContent == "e"){
            operandoA = 2.7182818284590452353602874713526624977;
            operacion = "-";
            limpiar();
        }
        else{
            operandoA = resultado.textContent;
            operacion = "-";
            limpiar();
        }
        
    }
    multiplicacion.onclick = function(e){
        if (resultado.textContent == "π"){
            operandoA = 3.14159265358979323846264338327950288419;
            operacion = "*";
            limpiar();
        }
        else if (resultado.textContent == "e"){
            operandoA = 2.7182818284590452353602874713526624977;
            operacion = "*";
            limpiar();
        }
        else{
            operandoA = resultado.textContent;
            operacion = "*";
            limpiar();
        }
        
    }
    division.onclick = function(e){
        if (resultado.textContent == "π"){
            operandoA = 3.14159265358979323846264338327950288419;
            operacion = "/";
            limpiar();
        }
        else if (resultado.textContent == "e"){
            operandoA = 2.7182818284590452353602874713526624977;
            operacion = "/";
            limpiar();
        }
        else{
            operandoA = resultado.textContent;
            operacion = "/";
            limpiar();
        }
        
    }
    igual.onclick = function(e){
        operandoB = resultado.textContent;
        resolver();
        
    }
    raizCuadrada.onclick = function(e){
        operandoA = resultado.textContent;
        limpiar();
        let res = Math.sqrt(operandoA);
        resultado.textContent = res;
    }
    elvCuadrado.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        limpiar();
        let res = Math.pow(operandoA, 2);
        resultado.textContent = res;
    }
    elevar.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        operacion = "^"
        limpiar();
    }
    raiz.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        operacion = "√"
        limpiar();
    }
    bin.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        var x = operandoA
        let binArray = []

        for (let i=0;i>-1;i++){
          let div = x%2
          binArray.push(div);
          x = x/2
          x = Math.trunc(x)
          if (x <1){
             break;
          } 
       }
        limpiar()
        let res = binArray.reverse()
        resultado.textContent = res
}
    octa.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        var x = operandoA
        let octaArray = []

        for (let i=0;i>-1;i++){
          let div = x%8
          octaArray.push(div);
          x = x/8
          x = Math.trunc(x)
          if (x <1){
             break;
          } 
       }
        limpiar()
        let res = octaArray.reverse()
        resultado.textContent = res
    }
    hexa.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        var x = operandoA
        let hexaArray = []

        for (let i=0;i>-1;i++){
          let div = x%16
          if (div == 10){
              div = "A";
          }
          else if (div == 11){
              div = "B";
          }
          else if (div == 12){
              div = "C";
          }
          else if (div == 13){
              div = "D";
          }
          else if (div == 14){
              div = "E"
          }
          else if (div == 15){
              div = "F"
          }
          hexaArray.push(div);
          x = x/16
          x = Math.trunc(x)
          if (x <1){
             break;
          } 
       }
        limpiar()
        let res = hexaArray.reverse()
        resultado.textContent = res
    }
    dec.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        var x = operandoA
        let decArray = []

        for (let i=0;i>-1;i++){
          let div = x%10
          decArray.push(div);
          x = x/10
          x = Math.trunc(x)
          if (x <1){
             break;
          } 
       }
        limpiar()
        let res = decArray.reverse()
        resultado.textContent = res
    }
    rad.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        var gcd = function(a, b) {
            if (!b) return a;
          
            return gcd(b, a % b);
          };
        let residuo = gcd(operandoA, 180)
        resultado.textContent = ((operandoA/residuo)+"/"+(180/residuo)+"π")
    }
    resid.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        limpiar();
        operacion = "%"
    }
    log.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        limpiar();
        operacion = "logar"
    }
    ln.onclick = function(e){
        operandoA = parseFloat(resultado.textContent);
        limpiar();
        resultado.textContent = Math.log(operandoA)
    }

}
