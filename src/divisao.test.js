const operacaoDeDividir = require("./divisao")

test("Dividir 10 por 2 tem que ser igual a 5", () => {
    expect(operacaoDeDividir(10, 2)).toBe(5)
})