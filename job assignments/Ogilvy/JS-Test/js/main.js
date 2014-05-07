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
    allGuesses = [],
    newWordToGuess = false,
    currentWord = $('#currentWord');

// Functionality

function addNewWord(){

    if(!newWordToGuess){
      createWord();
      console.log(currentGuesses);
      return currentGuesses;
    }
    
    else{
      
      //Reset game
      currentWord.empty();
      underscore.length = 0;
      allGuesses.length = 0;
      $(currentGuesses).empty();
      remainingGuesses = 9;
      $('#remaining').html('You have' + ' ' + remainingGuesses + ' ' + 'guesses remaining.' );
      
      // Create new word
      createWord();
      newWordToGuess = false;
      return currentGuesses;
    }
};

function guessLetter(input){
  input = $('#guessedLetter').val().toLowerCase();
  var wrongGuess = true;
  var dupCheck = $.inArray(input, allGuesses);

    for(var x = 0; x < wordToGuess.length; x++){
    // if the selected letter matches one in the word to guess,
    // replace the underscore
      if(wordToGuess.charAt(x) == input){
          underscore[x] = input;
          allGuesses.push(input);
          wrongGuess = false;
      }

      currentWord.html(underscore.join(' '));
    }

      if(wrongGuess && dupCheck < 0){
        console.log(dupCheck);
        allGuesses.push(input);

        console.log(allGuesses);
        remainingGuesses --;
        $('#remaining').html('You have' + ' ' + remainingGuesses + ' ' + 'guesses remaining.' );
        
        hasLost();
        wrongGuess = true;
      }

      else if(dupCheck >= 0){
        alert('Already used that letter man! No worries, I stopped the counter. Wooh close one.')
      }
      
      else{
        hasWon();
      }
      clearInput();
};

function createWord(){
  wordToGuess = $('#newWord').val().toLowerCase();
  currentGuesses = wordToGuess.split('');
  
  for (var i = 0; i < currentGuesses.length; i++) {
    underscore.push('_');
  }
  
  currentWord.html(underscore.join(' '));
  clearInput();
  newWordToGuess = true;
}

function clearInput(){
  $('.refresh').val('');
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