const operacaoDesoma = require("./operacoes")

test("Somar 1 + 4 tem que ser igual a 5", () => {
    expect(operacaoDesoma(1, 4)).toBe(5)
})