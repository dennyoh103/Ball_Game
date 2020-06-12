class Ball {

    constructor(x,y){
        this.target = document.querySelector('svg');
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        
        this.x = x;
        this.y = y;
        this.r = 50;
    }

    render(){
        this.el.setAttribute('cx', this.x);
        this.el.setAttribute('cy', this.y);
        this.el.setAttribute('r', 50);
        this.el.setAttribute('fill', 'red');
        this.target.appendChild(this.el);
    }

    reduce(){
        this.r -= 5;
    }

    remove(){
        this.target.removeChild(this.el);
    }
}