// JavaScript
var conversation = document.getElementsByClassName("conversation");
var btn = document.getElementsByClassName("btn");
var div;
var name;
var problem;
var answer;
var askedForName = true;
var askedForAge = false;
var msg;

function autoscroll() {
    var elem = document.getElementsByClassName('conversation');
    elem[0].scrollTop = elem[0].scrollHeight;
}


function yourMessage() {
    div = document.createElement("DIV");
    div.setAttribute("class", "balloon you");
    div.innerHTML = "<span class='userName'>You</span><br/>" + userInput.value;
    conversation[0].appendChild(div);

    return userInput.value;
}

function botMessage(str) {
    div = document.createElement("DIV");
    div.setAttribute("class", "balloon him");
    div.innerHTML = "<span class='botName'>LaunchBot 2.0</span><br/>" + str;
    conversation[0].appendChild(div);
}

function send() {
    var message = yourMessage();
    userInput.value = "";
  
    //if statements here!
    if (message == "hello") {
        botMessage("Hi there!");
    }
  	else if (message == "pizza") {
        botMessage("I love pizza!");
    }
  	else if (message == "give me a cat") {
        botMessage("<img src='http://www.catgifpage.com/gifs/324.gif'>");
    }
  	else if(message == "when can I drive?") {
      	botMessage("when you're 16 or older");
    }
  	//make a master else staement
  	
    else { 
        botMessage("Sorry, I didn't understand that command :(");
    }


    //resets
    autoscroll();
}