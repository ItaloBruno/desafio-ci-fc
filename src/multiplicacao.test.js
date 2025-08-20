const operacaoDeMultiplicar = require("./multiplicacao")

test("Multiplicar 5 * 2 tem que ser igual a 10", () => {
    expect(operacaoDeMultiplicar(5, 2)).toBe(10)
})