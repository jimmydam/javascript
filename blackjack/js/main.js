
/*  I Hung Dam, student 000736057, certify that all code submitted is my own work;
 that I have not copied from any other source. I also certify that I have not allowed 
 my work to be copied by others. If in any instance that an external resource is used,
 I will cite/and or give credit to the original author.
 */
 

player1Name = prompt(" please enter player 1 name");
player2Name = prompt(" please enter player 2 name");

// all dealer and players bank amount
var dealerBankAmount = 1000;
var player1BankAmount = 100;
var player2BankAmount = 100;

// counter to keep track of how many cards had been hit from each player
var dealerHitCounter = 0;
var player1HitCounter = 0;
var player2HitCounter = 0;

// sum of the hand of each players
var dealerSum = 0;
var sum1 = 0;
var sum2 = 0;

// hand[] , these arrays store the cards of each player
var dealerHand = [];
var player1Hand = [];
var player2Hand = [];

// boolean value for if the players stays or not, does not apply to dealer
var player1Stay = false;
var player2Stay = false;

// keeps track of whose turn it is
whosTurnIsIt = 1;

document.getElementById("player2Name").innerHTML = player2Name;
document.getElementById("player1Name").innerHTML = player1Name;

// deck of card
var cardDeck = [1,2,3,4,5,6,7,8,9,10,10,10,10,
				1,2,3,4,5,6,7,8,9,10,10,10,10,
				1,2,3,4,5,6,7,8,9,10,10,10,10,
				1,2,3,4,5,6,7,8,9,10,10,10,10];

// rules for blackjack				
var rules=    "- These are the rules to to '21' \n- There are 52 cards in the deck\n"
			+ "- The objective to have your cards add up to 21 without going over.\n- if you go over 21, you lose.\n"
			+ "- This game is played by the players versus the dealer. The dealer has $1000 in the bank for you to take.\n"
			+ "- all player will start with 2 cards same as the dealer, except for the dealer's 2nd card, that will be hidden until"
			+ "- both player stay.\n you can click 'hit' to get more card if you are not satisfy with your current hand, or click 'stay'"
			+ " to keep your current hand and take you chances."
			+ "\n- The deck of cards will automatically resets itself when there"
			+ " is not enough card to play a whole round. "
			+ "\n You get only a maximum of 5 cards to try to beat the dealer."
			+ "\n- Good luck, and remember to always gamble responsibly.";
			
			

/**
 * checks how many card remaining, in case there is less than 15 cards
 * that wouldn't be enough card to play a full round
 * @returns {undefined}
 */
function checkRemainingCard(){
	if(cardDeck.length < 15){
		alert("Please wait, while we change to a new deck.");
		changeNewDeck();
	}
} 

/**
 * destroy old deck of cards and creates a new deck of card 
 * @returns cardDeck
 */	
function changeNewDeck(){
	cardDeck = [];
	cardDeck = [1,2,3,4,5,6,7,8,9,10,10,10,10,
				1,2,3,4,5,6,7,8,9,10,10,10,10,
				1,2,3,4,5,6,7,8,9,10,10,10,10,
				1,2,3,4,5,6,7,8,9,10,10,10,10];
	
	
	return cardDeck;
}

function rulesOfTheGame(){
	alert(rules);
}

			
///////////////// start game function //////////////////////////////////////////


/**
 * start the blackjack game
 * @returns {undefined}
 */
