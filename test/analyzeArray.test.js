import analyzeArray from "../code/analyzeArray";

describe("analyze array of numbers", () => {
  test("array [1,8,3,4,2,'6'] is not an array of numbers", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, "6"])).toBe("not an array of numbers");
  });

  test("average, min, max, length of [1,8,3,4,2,6] is 4, 1, 8, 6 respectively", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
