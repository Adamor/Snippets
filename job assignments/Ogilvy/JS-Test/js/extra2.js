$(function(){
    
  // wrap all in init
  var init = function() {
    eventListeners();
  };

//Listeners

function eventListeners() {
  $('#newWordSubmit').on('click', addNewWord);
  $('#guessLetterSubmit').on('click', guessLetter);
};

var wordToGuess = '',
    remainingGuesses = 9, // Gallow, gallow, rope, head, body, arm, arm, leg,leg
    underscore = [],
    currentGuesses = [],
    newWordToGuess = false,
    wrongGuess = true,
    currentWord = $('#currentWord');

// Functionality

function addNewWord(){
  //add reset check

    if(!newWordToGuess){
      createWord();
      console.log(currentGuesses);
      return currentGuesses;
    }
    
    else{
      //reset game then call create word
      currentWord.empty();
      underscore.length = 0;
      console.log(underscore);
      $(currentGuesses).empty();
      remainingGuesses = 9;
      $('#remaining').html('You have' + ' ' + remainingGuesses + ' ' + 'guesses remaining.' );
      createWord();
      newWordToGuess = false;
      return currentGuesses;
    }
};

function guessLetter(input){
  input = $('#guessedLetter').val().toLowerCase();

    for(var x = 0; x < wordToGuess.length; x++){
    // if the selected letter matches one in the word to guess,
    // replace the underscore
      if(wordToGuess.charAt(x) == input){
          underscore[x] = input;
          wrongGuess = false;
      }

      console.log(wrongGuess);
      currentWord.html(underscore.join(' '));
    }

      if(wrongGuess){

        remainingGuesses --;
        $('#remaining').html('You have' + ' ' + remainingGuesses + ' ' + 'guesses remaining.' );
        wrongGuess = true; 
        hasLost();
      }
      else{
        hasWon();
      }
};

function createWord(){
  wordToGuess = $('#newWord').val().toLowerCase();
  currentGuesses = wordToGuess.split('');
  
  for (var i = 0; i < currentGuesses.length; i++) {
    underscore.push('_');
  }
  
  currentWord.html(underscore.join(' '));
  clearInput();
  console.log(currentWord.html());    
  newWordToGuess = true;
}

function clearInput(){
  $('#newWord').val('');
};

function hasWon(){
      if(currentWord.text() === currentGuesses.join(' ')){
        alert('You won! Get down dog!');
      }
};

function hasLost(){
        if(remainingGuesses <= 0){
          alert('You lose. Good day Sir!');
        } 
};

    init();
});