import calculator from "../code/calculator";
describe("calculator", () => {
  test("add 1+2 to equal 3", () => {
    expect(calculator.add(1, 2)).toEqual(3);
  });
  test("subtract 1-2 to equal -1", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });
  test("divide 1/2 to equal 0.5", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });
  test("divide 1*2 to equal 2", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
});
