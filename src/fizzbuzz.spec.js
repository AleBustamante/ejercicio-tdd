import generarFizzBuzz from "./fizzbuzz.js"


describe("FizzBuzz", () => {
    it("Deberia generar el mismo numero para uno que no tiene regla ej. 1", () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });
});