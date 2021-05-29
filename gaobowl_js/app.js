const quiz = '次の内正しいものはどれ？';
const answer = [
  'GAObowl',
  'gaobowl',
  'GaoBowl',
  'GAOBowl'
];
const correct = 'GAOBowl';
const $button = document.getElementsByTagName('button');
let buttonNumber = 0;
let handlerNumber = 0;
const buttonLength = $button.length;

const setUpQuiz = () => {
  document.getElementById('quiz').textContent = quiz;

  while (buttonNumber < buttonLength) {
    $button[buttonNumber].textContent = answer[buttonNumber];
    buttonNumber++;
  }
}
setUpQuiz();

const clickHndler = (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解');
  }
}

while (handlerNumber < buttonLength) {
  $button[handlerNumber].addEventListener('click', (e) => {
    clickHndler(e);
  })
  handlerNumber++;
}