
function get_AssgDetails () {

	var newAssgDetails = {};

	newAssgDetails	.assgName = document.getElementById('aname').value;
	newAssgDetails	.assgSubject = document.getElementById('asubj').value;
	newAssgDetails	.assgDetails = document.getElementById('adate').value;
	newAssgDetails	.assgDate = document.getElementById('adate').value;
	//alert(newAssgDetails.assgName);

	if (localStorage.assignment) {
		assignment = JSON.parse(localStorage.getItem('assignment'));
	}else{
		assignment = [];
	}s

	assignment.push(newAssgDetails);
	localStorage.setItem('assignment', JSON.stringify(assignment));

	var robject = localStorage.getItem('assignment');
	console.log('robject', JSON.parse(robject));
}
