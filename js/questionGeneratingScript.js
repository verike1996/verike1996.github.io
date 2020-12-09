let questionHTMLInput = '';
let casualQuestions = document.getElementById('casualQuestions');
let seriousQuestions = document.getElementById('seriousQuestions');
let childhoodQuestions = document.getElementById('childhoodQuestions');
let weirdQuestions = document.getElementById('weirdQuestions');
let allQuestions = document.getElementById('allQuestions');
let getQuestion = document.getElementById('questionButton');
let casualQuestionList = ['What TV shows are you into?', 'Are you usually late or early?', 'What is your favorite drink?', 'If you could live anywhere in the world, where would you live?', 'What is your favorite song?', 'What would you rate 10/10?'];
let seriousQuestionList = ['serious'];
let childhoodQuestionList = ['childhood'];
let weirdQuestionList = ['weird'];
let allQuestionList = [...casualQuestionList, ...seriousQuestionList, ...childhoodQuestionList, ...weirdQuestionList];
let questionList = allQuestionList;

function getRandomNumber() {
  return Math.floor((Math.random() * questionList.length));
}

casualQuestions.addEventListener('click', () => {
  questionList = casualQuestionList;
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
  questionHTMLInput = questionList[getRandomNumber()];    document.querySelector('main').innerHTML = questionHTMLInput;
})
