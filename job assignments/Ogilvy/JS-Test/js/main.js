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
    remainingGuesses = 6,
    underscore = [];
    currentWord = $('#currentWord');

// Functionality

function addNewWord(){
  wordToGuess = $('#newWord').val().toLowerCase();
  currentGuesses = wordToGuess.split('');
  for (var i = 0; i < currentGuesses.length; i++) {
    underscore.push('_');
  }
  currentWord.html(underscore.join(' '));
  console.log(wordToGuess);
  return wordToGuess, currentGuesses;
};

function guessLetter(input){
  input = $('#guessedLetter').val();
  var wrongGuess = true;

    for(var x = 0; x < wordToGuess.length; x++){
    // if the selected letter matches one in the word to guess,
    // replace the underscore
      if(wordToGuess.charAt(x) == input.toLowerCase()){
          underscore[x] = input;
          console.log(underscore);
          wrongGuess = false;
          hasWon();
      }
      currentWord.html(underscore.join(' '));
    }
      if(wrongGuess){
        remainingGuesses --;
        $('#remaining').html('You have' + ' ' + remainingGuesses + ' ' + 'guesses remaining.' );
        hasLost();
      }
}

function hasWon(){
      if(currentWord.html() === wordToGuess){
        alert('You won! Get down dog!')
      }
    };

function hasLost(){
        if(remainingGuesses <= 0){
          alert('You lose. Good day Sir!');
        } 
      };

    init();
});