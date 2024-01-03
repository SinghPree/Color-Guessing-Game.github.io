var score = 0;
var chosenColor;
var isDone = false;
updateScoreElement();
resetGame();

var resetButton = document.getElementById('reset')
resetButton.addEventListener('click',resetGame);

function resetGame(){
    isDone = false;
    let counter = 0;
    var colors = generateRandomColor();
    var boxes = document.getElementsByClassName('box')

    var colorDisplay = document.getElementById('Color-display');
    chosenColor = Math.floor(Math.random()*6);
    colorDisplay.innerText = colors[chosenColor];

    for(let box of boxes){
        let bgcolor = colors[counter];
        box.style.backgroundColor = bgcolor;
        box.removeEventListener('click', handleBoxClick)
        box.addEventListener('click' , handleBoxClick)
        box.id = counter++;
}

}

function handleBoxClick(e){
    checkCorrect(e.target.id, chosenColor)
    
}
function checkCorrect(id,chosenColor){
    console.log(id, chosenColor)
    if(id == chosenColor && isDone != true){
        score +=1;
        updateScoreElement();
        isDone = true;
        window.alert('Yeeehhh!!! Correct Answer. Click restart button to play again.')
    } else{
        if(isDone){
            window.alert('Click restart button to play again.')
        } else{
            window.alert('Opps!! Wrong Answer,Try again.')
        }
        
    }
 }
    

function generateRandomColor(){
    let colors = []
    for(let i =0; i<6; i++){
    let rgb='rgb('+ Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
    colors.push(rgb);
    }
    return colors;
}

function updateScoreElement(){
    var scoreElement = document.getElementById ('score');
    scoreElement.innerHTML = score;
}
