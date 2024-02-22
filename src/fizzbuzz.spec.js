import generarFizzBuzz from "./fizzbuzz.js"


describe("FizzBuzz", () => {
    it("Deberia generar el mismo numero para uno que no tiene regla caso numero 1", () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });
    it("Deberia generar el mismo numero para uno que no tiene regla caso numero 2", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });
    it("Deberia generar el mismo numero para uno que tiene la regla Fizz caso numero 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });
});