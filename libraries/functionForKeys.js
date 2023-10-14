// ***************Factorial***************** //
function factorial(numbers) {
  if (numbers > 0) {
    return numbers * factorial(numbers - 1);
  } else return 1;
}

// ***************Square Root***************** //
// BY METHOD
function sqrtMath(numbers) {
  if (numbers < 0) {
    alert("ERROR");
  }
  return Math.sqrt(numbers);
}

// BY BRAIN

// ***************Exponentiation***************** //
// a: base
// b: exponent

// BY METHOD
// function exponentiation(a, b){
//   return a**b;
// }

// BY BRAIN
function exponentiation(a, b) {
  let result;
  if (b > 0) {
    result = parseFloat(a * exponentiation(a, b - 1));
    // console.log(result);
  } else if (b === 0) {
    result = 1;
  } else if (b < 0) {
    result = parseFloat((1 / a) * exponentiation(a, b + 1));
    // console.log(`1/${a*exponentiation(a, b + 1)}`);
    // console.log("b < 0");
    // console.log(result);
  }
  return result;
}

export { factorial, sqrtMath, exponentiation };
