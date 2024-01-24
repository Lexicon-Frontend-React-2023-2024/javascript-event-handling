// ########## addEventListener ##########
// const btn = document.querySelector(".btn");

// // add the eventListener
// btn.addEventListener("click", () => {
//   console.log("Button has been clicked.");
// });

// ########## addEventListener with event object ##########
// const btn = document.querySelector(".btn");

// // add the eventListener
// btn.addEventListener("click", (e) => {
//   console.log("This is the event: ", e);
// });

// ########## e.target ##########
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   console.log("This is the event target: ", e.target);
// });

// ########## submit ##########
// const form = document.querySelector(".form");
// const usernameInput = document.querySelector(".username");
// const passwordInput = document.querySelector(".password");

// form.addEventListener("submit", (e) => {
//   console.log("Form has been submitted");
// });

// // with preventDefautl
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Form has been submitted");
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const username = usernameInput.value;
//   const password = passwordInput.value;

//   // check them out in the browser to see that it works.
//   console.log(username, password);
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const username = usernameInput.value;
//   const password = passwordInput.value;

//   // Create an object that can be sent somewhere
//   const signInData = {
//     username,
//     password,
//   };

//   console.log(signInData);
// });

// ########## input ##########
const usernameInput = document.querySelector(".username");

usernameInput.addEventListener("input", () => {
  const value = usernameInput.value;
  console.log(value);
});

// ########## blur ##########
usernameInput.addEventListener("blur", () => {
  console.log(usernameInput, " lost focus");
});
