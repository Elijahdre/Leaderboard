import './style.css';
import collectData from './modules/refresh.js'

const game = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2eLjh/scores/";

collectData(game)

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', (event) => {

})


const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputName = document.getElementById('name').value;
  const inputScore = document.getElementById('score').value;

  const finalScore = {
    user: inputName,
    score: inputScore,
  };

})