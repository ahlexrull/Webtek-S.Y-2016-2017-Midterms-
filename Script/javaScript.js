
function get_AssgDetails () {

	var newAssgDetails = {};

	newAssgDetails	.assgName = document.getElementById('aname').value;
	newAssgDetails	.assgSubject = document.getElementById('asubj').value;
	newAssgDetails	.assgDetails = document.getElementById('adate').value;
	newAssgDetails	.assgDate = document.getElementById('adate').value;

	if (localStorage.assignment) {
		assignment = JSON.parse(localStorage.getItem('assignment'));
	}else{
		assignment = [];
	}

	assignment.push(newAssgDetails);
	localStorage.setItem('assignment', JSON.stringify(assignment));

	}

function get_CsDetails () {

	var newCsgDetails = {};

	newCsDetails	.csName = document.getElementById('csname').value;
	newCsDetails	.csScore = document.getElementById('csscore').value;
	newCsDetails	.csPoint = document.getElementById('cspoint').value;

	if (localStorage.classStanding) {
		classStanding = JSON.parse(localStorage.getItem('classStanding'));
	}else{
		classStanding = [];
	}             

	classStanding.push(newCsgDetails);
	localStorage.setItem('classStanding', JSON.stringify(classStanding));

}

function display_AssgDetails (){
	if (localStorage.assignment){
		var assignmentDetails = JSON.parse(localStorage.getItem('assignment'));
		alert("Hello");
		for (var i=0, len = assignmentDetails.length;i < len;i++ ){
			console.log(assignmentDetails[i]);
		}
	}else{
		alert("No assignments as of the moment.");
	}
}
function display_CsDetails (){
	if (localStorage.classStanding){
		var CsDetails = JSON.parse(localStorage.getItem('classStanding'));

		for (var i=0, len = CsDetails.length;i < len;i++ ){
			console.log(CsDetails[i]);
		}
	}else{
		alert("No Class Standing as of the moment.");
	}
}