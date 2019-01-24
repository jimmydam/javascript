/* I Hung Dam, student 000736057, certify that all code submitted is my own work;
 that I have not copied from any other source. I also certify that I have not allowed
 my work to be copied by others. If in any instance that an external resource is used, 
 I will cite/and or give credit to the original author.

 */


//variable for current points 
var points = 0;
var questionCounter = 0;

//regex pattern to check for question 5
var sentence = /^carrot|^onion|^celery|^Carrot|^Onion|^Celery/;


// these are DOM elements variables
var resultPage = document.getElementById("resultPage");
var viewResult = document.getElementById("viewResult");
var buttonSubmitAnswer = document.getElementById("buttonSubmitAnswer");
var buttonNextQuestion = document.getElementById("buttonNextQuestion");
var questionNumber = document.getElementById("questionNumber");
var result = document.getElementById("result");
var score = document.getElementById("score");

// these are DOM elements variables for the answer to each question
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var answer5 = document.getElementById("answer5");

// these are DOM elements variables for all the question
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");

// these are DOM elements variables for inside question 3
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");

// these are DOM elements variables for the result of each question, "pass" or "fail" value
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");









///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

/**
 * animate at the end of quiz
 * @returns {undefined}
 */
function animateEnding(){
	
	var submit2 = document.getElementById("resultPage");
	var pos = 220;
	var pos2 = 0;
	
	var id = setInterval(frame, 30);
	
	function frame(){
		if (pos == 800){
			clearInterval(id);
		}else{
			pos++;
			pos2++;
			submit2.style.top = pos + "px";
			submit2.style.left = pos2 + "px";
		}
	}
}

/**
 * start quiz
 * @returns {undefined}
 */
function startQuiz(){
	showDiv1(); // show 1st question
	document.getElementById("buttonStartQuiz").style.visibility = "hidden";
}

/**
 * view the result from the quiz
 * @returns {undefined}
 */
function viewResultFunction(){
	hideAll();
	buttonNextQuestion.style.visibility = "hidden";
	buttonSubmitAnswer.style.visibility = "hidden";
	question1.style.visibility = "hidden";
	question2.style.visibility = "hidden";
	question3.style.visibility = "hidden";
	question4.style.visibility = "hidden";
	question5.style.visibility = "hidden";
	viewResult.style.visibility = "hidden";	
	resultPage.style.visibility = "visible";
	document.getElementById("welcome").innerHTML = " ";
	animateEnding();
	
}

//////////////////////// submitAnswer /////////////////////////////////////

/**
 * submit answer function
 * @returns {undefined}
 */
