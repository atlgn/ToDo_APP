/* ali.atilgan1024@gmail.com */

var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var deleteButton;

	var startdate = document.getElementById("startTime");
    var enddate = document.getElementById("endTime");
	
	var subject= document.getElementById("subject");
    var local = document.getElementById("location");

/*CREATE TO DO LİST */
button.addEventListener("click", function(){
	 if (subject.value.length > 0  && local.value.length > 0 ) {
        createListElement();
		 eraseText();
}else{
	alert("Fill the all inputs and try again...");
}
});


/*LİST CONTENT */
function createListElement() {
	var li = document.createElement("li");
	
    var TodoTemplate = '<div id="todoitem" class="todoItem">';
TodoTemplate += 	   '<p><span> Start Time  :</span><span id="startDate">'+ startdate.value.toLocaleString() +'</span></p>';
TodoTemplate += 	   '<p><span> End Time    :</span><span id="endDate">'+ enddate.value.toLocaleString() +'</span></p>';
TodoTemplate += 	   '<p><span> Subject     :</span><span id="subject">'+ subject.value +'</span></p>';
TodoTemplate +=		   '<p><span> Location    :</span><span id="location">'+ local.value +'</span></p></div>';
	
	li.innerHTML = TodoTemplate;
    ul.appendChild(li);
    Delbutton(li);
    deleteButton = document.querySelectorAll(".delete");
	
    updateDelbuttons();
	
	
}

/*DELETE BUTTON FUNC*/
function Delbutton(parent) {
    var button = document.createElement("button");
    button.className = "delete";
    parent.appendChild(button);
}

/*UPDATE DELETE BUTTON */
function updateDelbuttons() {
    for (var i = 0; i < deleteButton.length; i++) {
		
        deleteButton[i].addEventListener("click", function() {
            this.parentNode.remove();
    });
}}


/*ERASE*/
function eraseText() {
	document.getElementById("location").value = "";
    document.getElementById("subject").value = "";
	document.getElementById("startTime").value ="";
	document.getElementById("endTime").value=""; 
}

