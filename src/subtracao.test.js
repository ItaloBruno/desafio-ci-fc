const operacaoDeSubtrair = require("./subtracao")

test("Subtrair 5 - 2 tem que ser igual a 3", () => {
    expect(operacaoDeSubtrair(5, 2)).toBe(3)
})