function submitAnswer(){
	
	if(questionCounter == 0 ){ // if incorrect
		
		if (document.getElementById("potato").checked == false && document.getElementById("dill").checked == false && document.getElementById("potato".checked == true) && document.getElementById("banana").checked == true && document.getElementById("onion").checked == true && document.getElementById("celery").checked == true && document.getElementById("carrot").checked == true){ // if correct
			result.style.visibility = "visible"
			result.innerHTML = "please pick at least one!";
			answer3.style.visibility = "hidden";
		
		}
		// if correct
		if(document.getElementById("carrot").checked == true && document.getElementById("celery").checked == true && document.getElementById("onion").checked == true){ // if correct
			answer3.style.visibility = "visible";
			buttonSubmitAnswer.style.visibility = "hidden";
			buttonNextQuestion.style.visibility = "visible";
			result.style.visibility = "visible";
			result.innerHTML = "correct!";
			points += 1;
			score.innerHTML = "Points: " + points;
			q1.innerHTML = "Question 1: Pass";
			
			
		}else{
			answer3.style.visibility = "visible";
			buttonSubmitAnswer.style.visibility = "hidden";
			buttonNextQuestion.style.visibility = "visible";
			result.style.visibility = "visible";
			result.innerHTML = "Incorrect!";
		}
	} 
	
	if(questionCounter == 2){
		
		if(document.getElementById("false").checked == true){ // if incorrect
			answer1.style.visibility = "visible";
			buttonSubmitAnswer.style.visibility = "hidden";
			buttonNextQuestion.style.visibility = "visible";
			result.style.visibility = "visible";
			result.innerHTML = "incorrect!";
			questionCounter++;
			
		}else if (document.getElementById("true").checked == true){ // if correct			
			answer1.style.visibility = "visible";
			buttonSubmitAnswer.style.visibility = "hidden";
			buttonNextQuestion.style.visibility = "visible";
			result.style.visibility = "visible";
			result.innerHTML = "correct!";
			questionCounter++;
			points += 1;
			q2.innerHTML = "Question 2: Pass";
			score.innerHTML = "Points: " + points;		
			
		}else{
			//result.innerHTML = "please pick one!";
			answer3.style.visibility = "hidden";
			
			
		}
		
	}
	
	if(questionCounter == 3){
		
		if(document.getElementById("a").checked == true  || document.getElementById("b").checked == true || document.getElementById("c").checked == true || document.getElementById("e").checked == true){ // if incorrect
		//if(a || 
			answer2.style.visibility = "visible";
			buttonSubmitAnswer.style.visibility = "hidden";
			buttonNextQuestion.style.visibility = "visible";
			result.style.visibility = "visible";
			result.innerHTML = "incorrect!";
			questionCounter++;
			
		}else if (document.getElementById("d").checked == true){ // if correct
			
			answer2.style.visibility = "visible";
			buttonSubmitAnswer.style.visibility = "hidden";
			buttonNextQuestion.style.visibility = "visible";
			result.style.visibility = "visible";
			result.innerHTML = "correct!";
			points += 1;
			questionCounter++;
			q3.innerHTML = "Question 3: Pass";
			score.innerHTML = "Points: " + points;
			
		}else{
			//result.innerHTML = "please pick one!";
			
		}
		
	} 
	
	if(questionCounter == 4){

		if(document.getElementById("aa").checked == true  || document.getElementById("bb").checked == true || document.getElementById("dd").checked == true || document.getElementById("ee").checked == true){ // if correct
		//if(a || b || c|| e){ // if incorrect
			answer4.style.visibility = "visible";
			buttonSubmitAnswer.style.visibility = "hidden";
			buttonNextQuestion.style.visibility = "visible";
			result.style.visibility = "visible";
			result.innerHTML = "incorrect!";
			questionCounter++;
			
		}else if (document.getElementById("cc").checked == true ){ // if correct
			score.innerHTML = "Score: 4";
			answer4.style.visibility = "visible";
			buttonSubmitAnswer.style.visibility = "hidden";
			buttonNextQuestion.style.visibility = "visible";
			result.style.visibility = "visible";
			result.innerHTML = "correct!";
			questionCounter++;
			points += 1;
			q4.innerHTML = "Question 4: Pass";
			score.innerHTML = "Points: " + points;
			//questionCounter += 1;
		}else{
			//result.innerHTML = "please pick one!";
					
		}
	
	} 

	if(questionCounter == 6){

		if(sentence.test(document.getElementById("reason").value) == true){ // if correct

			//answer2.style.visibility = "visible";
			buttonSubmitAnswer.style.visibility = "hidden";
			//buttonNextQuestion.style.visibility = "visible";
			answer5.style.visibility = "visible";
			result.style.visibility = "visible";
			result.innerHTML = "correct!";
			points += 1;
			
			viewResult.style.visibility = "visible";
			q5.innerHTML = "Question 5: Pass";
			score.innerHTML = "Points: " + points;
			questionCounter++;
			
		}else if(sentence.test(document.getElementById("reason").value) == false){ // if incorrect
			
			//answer2.style.visibility = "visible";
			buttonSubmitAnswer.style.visibility = "hidden";
			//buttonNextQuestion.style.visibility = "visible";
			answer5.style.visibility = "visible";
			result.style.visibility = "visible";
			result.innerHTML = "incorrect!";
			viewResult.style.visibility = "visible";
			questionCounter++;
			
			
		}else{
			result.innerHTML = "please type at least one sentence";
			//result.style.visibility = "visible";
		
			
		}
	
	} 	
}