function startGame(){
	
	// set the initial value for the game, if in case from a previous game
	// the values had been carried on to the next round, values such as:
	// sum of all players hand will be back to 0, and their hand[] will be back to 0. 
	dealerSum = 0;
	sum1 = 0;
	sum2 = 0;
	dealerHand = [];
	player1Hand = [];
	player2Hand = [];
	whosTurnIsIt = 1;
	player1HitCounter = 0;
	player2HitCounter = 0;
	dealerHitCounter = 0;
	document.getElementById("status").innerHTML = "Cards are being dealt";
	document.getElementById("status2").innerHTML = "";
	document.getElementById("player1Card1").innerHTML = "";
	document.getElementById("player1Card2").innerHTML = "";
	document.getElementById("player2Card1").innerHTML = "";
	document.getElementById("player2Card2").innerHTML = "";

	checkRemainingCard();
	if(cardDeck.length == 52){
		shuffleDeck(cardDeck);
	}
	
	// this deals the cards to all players and remove them from the deck
	dealDealerCards();
	remove2CardFromDeck();
	dealPlayer1Cards();
	remove2CardFromDeck();
	dealPlayer2Cards();
	remove2CardFromDeck();
	
	// hides all the cards that doesn't need to be shown at initial state of game
	document.getElementById("dealerCard2").style.backgroundColor = "blue";
	document.getElementById("dealerCard3").style.visibility = "hidden";
	document.getElementById("dealerCard4").style.visibility = "hidden";
	document.getElementById("dealerCard5").style.visibility = "hidden";
	document.getElementById("player1Card3").style.visibility = "hidden";
	document.getElementById("player1Card4").style.visibility = "hidden";
	document.getElementById("player1Card5").style.visibility = "hidden";
	document.getElementById("player2Card3").style.visibility = "hidden";
	document.getElementById("player2Card4").style.visibility = "hidden";
	document.getElementById("player2Card5").style.visibility = "hidden";
	
	// sets the players and the bank amount for all players	
	document.getElementById("player2Name").innerHTML = player2Name;
	document.getElementById("player1Name").innerHTML = player1Name;
	document.getElementById("dealerBank").innerHTML = "$"+ dealerBankAmount;
	document.getElementById("player1Bank").innerHTML = "$"+ player1BankAmount;
	document.getElementById("player2Bank").innerHTML = "$"+ player2BankAmount;
	

	
	// these timer delay function mimics the cards being dealt
	setTimeout(function(){
	document.getElementById("status").innerHTML = "Please wait while cards are shuffling ";
	}, 0);

	setTimeout(function(){
	document.getElementById("player1Card1").innerHTML = player1Hand[0];
	}, 1000);

	setTimeout(function(){
	document.getElementById("player1Card2").innerHTML = player1Hand[1];
	}, 1500);

	setTimeout(function(){
	document.getElementById("player2Card1").innerHTML = player2Hand[0];
	}, 2000);

	setTimeout(function(){
	document.getElementById("player2Card2").innerHTML = player2Hand[1];
	}, 2500);

	setTimeout(function(){
	document.getElementById("dealerCard1").innerHTML = dealerHand[0];
	document.getElementById("dealerCard2").innerHTML = "";
	document.getElementById("totalDealer").innerHTML = "total:";
	}, 3000);
	
	// sums up both player cards then it can be set to their respective HTML tags
	player1Sum();
	player2Sum();
	
	// set HTML tag to card total for player
	setTimeout(function(){
	document.getElementById("totalPlayer1").innerHTML = "total:" + sum1;
	}, 3500);

	setTimeout(function(){
	document.getElementById("totalPlayer2").innerHTML = "total:" + sum2;
	document.getElementById("status").innerHTML = player1Name + " turn, hit or stay?";
	}, 4000);
		
	document.getElementById("hit").style.display = "block";
	document.getElementById("stay").style.display = "block";
	document.getElementById("newRound").style.display = "none";
	

		
} // end of startGame();
////////////// end of start /////////////////////////////////
function dealCardToAllPlayer(){
	setTimeout(function(){
	document.getElementById("status").innerHTML = "Please wait while cards are shuffling ";
	}, 0);

	setTimeout(function(){
	document.getElementById("player1Card1").innerHTML = player1Hand[0];
	}, 1000);

	setTimeout(function(){
	document.getElementById("player1Card2").innerHTML = player1Hand[1];
	}, 1500);

	setTimeout(function(){
	document.getElementById("player2Card1").innerHTML = player2Hand[0];
	}, 2000);

	setTimeout(function(){
	document.getElementById("player2Card2").innerHTML = player2Hand[1];
	}, 2500);

	setTimeout(function(){
	document.getElementById("dealerCard1").innerHTML = dealerHand[0];
	document.getElementById("dealerCard2").innerHTML = "";
	document.getElementById("totalDealer").innerHTML = "total:";
	}, 3000);
	
	// sums up both player cards then it can be set to their respective HTML tags
	player1Sum();
	player2Sum();
	
	// set HTML tag to card total for player
	setTimeout(function(){
	document.getElementById("totalPlayer1").innerHTML = "total:" + sum1;
	}, 3500);

	setTimeout(function(){
	document.getElementById("totalPlayer2").innerHTML = "total:" + sum2;
	document.getElementById("status").innerHTML = player1Name + " turn, hit or stay?";
	}, 4000);
		
	document.getElementById("hit").style.display = "block";
	document.getElementById("stay").style.display = "block";
	document.getElementById("newRound").style.display = "none";
}


