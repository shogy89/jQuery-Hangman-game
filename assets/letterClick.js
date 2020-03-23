$("a").click(function(event){
	event.preventDefault();
	updateLetter(event.target.id);
});