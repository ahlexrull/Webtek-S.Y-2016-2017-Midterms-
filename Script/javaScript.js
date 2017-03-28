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
	
	if(newCsDetails.csName == ''){
		alert("Cs name must be filled out!");
		return false;
	}
        if(parseInt(newCsDetails.csPoint) == 0){
		alert("Invalid Overall Score!");
		return false;
	}
	if(parseInt(newCsDetails.csPoint) < parseInt(newCsDetails.csScore)){
		alert("Invalid CS score!");
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
        alert("Score has been recorded.");
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

function remove_AllCs (){
    if (localStorage.classStanding){
        localStorage.removeItem('classStanding');
        window.location.reload();
    }
    else{
        alert("No CS records to delete");
    }
    
}