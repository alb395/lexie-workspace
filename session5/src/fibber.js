
var fibber = {};


fibber.initialize = function(){

	$("#startbtn").click(function() {
		fibber.start();
	});

	fibber.viewStatement();

	//setup all the true/false buttons to call processDecision

	$(".truth-btn").click(function(){
		fibber.processDecision("truth");
	});

	$(".fib-btn").click(function(){
		fibber.processDecision("fib");
	});

};

//Create arrays that contain the statement-text and statement-context. I could probably do this with a two-dimensional array instead of two separate arrays, but I'm not sure how to loop through that yet. 

var statementArray = ["I am in New York", "I am in Los Angeles", "I am in Berlin"];
var contextArray = ["Lexie Bryan", "Jessica Plummer", "Erica DeSouza"];

var i = 0
var currentStatement = statementArray[i];
var currentContext = contextArray[i];

fibber.viewStatement = function(){
	$("#statement-text").text(currentStatement);
	$("#statement-context").text(currentContext);
	i = i++;
};


//One approach was to create a for loop that will progress through the array to display one questionText at a time. However, I wasn't sure how to get the index to only increment after the user clicked a truth or fib button. 

// fibber.viewStatement = function(){
// 	for (var i = 0; i < statementArray.length; i++) {
// 		$("#statement-text").text(statementArray[i]);
// 		$("#statement-context").text(contextArray[i]);
// 	}
	
// };


fibber.processDecision = function(decision) {
	if (decision == "truth") {
		alert("That's true");
	}
	if (decision == "fib") {
		alert("That was a fib");
	}
	fibber.viewStatement();
};


fibber.start = function(){
	alert("Start Button Clicked...");
};