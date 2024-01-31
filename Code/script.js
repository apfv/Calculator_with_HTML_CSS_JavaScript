"use strict";

let valueClass = document.querySelector(".value");

let clearClass = document.querySelector(".clear");

let divisionClass = document.querySelector(".division");

let multiplicationClass = document.querySelector(".multiplication");

let sevenClass = document.querySelector(".seven");

let eightClass = document.querySelector(".eight");

let nineClass = document.querySelector(".nine");

let minusClass = document.querySelector(".minus");

let fourClass = document.querySelector(".four");

let fiveClass = document.querySelector(".five");

let sixClass = document.querySelector(".six");

let plusClass = document.querySelector(".plus");

let oneClass = document.querySelector(".one");

let twoClass = document.querySelector(".two");

let threeClass = document.querySelector(".three");

let zero1Class = document.querySelector(".zero1");

let zero2Class = document.querySelector(".zero2");

let pointClass = document.querySelector(".point");

let equalClass = document.querySelector(".equal");

// c
clearClass.addEventListener("click", function () {
  document.querySelector(".value").value = "";
});

// /
divisionClass.addEventListener("click", function () {
  document.querySelector(".value").value += "/";
});

// *
multiplicationClass.addEventListener("click", function () {
  document.querySelector(".value").value += "*";
});

// 7
sevenClass.addEventListener("click", function () {
  document.querySelector(".value").value += 7;
});

// 8
eightClass.addEventListener("click", function () {
  document.querySelector(".value").value += 8;
});

// 9
nineClass.addEventListener("click", function () {
  document.querySelector(".value").value += 9;
});

// -
minusClass.addEventListener("click", function () {
  document.querySelector(".value").value += "-";
});

// 4
fourClass.addEventListener("click", function () {
  document.querySelector(".value").value += 4;
});

// 5
fiveClass.addEventListener("click", function () {
  document.querySelector(".value").value += 5;
});

// 6
sixClass.addEventListener("click", function () {
  document.querySelector(".value").value += 6;
});

// +
plusClass.addEventListener("click", function () {
  document.querySelector(".value").value += "+";
});

// 1
oneClass.addEventListener("click", function () {
  document.querySelector(".value").value += 1;
});

// 2
twoClass.addEventListener("click", function () {
  document.querySelector(".value").value += 2;
});

// 3
threeClass.addEventListener("click", function () {
  document.querySelector(".value").value += 3;
});

// 0
zero1Class.addEventListener("click", function () {
  document.querySelector(".value").value += 0;
});

// 00
zero2Class.addEventListener("click", function () {
  document.querySelector(".value").value += 0;
  document.querySelector(".value").value += 0;
});

// .
pointClass.addEventListener("click", function () {
  document.querySelector(".value").value += ".";
});

// =
equalClass.addEventListener("click", function () {
  document.querySelector(".value");

  const num = valueClass.value;

  const resalet = eval(valueClass.value);

  if (resalet === Number) {
    valueClass.value = "Erorr";
  } else {
    valueClass.value = resalet;

    console.log(num + " = " + valueClass.value);
  }
});
