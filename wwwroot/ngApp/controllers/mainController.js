class MainController {
    constructor() {
        this.message = this.randomFortune();
    }
        randomFortune(){
        let words = "";
        let fortunes = ["Have a great day", "Shine bright", "Good luck", "Hello from the other side!!!", "Your on the wrong page...Please refreash","My favorite number is 11","I am a DALEK!!! EXTERMINATE"];
        words= fortunes[Math.floor(Math.random() * fortunes.length)];
       
        return words;
    }

}