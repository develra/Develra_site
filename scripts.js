//cmd scripts, handles all of the "main" evens on the page
//Main Jquery onload loop
$(document).ready(function() {
	//blinking cursor
    setInterval ('cursorAnimation()', 1000);
    //append the text to command,, this will probably end up
	//looking a bit like a mini text-editor, but it should be fun
	var cmdtext = "";
});
//Normal key presss event
$("*").keypress(function(event){
	cmdText(event);
	//prevents double reporting (e.g. zz instead of z)
	return false;
});	
//Special case for backspace as backspace doesn't fire keypress, need
//to fix for firefox probably
$("*").keydown(function(event){
	if (event.which==8){
		//do the most inefficient backspace ever
		$('#cmd').text($('#cmd').text().slice(0,-1));
		//Prevent multipul returns 
		return false;
	}
});

//CMD playing with text
function cmdText(event){
	key = event.which;
	if(key==32)
	// makes space behave itself, allows for arbitrary of spaces in span element
		$('#cmd').append("&nbsp;")
	//if enter, send off the current text to do some more fun stuff
	//may need to fix this for differnt OS/browsers
	else if(key==13){
		$('#cmd').text(strip_html($('#cmd').text()));
		console.log($('#cmd').text());
		$('#cmd_log').html($('#cmd_log').html()+$('#cmd').text()+'<br/>');
		callback = execute($('#cmd').text());
		$('#cmd_log').html($('#cmd_log').html()+callback+'<br/>');
		$('#cmd').text("");
	}
	//else just append the pressed key
	else
		$('#cmd').append(String.fromCharCode(key));
	return;
}

//Burnmind animation tutorial for further reference
function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}