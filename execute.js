//

function execute(command){
	
	response = ""
	switch (command) {
		case "blog":
			response = "opening blog...";
			break;
		case "resume":
			response = "opening Rèsumè...";
			break;
		case "rèsumè":
			response = "opening Rèsumè...";
			break;
		case "clear":
			$("#cmd_log").html("");
			break;
		default:
			response = colorize("command '"+command+"' not recognized; try 'help' for a list of commands",'error_color');
	}
	return response;
}

function open_blog(){

}