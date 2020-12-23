class Game {
    startCounter(elem) {
        let count = Number(elem.innerHTML);

        switch (count) {

            case 51:
                elem.classList.remove('yellow')
                elem.classList.add('default');
            case 50:
                elem.classList.remove('red');
                elem.classList.remove('default');
                elem.classList.add('yellow');
                this.changeFace('sad');
                break;
            case 10:
                elem.classList.remove('yellow');
                elem.classList.add('red');
                this.changeFace('crying');
                break;
            case 0:
                this.gameOver();
                this.changeFace('dead');
                return;
        }
        elem.innerHTML = --count;
    }

    start() {
        this.img = document.querySelector('#image');
        this._btnSleep = document.querySelector('#btnSleep');
        this._btnEat = document.querySelector('#btnEat');
        this._btnToilet = document.querySelector('#btnToilet');

        this._sleepProperty = document.querySelector('#sleepProperty');
        this._eatProperty = document.querySelector('#eatProperty');
        this._toiletProperty = document.querySelector('#toiletProperty');

        this.timerIdSleep = setInterval(() => this.startCounter(this._sleepProperty), 6000);
        this.timerIdEat = setInterval(() => this.startCounter(this._eatProperty), 2000);
        this.timerIdToilet = setInterval(() => this.startCounter(this._toiletProperty), 4000);

        this._btnSleep.onclick = this.plusProperty.bind(this, this._sleepProperty);
        this._btnEat.onclick = this.plusProperty.bind(this, this._eatProperty);
        this._btnToilet.onclick = this.plusProperty.bind(this, this._toiletProperty);
    }

    gameOver() {
        clearInterval(this.timerIdSleep);
        clearInterval(this.timerIdEat);
        clearInterval(this.timerIdToilet);
    }

    plusProperty(field) {
        if (field.innerHTML == 100) {
            return;
        }
        field.innerHTML++;

    }

    changeFace(mood){
        switch(mood){
            case 'sad':
                this.img.src = './sad.jpg';
            break;
            case 'crying':
                this.img.src = './crying.jpg';
            break;
            case 'dead':
                this.img.src = './dead.png';
        }
        
    }
}

const newGame = new Game();
newGame.start();





