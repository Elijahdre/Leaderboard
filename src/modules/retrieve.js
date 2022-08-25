const retrieveData = (arr) => {
  const score = document.querySelector('.score-container');
  score.innerHTML = "";
  arr.forEach((user) => {
    score.innerHTML += `
    <div class="score-cont flex">
       <h2></h2>
       <span></span>
     </div> 
    `
  });
  
}