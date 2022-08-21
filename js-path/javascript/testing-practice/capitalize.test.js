const capitalize = require("./capitalize");

test("capitalizes simple word", () => {
  expect(capitalize("tomas")).toBe("Tomas");
});

test("capitalizes number", () => {
  expect(capitalize("023")).toBe("023");
});

test("capitalizes hashtag", () => {
  expect(capitalize("#work")).toBe("#work");
});

test("capitalizes quote", () => {
  expect(capitalize("is this working?")).toBe("Is this working?");
});

test("capitalizes already capitalized word", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("capitalizes empty string", () => {
  expect(capitalize("")).toBe("");
});
