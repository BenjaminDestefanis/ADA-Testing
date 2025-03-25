// List of problems

// 1. Convert Celsius for Faherenhei

const convertCelsiusToFahrenheit = (celsius) => {
    // La formula para convertir de celsius a Fahrenhei es la temperatura en Celsius
    // multiplaco por 9/5, mas 32
    // La funcion recive los celcius (numero positivo), esta debe retornar los celcius 
    // convertidos a fahrenheit
    // tu codigo AQUI:

}

// 2. Un 2 Muy Potenciado

const powerOfTwo = (num) => {
    // La funcion recibe un numero entero (no negativo) y debe retornar una lista (array)
    // que contega todas las potencias de 2 (ej: 2**4, 2**3 etc.) elevado a "num". 
    // Debe incluir tambien el exponente 0. 
    // tu codigo AQUI:

}

// 3. El sumador

const summation = (number) => {
    // La funcion recibe un numero positivo, debe returnar el resultado de la suma de cada numero 
    // que hacen que sea "number"
    // EJ: number = 7 - debe devolver = 7 + 6 + 5 + 4 + 3 + 2 + 1 = 28
    // Tu codigo AQUI:

}

// 4. Operaciones Matematicas Basicas

const basicMathOperations = (operation, num1, num2) => {
    // La funcion recibe un operador y 2 numeros, dependiedo cual sea el operador que recibe
    // debe retornar el resultado de la operacion .
    // EJ: operation = "+" nume1 = 4, num2 = 10 . retornara 14
    // tu codigo AQUI: 
}

// 5. Area de una Flecha

const arrowArea = (sideA, sideB) => {
    // La funcion debe retornar el area de la superficie de de una flecha. Recibe la base (sideA)
    // y la altura (sideB). Debes utilizar la formula para obetener la superficie de un triangulo.
    // Recueda ver la siguiente imagen que se encuentra en la carpeta "images" para poder realizar 
    // para poder realizar el test correctamente (./images/arrowArea.png)
    // tu codigo AQUI:

}

// 6. Estan en orden?

const isInOrder = (arr) => {
    // la funcion recibe una array con numeros , debe retornar un valor boleano. Debe retornar
    // true si los numeros se encuentran en orden, y false si los numeros no estan en orden
    // EJ: [45,78,54,99] = false    /    [45,88,89,94] = true
    // tu codigo AQUI:

}

// 7. Calcula el costo total

const costPrice = (litres, pricePerLitres) => {
    // La funcion recibe una cantidad de litros (numero) y el precio por litro (numero).
    // Debe retornar el precio final (numero) 
    // Tener en cuenta lo siguiente : 
    // Las compras de 2 o mas litros obtienen un descuento de 5 centimos por litro
    // las compras de 4 o mas litros obtienen un descuento de 10 centimos por litro
    // y asi sucesivamente cada 2 litros hasta un descuento maximo de 25 centimos por litro.
    // tu codigo AQUI:

}

// 8. Chequear el factor

const checkFactor = (base, factor) => {
    // La funcion recive 2 numeros (base y factor), la funcion de be probar si el factor
    // es un factor de base , y retornar true si lo es, si no , retornar false.
    // tu codigo AQUI:

}

// 9. Es un numero Primo?

const isPrime = (num) => {
    // La function recibe un numero , debe retornar true o false dependiendo si
    // el numero es primo o no.
    // Recordemos que los numeros primos son aquellos que solo son divisibles entre ellos mismos y
    // el numero 1, si intentamsos dividirlos por cualquier otro numero , el resultado no es entero.
    // tu codigo AQUI:

}

// 10. Suma del Cuadrado

const squareSum = (numbers) => {
    // La funcion recibe array compuesto por numeros, debe retornar la suma de esos numeros 
    // potenciados al cuadrado.
    // tu codigo AQUI:
    
}





module.exports = {
    convertCelsiusToFahrenheit,
    powerOfTwo,
    summation,
    basicMathOperations,
    arrowArea,
    isInOrder,
    costPrice,
    checkFactor,
    isPrime,
    squareSum
}