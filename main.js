import handlerDarkModeToggle from "./libraries/themes.js";
import handleKeyboard from "./libraries/keyBoardEffect.js";
import handleSoundEffect from "./libraries/soundEffect.js";

handlerDarkModeToggle();
handleSoundEffect();
handleKeyboard();

var valueCal = document.querySelector("#value");
var allBtn = document.querySelectorAll(".row span");
// console.log(dataCal);

// Khởi tạo biến ban đầu là _ xuất ra màn hình
var currentValue = "_";
function curVar() {
  valueCal.innerHTML = currentValue;
}
curVar();
// Chuỗi để thực hiện tính toán
let stringCal = "";

// Chức năng của các phím
for (var i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", eventClickCal);
  function eventClickCal() {
    if (this.textContent === "CLEAR") {
      valueCal.innerHTML = "_";
      stringCal = "";
    } 
    // code mới được update
    else if (this.textContent === "") {
      alert(this.children[0].classList[1]);
      if (this.children[0].classList.contains("fa-plus-minus")) {
      }
    // kết thúc code mới được update
    } else if (this.textContent === "=") {
      if (stringCal.textContent === "") {
        alert("Vui lòng nhập dữ liệu");
      } else {
        var result = eval(stringCal);
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
        var valueCalReplaced = valueCal.textContent.replace(
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
