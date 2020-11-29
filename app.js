//  Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0,  хоёрдугаар тоглогч 1,

var avctivePlayer = 1;


// Цуглуулсан оноог хадгалах хувьсагч

var score = [0, 0];


// Тоглогчийн ээлжинд  цуглуулж байгаа оноог хадгалах хувьсагч

var currentScore = 0;




// Шоо аль талаараа буухыг хадгалах хувьсагч  

var dice = Math.floor( Math.random( ) * 6 ) + 1;

document.querySelector('#score-0').textContent = dice;

console.log('шоо' + dice);


document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').innerHTML = '<em>Yes!<em>';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';