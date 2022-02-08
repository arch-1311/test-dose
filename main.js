		function hidemsg() {
			document.getElementById('affected').style.display = 'none';
			var tt = document.getElementById('txtDate2').value;
				console.log(tt);
				if (tt == null || tt == '') {
					console.log('if');
					document.getElementById('affected').style.display = 'block';
				} else {
					document.getElementById('affected').style.display = 'none';
				}	
		} 
		function ShowHideDiv(){
		document.getElementById("demo").innerHTML = "";
			document.getElementById('dvPassport').style.display = 'block';
		}
		function getdate() {
			var numWeeks = 47;
				var tt = document.getElementById('txtDate2').value;
				console.log(tt);
				var enteredDate = new Date(tt);
				var pastDate = new Date('2021-01-01');
				
				var value = new Date(txtDate2.value),
					min = new Date(txtDate2.min),
					max = new Date(txtDate2.max);
					
				console.log(enteredDate);
				console.log(pastDate);
				
				if (tt == null || tt == '') {
					console.log('if');
					document.getElementById("demo").innerHTML = "<h5 style='color:orange;font-family: Arial, Helvetica, sans-serif;'>*Please select the date you were affected by Covid19</h5>" ;
				//document.getElementById("demo").innerHTML = "<h5 style='color:red;font-family: Arial, Helvetica, sans-serif;'>Selected date is in the past</h5>" ;
				} else if (value < min || value > max){
					console.log('else if');
					document.getElementById("demo").innerHTML = "<h5 style='color:red;font-family: Arial, Helvetica, sans-serif;'>Please select the appropriate date</h5>" ;
				} else {
					console.log('else');
					document.getElementById('affected').style.display ='block';
					var date = new Date(tt);
					var newdate = new Date(date);
					var dt = new Date(newdate);
					console.log(dt);
					dt.setDate(dt.getDate() + numWeeks * 7);

					function x(n) {
						return(n < 10 ? '0' : '') + n;
					}
					var doseDate = dt;
					var month = x(doseDate.getMonth() + 1); 
					var day = x(doseDate.getDate()); 
					var year = doseDate.getFullYear();
					var formattedDate = day + "-" + month + "-" + year;
					document.getElementById("demo").innerHTML = "Your possible 3rd dose date is " + "<br/>" +formattedDate;		
					$('#txtDate').click(function() {
						location.reload();
					});
				}
		}
		function ShowHideDiv1() {
		document.getElementById("demo").innerHTML = "";
		document.getElementById("demo").innerHTML = "";
			document.getElementById('dvPassport').style.display ='none';
			
			//function getdate() {
				var numWeeks = 39;
				var tt = document.getElementById('txtDate').value;
				console.log(tt);
				var enteredDate = new Date(tt);
				var pastDate = new Date('2021-01-01');
				
				var value = new Date(txtDate.value),
					min = new Date(txtDate.min),
					max = new Date(txtDate.max);
					
				console.log(enteredDate);
				console.log(pastDate);
				
				if (tt == null || tt == '') {
					console.log('if');
					document.getElementById("demo").innerHTML = "<h5 style='color:red;font-family: Arial, Helvetica, sans-serif;'>Please select your 2nd dose date</h5>" ;
				//document.getElementById("demo").innerHTML = "<h5 style='color:red;font-family: Arial, Helvetica, sans-serif;'>Selected date is in the past</h5>" ;
				} else if (value < min || value > max){
					console.log('else if');
					document.getElementById("demo").innerHTML = "<h5 style='color:red;font-family: Arial, Helvetica, sans-serif;'>Please select the appropriate date</h5>" ;
				} else {
					console.log('else');
					document.getElementById('affected').style.display ='block';
					var date = new Date(tt);
					var newdate = new Date(date);
					var dt = new Date(newdate);
					console.log(dt);
					dt.setDate(dt.getDate() + numWeeks * 7);

					function x(n) {
						return(n < 10 ? '0' : '') + n;
					}
					var doseDate = dt;
					var month = x(doseDate.getMonth() + 1); 
					var day = x(doseDate.getDate()); 
					var year = doseDate.getFullYear();
					var formattedDate = day + "-" + month + "-" + year;
					document.getElementById("demo").innerHTML = "Your possible 3rd dose date is " + "<br/>" +formattedDate;	
hidemsg();					
				}
			//}
		}