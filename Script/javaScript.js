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
		alert("Add subjects first.");
		location = '../page/addsubject.html'
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
		alert("No Subjects as of the moment.");
		location = '../page/addSubject.html';
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
/*
function editorDeleteAss(){
	 var editinfo = {};
	 var editinfo .assNames = prompt("Assignment Name: ");
	 var editinfo .userSubject = prompt("Subject: ");

	 var assignmentsDetail = JSON.parse(localStorage.getItem('assignment'));

	 for (var i=0, len = assignmentDetails.length; i < len; i++ ){

		if(assignmentsDetail[0] == .assNames) && assignmentsDetail[1] == .userSubject){
				document.getElementById("aname").value= assignmentDetails[i].assgName;
				document.getElementById("aname").value= assignmentDetails[i].assgSubject;
				document.getElementById("aname").value= assignmentDetails[i].assgDetails;
		}
	}
	location = '../page/addassign.html';
}
*/
function display_AssgDetails (){
	if (localStorage.assignment){

		var assignmentDetails = JSON.parse(localStorage.getItem('assignment'));
		var dates = new Array();

		for (var i=0, len = assignmentDetails.length; i < len; i++ ){
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
				let hour;
				let min;
				let timeDue;
				let amPm = "AM";
				let datearray;
				let timearray;
				let datetime = assignmentDetails[i].assgDate.split("T");

				date = datetime[0];
				time = datetime[1];

				cell4.innerHTML = date;

				datearray = date.split("-");
				timearray = time.split(":");

				hour = parseInt(timearray[0]);
				min = parseInt(timearray[1]);

				if(hour > 12){
					hour = hour - 12;
					amPm = "PM";
				}

				if(min === 0){
					min = "00";
				}

				if (min < 10) {
					min = "0" + min;
				}

				timeDue = hour + ":" + min + " " + amPm;
				cell5.innerHTML = timeDue;

				var dueDate = new Date(datearray[0], datearray[1] -1, datearray[2], timearray[0], timearray[1], 0, 0);
				dates.unshift(dueDate);				
			}				
		}
		for (var i = 0, len = dates.length; i < len; i++) {
			countdown(i, dates);	
		}

		

	}else{
		alert("No assignments as of the moment.");
		location = '../page/addassign.html';
	}	
}

function countdown(i, dates){

	var table = document.getElementById("assignmentTable");
	var cdCell = table.rows[i+1].cells.item(5);

	// Set the date we're counting down to
	// Update the count down every 1 second

	setInterval(function() {

		var ctdown;
		var now = new Date();

		// Find the distance between now an the count down date
		var distance = dates[i].getTime() - now.getTime();

		if (dates[i] < now) {
			clearInterval(dates[i]);
			ctdown  = "EXPIRED";
			cdCell.innerHTML = ctdown;
		}else{
		 	// Time calculations for days, hours, minutes and seconds
		 	let d = 1000 * 60 * 60 * 24;
		 	let h = 1000 * 60 * 60;
		 	let m = 1000 * 60;
		 	let s = 1000;
		 	let days;
		 	let hours;
		 	let minutes;
		 	let seconds;

			days = Math.floor(distance / d);
			hours = Math.floor((distance % d) / h);
			minutes = Math.floor((distance % h) / m);
			seconds = Math.floor((distance % m) / s);
			// Display the result in the element with id="assignmentTable"
			ctdown = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
			cdCell.innerHTML = ctdown;
		}
	}, 1000);
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

	var sub = document.getElementById('subselect').value;
	var tablecs = document.getElementById("cStable");

	if(tablecs.rows.length > 1){
		for(var i = tablecs.rows.length;i>1;i--){
			tablecs.deleteRow(1);	
		}
	}

	if (localStorage.classStanding){

		var csDetails = JSON.parse(localStorage.getItem('classStanding'));

		//Delete content of the table before displaying..

		for (var i=0, len = csDetails.length; i < len; i++ ){
			if (csDetails[i].csSubject === sub) {
				var rowcs = tablecs.insertRow(1);
				var cell1cs = rowcs.insertCell(0);
				var cell2cs = rowcs.insertCell(1);
				var cell3cs = rowcs.insertCell(2);
				var cell4cs = rowcs.insertCell(3);

				cell1cs.innerHTML = csDetails[i].csName;
				cell2cs.innerHTML = csDetails[i].csSubject;
				cell3cs.innerHTML = csDetails[i].csScore;
				cell4cs.innerHTML = csDetails[i].csPoint;
			}
			
		}
	}else{
		alert("No Class Standing as of the moment.");
		location = '../page/addcs.html';
	}
}

function remove_ALLCS(){

	

	if (localStorage.classStanding) {
		localStorage.removeItem('classStanding');
		window.location.reload();
	}
	else{
		alert("NO CS records to delete");
	}
}

function remove_ALLAssignments(){
	if (localStorage.assignment) {
		localStorage.removeItem('assignment');
		window.location.reload();
	}
	else{
		alert("No Assignment record to delete");
	}
}

function remove_Subjects(){
	if (localStorage.subjects) {
		localStorage.removeItem('subjects');
		window.location.reload();
	}
	else{
		alert("No Subject record to delete");
	}

}



/**
Chart JavaScript
**/

function loadChart() {
   	var csDetailsForChart = JSON.parse(localStorage.getItem('classStanding'));
   	var dataPoints = [];

   	for (key in csDetailsForChart){
   		var percentPassed = ((Number(csDetailsForChart[key].csScore)) / (Number(csDetailsForChart[key].csPoint))) * 100;
   		dataPoints.push({y: percentPassed, label: csDetailsForChart[key].csName});
   	}

	var chart = new CanvasJS.Chart("chartContainer",{
	    title:{
	    	text: "Overview of your Class Standing"   
	    },
	    animationEnabled: true,
	    animationDuration:3000,
	    axisX:{
	    	title: "Integrative Programming"
	    },
	    axisY:{
	        title: "Percent"
	    },
	    data: [{  
	        type: "bar",
	        toolTipContent: "{y}%",
	        name: "Percentage You Passed",
	        dataPoints: dataPoints
	    }]
    });
    chart.render();
  }