/////////////////////// nextQuestion ////////////////////////////////////////
/////////////////////// nextQuestion ////////////////////////////////////////

/**
 * go to next question
 * @returns {undefined}
 */
function nextQuestion(){
	
	buttonNextQuestion.style.visibility = "hidden";
	buttonSubmitAnswer.style.visibility = "visible";
	
	if(questionCounter == 0 ){
		
		questionCounter = 2;
		
	}
	if(questionCounter == 2){
		showDiv2();
		
		questionNumber.innerHTML = "Question 2/5";
		
	}
	
	if(questionCounter == 3){
		showDiv3();
		
		questionNumber.innerHTML = "Question 3/5";
	}
	
	if(questionCounter == 4){
		showDiv4();
		questionNumber.innerHTML = "Question 4/5";
	}
	
	if(questionCounter == 5){
		showDiv5();
		questionNumber.innerHTML = "Question 5/5";
		questionCounter++;
	}
}


/////////////////////// showDiv ////////////////////////////////////////
/////////////////////// showDiv ////////////////////////////////////////

/**
 * show 1st question
 * @returns {undefined}
 */
function showDiv1(){
	//questionCounter += 1;
	answer3.style.visibility = "hidden";
	question1.style.visibility = "visible";
	buttonNextQuestion.style.visibility = "hidden";
	buttonSubmitAnswer.style.visibility = "hidden";
	question2.style.visibility = "hidden";
	question3.style.visibility = "hidden";
	question4.style.visibility = "hidden";
	question5.style.visibility = "hidden";
	buttonSubmitAnswer.style.visibility = "visible";
}

/**
 * show 2nd question
 * @returns {undefined}
 */
function showDiv2(){
	question2.style.visibility = "visible";
	question1.style.visibility = "hidden";
	question3.style.visibility = "hidden";
	question4.style.visibility = "hidden";
	question5.style.visibility = "hidden";
	result.style.visibility = "hidden";
}

/**
 * show 3rd question
 * @returns {undefined}
 */
function showDiv3(){	
	question3.style.visibility = "visible";
	question1.style.visibility = "hidden";
	question2.style.visibility = "hidden";
	question4.style.visibility = "hidden";
	question5.style.visibility = "hidden";
	result.style.visibility = "hidden";
}

/**
 * show 4th question
 * @returns {undefined}
 */
function showDiv4(){
	question4.style.visibility = "visible";
	question1.style.visibility = "hidden";
	question3.style.visibility = "hidden";
	question2.style.visibility = "hidden";
	question5.style.visibility = "hidden";
	result.style.visibility = "hidden";
}

/**
 * show 5th question
 * @returns {undefined}
 */
function showDiv5(){	
	question5.style.visibility = "visible";
	question1.style.visibility = "hidden";
	question3.style.visibility = "hidden";
	question4.style.visibility = "hidden";
	question2.style.visibility = "hidden";
	result.style.visibility = "hidden";
}

/**
 * hide all element when 1st page appears
 * @returns {undefined}
 */
function hideAll(){
	resultPage.style.visibility = "hidden";
	viewResult.style.visibility = "hidden";
	result.style.visibility = "hidden";
	buttonNextQuestion.style.visibility = "hidden";
	buttonSubmitAnswer.style.visibility = "hidden";
	question5.style.visibility = "hidden";
	question1.style.visibility = "hidden";
	question3.style.visibility = "hidden";
	question4.style.visibility = "hidden";
	question2.style.visibility = "hidden";
	answer1.style.visibility = "hidden";
	answer2.style.visibility = "hidden";
	answer3.style.visibility = "hidden";
	answer4.style.visibility = "hidden";
	answer5.style.visibility = "hidden";	
}

/////////////////////////////
window.onload = hideAll();




















