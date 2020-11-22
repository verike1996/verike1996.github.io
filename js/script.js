const myMagnets = '';
const myButton = document.getElementById('myButton');
const myInput = document.getElementById('myInput');
const buttonPress = document.getElementsByClassName('word')
let numberOfButtons = '';
let buttonHTML = '';
let arrayOfWords = [
  "&","a","about","above","ache","ad","after","all","am","an","and","apparatus","are","arm","as","ask","at","away","bare","be","beat","beauty","bed","beneath","bitter","black","blood","blow","blue","boil","boy","breast","but","butt","by","can","chant","chocolate","cool","could","crush","cry","d","day","death","delirious","diamond","did","do","dream","dress","drive","drool","drunk","eat","ed","egg","elaborate","enormous","er","es","est","fast","feet","fiddle","finger","fluff","for","forest","frantic","friend","from","garden","girl","go","goddess","gorgeous","gown","hair","has","have","he","head","heave","her","here","him","his","honey","hot","how","I","if","in","ing","is","it","juice","lake","language","languid","lather","lazy","less","let","lick","lie","life","light","like","live","love","luscious","lust","ly","mad","man","me","mean","meat","men","milk","mist","moan","moon","mother","music","must","my","need","never","no","not","of","on","one","or","our","over","pant","peach","petal","picture","pink","play","please","pole","pound","puppy","purple","put","r","rain","raw","recall","red","repulsive","rip","rock","rose","run","rust","s","sad","said","sausage","say","scream","sea","see","shadow","she","shine","ship","shot","show","sing","sit","skin","sky","sleep","smear","smell","smooth","so","soar","some","sordid","spray","spring","still","stop","storm","suit","summer","sun","sweat","sweet","swim","symphony","the","their","there","these","they","those","though","thousand","through","time","tiny","to","together","tongue","trudge","TV","ugly","up","urge","us","use","want","was","watch","water","wax","we","were","what","when","whisper","who","why","will","wind","with","woman","worship","y","yet","you"
]; // array of words for buttons
function getRandomNumber() {
  return Math.floor((Math.random() * arrayOfWords.length) + 1);
} // gets a random number to randomize which item the button click picks from the array

myButton.addEventListener('click', () => {
  numberOfButtons = parseInt(myInput.value);
  for (let i = 0; i < numberOfButtons; i++ ) {
    buttonHTML += `
    ${arrayOfWords[i]}.addEventListener('click', () => {
      document.querySelector('main').insertAdjacentHTML('beforeend', ${arrayOfWords[i]}.value);
    });`;
  }
  document.querySelector('main').insertAdjacentHTML('beforeend', buttonHTML);
}); // takes the input from the page, converts it to an int, runs a loop for the input amount building a number of buttons to press
