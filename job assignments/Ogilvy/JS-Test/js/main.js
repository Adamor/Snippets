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
    currentWord = $('#currentWord');

// Functionality

function addNewWord(){
  //add reset and dup letter check
  // if(currentGuesses === []){
    wordToGuess = $('#newWord').val().toLowerCase();
    currentGuesses = wordToGuess.split('');
    for (var i = 0; i < currentGuesses.length; i++) {
      underscore.push('_');
    }
    currentWord.html(underscore.join(' '));
    clearInput();
    return currentGuesses;
  // }
  // else{

  // }
};

function guessLetter(input){
  input = $('#guessedLetter').val().toLowerCase();
  var wrongGuess = true;

    for(var x = 0; x < wordToGuess.length; x++){
    // if the selected letter matches one in the word to guess,
    // replace the underscore
      if(wordToGuess.charAt(x) == input){
          underscore[x] = input;
          console.log(underscore);
          wrongGuess = false;
      }
      currentWord.html(underscore.join(' '));
    }

      if(wrongGuess){

        remainingGuesses --;
        $('#remaining').html('You have' + ' ' + remainingGuesses + ' ' + 'guesses remaining.' );
        hasLost();
      }
      else{
        hasWon();
      }
};

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