//////resetting game ////////// resetting game////////////////
/**
 * reset the bank value of all player back to default 
 * @returns {undefined}
 */
function resetBank(){
	dealerBankAmount = 1000;
	player1BankAmount = 100;
	player2BankAmount = 100;
}



/**
 * reset the game back to initial state, all value reset to default
 * @returns {undefined}
 */
function resettingGame(){
	resetBank();
	changeNewDeck();
	shuffleDeck(cardDeck);	
	dealCardToAllPlayer();
	startGame(); 
	
}

//////////////// reset to default value /////////////////////////////////

/**
 * reset to play a new round, keeping the bank amount unchanged
 * reset all values except for the bank amount for player 1, player 2, and dealer.
 * @returns {undefined}
 */
function resetToDefault(){
	// resets all variables back to original state
	dealerHitCounter = 0;
	player1HitCounter = 0;
	player2HitCounter = 0;
	dealerSum = 0;
	sum1 = 0;
	sum2 = 0;
	dealerHand = [];
	player1Hand = [];
	player2Hand = [];
	player1Stay = false;
	player2Stay = false;
	whosTurnIsIt = 1;
	document.getElementById("dealerCard2").style.backgroundColor = "blue";
	document.getElementById("dealerCard3").style.visibility = "hidden";
	document.getElementById("dealerCard4").style.visibility = "hidden";
	document.getElementById("dealerCard5").style.visibility = "hidden";

	document.getElementById("player1Card3").style.visibility = "hidden";
	document.getElementById("player1Card4").style.visibility = "hidden";
	document.getElementById("player1Card5").style.visibility = "hidden";

	document.getElementById("player2Card3").style.visibility = "hidden";
	document.getElementById("player2Card4").style.visibility = "hidden";
	document.getElementById("player2Card5").style.visibility = "hidden";

	document.getElementById("dealerBank").innerHTML = "$"+ dealerBankAmount;
	document.getElementById("player1Bank").innerHTML = "$"+ player1BankAmount;
	document.getElementById("player2Bank").innerHTML = "$"+ player2BankAmount;
	
	//startGame(); // this line is no good, don't use it.. it cause endless loops
}

////////////////////////////////////////////////////////////////


/**
 * set player 1 name
 * @returns {undefined}
 */
function setPlayer1Name(){
	document.getElementById("player1Name").innerHTML = player1Name;
}

/**
 * set player2 name
 * @returns {undefined}
 */
function setPlayer2Name(){
	document.getElementById("player2Name").innerHTML = player2Name;
}


/////////////// functions ////////////////////// functions /////////////////////////	

/**
 * shuffles the deck of cards using a Fisher Yates algorithm
 * retrieved @ https://bost.ocks.org/mike/shuffle/
 * @param {array} cardDeck - the deck of cards
 * @returns {
 */	
function shuffleDeck(cardDeck) {
  
  var currentIndex = 52;
  var temp;
  var randomIndex;
  	
  // While there remain elements to shuffle…
  while (currentIndex) {

    // Pick a remaining element…
    randomIndex = Math.floor(Math.random() * currentIndex--);

    // And swap it with the current element.
    temp = cardDeck[currentIndex];
    cardDeck[currentIndex] = cardDeck[randomIndex];
    cardDeck[randomIndex] = temp;
  }
  return cardDeck;
}	

