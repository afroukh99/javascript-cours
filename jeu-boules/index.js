const space = document.getElementById("space")

let ballElement
let counter = 0;




class Ball {

    constructor(xPosition, yPosition) {
        this.id = ++counter;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.element = null;
    }

    createBallElement() {
        this.element = document.createElement("div");
        this.element.id = "ball" + this.id;
        this.element.className = "ball";
        this.element.style.left = this.xPosition + "px";
        space.appendChild(this.element)
    }

    moveBall() {
        const id = setInterval(() => {
            this.yPosition += 5;
            this.element.style.top = this.yPosition + 'px'

            console.log(this.yPosition - this.element.offsetHeight)

            if (this.yPosition >= (space.offsetHeight - this.element.offsetHeight)) {
                this.element.style.display = 'none';
                clearInterval(id);
            }
        }, 20);

    }

}



function playGame() {
    setInterval(() => {
        const xPosition = Math.floor(Math.random() * (space.offsetWidth - 50));
        const yPosition = 0;
        const ball = new Ball(xPosition, yPosition)

        ball.createBallElement()
        ball.moveBall()

    }, 1000)
}




