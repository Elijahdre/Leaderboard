const retrieveData = (arr) => {
  const score = document.querySelector('.score-container');
  score.innerHTML = '';
  arr.forEach((user) => {
    score.innerHTML += `
    <div class="score-cont flex">
       <h3>${user.user}</h3>
       <span>${user.score}</span>
     </div> 
    `;
  });
};

export default retrieveData;