/**
 * remove 2 cards from the deck of cards
 * @returns {undefined}
 */			
function remove2CardFromDeck(){ 
	cardDeck.splice(0,2);
}

/**
 * deals 2 cards to player 1
 * @returns {undefined}
 */	
function dealPlayer1Cards(){
	for (i = 0; i < 2;){
	player1Hand.push(cardDeck[i]);
	//player1Hand[i] = [cardDeck[i]];
	i++;
	}
}

/**
 * deals 2 cards to the dealer
 * @returns {undefined}
 */	
function dealDealerCards(){
	for (i = 0; i < 2;){
	dealerHand.push(cardDeck[i]);
	//player1Hand[i] = [cardDeck[i]];
	i++;
	}
}

/**
 * deals 2 cards to player 2
 * @returns {undefined}
 */	
function dealPlayer2Cards(){
	for (i = 0; i < 2;){
	player2Hand.push(cardDeck[i]);
	//player1Hand[i] = [cardDeck[i]];
	i++;
	}
}

/**
 * sum up the dealer hand
 * @returns dealerSum 
 */	
function dealerCardSum(){
	if(dealerSum > 0){
		dealerSum = 0;
		for (i = 0; i < dealerHand.length; i++){
		dealerSum = dealerSum + dealerHand[i];	
		}
	}else{
		for (i = 0; i < dealerHand.length; i++){
		dealerSum = dealerSum + dealerHand[i];	
		}
	}
	return dealerSum;
}

/**
 * sum up player 1 hand
 * @returns sum1 
 */	
function player1Sum(){
	if(sum1 > 0){
		sum1 = 0;
		for (i = 0; i < player1Hand.length; i++){
		sum1 = sum1 + player1Hand[i];	
		}
	}else{
		for (i = 0; i < player1Hand.length; i++){
		sum1 = sum1 + player1Hand[i];	
		}
	}
	return sum1;
}

/**
 * sum up player 2 hand
 * @returns sum2
 */	
function player2Sum(){
	if(sum2 > 0){
		sum2 = 0;
		for (i = 0; i < player2Hand.length; i++){
		sum2 = sum2 + player2Hand[i];	
		}
	}else{
		for (i = 0; i < player2Hand.length; i++){
		sum2 = sum2 + player2Hand[i];	
		}
	}
	return sum2;
}

///////////////  Hit and Stay   ////////////// Hit and Stay  //////////////

/**
 * dealer hit, gets 1 card
 * @returns {undefined}
 */	
function dealerHit(){
	dealerHand.push(cardDeck[0]);
	cardDeck.splice(0,1);
}

/**
 * hit function for player 1 and player 2
 * @returns {undefined}
 */	
