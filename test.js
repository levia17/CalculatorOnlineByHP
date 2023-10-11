const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function factorial(number) {
  if (number > 1) {
    return number * factorial(number - 1);
  }
  return 1;
}

rl.question("Nhập số nguyên dương n để tính giai thừa: ", (input) => {
  const number = parseInt(input);
  const result = factorial(number);
  console.log(`Giai thừa của ${number} là: ${result}`);

  rl.close();
});
