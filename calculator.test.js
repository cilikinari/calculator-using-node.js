import { test, expect } from "vitest";
import calculator from "./calculator.js";

test("penjumlahan 10 + 3 = 13", () => {
  expect(calculator("+", 10, 3)).toBe(13);
});
test("pengurangan 6 - 4 = 2", () => {
  expect(calculator("-", 6, 4)).toBe(2);
});
test("perkalian 5 * 5 = 25", () => {
  expect(calculator("*", 5, 5)).toBe(25);
});
test("pembagian 8 / 2 = 4", () => {
  expect(calculator("/", 8, 2)).toBe(4);
});
test("pembagian angka dengan 0 menghasilkan error", () => {
  expect(calculator("/", 7, 0)).toBe("angka tidak bisa dibagi 0");
});
test("operator yang digunakan tidak ada", () => {
  expect(calculator("%", 4, 2)).toBe("operator tidak ditemukan");
});
