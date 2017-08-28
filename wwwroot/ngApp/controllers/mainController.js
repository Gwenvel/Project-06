class MainController {
    constructor() {



        let phrases = ["Hello from the other side!!!", "Your on the wrong page...Please refreash","My favorite number is 11","I am a DALEK!!! EXTERMINATE"];

        this.message = phrases[Math.floor((Math.random() * phrases.length))];
   
           
    }

}