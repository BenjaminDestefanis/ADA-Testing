// List of problems

// 1. Primer Factorial

const firstFactorial = (num) => {
    // La funcion recibe un numero, debe retornar el factorial de ese numero
    // EJ: num = 6 - operacion: 6*5*4*3*2*1 - retornara 720
    // si el numero es 0 o negativo - retornara el mensaje "Numero negativo"
    // tu codigo AQUI:
}

// 2. Encuentra el resto

const findRemeinder = (num1, num2) => {
    // La funccion recibe 2 numeros . PRIMERO: debemos averiguar cual es el divisor y el dividendo, 
    // en este caso el dividendo siempre debe ser el mayor de los 2 numeros. SEGUNDO: la funcion debe 
    // retornar el resto de la division entre esos numeros. 
    // en caso de que el divisor sea un 0 retornar el mensaje "No es posible dividir entre 0"
    // tu codigo AQUI:
}

// 3. Contador de divisores

const countDivisor = (n) => {
    // La funcion recibe un numero, debe retornar la cantidad de divisores, por los cuales, al
    // realizar la division , quede como resto 0. 
    // EJ: n = 6 . retorna 4 . tiene 4 divisores (6,3,2,1)
    // Si el numero recibido es 0 retornar el mensaje "Error"
    // tu codigo AQUI:
}

// 4. Cuantas ovejas perdimos?

const lostSheep = (friday, saturday, total) => {
    // La funcion recibe 3 argumentos , 2 matrizes y un numero. 
    // Cada array contiene numeros, que son los grupos de ovejas que regresaron a la granja,
    // un grupo pertenece a las que volvieron el viernes y el otro a las que volvieron el 
    // sabada. Luego el tercer argumento , es el total de ovejas que tenia registrado el 
    // granjero. La funcion debe retornar la cantidad de ovejas que no regresaron a la granja.
    // Si el resultado final es un numero negativo, debe retornar el mensaje "Registro equivocado!"
    // tu codigo AQUI:
}


// 5. Cuantas Pizzas comemos?

const countPizzas = (array) => {
    // La funcion recibe una matriz que contiene numeros. Estos indican
    // el nivel de hambre que tiene la persona ( 0 - 100). Dependiendo el nivel de hambre
    // que tiene la persona, sera la cantidad de poriones que comera. (0 - 30 [2 porciones], 
    // 31 - 50 [5 porciones], 51 - 80 [8 porciones], 81 - 100 [12 porciones]).
    // La funcion debe retornar un array que contenga: La cantidad de personas que van a cenar.
    // la cantidad de pizzas que se comeran (1 pizza = 8 porciones)
    // indicar con un valor booleano si sobran porciones o no
    // tu codigo AQUI:


}

// 6. Numeros primos del 1 al N

const primesUpToN = (N) => {
    // la funcion recibe un numero , debe retornar una array que contenga todos los 
    // numero primos que podemos hallar desde el numero 1 , hasta el numero que hemos recibido
    // como (N) , debemos colocarlos en un array y retornar el array.
    // Si no hay numeros primos, retornar el mensaje: "No se hallaron numeros (P)."
    // tu codigo AQUI:
}

// 7. Obtener promedio

const averageYear = (years) => {
    // La funcion recibe un array que contiene 12 numero, cada uno relacionado a cada
    // mes del año, la funcion debe retornar el promedio del año
    // El promedio final debe ser devuelto en formato INT
    // tu codigo AQUI:

}

// 8. Suma de dominos

const dotsOnDominoBones = (n) => {
    // La funcion recibe un numero que sera el numero maximo que pueden contener las 
    // fichas de domino. Cada ficha tiene 2 valores 
    // La funcion debe retornar la suma total de estos valores
    // PD: las secuencuas de las fichas no pueden repetirse
    // EJ: n = 2  -   [0 | 1] - [0 | 2] - [1 | 1] - [1 | 2] - [2 | 2]
    // Total = 1+2+2+3+4 = 12
    // tu codigo AQUI:

}

// 9. Descuento!

const applyingOfferts = (prices, discount1, discount2, discount3) => {
    // La funcion recibe 4 argumentos, un array que contiene precios (tipo float)
    // , y luegro 3 numeros, que son descuentos que se aplicarian a los precios
    // la funcion debe retornar un array, que contenga 4 matrizes , 
    // La primer matriz, que contenga los precios que no se les puede aplicar descuento,
    // el segundo, los precios  finales , con el primer descuento aplicado
    // el tercero, los precios  finales , con el segundo descuento aplicado
    // el cuarto, los precios finales, con el tercer descuento aplicado.
    // Los descuentos se aplican de esta manera :  si supera los 20.000$ , 
    // se aplica el primer descuento [dicount1], si supera los 50.000$ se aplica el
    // segundo descuento [discount2], y si supera los 80.000$ se aplica el tercer
    // descuento [discount3]. 
    // PD: los precios finales tienen que estar todos redondeados
    // tu codigo AQUI:
} 

// 10. Generala!

const letsPlayGeneral = (object) => {
    // La funcion recibe un objeto que contiene 3 propiedades 
    // (cada prop contiene, el valor de los 5 dados como maximo, que el jugador saco en ese tiro) :
    // La funcion debe retornar que es lo que obtuvo el jugador en su jugada
    // Solo corrovorar Escalera - Poker y Generala 
    // Ej : play1 : [1,6,3,4,4], play2 : [2,2,4], play3 : [4,3]
    // final game : [4,4] - [4] - [4] . Cuatros numeros igales = Poker
    
}




module.exports = {
    firstFactorial,
    findRemeinder,
    countDivisor,
    lostSheep,
    countPizzas,
    primesUpToN,
    averageYear,
    dotsOnDominoBones,
    applyingOfferts
}
