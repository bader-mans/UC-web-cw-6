let score = 0;
let scoreHTML = document.getElementById('score') ;

function increase() {
    console.log(1);
    score = score +1;
 scoreHTML.innerHTML=score;
}
