import capitalize from "../code/capitalize";

test("capitalize first letter of string", () => {
  expect(capitalize("string")).toBe("String");
});
