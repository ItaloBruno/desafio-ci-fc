const operacaoDeExponencial = require("./exponenciacao")

test("Exponenciar 2 por 2 tem que ser igual a 4", () => {
    expect(operacaoDeExponencial(2, 2)).toBe(4)
})