// 定数を定義
const quiz = "次の内正しいものはどれ？"
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

// 定数setUpQuizを用意。
// HTMLよりIDから引っ張ってきてる。そこに定数quiz（問題文）を表示。
//buttonNumberがbuttonLengthより小さいとき（ボタンの数だけ繰り返す）各ボタンに配列で用意されている回答を入れていく。
const setUpQuiz = () => {
  document.getElementById('quiz').textContent = quiz;

  while(buttonNumber < buttonLength){
    $button[buttonNumber].textContent = answer[buttonNumber];
    buttonNumber++;
  }
}
setUpQuiz();

//定数clickHundlerを用意する。
//クリックされたボタンが正解と一致or不一致によってそれぞれアラートを表示している。
const clickHundler = (e) => {
  if( correct === e.target.textContent ){
  window.alert('正解！');
  }else{
    window.alert('不正解');
  }
}

while (handlerNumber < buttonLength){
  $button[handlerNumber].addEventListener('click', (e) => {
    clickHundler(e);
  })
  handlerNumber++;
}