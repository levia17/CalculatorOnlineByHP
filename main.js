import handlerDarkModeToggle from "./libraries/themes.js";
import handleKeyboard from "./libraries/keyBoardEffect.js";
import handleSoundEffect from "./libraries/soundEffect.js";
import {
  factorial,
  sqrtMath,
  exponentiation,
} from "./libraries/functionForKeys.js";

handlerDarkModeToggle();
handleSoundEffect();
handleKeyboard();

const valueCal = document.querySelector("#value");
const allBtn = document.querySelectorAll(".row span");

// Khởi tạo biến ban đầu là _ xuất ra màn hình
let currentValue = "_";
function curVar() {
  valueCal.innerHTML = currentValue;
}
curVar();
// Chuỗi để thực hiện tính toán
let stringCal = "";

// Chức năng của các phím
for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", eventClickCal);
  function eventClickCal() {
    if (this.textContent === "CLEAR") {
      valueCal.innerHTML = "_";
      stringCal = "";
    } else if (this.textContent === "!") {
      valueCal.innerHTML = `fact(${valueCal.textContent}) <br /> ${factorial(
        valueCal.textContent
      )}`;
    } else if (this.textContent === "") {
      if (this.children[0].classList.contains("fa-square-root-variable")) {
        valueCal.innerHTML =
          `sqrt(${stringCal})<br />` + sqrtMath(eval(stringCal));
      } else if (this.children[0].classList.contains("fa-superscript")) {
        valueCal.innerHTML += "^";
      }
    }
    // kết thúc code mới được update
    else if (this.textContent === "=") {
      if (valueCal.textContent === "_") {
        alert("Vui lòng nhập dữ liệu");
      } else if (valueCal.textContent.includes("^")) {
        const indexCube = valueCal.textContent.indexOf("^");
        const baseVal = valueCal.textContent.substring(0, indexCube);
        const cubeVal = valueCal.textContent.substring(indexCube + 1);
        valueCal.innerHTML =
          `pow(${baseVal},${cubeVal})<br />` + exponentiation(baseVal, cubeVal);
      } else {
        const result = eval(stringCal);
        valueCal.innerHTML = `${result}`;
      }
    } else if (this.textContent === ":") {
      valueCal.innerHTML += ":";
      stringCal += "/";
    } else if (this.textContent === "x") {
      valueCal.innerHTML += "x";
      stringCal += "*";
    } else {
      if (valueCal.textContent === "_") {
        const valueCalReplaced = valueCal.textContent.replace(
          "_",
          this.textContent
        );
        stringCal += this.textContent;
        // console.log(valueCalReplaced)
        valueCal.innerHTML = `${valueCalReplaced}`;
      } else {
        stringCal += this.textContent;
        valueCal.innerHTML += `${this.textContent}`;
      }
      // console.log(stringCal);
    }
  }
}
