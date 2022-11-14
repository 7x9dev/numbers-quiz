const button = document.querySelector("#btn");
button.addEventListener("click", score);

const scoreShow = document.querySelector("#score");

function score(e) {
   e.preventDefault();

   let points = 0;
   if (document.querySelector("#answerOneCorrect").checked) {
      points++;
   }
   if (document.querySelector("#answerTwoCorrect").checked) {
      points++;
   }
   if (document.querySelector("#answerThreeCorrect").checked) {
      points++;
   }
   if (document.querySelector("#answerFourCorrect").checked) {
      points++;
   }
   scoreShow.textContent = "Your score is: " + points;
}
