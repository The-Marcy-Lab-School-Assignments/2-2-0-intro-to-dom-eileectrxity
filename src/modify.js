//Lesson 2.2.0 Assignment: Intro to DOM Manipulation by Eileen

//QUESTION 1: READ operation- use the querySelector to grab the H1 by its id. then, console.log the text of the el
const getMainHeadingText = () => {
  const heading = document.querySelector("#main-heading"); //querySelecture returns an obj, a NodeList, that contains only the very first el that matches its css selector- in this case, the id 'main-heading'
  if (heading) { //guard clause- best practice to do so in case el is not found
    console.log(heading.textContent); //logging the text content of heading to console; return is not necessary here
  } else console.log("Element with ID 'main-heading' not found"); //logging error msg to the console in case el is not found
};

// //alt solution: shorter by only console.logging desired output
// const getMainHeadingText = () => {
//   console.log(document.querySelector("#main-heading").textContent); //reading h1 and logging text content in one line
// };

//QUESTION 2: READ operation- grab all the els with the class .main-text and iterate through them to build a new str value; new str value should be each individual el's text contents, separated only by commas, no spaces! log that new str to the console
const getAllMainText = () => {
  const mainTxt = document.querySelectorAll(".main-text"); //grabbing all the els with the class .main-text
  const textStrs = []; //initializing a new arr with a const reference
  mainTxt.forEach(el => textStrs.push(el.textContent)); //iterating over the nodelist pushing each class els text content to the new arr; could also do a for..of loop instead of forEach() --> for (const el of document.querySelectorAll(".main-text"))
  console.log(textStrs.join(',')); //invoking .join() method on the new arr to log the new str separated only by commas
};

// //alt solution: iterating over NodeList by chaining document obj instead- noting that this solution is less preferred than second due to best practice of making code explicit and reusable
// const getAllMainText = () => {
//   const textStrs = [];
//   document //chaining the document obj for readability
//     .querySelectorAll(".main-text") //semicolon at the end does not belong here because we're chaining the statement, not closing it
//     .forEach(el => textStrs.push(el.textContent));
//   console.log(textStrs.join(','));
// };

//QUESTION 3: UPDATE operation- grab the subtitle h2 el, then update its empty txt content to a new str val
const setSubtitleText = () => {
  document.querySelector("#subtitle").textContent = "This is a subtitle!"; //could also use .innerHTML instead of .textContent, but not best practice in this case as it's less safe security-wise, and we're not setting any html markup formatting
};

// //alt solution: using .getElementById() method instead to get the first el that matches the id- this is the better solution as .getElementByID is specifically optimized for this task so it's faster, directly accessing the el by id. whereas with querySelector, the browser would first need to evaluate the selector against the entire document by parsing the selector then traversing the entire document requiring addt'l computational effort. however, this performance consideration is negligible unless working with really large documents or performance-critical apps
// const setSubtitleText = () => {
  // document.getElementById("subtitle").textContent = "This is a subtitle!"; //no # needed with this method as already getting the id by name. noting that innerText also works when logging to the console but doesn't pass the jest test
// };

//QUESTION 4: UPDATE operation- edit out the #modify-classes div that has 2 classes on it and remove bad-class then add new-class; this means there will still be 2 classes inside when you're done. classList allows us to edit only the class names we need to, without touching the rest
const modifyDivClassList = () => {
  const divClasses = document.getElementById("modify-classes").classList; //storing the classList of the el in a const reference; could also do querySelector("#modify-classes"")
  divClasses.remove("bad-class"); //removing class from list by name "bad-class"
  divClasses.add("new-class"); //adding new class to the id
  // console.log(divClasses); //to help me debug; checking if the classList has been updated as desired
};

//QUESTION 5: CREATE operation- to create a new el, should usually follow this pattern: (1) create a new el with document.createElement (2) modify that el however you want (3) add it to the DOM with some append type method to a parent el
//this func should append a new H2 el, with an id of h2-test and text value of "Another one!", to the end of the body tag
const addH2 = () => {
  let h2 = document.createElement("h2"); //creating a <h2> node el where createElement() takes in a str that is the nodeName
  h2.id = "h2-test"; //setting the id property of el h2
  h2.textContent = "Another one!"; //can't treat textContent as a func and try reassigning it by doing textContent("new str value"). have to reassign with the = operator as it's a property (that stores and retrieves the text content of an el)
  document.body.appendChild(h2); //could do append() instead. appendChild() appends a node (el) as the last child of an el (noting that this means h2 will be after the script src tag but before the script tag; in best practice, script tags should be the last child node in body)
  // console.log(h2); //to help me debug; checking if h2 was created with the id name and text content
};

// //alt solution 1: using just innerHTML to create the new el with an id attribute and text content
// const addH2 = () => {
//   document.body.innerHTML += '<h2 id="h2-test">Another one!</h2>' //adding the full html markup directly in the document body
// };

// //alt solution 2: creating and appending a h2 el to the end of the document body with Object.assign(target, source) where we modified the target or destinationObj, h2, with the contents of the source, a sourceObj containing id and textContent properties
// const addH2 = () => {
//   const h2 = document.createElement("h2");
//   document.body.append( //appending the following to the document body:
//     Object.assign(h2, { //merges the properties from the provided object (second param) into the h2 element (first param)
//       id: "h2-test", 
//       textContent: "Another one!" //this sets obj h2's id attribute and textContent proerties with key-value pair assignments
//     })
//   )
// };

const removeOldInfo = () => {
};

const makeAlphabet = () => {
};

const makeBio = () => {
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
