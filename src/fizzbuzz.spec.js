import generarFizzBuzz from "./fizzbuzz.js"


describe("FizzBuzz", () => {
    it("Deberia generar el mismo numero para uno que no tiene regla caso numero 1", () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("Deberia generar el mismo numero para uno que no tiene regla caso numero 2", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });
    it("Deberia generar el texto Fizz para uno que es divisible entre 3 caso numero 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });
    it("Deberia generar el texto Fizz para uno que es divisible entre 3 caso numero 6", () => {
        expect(generarFizzBuzz(6)).toEqual("Fizz");
    });
    it("Deberia generar el texto Buzz para uno que es divisible entre 5 caso numero 5", () => {
        expect(generarFizzBuzz(5)).toEqual("Buzz");
    });
    it("Deberia generar el texto Buzz para uno que es divisible entre 5 caso numero 10", () => {
        expect(generarFizzBuzz(10)).toEqual("Buzz");
    });
    it("Deberia generar el texto Fizz Buzz para uno que es divisible entre 3 y 5 caso numero 15", () => {
        expect(generarFizzBuzz(15)).toEqual("Fizz Buzz");
    });
});