const facebookCounter = document.querySelector(".facebook-counter");
const twitterCounter = document.querySelector(".twitter-counter");
const instagramCounter = document.querySelector(".instagram-counter");

class Counter {
    constructor(el,follower,sec){
    this.followers = follower;
    this.element = el;
    this.seconds = sec*1000;
    this.counter = 0;
    this.setInt;
    this.counts();
    }
    counts(){
        this.setInt = setInterval(()=> {
            if (this.counter < this.followers){
                this.counter += Math.round(this.followers/(this.seconds/100)); 
                if (this.counter <= this.followers){
                    this.element.innerHTML = `${this.counter.toString()}`;
        
                }
                else {
                    this.element.innerHTML = `${this.followers}`;
                } 
            }
            else {
                this.stop();
            }
        }, (this.seconds/100));
    }
    stop(){
        clearInterval(this.setInt);
    }
};

const facebook = new Counter(facebookCounter,6838, 4);
const twitter = new Counter(twitterCounter,25012, 4);
const instagram = new Counter(instagramCounter,34129, 4);

