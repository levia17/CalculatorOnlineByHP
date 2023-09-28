import handlerDarkModeToggle from "./libraries/themes.js";
import handleKeyboard from "./libraries/keyBoardEffect.js";
import handleSoundEffect from "./libraries/soundEffect.js";

handlerDarkModeToggle();
handleSoundEffect();
handleKeyboard();

// var num1 = document.querySelector("#num1");
// var num2 = document.querySelector("#num2");
// var num3 = document.querySelector("#num3");
// var num4 = document.querySelector("#num4");
// var num5 = document.querySelector("#num5");
// var num6 = document.querySelector("#num6");
// var num7 = document.querySelector("#num7");
// var num8 = document.querySelector("#num8");
// var num9 = document.querySelector("#num9");
// var num0 = document.querySelector("#num0");

// var num00 = document.querySelector("#num00");
// var valueCal = document.querySelector("#value");
// var plus = document.querySelector("#plus");
// var equal = document.getElementById("equal");
// var clearVal = document.getElementById("clear");
// var except = document.getElementById("except");
// var multiply = document.getElementById("multiply");
// var divide = document.getElementById("divide");

// // đặt biến đệm để chứa chuỗi mà không cần dùng mảng
// var currentValue = "_";
// // Khởi tạo biến
// function startValue() {
//   valueCal.innerHTML = currentValue;
// }
// startValue();

// //SIGN
// clearVal.addEventListener("click", startValue);

// divide.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     var valueCalReplaced = valueCal.textContent.replace("_", "/");
//     valueCal.innerHTML = valueCalReplaced;
//   }
//   valueCal.innerHTML += `/`;
// });
// multiply.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     var valueCalReplaced = valueCal.textContent.replace("_", "*");
//     valueCal.innerHTML = valueCalReplaced;
//   }
//   valueCal.innerHTML += `*`;
// });
// except.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     var valueCalReplaced = valueCal.textContent.replace("_", "-");
//     valueCal.innerHTML = valueCalReplaced;
//   }
//   valueCal.innerHTML += `-`;
// });

// plus.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     var valueCalReplaced = valueCal.textContent.replace("_", "1");
//     // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//     valueCal.innerHTML = valueCalReplaced;
//   } else valueCal.innerText += `+`;
// });
// equal.addEventListener("click", () => {
//   if (valueCal.textContent !== "_") {
//     valueCal.innerHTML = eval(valueCal.textContent);
//   }
// });
// //NUMBER
// num1.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     console.log(typeof valueCal.textContent);
//     var valueCalReplaced = valueCal.textContent.replace("_", "1");
//     // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//     valueCal.innerHTML = valueCalReplaced;
//   } else valueCal.innerText += `1`;
// });
// num2.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     console.log(typeof valueCal.textContent);
//     var valueCalReplaced = valueCal.textContent.replace("_", "2");
//     // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//     valueCal.innerHTML = valueCalReplaced;
//   } else valueCal.innerText += `2`;
// });
// num3.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     console.log(typeof valueCal.textContent);
//     var valueCalReplaced = valueCal.textContent.replace("_", "3");
//     // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//     valueCal.innerHTML = valueCalReplaced;
//   } else valueCal.innerText += `3`;
// });
// num4.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     console.log(typeof valueCal.textContent);
//     var valueCalReplaced = valueCal.textContent.replace("_", "4");
//     // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//     valueCal.innerHTML = valueCalReplaced;
//   } else valueCal.innerText += `4`;
// });
// num5.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     console.log(typeof valueCal.textContent);
//     var valueCalReplaced = valueCal.textContent.replace("_", "5");
//     // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//     valueCal.innerHTML = valueCalReplaced;
//   } else valueCal.innerText += `5`;
// });
// num6.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     console.log(typeof valueCal.textContent);
//     var valueCalReplaced = valueCal.textContent.replace("_", "6");
//     // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//     valueCal.innerHTML = valueCalReplaced;
//   } else valueCal.innerText += `6`;
// });
// num7.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     console.log(typeof valueCal.textContent);
//     var valueCalReplaced = valueCal.textContent.replace("_", "7");
//     // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//     valueCal.innerHTML = valueCalReplaced;
//   } else valueCal.innerText += `7`;
// });
// num8.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     console.log(typeof valueCal.textContent);
//     var valueCalReplaced = valueCal.textContent.replace("_", "8");
//     // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//     valueCal.innerHTML = valueCalReplaced;
//   } else valueCal.innerText += `8`;
// });
// num9.addEventListener("click", () => {
//   if (valueCal.textContent === "_") {
//     console.log(typeof valueCal.textContent);
//     var valueCalReplaced = valueCal.textContent.replace("_", "9");
//     // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
//     valueCal.innerHTML = valueCalReplaced;
//   } else valueCal.innerText += `9`;
// });

// console.log(num1.textContent)

var valueCal = document.querySelector("#value");
var allBtn = document.querySelectorAll(".row span");
// console.log(dataCal);

// Khởi tạo biến ban đầu là _ xuất ra màn hình
var currentValue = "_";
function curVar() {
  valueCal.innerHTML = currentValue;
}
curVar();

// Chức năng của các phím
for (var i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", eventClickCal);
  function eventClickCal() {
    if (this.textContent === "CLEAR") {
      valueCal.innerHTML = "_";
    } else if (this.textContent === "=") {
      if (valueCal.textContent === "_") {
        alert("Vui lòng nhập dữ liệu");
      } else {
        var result = eval(valueCal.textContent);
        valueCal.innerHTML = `${result}`;
      }
    } else {
      if (valueCal.textContent === "_") {
        var valueCalReplaced = valueCal.textContent.replace("_",this.textContent);
        // console.log(valueCalReplaced)
        valueCal.innerHTML = `${valueCalReplaced}`;
      } else {
        valueCal.innerHTML += `${this.textContent}`;
      }
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