function hit(){
	if (whosTurnIsIt == 1){ //players 1 turn
		player1Hit();
		
		// funky note to self, this prevent player 2 auto hitting when player 1 goes over 21,
		// player1Hitcounter start at 0, and goes to 2
		// player2HitCounter start at 1, goes to 3. reason being...
		// if player 1 stay, then whosTurnIsIt will be 2, with player2HitCounter = 0,
		// right away it jumps into  'if whosTurnIsIt will be 2, with player2HitCounter = 0'
		// auto triggers player2Hit(), causing automatic hit when player 1 goes over..
		if(player1HitCounter == 0 ){	// 3rd card
			player1Sum();
			document.getElementById("player1Card3").style.visibility = "visible";
			document.getElementById("player1Card3").innerHTML = player1Hand[2];		
			document.getElementById("totalPlayer1").innerHTML = "total:" + sum1;
			
		}
		
		if(player1HitCounter == 1){	// 4th card
			//player1Hit();
			player1Sum();
			document.getElementById("player1Card4").style.visibility = "visible";
			document.getElementById("player1Card4").innerHTML = player1Hand[3];		
			document.getElementById("totalPlayer1").innerHTML = "total:" + sum1;
		}
		
		if(player1HitCounter == 2){	// 5th card
			//player1Hit();
			player1Sum();
			document.getElementById("player1Card5").style.visibility = "visible";
			document.getElementById("player1Card5").innerHTML = player1Hand[4];		
			document.getElementById("totalPlayer1").innerHTML = "total:" + sum1;
		}

		
		if(sum1 > 21){
			stay();
			//whosTurnIsIt = 2;
			document.getElementById("status").innerHTML = "YOU BUSTED ! it's " + player2Name + "'s turn.";
			document.getElementById("player1Bank").innerHTML = "$"+ player1BankAmount;
			whosTurnIsIt = 2;
			player1Stay = true;
			//stay();
		}else if (sum1 == 21 || player1Hand.length == 5){
			stay();
			whosTurnIsIt = 2;
			//stay();
		} 
		player1HitCounter++;
	}
//////////////////////////////////////////////////////////////////////////	
	if (whosTurnIsIt == 2){
		//player2HitCounter++;  this code cause the autohit
		if(player2HitCounter === 1){	
			player2Hit();
			player2Sum();
			document.getElementById("player2Card3").style.visibility = "visible";
			document.getElementById("player2Card3").innerHTML = player2Hand[2];		
			document.getElementById("totalPlayer2").innerHTML = "total:" + sum2;
			
		}
		
		if(player2HitCounter === 2){	
			player2Hit();
			player2Sum();
			document.getElementById("player2Card4").style.visibility = "visible";
			document.getElementById("player2Card4").innerHTML = player2Hand[3];		
			document.getElementById("totalPlayer2").innerHTML = "total:" + sum2;
		
		}
		
		if(player2HitCounter === 3){	
			player2Hit();
			player2Sum();
			document.getElementById("player2Card5").style.visibility = "visible";
			document.getElementById("player2Card5").innerHTML = player2Hand[4];		
			document.getElementById("totalPlayer2").innerHTML = "total:" + sum2;
		} // end of if
		
		if(sum2 > 21){
			document.getElementById("status").innerHTML = player2Name + ", YOU BUSTED !";
			player2HitCounter = 0;
			document.getElementById("player1Bank").innerHTML = "$"+ player1BankAmount;
			stay();
		}else if (sum2 == 21 || player2Hand.length == 5){
			stay();
			player2HitCounter = 0;
		}
		player2HitCounter++;
		
		//player2HitCounter++;
	} // end of whose turn is it
} // end of hit()

//////////////////// stay ///////////////// stay ///////////////////
//////////////////// stay ///////////////// stay ///////////////////

/**
 * stay function for both players
 * @returns {undefined}
 */	
function stay(){
	
	if (whosTurnIsIt == 1){ // player 1 turn
		player1Stay = true;
		player1HitCounter = 0;
		whosTurnIsIt = 2;
		document.getElementById("status2").innerHTML = "it is " + player2Name + "'s turn, hit or stay?";
	}else if (whosTurnIsIt == 2){
		player2Stay = true;
		whosTurnIsIt = 1;
		player2HitCounter = 0;
		dealerHitCheck();
		checkWinner();
		//checkRemainingCard();
		
	
		if(dealerBankAmount < 20 ){ 
		   if(player1BankAmount > player2BankAmount){
			   alert(player1Name + "'s is the winner");
		   }else{
			   alert(player2Name + "'s is the winner");
		   }
		}
		
		// if one player runs out of money, the other player wins
		if(player1BankAmount <= 0  ){
		   alert( player2Name + "'s is the winner");
		}
		
		if(player2BankAmount <= 0  ){
		   alert(player1Name + "'s is the winner");
		}
	} // end of else
} // end of stay()
/////////////////////////////////////////////////////////////////////

/**
 * deals 1 card to player 1
 * @returns {undefined}
 */	
function player1Hit(){
	player1Hand.push(cardDeck[0]);
	cardDeck.splice(0,1);
}

