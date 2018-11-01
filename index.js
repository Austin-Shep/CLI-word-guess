var inquirer = require('inquirer');
var Word = require('./word.js');
var wordBank =[ 'dog', 'rock', 'house', 'heck', 'plumbus', 'health',  ];
var guesses = 6;
var score = 0;

//used to select a random word from the array
randWord = (lngth) =>{
    var num = Math.floor(Math.random() * lngth);
    return wordBank[num];
};

//the game
game = () =>{
    //store the random word in a variable
    guesses = 6;
    var wordChoice = randWord(wordBank.length);
    var word = new Word(wordChoice)
    word.value();
    
    question(word);

}

//asks your guess, then passes it to the checker
question = (word) =>{
    console.log(word.arr.join(' '))
    inquirer
        .prompt([
            {
                type: 'input',
                question: 'input your guess!',
                name: 'input'
            },
        ]).then(ans=>{
            
            roundCheck(word , ans.input);

        });
};

//takes the word object and the user input and putts it through some checks
roundCheck = (word, input) => {
    word.indvCheck(input);

    if(word.word.includes(input)){
        console.log('good guess');
        gameCheck(word);
    }

    else{
      guesses--;  
      console.log(guesses);
      console.log('bad guess');
      if(guesses==0){
          console.log(`     ~*~*~*~*~*~*~       `)
          console.log(`~*~*~* GAME OVER ~*~*~*~`)
          console.log(`     ~*~*~*~*~*~*~       `)
          return;
      }
      gameCheck(word);
    }

};

gameCheck = (word) =>{

    if(word.fullCheck()){

        console.log('=game over=')

        inquirer.prompt([
            {
                type: 'confirm',
                name: 'play',
                messsage: 'Play Again?'
            }

        ]).then(ans=>{
            if(ans.play){
                score++
                console.log(score)
                game();
            }else {
                console.log(`     ~*~*~*~*~*~*~       `)
                console.log(`~*~*~* GAME OVER ~*~*~*~`)
                console.log(`     ~*~*~*~*~*~*~       `)
            }
        });
    }
    else{
        question(word);
    }
}

game();
