class Ball {
    constructor(r){
        this.target = document.querySelector('svg');
        this.el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.target.appendChild(this.el);
        this.x = Math.floor(Math.random() * 900 + 50);
        this.y = Math.floor(Math.random() * 450 + 50);
        this.r = r;
        this.color = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},${Math.random()})`;
        this.dead = false;
        this.el.addEventListener("click", ()=>{
            this.target.removeChild(this.el);
            this.dead = true;
        });
    }
    render(){
        this.el.setAttribute('cx', this.x);
        this.el.setAttribute('cy', this.y);
        this.el.setAttribute('r', this.r);
        this.el.setAttribute('fill', this.color);
        this.el.setAttribute('stroke', 'black');
        this.el.setAttribute('stroke-width', '2');
    }
    reduce(){
        this.r -= 1;
    }
    remove(){
        this.target.removeChild(this.el);
    }
}