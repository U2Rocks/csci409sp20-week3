var z = 0;
while (z <= 100) {
	if (z > 0) {
		var checkDiv1 = z / 3;
		var checkDiv2 = z / 5;
		var checkDub = false;
		if ((Number.isInteger(checkDiv1) !== false) && (checkDiv1 >= 1)) {
			if ((Number.isInteger(checkDiv2) !== false) && (checkDiv2 >= 1)) {
				console.log("fizzbuzz");
				checkDub = true;
			}
			else {
				console.log("fizz");
			}
		}
		else if (checkDub !== true) {
			if ((Number.isInteger(checkDiv2) !== false) && (checkDiv2 >= 1)) {
				console.log("buzz");
			}
            else {
              console.log(z);
            }
        }
	}
    else {
		console.log(z);
	}                 
    z += 1;

}


//button functionality

function showDate() {
	const cdate = new Date();
	document.getElementById("currentDate").innerHTML = cdate;
}