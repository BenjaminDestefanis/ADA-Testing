const {
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
} = require("../level1.js")



// Test 1
describe('1. convertCelsiusToFahrenheit(celsius)', () => {
    it("Debe retornar la conversion en Fahrenheit(numero).", () => {
        expect(convertCelsiusToFahrenheit(32)).toBe(89.6)
        expect(convertCelsiusToFahrenheit(41)).toBe(105.8)
        expect(convertCelsiusToFahrenheit(0)).toBe(32)
    })
})


//Test 2
describe('2. powerOfTwo(num)', () => {
    it("Debe retornar la suma de los resultados del numero 2, elevado a 'num'.", () => {
        expect(powerOfTwo(12)).toBe(8190)
        expect(powerOfTwo(5)).toBe(62)
        expect(powerOfTwo(2)).toBe(6)
        expect(powerOfTwo(0)).toBe(1)
    })
})


//Test 3

describe('3. summation(number)', () => {
    it("Debe retornar la suma total de los numeros antes de 'number'.", () => {
        expect(summation(4)).toBe(10)
        expect(summation(7)).toBe(28)
    })
})

//Test 4 

describe('4. basicMathOperations(operation, num1, num2)', () => {
    it("Dependiendo que cual sea el operador, la funcion debe realizar la operacion y retornar el resultado.", () => {
        expect(basicMathOperations("+", 4, 28)).toBe(32)
        expect(basicMathOperations("-", 50, 36)).toBe(14)
        expect(basicMathOperations("/", 42, 2)).toBe(21)
        expect(basicMathOperations("*", 8, 3)).toBe(24)
    })
})


//Test 5

describe('5. arrowArea(sideA, sideB', () => {
    it("Debe retornar el valor(numero) de la superficie de la flecha(triangulo).", () => {
        const sideA = 24
        const sideB = 35
        expect(arrowArea(sideA, sideB)).toBe(210)
        expect(arrowArea(15, 23)).toBe(86.25)
    })
}) 


//Test 6 

describe('6. isInOrder(arr)', () => {
    it("Debe retornar true si los numeros recibidos estan en orden, si no debe retornar false.", () => {
        const arr1 = [1,23,25,78,84,89,93,150]
        const arr2 = [48,54,56,33,78,89]
        const arr3 = [1,21,28,46,78,80,85,92]
            expect(isInOrder(arr1)).toBe(true)
            expect(isInOrder(arr2)).toBe(false)
            expect(isInOrder(arr3)).toBe(true)
    })
})

//Test 7

/* describe('7. costPrice(litres, pricePerLitres)', () => {
    it("Debe retornar el precio final con el escuento aplicado", () => {
        
    })
}) */

//Test 8

describe('8. checkFactor(base, factor)', () => {
    it("Debe averiguar si el si es factro de la base.", () => {
        expect(checkFactor(2450, 5)).toBe(true)
        expect(checkFactor(63, 7)).toBe(true)
        expect(checkFactor(10, 2)).toBE(true)
    })
})


//Test 9

describe('9. isPrim(num)', () => {
    it("Debe retornar true o false dependiendo si es un numero primo o no.", () => {
        expect(isPrime(17)).toBe(true)
        expect(isPrime(59)).toBe(true)
        expect(isPrime(88)).toBe(false)
        expect(isPrime(21)).toBe(false)
    })
})


//Test 10 

describe('10 .squareSum(numbers)', () => {
    it("Debe retornar la suma total de los numeros al cuadrado.", () => {
        expect(squareSum([2,7,6,4])).toBe(105)
        expect(squareSum([15,22])).toBe(709)
    })
})


