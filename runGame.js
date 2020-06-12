    const playField = document.querySelector('.playField');
    let gameOver = true;
    playField.addEventListener("click", function(event) {
        if (event.currentTarget !== event.target){
            return;
        }
        gameOver = true;
    }, false);
    const circles = [];
    let score = 0;
    let highScore = 0;
    let difficulty;
    let radius = 0;

    function startGame(){
        if(gameOver){
            gameOver = false;
            radius = checkRadioButtons();
            gameLoop();
        }
        return;
    }

    function gameLoop(){
        const gameOver = checkGameStatus();
        if(gameOver){
            stopGame();
        } else {
            checkBallStatus();
            addCircle();
            updateCircles();
            setTimeout(gameLoop, 1000 - (score * 7.5));
        }
    }
    function checkRadioButtons(){
        return document.querySelector('input[name="difficulty"]:checked').value;
    }
    function addCircle(){
        const ball = new Ball(radius);
        circles.push(ball);
    }
    function updateCircles(){
        circles.map(circle=>circle.reduce());
        circles.map(circle=>circle.render());
    }

    function checkBallStatus(){
        circles.forEach((circle, i)=>{  
            if(circles[i].dead){
                circle = circles.splice(i,1);
                score++;
                if(score > highScore){
                    highScore = score;
                    document.querySelector('#topScore').innerHTML = "High Score: " + highScore;
                }
            }
        })
    }
    function checkGameStatus(){
        if(circles.length > 10 || gameOver){
            return true;
        } 
        return false;
    }
 

    function printScore(){
        window.alert('Your Score is ' + score);
    }

    function stopGame(){
        clearBoard();
        printScore();
        circles.length = 0;
        score = 0;
    }

    function quitGame(){
        gameOver = true;
    }

    function clearBoard(){
        while(playField.lastChild !== document.querySelector('text')){
            playField.removeChild(playField.lastChild);
        }
    }