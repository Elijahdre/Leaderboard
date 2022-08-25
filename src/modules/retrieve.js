const retrieveData = (arr) => {
  const score = document.querySelector('.score-container');
  score.innerHTML = "";
  arr.forEach((user) => {
    score.innerHTML += `
    <div class="score-cont flex">
       <h2>${user.user}</h2>
       <span>${user.score}</span>
     </div> 
    `
  });
  
}

export default retrieveData;