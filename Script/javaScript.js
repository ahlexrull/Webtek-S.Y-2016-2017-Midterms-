
function get_AssgDetails () {
	var newAssgDetails = {};

	newAssgDetails	.assgName = document.getElementById('aname').value;
	newAssgDetails	.assgSubject = document.getElementById('asubj').value;
	newAssgDetails	.assgDetails = document.getElementById('adet').value;
	newAssgDetails	.assgDate = document.getElementById('adate').value;

	if(newAssgDetails.assgName == ''){
		alert("Assignment Name must be filled out!");
		return false;
	}
	if(newAssgDetails.assgSubject == ''){
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

function get_CsDetails () {

	var newCsDetails = {};

	newCsDetails	.csName = document.getElementById('csname').value;
	newCsDetails	.csScore = document.getElementById('csscore').value;
	newCsDetails	.csPoint = document.getElementById('cspoint').value;
	
	if(newCsDetails.csName == ''){
		alert("Cs name must be filled out!");
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

function display_AssgDetails (){
	if (localStorage.assignment){

		var assignmentDetails = JSON.parse(localStorage.getItem('assignment'));

		for (var i=0, len = assignmentDetails.length; i < len; i++ ){
			console.log(assignmentDetails[i]);
			var table = document.getElementById("assignmentTable");
			var row = table.insertRow(1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);

			cell1.innerHTML = assignmentDetails[i].assgName;
			cell2.innerHTML = assignmentDetails[i].assgSubject;
			cell3.innerHTML = assignmentDetails[i].assgDetails;
			cell4.innerHTML = assignmentDetails[i].assgDate;
		}

	}else{
		alert("No assignments as of the moment.");
	}
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