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

// //alt solution: using .getElementByID() method instead to get the first el that matches the id- this is the better solution as .getElementByID is specifically optimized for this task so it's faster, directly accessing the el by id. whereas with querySelector, the browser would first need to evaluate the selector against the entire document by parsing the selector then traversing the entire document requiring addt'l computational effort. however, this performance consideration is negligible unless working with really large documents or performance-critical apps
// const setSubtitleText = () => {
  // document.getElementById("subtitle").textContent = "This is a subtitle!"; //no # needed with this method as already getting the id by name. noting that innerText also works when logging to the console but doesn't pass the jest test
// };

const modifyDivClassList = () => {
};

const addH2 = () => {
};

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
