const myMagnets = '';
const myButton = document.getElementById('myButton');
const myInput = document.getElementById('myInput');
let numberOfButtons = '';
let buttonHTML = '';
let arrayOfWords = [
  "hey","howdy","fella","partner","pistol","juggalo","clown","wagon","banana","grape","apple","pillow","jello","wine","pine","fine","theater","cedar","famine","salmon","pokemon","coffee","pickle","iPhone"
]; // array of words for buttons
function getRandomNumber() {
  return Math.floor((Math.random() * arrayOfWords.length) + 1);
} // gets a random number to randomize which item the button click picks from the array

myButton.addEventListener('click', () => {
  numberOfButtons = parseInt(myInput.value);
  for (let i = 0; i < numberOfButtons; i++ ) {
    buttonHTML += `
    <input type="button" value="${arrayOfWords[getRandomNumber()]}">
    `;
  }
  document.querySelector('main').insertAdjacentHTML('beforeend', buttonHTML);
}); // takes the input from the page, converts it to an int, runs a loop for the input amount building a number of buttons to press
