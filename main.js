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
    } else if (this.textContent === "=") {
      if (stringCal.textContent === "") {
        2;
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
      console.log(stringCal);
    }
  }
}

// allBtn.forEach((thisBtn) => {
//   thisBtn.addEventListener("click", () => {
//     var result = 0;
//     console.log(thisBtn.textContent);
//     if (thisBtn.textContent === "=") {
//       if (valueCal.textContent === "_") {
//         alert("Vui lòng nhập dữ liệu");
//       } else {
//         result = eval(valueCal.textContent);
//         valueCal.innerHTML = `${result}`;
//       }
//     } else if (thisBtn.textContent === "CLEAR") {
//       valueCal.innerHTML = "_";
//     } else {
//       if (valueCal.textContent === "_") {
//         // console.log(typeof valueCal.textContent);
//         var valueCalReplaced = valueCal.textContent.replace(
//           "_",
//           thisBtn.textContent
//         );
//         // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//         valueCal.innerHTML = valueCalReplaced;
//       } else valueCal.innerText += `${thisBtn.textContent}`;
//     }
//   });
// });
// nếu số thập phân lớn hơn 2 số thì rút gọn lại bằng toFixed(2).
// nếu số thập phân cuối cừng bằng 0 thì loại bỏ.
