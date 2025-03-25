// Lista de problemas

// Cambiar de Celius a Farenehi

function convertCelciusToFahrenheit(celcius){
    let farenheit = (celcius * 9 / 5) + 32
    return farenheit
}

// Suma de pares con fibonacci 

function fibonacciEvenSum(n){

    let initA = 1
    let initB = 2

    let sumResult = 0

    while(initB <= n){
        if(initB % 2 === 0){ // Corroborar si n es mayor que el minimo permitido (2)
            sumResult += initB
        }

        // Secuencua de fibonacci en accion
        let temp = initB
        initB = initA + initB
        initA = temp
    }

    return sumResult
}

// Numero primo mayor

function largestPrimeFactor(num){
    let primoMayor = 1

    while (num % 2 === 0){
        primoMayor = num // corroborar si es divisible y almacenarlo
        num = num / 2   // reduccion del numero recibido
    }

    for (let i = 3; i <= Math.sqrt(num); i = i + 2){ // investigar
        while (num % i === 0){
        primoMayor = i
        num = num / i
        }
    }

    if (num > 2){
        primoMayor = num
        }

  return primoMayor
}

// 10001st prime

function stPrime(n){

    // Chequear si el numero es primo

    function isPrime(num){
        for (let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                return false
            }
        }

        return true
    }

    // Logica para retornar la posicion del numero primo

    let count = 0
    let number = 2

    while (count !== n){
        if(isPrime(number)){
            count++
        }
        number++
    }

    return number - 1
}

 // encontrar primos gemelos


 function primosGemelos(limite){

    // Averiguar si es primo un numero

    const esPrimo = (n) => {
        if(n <= 1){
            return false
        }

        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0){
                return false
            }
        }

        return true
    }

    // Logica para encontrar los gemelos

    let primosGemelos = []

    for(let i = 2; i <= limite - 2; i++){
        if(esPrimo(i) && esPrimo(i + 2)){
            primosGemelos.push([i, i + 2])
        }
    }

    return primosGemelos
 }

 // Calculo de intereses compuestos

 function calcularInteresCompuesto(inversion, tasa, años){
    return  inversion * Math.pow(1 + tasa/100, años)
}

// Calculo de media aritmetica

function calcularMediaaritmetica(numbers){

    // Case 1 - Programacion Declarativa
    //const aritmeticMedia = numbers.reduce((total, num) => total + num, 0) // Aqui el 0 indica el valorinicial del acumulador 
    //return aritmeticMedia / numbers.length

    // Case 2 - Programacion Funcional

    let count = 0

    for( let i = 0; i < numbers.lenght; i++){
        count += numbers[i]
    }

    return count / number.lenght

}