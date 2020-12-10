

let questionHTMLInput = '';
let firstRandomNumber = 0;
let previousRandomNumber = 1;
let casualQuestions = document.getElementById('casualQuestions');
let funQuestions = document.getElementById('funQuestions');
let seriousQuestions = document.getElementById('seriousQuestions');
let childhoodQuestions = document.getElementById('childhoodQuestions');
let weirdQuestions = document.getElementById('weirdQuestions');
let allQuestions = document.getElementById('allQuestions');
let getQuestion = document.getElementById('questionButton');
let casualQuestionList = ['What TV shows are you into?', 'Are you usually late or early?', 'What is your favorite drink?', 'If you could live anywhere in the world, where would you live?', 'What is your favorite song?', 'What would you rate 10/10?'];
let funQuestionList = ['What animal would be way better if it was covered in scales?', '']
let seriousQuestionList = ['Where is your life headed?', 'What are the highest and lowest points of your life?', 'What are the biggest goals for your life?'];
let childhoodQuestionList = ['Where did you grow up?', 'When you were a child, what did you want to be when you grew up?', ];
let weirdQuestionList = ['one', 'two'];
let allQuestionList = [...casualQuestionList, ...seriousQuestionList, ...childhoodQuestionList, ...weirdQuestionList];
let questionList = allQuestionList;

function getRandomNumber() {
  return Math.floor((Math.random() * questionList.length));
}

casualQuestions.addEventListener('click', () => {
  questionList = casualQuestionList;
})

funQuestions.addEventListener('click', () => {
  questionList = funQuestionList;
})

seriousQuestions.addEventListener('click', () => {
  questionList = seriousQuestionList;
})

childhoodQuestions.addEventListener('click', () => {
  questionList = childhoodQuestionList;
})

weirdQuestions.addEventListener('click', () => {
  questionList = weirdQuestionList;
})

allQuestions.addEventListener('click', () => {
  questionList = allQuestionList;
})

getQuestion.addEventListener('click', () => {
  // firstNumberTest = getRandomNumber();
  while (firstRandomNumber == previousRandomNumber) {
    firstRandomNumber = getRandomNumber();
  }
  previousRandomNumber = firstRandomNumber;
  questionHTMLInput = questionList[previousRandomNumber];
  document.querySelector('main').innerHTML = questionHTMLInput;
})
