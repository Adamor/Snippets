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

var wordToGuess = ''
var remainingGuesses = 6;
var underscore = [];
var output = '';

// Functionality

function addNewWord(){
  wordToGuess = $('#newWord').val();
  currentGuesses = wordToGuess.split('');
  for (var i = 0; i < currentGuesses.length; i++) {
    underscore.push('_');
  }
  for ( var x = 0; x < underscore.length; x++) {
    output += underscore[x] + ' ';
  }
  $('#currentWord').html(output);
  return wordToGuess, currentGuesses;
};

function guessLetter(input){
  input = $('#guessedLetter').val();
  var foundLetter = false;
  // $('.remaining').html('You have' + ' ' + remainingGuesses + ' ' + ' left.');
    for(var x = 0; x < currentGuesses.length; x++){
      if(input === wordToGuess[x]){
          underscore[x] = input;
          console.log(underscore);
          foundLetter = true;
      }
      else if(!foundLetter){
        remainingGuesses --;
        console.log(remainingGuesses);
      }
      else if(remainingGuesses === 0){
        console.log('You Lose! Good Day Sir!');
      }
    }
    // $('#currentWord').replaceWith();
}

    init();
});