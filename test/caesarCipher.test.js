import caesarCipher from "../code/caesarCipher";

test("encode 'i am learning js' by shifting each character by 1", () => {
  expect(caesarCipher("i am learning js", 1)).toBe("j bn mfbsojoh kt");
});

test("encode 'i am learning js' by shifting by 2", () => {
  expect(caesarCipher("i am learning js", 2)).toBe("k co ngctpkpi lu");
});

test("encode 'i am learning js' by shifting by 5", () => {
  expect(caesarCipher("i am learning js", 5)).toBe("n fr qjfwsnsl ox");
});

test("encode 'i am learning js' by shifting by 5", () => {
  expect(caesarCipher("i am learning js", 5)).toBe("n fr qjfwsnsl ox");
});

test.skip("encode 'z' by wrapping shifting by 1", () => {
  expect(caesarCipher("az", 1)).toBe("ba");
});

test("encode 'I Am' by shifting by 1", () => {
  expect(caesarCipher("I Am", 1)).toBe("j bn");
});
