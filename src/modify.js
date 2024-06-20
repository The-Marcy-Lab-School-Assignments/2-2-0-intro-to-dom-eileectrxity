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

const getAllMainText = () => {
};

const setSubtitleText = () => {
};

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
