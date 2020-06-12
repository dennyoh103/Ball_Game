// --------- Class constructor ------------
class Ball {
    constructor(x,y){
        this.target = document.querySelector('svg');
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.target.appendChild(this.el);
        this.x = x;
        this.y = y;
        this.r = 50;
    }

    render(){
        this.el.setAttribute('cx', x);
        this.el.setAttribute('cy', y);
        this.el.setAttribute('r', 50);
        this.el.setAttribute('fill', 'red');
    }

    reduce(){
        this.r -= 5;
    }

    remove(){
        this.target.removeChild(this.el);
    }
}

// -------- javascript functions --------------
function startGame(){
    makeCircle();
    myBall.reduce();
    console.log(myBall);

}

function makeCircle(){
    const x = Math.floor(Math.random() * 900 + 50);
    const y = Math.floor(Math.random() * 450 + 50);
    let myBall = new Ball(x, y);

    myBall.render();
}

function reduce(){
    while(r > 0){
        myBall.reduce();
    }
}