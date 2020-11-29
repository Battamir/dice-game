//  Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0,  хоёрдугаар тоглогч 1,

var avctivePlayer = 1;


// Цуглуулсан оноог хадгалах хувьсагч

var score = [0, 0];


// Тоглогчийн ээлжинд  цуглуулж байгаа оноог хадгалах хувьсагч

var currentScore = 0;




// Шоо аль талаараа буухыг хадгалах хувьсагч  
// getElementByid idgaar haihad system hurdtai bolno
// anonymous function ashiglaj 1 ajil hiih function bichsen
// callback function ashiglaw
// shoog hayhad zurag uurchlugddug bogoson


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceHayah = document.querySelector('.dice');
diceHayah.style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click' , function() {
    var diceNumber = Math.floor( Math.random( ) * 6 ) + 1;
    diceHayah.style.display = 'block';
    diceHayah.src = 'dice-' + diceNumber + '.png';
} );
