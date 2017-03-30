/*
* Subject Functions
*/

function get_subjects (){
	var sub;
	if (localStorage.subjects) {
		subjects = JSON.parse(localStorage.getItem('subjects'));
	}else{
		subjects = [];
	}

	sub = document.getElementById('subname').value;

	subjects.push(sub);
	localStorage.setItem('subjects', JSON.stringify(subjects))

}

function show_sub() {
	var val;
	if (localStorage.subjects) {
		subjects = JSON.parse(localStorage.getItem('subjects'))
	}else{
		subjects = []
	}

	for(let i = 0;i < subjects.length;i++){
		val = subjects[i];
		var node = document.createElement("option");
		var textnode = document.createTextNode(val);
		node.appendChild(textnode);
		document.getElementById("subselect").appendChild(node);
	}
	
}

function display_subjects(){

	if (localStorage.subjects){

		var subjects = JSON.parse(localStorage.getItem('subjects'));

		for (var i=0, len = subjects.length; i < len; i++ ){
			console.log(subjects[i]);
			var tablesub = document.getElementById("subtable");
			var rowsub = tablesub.insertRow(1);
			var cell1sub = rowsub.insertCell(0);

			cell1sub.innerHTML = subjects[i];
		}
	}else{
		alert("No Class Standing as of the moment.");
	}

}

/*
* Assignment Functions
*/
function get_AssgDetails () {
	show_sub();
	var newAssgDetails = {};

	newAssgDetails	.assgName = document.getElementById('aname').value;
	newAssgDetails	.assgSubject = document.getElementById('subselect').value;
	newAssgDetails	.assgDetails = document.getElementById('adet').value;
	newAssgDetails	.assgDate = document.getElementById('adate').value;

	if(newAssgDetails.assgName == ''){
		alert("Assignment Name must be filled out!");
		return false;
	}
	if(newAssgDetails.assgSubject == '' || newAssgDetails.assgSubject == "Select Subject"){
		alert("Subject must be filled out!");
		return false;
	}
	if(newAssgDetails.assgDate == ''){
		alert("Date must be filled out!");
		return false;
	}

	if (localStorage.assignment) {
		assignment = JSON.parse(localStorage.getItem('assignment'));
	}else{
		assignment = [];
	}

	assignment.push(newAssgDetails);
	localStorage.setItem('assignment', JSON.stringify(assignment));

}

function display_AssgDetails (){
	if (localStorage.assignment){

		var assignmentDetails = JSON.parse(localStorage.getItem('assignment'));
		var i;

		for (i=0, len = assignmentDetails.length; i < len; i++ ){
			console.log(assignmentDetails[i]);
			var table = document.getElementById("assignmentTable");
			var row = table.insertRow(1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);


			cell1.innerHTML = assignmentDetails[i].assgName;
			cell2.innerHTML = assignmentDetails[i].assgSubject;
			cell3.innerHTML = assignmentDetails[i].assgDetails;
			{
				let time;
				let date;
				let datearray;
				let timearray;
				let datetime = assignmentDetails[i].assgDate.split("T");

				date = datetime[0];
				time = datetime[1];
				cell4.innerHTML = date;
				cell5.innerHTML = time;

				datearray = date.split("-");
				timearray = time.split(":");

				var dueDate = new Date(datearray[0], datearray[1] - 1, datearray[2] - 1, timearray[0], timearray[1], 0, 0);

				{
					// Set the date we're counting down to
					// Update the count down every 1 second
					var ctdown;
					var x = (setInterval(function() {

						//var ctdown = [];
						// Get todays date and time
						var now = new Date();
						//alert(now);

						// Find the distance between now an the count down date
						var distance = (dueDate - now);

						if (dueDate < now) {
							clearInterval(x);
							ctdown  = "EXPIRED";
							cell6.innerHTML = ctdown;
						}else{
						 	// Time calculations for days, hours, minutes and seconds
							var days = Math.floor(distance / (1000 * 60 * 60 * 24));
							var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
							var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
							var seconds = Math.floor((distance % (1000 * 60)) / 1000);

							// Display the result in the element with id="assignmentTable"
							ctdown = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
							cell6.innerHTML = ctdown;
						}		  	
					}, 1000));
				}
			}				
		}

	}else{
		alert("No assignments as of the moment.");
	}	
}

/*
* CS Functions
*/

function get_CsDetails () {
	show_sub();
	var newCsDetails = {};

	newCsDetails	.csName = document.getElementById('csname').value;
	newCsDetails	.csSubject = document.getElementById('subselect').value;
	newCsDetails	.csScore = document.getElementById('csscore').value;
	newCsDetails	.csPoint = document.getElementById('cspoint').value;
	
	var score = Number(newCsDetails.csScore);
	var points = Number(newCsDetails.csPoint);

	if(score > points){
		alert("Overall Points should be larger or equal to score");
		return false;
	}
	if(newCsDetails.csPoint == "0" ){
		alert("Overall Points should be larger or equal to score ");
		return false;
	}
	if(newCsDetails.csName == ''){
		alert("Cs name must be filled out!");
		return false;
	}
	if(newCsDetails.csSubject == '' || newCsDetails.csSubject == "Select Subject"){
		alert("Subject must be filled out!");
		return false;
	}
	if(newCsDetails.csScore == ''){
		alert("Cs Score must be filled out!");
		return false;
	}
	if(newCsDetails.csPoint == ''){
		alert("Cs point must be filled out!");
		return false;

	}
	if (localStorage.classStanding) {
		classStanding = JSON.parse(localStorage.getItem('classStanding'));
	}else{
		classStanding = [];
	}             

	classStanding.push(newCsDetails);
	localStorage.setItem('classStanding', JSON.stringify(classStanding));

}


function display_CsDetails (){
	if (localStorage.classStanding){

		var csDetails = JSON.parse(localStorage.getItem('classStanding'));

		for (var i=0, len = csDetails.length; i < len; i++ ){
			console.log(csDetails[i]);
			var tablecs = document.getElementById("cStable");
			var rowcs = tablecs.insertRow(1);
			var cell1cs = rowcs.insertCell(0);
			var cell2cs = rowcs.insertCell(1);
			var cell3cs = rowcs.insertCell(2);

			cell1cs.innerHTML = csDetails[i].csName;
			cell2cs.innerHTML = csDetails[i].csScore;
			cell3cs.innerHTML = csDetails[i].csPoint;
		}
	}else{
		alert("No Class Standing as of the moment.");
	}
}

function remove_ALLCs (){
	if (localStorage.classStanding) {
		localStorage.removeItem('classStanding');
		window.location.reload();
	}
	else{
		alert("NO CS records to delete");
	}
}

