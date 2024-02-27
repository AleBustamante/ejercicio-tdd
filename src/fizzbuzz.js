function generarFizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "Fizz Buzz";
    }
    else if (numero % 3 === 0) {
        return "Fizz";
    }
    else if (numero % 5 === 0) {
        return "Buzz";
    }
    return numero + "";
}

export default generarFizzBuzz;
