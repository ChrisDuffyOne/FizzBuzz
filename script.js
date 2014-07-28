$(document).ready(function() {

//FizzBuzz Definition

function FB() {
	
	for (var i = 1; i < 101; i++) {
		
		var counter = i

				if ((counter % 3 === 0) && (counter % 5 === 0)){
					document.write("FizzBuzz <br />")
					}

				else if (counter % 3 === 0){
					document.write("Fizz <br />")
						}

				else if (counter % 5 === 0){
					document.write("Buzz <br />")
						}
				
				else{
					document.write(i + "<br />")
				}
			}
	}

//Calling FizzBuzz

FB();

});	
