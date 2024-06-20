/* QUESTION 9: fromScratch- in creating the index.html file, index.js file must -->
1) add an H1 to the body with an id of main-heading and text of "Hello World!"
2) add a p tag with an id of main-text, a class of boring-text, and text that reads "Look, I'm some text!" */

const addH1 = () => {
  const h1 = document.createElement('h1'); //creating a h1 node el
  Object.assign(h1, { //using Object.assign(target, src) to set properties of h1 obj
    id: "main-heading",
    textContent: "Hello World!"
 })
  document.body.appendChild(h1); //appending new el to the document body
};

const addP = () => {
  const p = document.createElement('p'); //creating a p tag node el
  Object.assign(p, {
    id: "main-text", //setting the id attribute
    className: "boring-text", //setting the class attribute by the className property
    textContent: "Look, I'm some text!"
  })
  document.body.appendChild(p);
};

// //alt method
// const addP = () => {
//   const p = document.createElement("p");
//   p.id = "main-text";
//   p.classList.add("boring-text");
//   p.textContent = "Look, I'm some text!";
//   document.body.appendChild(p);
// };

//runner function
const main = () => {
  addH1(); //create
  addP(); //create
};

main(); //invoking runner function so that it renders in the browser when the dom is fully parsed + loaded from source file index.html that includes this index.js file as a script