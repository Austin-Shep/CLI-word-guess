//letter class
class Letter {
    // builds the lettter object
    constructor(char){
    this.char = char;
    this.isGuessed = false;  
    }

    //used to check the users guess
    check(userGuess){
        if(userGuess == this.char){
            this.isGuessed = true;
        }
    }
    //used to display the character  
    toString(){
        var display = this.char;
        //
        if(!this.isGuessed){
            var display = ` _ `;
        }

        return display;
    }
};

module.exports = Letter;


