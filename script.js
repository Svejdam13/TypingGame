const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'hate',
  'peace',
  'independent',
  'suit',
  'likeable',
  'juice',
  'warlike',
  'sad',
  'mute',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'canvas',
  'seven',
  'feeble',
  'adorable',
  'drag',
  'loving'
];
// Init word
let randomWord;
// Init score
let score = 0;
// Init time
let time = 10;
//Focus on text on start / you can type directly in the input
text.focus(); 

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//Add word to DOM
function addWordToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord; 
}
// Update score
function updateScore(){
  score++;
  scoreEl.innerHTML = score;
}
// Game over
function gameOver(){
  endgameEl.innerHTML = `
  <h1>Time ran out</h1>
  <p>Your score is ${score}</p>
  <button onclick="location.reload()">Reload</button>
  `;
  endgameEl.style.display = 'flex';
}
//Update time
function updateTime(){
  time--;
  timeEl.innerHTML = time + 's';

  if(time === 0) {
    clearInterval(timeInterval); // zastavi se na 0(js funkce)
   //end game
    gameOver();
  }
}
addWordToDom();
// Event listeners

text.addEventListener('input', e => {
  const insertedText = e.target.value;
  
  if(insertedText === randomWord) {
    addWordToDom();
    updateScore();

    //Clear
    e.target.value = '';
    time += 2;
  }
});
