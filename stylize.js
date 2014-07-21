//stylize abandons the disconnect between my script and my markup to allow for greater
//flexabilty in design choices while forcing the disconnect at other locations in my code
//This especially useful for the cmd log

function strip_html(text){
	while(text.search(/<[^>]*>/)!=-1)
		text = text.replace(/<[^>]*>/,"");
	return text;
}

//text is a string, color should be an RGB CSS color or a color in your Style Sheet
function colorize(text,color){
	console.log('<span id="'+color+'">'+text+'</span>');
	return '<span id="'+color+'">'+text+'</span>';
}