/**
 * deals 1 card to player 2
 * @returns {undefined}
 */	
function player2Hit(){
	player2Hand.push(cardDeck[0]);
	cardDeck.splice(0,1);
}

/**
 * reveals what the dealer's 2nd card is, currently it is dealt but hidden
 * @returns {undefined}
 */	
function revealDealer(){
		document.getElementById("dealerCard2").style.backgroundColor = "white";
		document.getElementById("dealerCard2").style.visibility = "visible";
		document.getElementById("dealerCard2").innerHTML = dealerHand[1];
		document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
}

////////// check winner /////////////////// check winner //////////////////////////////////////////////
////////// check winner /////////////////// check winner //////////////////////////////////////////////
////////// check winner /////////////////// check winner //////////////////////////////////////////////
/**
 * check winner function
 * @returns {undefined}
 */	
function checkWinner(){

	if (dealerSum > 21){ // dealer bust
		player1BankAmount = player1BankAmount + 10;
		dealerBankAmount = dealerBankAmount - 10;
		player1Sum();
		dealerCardSum();
		document.getElementById("totalPlayer1").innerHTML = "total:" + sum1;
		document.getElementById("player1Bank").innerHTML = "$"+ player1BankAmount;
		document.getElementById("status").innerHTML = player1Name + " win";
		player2BankAmount = player2BankAmount + 10;
		dealerBankAmount = dealerBankAmount - 10;
		player2Sum();
		document.getElementById("totalPlayer2").innerHTML = "total:" + sum2;
		document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
		document.getElementById("player2Bank").innerHTML = "$"+ player2BankAmount;
		document.getElementById("dealerBank").innerHTML = "$"+ dealerBankAmount;
		document.getElementById("status2").innerHTML = player2Name + " win";
	}
	// check if dealer beat player 1
	if (dealerSum > sum1 && dealerSum <= 21){ // dealer wins, player 1 lose
		player1BankAmount = player1BankAmount - 10;
		dealerBankAmount = dealerBankAmount + 10;
		player1Sum();
		dealerCardSum();
		document.getElementById("totalPlayer1").innerHTML = "total:" + sum1;
		document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
		document.getElementById("player1Bank").innerHTML = "$"+ player1BankAmount;
		document.getElementById("dealerBank").innerHTML = "$"+ dealerBankAmount;
		document.getElementById("status").innerHTML = player1Name + " lose";
	
	}else if(dealerSum == sum1){ // both draw
		document.getElementById("status").innerHTML = player1Name + " and dealer draw";
	}
	else if (dealerSum < sum1 && sum1 <= 21){ // dealer lose, player 1 wins
		player1BankAmount = player1BankAmount + 10;
		dealerBankAmount = dealerBankAmount - 10;
		player1Sum();
		dealerCardSum();
		document.getElementById("totalPlayer1").innerHTML = "total:" + sum1;
		document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
		document.getElementById("player1Bank").innerHTML = "$"+ player1BankAmount;
		document.getElementById("dealerBank").innerHTML = "$"+ dealerBankAmount;
		document.getElementById("status").innerHTML = player1Name + " win";	
	}else if (sum1 > 21){ // player 1 lose, went over 21
		player1BankAmount = player1BankAmount - 10;
		dealerBankAmount = dealerBankAmount + 10;
		player1Sum();
		dealerCardSum();
		//whosTurnIsIt++;
		//player1Stay = true;
		document.getElementById("totalPlayer1").innerHTML = "total:" + sum1;
		document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
		document.getElementById("player1Bank").innerHTML = "$"+ player1BankAmount;
		document.getElementById("dealerBank").innerHTML = "$"+ dealerBankAmount;
		document.getElementById("status").innerHTML = player1Name + " lose";	
	}
////////////////////////////////// check player 2 winning ///////////////////////////////////////////////////////////////////////
	// check if dealer beat player 2
	if (dealerSum > sum2 && dealerSum <= 21){ // dealer wins, player 2 lose
		player2BankAmount = player2BankAmount - 10;
		dealerBankAmount = dealerBankAmount + 10;
		player2Sum();
		dealerCardSum();
		document.getElementById("totalPlayer2").innerHTML = "total:" + sum2;
		document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
		document.getElementById("player2Bank").innerHTML = "$"+ player2BankAmount;
		document.getElementById("dealerBank").innerHTML = "$"+ dealerBankAmount;
		document.getElementById("status2").innerHTML = player2Name + " lose";
		
	}else if(dealerSum == sum2 ){
		document.getElementById("status2").innerHTML = player2Name + " and dealer draw";
	}	
	else if (dealerSum < sum2 && sum2 <= 21){
		player2BankAmount = player1BankAmount + 10;
		dealerBankAmount = dealerBankAmount - 10;
		player2Sum();
		dealerCardSum();
		document.getElementById("totalPlayer2").innerHTML = "total:" + sum2;
		document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
		document.getElementById("player2Bank").innerHTML = "$"+ player2BankAmount;
		document.getElementById("dealerBank").innerHTML = "$"+ dealerBankAmount;
		document.getElementById("status2").innerHTML = player2Name + " win";
	}else if (sum2 > 21){ // player 2 lose
		player2BankAmount = player2BankAmount - 10;
		dealerBankAmount = dealerBankAmount + 10;
		player2Sum();
		dealerCardSum();
		document.getElementById("totalPlayer2").innerHTML = "total:" + sum2;
		document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
		document.getElementById("player2Bank").innerHTML = "$"+ player2BankAmount;
		document.getElementById("dealerBank").innerHTML = "$"+ dealerBankAmount;
		document.getElementById("status2").innerHTML = player2Name + " lose";	
	}
	
} // end of checkWinner()


