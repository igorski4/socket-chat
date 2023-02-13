const socket = io();
const button = document.querySelector("button");
const input = document.querySelector("input");

socket.on("message", (message) => {
  // const p = document.createElement("p");
  // p.className = "header__text";
  // p.textContent = message;
  // button.append(p);
  console.log(message);
});
// socket.on("private message", (message) =>
//   console.log("Private message from server: ", message)
// );

const handlerButton = () => socket.emit("message", input.value);

button.addEventListener("click", handlerButton);

// const sigIn = document.querySelector("input[value='Регистрация']");
// const logIn = document.querySelector("input[value='Вход']");

// // const handlerButton = () => {
// //   if (sigIn.classList.contains("main__button-enable")) {
// //     logIn.className = "main__button-enable";
// //     sigIn.className = "main__button-disabled";
// //   } else {
// //     sigIn.className = "main__button-enable";
// //     logIn.className = "main__button-disabled";
// //   }
// // };

// // sigIn.addEventListener("click", handlerButton);

// // logIn.addEventListener("click", handlerButton);

// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;

// function calculate(fun) {
//   return function (a) {
//     return function (b) {
//       return fun(a, b);
//     };
//   };
// }

// console.log(calculate(mul)(4)(2));
// console.log(calculate(sum)(4)(2));
