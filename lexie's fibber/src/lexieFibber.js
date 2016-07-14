//this is a comment

var fibber = {};

fibber.initialize = function() {
	$('#start-btn').on("click", fibber.start);
};

fibber.start = function() {
	alert("Start button clicked...");
};




	// $("#start-btn").hover(
	// 	function(){
	// 		$(this).addClass('btn-hover');
	// 	},
	// 	function(){
	// 		$(this).removeClass('btn-hover');
	// 	}
	// );



