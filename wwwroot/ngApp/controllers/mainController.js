class MainController {
    constructor() {
        this.message = this.randomFortune();
    }
        randomFortune(){
        let words = "";
        let fortunes = ["Have a great day", "Shine bright", "Good luck"];
        words= fortunes[Math.floor(Math.random() * 3)];
       
        return words;
    }
}