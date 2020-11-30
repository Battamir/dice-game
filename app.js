//  Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0,  хоёрдугаар тоглогч 1,

var avctivePlayer;


// Цуглуулсан оноог хадгалах хувьсагч

var score;


// Тоглогчийн ээлжинд  цуглуулж байгаа оноог хадгалах хувьсагч

var currentScore;

//  Тоглоом дуусаа

var gameOver;




// Шоо аль талаараа буухыг хадгалах хувьсагч  
// getElementByid idgaar haihad system hurdtai bolno
// anonymous function ashiglaj 1 ajil hiih function bichsen
// callback function ashiglaw
// shoog hayhad zurag uurchlugddug bogoson



var diceHayah = document.querySelector('.dice');

shineToglolt();

function shineToglolt(){
    gameOver = true;
    avctivePlayer = 0
    score = [0, 0];
    currentScore = 0;

    document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
diceHayah.style.display = 'none';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}


// Roll Dice towchnii event listener ene shvv!!!
document.querySelector('.btn-roll').addEventListener('click' , function() {
    if(gameOver === true){
        var diceNumber = Math.floor( Math.random( ) * 6 ) + 1;
    diceHayah.style.display = 'block';
    diceHayah.src = 'dice-' + diceNumber + '.png';
    if(diceNumber !== 1){
        currentScore = currentScore + diceNumber;
        document.getElementById('current-' + avctivePlayer).textContent = currentScore;
    }else{
       daraagiinToglogch()
    };
    }else{
        alert('Togloom duuslaa New game deer daraarai!!!')
    }
    
} );


//  hold towchiig darahad uusne



document.querySelector('.btn-hold').addEventListener('click', function(){
if(gameOver === true){
    score[avctivePlayer] = score[avctivePlayer] + currentScore;
document.getElementById('score-' + avctivePlayer).textContent = score[avctivePlayer]
if(score[avctivePlayer] >= 15){
    gameOver = false;
document.getElementById('name-' + avctivePlayer).textContent = 'Winner!!!';
document.querySelector('.player-'+ avctivePlayer +'-panel').classList.add('winner');
document.querySelector('.player-'+ avctivePlayer +'-panel').classList.remove('active');
}else{
daraagiinToglogch();
}
}else{
    alert('Togloom duuslaa New game deer daraarai!!!')
}

});
// daraagiin toglogchid shiljih function
function daraagiinToglogch(){
    currentScore = 0;
        document.getElementById('current-' + avctivePlayer).textContent = 0;
        avctivePlayer === 0 ? (avctivePlayer = 1) : (avctivePlayer = 0);
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        diceHayah.style.display = 'none'
};


// new game towch

document.querySelector('.btn-new').addEventListener('click' , shineToglolt);