//////////// dealer hit //////////////// dealer hit //////////////////////

/**
 * check if the dealer should hit or not.
 * @returns {undefined}
 */	
function dealerHitCheck(){	
	// if both player stay
	if (player1Stay && player2Stay){ 
		dealerCardSum();
		document.getElementById("status").innerHTML = "Let's see what the dealer has";
		revealDealer();
		
		if(dealerSum < 16){
			
			if(dealerHitCounter === 0 && dealerSum < 16){	
				dealerHit();
				dealerCardSum();
				document.getElementById("dealerCard3").style.visibility = "visible";
				document.getElementById("dealerCard3").innerHTML = dealerHand[2];		
				document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
				dealerHitCounter++;
			}
			
			if(dealerHitCounter === 1 && dealerSum < 16){	
				dealerHit();
				dealerCardSum();
				document.getElementById("dealerCard4").style.visibility = "visible";
				document.getElementById("dealerCard4").innerHTML = dealerHand[3];		
				document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
				dealerHitCounter++;
			}
			
			if(dealerHitCounter === 2 && dealerSum < 16){	
				dealerHit();
				dealerCardSum();
				document.getElementById("dealerCard5").style.visibility = "visible";
				document.getElementById("dealerCard5").innerHTML = dealerHand[4];		
				document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
				dealerHitCounter++;
			}
			
		} else{ // end of dealerSum < 16
			document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
			dealerCardSum();
			
		}
		
		dealerCardSum();
		document.getElementById("totalDealer").innerHTML = "total:" + dealerSum;
		document.getElementById("hit").style.display = "none";
		document.getElementById("stay").style.display = "none";
		document.getElementById("newRound").style.display = "block";
		
	} // end of player 1 and player 2 staying
	
} // end of check winner function

///////////////////// main //////////////////// main /////////////////////////// main ////////////////
///////////////////// main //////////////////// main /////////////////////////// main ////////////////
///////////////////// main //////////////////// main /////////////////////////// main ////////////////

setPlayer1Name();
setPlayer2Name();

shuffleDeck(cardDeck);	
startGame();

///////////////////// end /////////////// end ////////////////////////////////// end /////////////// end /////////////




	
	
	
	
	
	
	
	
	
	