const quiz = [{
    question: '問題1　次の内正しいのはどれ',
    answer: [
      'GaoGao',
      'GAOGAO',
      'gaogao',
      'Gaogao'
    ],
    correct: 'GAOGAO'
  },
  {
    question: '問題2 次の内プログラミング言語ではないのはどれ',
    answer: [
      'PHP',
      'JavaScript',
      'Laravel',
      'Python'
    ],
    correct: 'Laravel'
  },
  {
    question: '問題3　次の内仲間外れはどれ',
    answer: [
      'ホーチミン',
      'ダナン',
      'バンコク',
      'ハノイ'
    ],
    correct: 'バンコク'
  }
];
const $button = document.getElementsByTagName('button');
let quizIndex = 0;

const makeQuiz = function () {
  document.getElementById('quiz').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < $button.length) {
    document.getElementsByTagName('button')[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    buttonIndex++;
  }
}

makeQuiz();

const clickHanadler = function (e) {
  if (e.target.textContent === quiz[quizIndex].correct) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
  quizIndex++;
  if (quizIndex < quiz.length) {
    makeQuiz();
  } else {
    window.alert('end');
    location.reload();
  }
}

let handlerIndex = 0;

while (handlerIndex < $button.length) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHanadler(e);
  });
  handlerIndex++;
}