
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function(){
    	location.reload();

    });
var rnDom = getRandom();
/*console.log (rnDom);*/

var numOfGuesses = 0
$('.button').click(function() { 
	
	/*console.log(numOfGuesses)
	var myGuess=9999;*/
	var myGuess = parseInt($("input[name=userGuess]").val());
	console.log(myGuess);
	var valDifference = Math.abs(rnDom - myGuess);
	/*console.log(valDifference);*/
	if (myGuess > 100){
		var result = " The number you chose was greater than 100! Please try again."
		var dispResult = result.fontcolor ("purple");	
	}
	else if (valDifference == 0) {
		var result = " Congratulations...  You Win!! Click On New Game To Play Again"
		var dispResult = result.fontcolor ("green");
	} else if ((valDifference > 0) && (valDifference <= 5)) {
		result = "Your guess was " + (myGuess) + ". You are Red Hot! Try another guess."
		var dispResult = result.fontcolor ("red");
	} else if (valDifference <= 10) {
		result = "Your guess was " + (myGuess) + ". You are Hot! Try another guess."
		var dispResult = result.fontcolor ("red");
	}else if (valDifference <= 15) {
		result = "Your guess was " + (myGuess) + ". You are Warm! Try another guess."
		var dispResult = result.fontcolor ("salmon");
	}else {
		result = "Your guess was " + (myGuess) + ". You are Cold! Try another guess."
		var dispResult = result.fontcolor ("blue");
		var iWon = "yes";
	}
	$('#guessList').html(dispResult);
	numOfGuesses = numOfGuesses + 1;
	$("#count").html(numOfGuesses);
	$("input[name=userGuess]").val("").focus();
})


});

function getRandom() {
  		return Math.floor((Math.random() * 100) +1) ;
}

		



	
