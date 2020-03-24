// Hangman JS

// Start new Game

var maxlifes = 10;
var random = Math.floor(Math.random() * wordlist.length);

var d = new Date();
startTime = d.getTime();

var item = wordlist[random]
item = item.toLowerCase();

$('#wordField').html(item);
$('#lifes').text(maxlifes);

$('#wordField').html(function (i, html) {
    return html.replace(/(\S)/g, '<div>$1</div>');
});
$('#wordField').html(function (i, html) {
    return html.replace(/(\s)/g, '<div class="blankspace found">$1</div>');
});

// noselect
$('#wordField div').addClass('noselect');

function updateLetter(x)
{   
	if ($('#' + x).hasClass('wrong')) {

	}else {
		
		if (item.indexOf(x) == -1) {
			var livesLeft = $('#lifes').text();
			if (livesLeft == 0){
				$('#wordField div').css('color', 'black');
				setTimeout(
				    	function(){
				    		location.reload(true);
				    	}, 2000);
			}else {
				// take one life
				$('#lifes').text(livesLeft - 1);
				// disable wrong letter
				$('#' + x).addClass('wrong');
			}
		}else {
			// I found a letter
			$('#' + x).addClass('correct');

			// find letter in string
			var positionsArray = [];
		    for(var i=0; i<item.length;i++) {
		        if (item[i] === x) {
		        	positionsArray.push(i+1);
		        }
		    }

		    // style choosen letter
		    changeXColor(x);

		    // end game -> item length, start time
		    endGame(item.length, startTime);

		}
	}
}

function changeXColor(l) {
	var div;
	$('div').each(function(){
	  if($(this).html() == l){
	    div = $(this);
	    div.css('color', 'red');
	    div.addClass('found');
	  }
	});
}

function endGame(itemlenght, startTime) {
	if ($('.found').length == itemlenght) {
		var d = new Date();
		var endTime = d.getTime();
		var gameDuration = ((endTime - startTime) / 1000);



		setTimeout(
		function() 
		{

			if (confirm('You won! Game guration: ' + gameDuration + ' seconds\n You want to play again?')) {
			    location.reload(true);
			} else {
			    alert('I am sorry to hear that. Ok, see you next time?');

			    setTimeout(
			    	function(){
			    		location.reload(true);
			    	}, 2000);
			}
			
		}, 2000);

	}

}