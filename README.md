# JavaScript Event Handling

<details>
<summary>Table of content</summary>

- [Events](#events)
  - [Event Listeners](#event-listeners)
  - [Click](#click)
  - [Event Object](#event-object)
- [Other Common Events](#other-common-events)
  - [Submit](#submit)
  - [Mouseover](#mouseover)
  - [Mouseout](#mouseout)
  - [Keyup](#keyup-keydown)
  - [Input](#input)
  - [Blur](#blur)
- [Remove event listeners](#remove-event-listeners)

</details>

## Events

Events allows you to respond to interactions or changes that occur in the browser, such as user actions _(like clicks or keypresses)_ or changes in the document like loading or resizing of the window. Event handling involves using event listeners to "listen" for specific events and then executing a callback function when that event occurs.

All available events in JavaScript: [w3schools - DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

[Back to top](#javascript-event-handling)

### Event Listeners

An event listener is a function that listens for a specific event to occur on a particular `HTML element`. We can't have any "free hanging" event listeners in our browser, they must always be connected to a specific element. The scope of the event listener is restricted to the element on which it is connected to. Although there exist a phenomenon that is called "event bubbling" that can be annoying to work with. But more on that later.

To add an event listener we do that by using the `addEventListener` method.

Syntax: `element.addEventListener(event, callback) => void`

It takes two arguments, the first one is the event we are listening for. It is a string. See the documentation for more information: [w3schools - DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp). The second argument is a callback function that will be executed when the specific event occurs.

```html
<button class="btn">Click me</button>
```

```js
// Get the reference to the button
const btn = document.querySelector(".btn");

// add the eventListener with arrow function
btn.addEventListener("click", () => {
  console.log("Button has been clicked.");
});

// add the eventListener with regular function
btn.addEventListener("click", function () {
  console.log("Button has been clicked.");
});
```

[Back to top](#javascript-event-handling)

### Click

The `click` event occurs when the user clicks _(single click)_ on an element. You could register a click event on any `HTML element`in your browser.

### Event Object

When an event occurs, JavaScript automatically creates an event object to us, and this object is passed to the event handler function. An event handler is the same thing as the callback function inside the `addEventListener`. To eloborate the syntax,

Syntax:`element.addEventListener( event, function(event?){} ) => void`

If we look out the previous example with the click event, it might look like this when we are using the event object as well.

```html
<button class="btn">Click me</button>
```

The event object is always passed to the callback function, but you can name it in any way you would like. The most used naming is just an `e`, for event.

```js
// Get the reference to the button
const btn = document.querySelector(".btn");

// add the eventListener with arrow function and event object
btn.addEventListener("click", (e) => {
  console.log("This is the event: ", e);
});
```

If you look at the event in the console, you will find a lot of different properties and methods that you can use. Most of these you will problably never use but there exisist a few that is very common in JavaScrtip. On in particular is the `target` property.

```js
btn.addEventListener("click", (e) => {
  console.log("This is the event target: ", e.target);
});
```

The `target` property gives you the specific element that has been clicked, and with that you could use that element for further DOM manipulation.

[Back to top](#javascript-event-handling)

## Other Common Events

### Submit

The `submit` event is triggered when a form is submitted. It is often used to perform validation before the submission of the data inside the form. Another common use case is to collect the different data from the different inputs inside the form when this `submit` events is triggered.

Let's look at an example. Here we will trigger a submit event on the form and then collect the data from the two inputs.

```html
<form class="form">
  <label for="username">Username</label>
  <input class="username" name="username" type="text" />
  <label for="password">Password</label>
  <input class="password" name="password" type="password" />
  <button type="submit">Send data</button>
  <!-- <input type="submit" /> -->
</form>
```

The type "submit" on the button is the type to use when using a button inside a form. The purpose of this button is the send that data somewhere, or rather to actually trigger the submit event.

You can also use the input element of type "submit", it will work in the same way.

```html
<input type="submit" />
```

The first thing we need to do, is to get some references to the elements and then add the event listener.

```js
const form = document.querySelector(".form");
const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
```

Then we need to register the event listener and create a callback function.

```js
form.addEventListener("submit", (e) => {
  console.log("Form has been submitted");
});
```

When you trigger this submit, you will notice two things that happens. Firstly, the input fiels are emptied _(if they had content)_ and then the page is refreshed. This is due to the default behavior of the submit event. It's something that lingers from older usages of JavaScript and forms.

In order to prevent this behaviour we need to access a method on the event object. This method is called `preventDefault()`.

Let's add it to our code.

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form has been submitted");
});
```

Now the default behavior is gone and our log works as we want it to work. Let's collect the data of the inputs. We already have the references to the inputs, let's just acces the `value` of the inputs one. Remember here to puts this data collection inside the callback, so it actually executes when the `submit` event has been triggered.

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // check them out in the browser to see that it works.
  console.log(username, password);
});
```

Let's collect the input values in an object instead so it's more fit to be sent somewhere, like a server or similar.

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Create an object that can be sent somewhere
  const signInData = {
    username,
    password,
  };

  // // This is the same as
  // signInData = {
  //   username: username,
  //   password, password
  // }

  console.log(signInData);
});
```

Now we have successfully create a `submit` event and done some DOM and data manipulation in order to create a good looking object containg the data from the from that we later can send somewhere, to a server or similar.

[Back to top](#javascript-event-handling)

### Mouseover

### Mouseout

### Keyup _(Keydown)_

### Input

The `input` event is triggered when the value of an input element changes. It is fire frequently, with each keystroke in text input fields.

Let's try it out by loggin each keystroke in the username input field.

```js
const usernameInput = document.querySelector(".username");

usernameInput.addEventListener("input", () => {
  const value = usernameInput.value;
  console.log(value);
});
```

### Blur

The `blur` even is triggered when en element looses focus. This is commonly used when a user interacts with input fiels and then clicks outside or tabs to the next input or element.

Let's take the same input field a above.

```js
usernameInput.addEventListener("blur", () => {
  console.log(userNameInput, " lost focus");
});
```

Whenever the `usernameInput` loses focus, the callback function will be triggered and we can do stuff with that element, perform validation, check something or in this case, just log something to the console.

## Remove event listeners
