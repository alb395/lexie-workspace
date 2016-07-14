//this is a comment

var fibber = {};

fibber.initialize = function() {
	$('#start-btn').on("click", fibber.start);
};

fibber.start = function() {
	alert("Ready to start judging?");
};




	// $("#start-btn").hover(
	// 	function(){
	// 		$(this).addClass('btn-hover');
	// 	},
	// 	function(){
	// 		$(this).removeClass('btn-hover');
	// 	}
	// );



