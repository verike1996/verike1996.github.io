let funQuestions = document.getElementById('funQuestions');
let seriousQuestions = document.getElementById('seriousQuestions');
let childhoodQuestions = document.getElementById('childhoodQuestions');
let weirdQuestions = document.getElementById('weirdQuestions');
let funQuestionList = ['fun', 'fun2'];
let seriousQuestionList = ['serious'];
let childhoodQuestionList = ['childhood'];
let weirdQuestionList = ['weird'];
let questionList = [...funQuestionList, ...seriousQuestionList, ...childhoodQuestionList, ...weirdQuestionList];

funQuestions.addEventListener('click', () => {
  questionList = funQuestionList;
})
