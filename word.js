var letter = require('./letter');
//the class of WORD
class Word{
    //builds the word object
    constructor(w){
        this.word = w;
        this.arr = []
    };
    //creates an array of its lettes
    value(){
        this.word.split("").forEach(char => {
            var ch = new letter(char);
            this.arr.push(ch);
        }); 
    };
    //takes the users guess and checks its agains every letter individual
    indvCheck(x){
        this.arr.forEach(c =>{
            c.check(x)
        });
    };

    fullCheck(){
       if (this.arr.every(obj => obj.isGuessed)){
           return true;
       }
    }

}
//sample code
// var dog = new Word('dog');
// dog.value();
// console.log(dog.arr)
// console.log(dog.arr.join(' '))

module.exports = Word;