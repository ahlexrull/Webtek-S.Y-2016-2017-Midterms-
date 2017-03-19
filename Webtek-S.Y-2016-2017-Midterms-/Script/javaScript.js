
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
	}

	assignment.push(newAssgDetails);
	localStorage.setItem('assignment', JSON.stringify(assignment));

	var robject = JSON.parse(localStorage.getItem('assignment'));

	for (var i=0, len = localStorage.length;i < len;i++ ){
		console.log(localStorage.getItem(localStorage.key(i)));
	}
}
