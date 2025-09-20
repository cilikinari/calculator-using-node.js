export default function calculator(operator, num1, num2) {
  let hasil;

  if (operator === "+") {
    hasil = num1 + num2;
  } else if (operator === "-") {
    hasil = num1 - num2;
  } else if (operator === "*") {
    hasil = num1 * num2;
  } else if (operator === "/") {
    hasil = num2 !== 0 ? num1 / num2 : "angka tidak bisa dibagi 0";
  } else {
    hasil = "operator tidak ditemukan";
  }

  return hasil;
}
