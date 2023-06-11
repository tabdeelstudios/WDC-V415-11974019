const { sum } = require("../utils/helper");

describe("Arithmetic tests", () => {
  test("10 plus 10 equals 20", () => {
    expect(10 + 10).toBe(20);
  });

  test("Number 2 is greater than Number 1", () => {
    let n1 = 10;
    let n2 = 20;
    expect(n2).toBeGreaterThan(n1);
  });

  test("Sum", () => {
    expect(sum(10, 20)).toBe(30);
  });
});

describe("Arrays and Objects", () => {
  const categories = ["Skin care", "Hair care", "Body care"];

  test("Baby care doesn't exist", () => {
    expect(categories).not.toContain("Baby care");
  });

  const book = {
    title: "Book name",
    price: 5000,
    author: "abcd",
  };

  test("all books with author abcd", () => {
    expect(book).toEqual({ title: "Book name", price: 5000, author: "abcd" });
  });
});

// npm init -y
// npm install -D jest
