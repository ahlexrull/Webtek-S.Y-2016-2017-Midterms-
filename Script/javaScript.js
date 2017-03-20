
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

	var assignmentDetails = JSON.parse(localStorage.getItem('assignment'));

	for (var i=0, len = assignmentDetails.length;i < len;i++ ){
		console.log(assignmentDetails[i]);
	}
}

function display_AssgDetails (){
	if (localStorage.assignment){
		var assignmentDetails = JSON.parse(localStorage.getItem('assignment'));

		for (var i=0, len = assignmentDetails.length;i < len;i++ ){
			console.log(assignmentDetails[i]);
		}
	}else{
		alert("No assignments as of the moment.");
	}
}
