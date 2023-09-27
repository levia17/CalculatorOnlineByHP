import handlerDarkModeToggle from "./libraries/themes.js";
import handleKeyboard from "./libraries/keyBoardEffect.js";
import handleSoundEffect from "./libraries/soundEffect.js";

handlerDarkModeToggle();
handleSoundEffect();
handleKeyboard();

var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var num3 = document.querySelector("#num3");
var num4 = document.querySelector("#num4");
var num5 = document.querySelector("#num5");
var num6 = document.querySelector("#num6");
var num7 = document.querySelector("#num7");
var num8 = document.querySelector("#num8");
var num9 = document.querySelector("#num9");
var num0 = document.querySelector("#num0");

var num00 = document.querySelector("#num00");
var valueCal = document.querySelector("#value");
var plus = document.querySelector("#plus");
var equal = document.getElementById("equal");
var clearVal = document.getElementById("clear");

// đặt biến đệm để chứa chuỗi mà không cần dùng mảng
var currentValue = "_";

function startValue() {
  valueCal.innerHTML = currentValue;
}
startValue();

clearVal.addEventListener("click", startValue);

num1.addEventListener("click", () => {
  if (valueCal.textContent === "_") {
    console.log(typeof valueCal.textContent);
    var valueCalReplaced = valueCal.textContent.replace("_", "1");
    // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
    valueCal.innerHTML = valueCalReplaced;
  } else valueCal.innerText += `1`;
});
plus.addEventListener("click", () => {
  if (valueCal.textContent === "_") {
    var valueCalReplaced = valueCal.textContent.replace("_", "1");
    // lưu ý khi biến đã xử lý backend thì phải đưa ra giao diện
    valueCal.innerHTML = valueCalReplaced;
  } else valueCal.innerText += `+`;
});
num2.addEventListener("click", () => {
  valueCal.innerHTML += `2`;
});
equal.addEventListener("click", () => {
  if (valueCal.textContent !== "_") {
    valueCal.innerHTML = eval(valueCal.textContent);
  }
});

// console.log(valueCal.textContent.replace("_","1"))
