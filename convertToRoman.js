function convertToRoman(event) {
  let output = document.getElementById('output');
  let regex = /^[0-9]+$/; //numbers only
  let onlyNull = /^[0\s]+$/; //no zeros
  let romanSingle = "";
  let romanTenth = "";
  let romanHundredth = "";
  let romanThousandth = "";
  let single = { 	0 : 'Zero. The number zero does not have its own Roman numeral, but the word nulla (the Latin word meaning "none") was used by medieval scholars in lieu of 0.',
		  			1 : 'I',
		  			2 : 'II',
		  			3 : 'III',
		  			4 : 'IV',
		  			5 : 'V',
		  			6 : 'VI',
		  			7 : 'VII',
		  			8 : 'VIII',
		  			9 : 'IX'
  				};
  let tenth = { 
  					0: '',
  					1 : 'X',
		  			2 : 'XX',
		  			3 : 'XXX',
		  		  	4 : 'XL',
		  		 	5 : 'L',
		  		  	6 : 'LX',
		  		  	7 : 'LXX',
		  		  	8 : 'LXXX',
		  		  	9 : 'XC'
		  		};
  let hundredth = {	
  					0: '',
  					1 : 'C',
	  			   	2 : 'CC',
	  			   	3 : 'CCC',
	  			   	4 : 'CD',
	  			   	5 : 'D',
	  			   	6 : 'DC',
	  			   	7 : 'DCC',
	  			   	8 : 'DCCC',
	  			   	9 : 'CM'
  			   };
  let thousandth = { 
  					0: '',
  					1 : 'M',
	  			    2 : 'MM',
	  			    3 : 'MMM',
	  			    4 : 'MMMM'
	  			};

  if ((event.target.value.length > 1) && (onlyNull.test(event.target.value))) {
  	output.innerHTML = "Enter a valid number";
  }

  else if (isNaN(event.target.value)) {
		output.innerHTML = "Enter only numbers.";
  }

  else if (event.target.value.length === 0) {
  	output.innerHTML = "Enter a number.";
  }

  else if (event.target.value < 0) {
  	output.innerHTML = "Roman Numerals could not represent negative numbers. Enter a positive number.";
  }

  else if (event.target.value > 4999) {
  	output.innerHTML = "Enter a number below 5000.";
  }

  else if (event.target.value.length > 0) {
  	switch(event.target.value.charAt(event.target.value.length-1)) {
 		case "0": 
 		if (event.target.value.length === 1) {
 			romanSingle = single["0"];
 		}
 		else romanSingle = "";
 		break;
 		case "1":
 		romanSingle = single["1"];
 		break;
 		case "2":
 		romanSingle = single["2"];
 		break;
 		case "3":
 		romanSingle = single["3"];
 		break;
 		case "4":
 		romanSingle = single["4"];
 		break;
 		case "5":
 		romanSingle = single["5"];
 		break;
 		case "6":
 		romanSingle = single["6"];
 		break;
 		case "7":
 		romanSingle = single["7"];
 		break;
 		case "8":
 		romanSingle = single["8"];
 		break; 
 		case "9":
 		romanSingle = single["9"];
 		break;
 	}
 	switch(event.target.value.charAt(event.target.value.length-2)) {
 		case "0": 
 		romanTenth = tenth["0"];
 		break;
 		case "1":
 		romanTenth = tenth["1"];
 		break;
 		case "2":
 		romanTenth = tenth["2"];
 		break;
 		case "3":
 		romanTenth = tenth["3"];
 		break;
 		case "4":
 		romanTenth = tenth["4"];
 		break;
 		case "5":
 		romanTenth = tenth["5"];
 		break;
 		case "6":
 		romanTenth = tenth["6"];
 		break;
 		case "7":
 		romanTenth = tenth["7"];
 		break;
 		case "8":
 		romanTenth = tenth["8"];
 		break; 
 		case "9":
 		romanTenth = tenth["9"];
 		break;
 	}
 	switch(event.target.value.charAt(event.target.value.length-3)) {
 		case "0": 
 		romanHundredth = hundredth["0"];
 		break;
 		case "1":
 		romanHundredth = hundredth["1"];
 		break;
 		case "2":
 		romanHundredth = hundredth["2"];
 		break;
 		case "3":
 		romanHundredth = hundredth["3"];
 		break;
 		case "4":
 		romanHundredth = hundredth["4"];
 		break;
 		case "5":
 		romanHundredth = hundredth["5"];
 		break;
 		case "6":
 		romanHundredth = hundredth["6"];
 		break;
 		case "7":
 		romanHundredth = hundredth["7"];
 		break;
 		case "8":
 		romanHundredth = hundredth["8"];
 		break; 
 		case "9":
 		romanHundredth = hundredth["9"];
 		break;
 	}
 	switch(event.target.value.charAt(event.target.value.length-4)) {
 		case "0": 
 		romanThousandth = thousandth["0"];
 		break;
 		case "1":
 		romanThousandth = thousandth["1"];
 		break;
 		case "2":
 		romanThousandth = thousandth["2"];
 		break;
 		case "3":
 		romanThousandth = thousandth["3"];
 		break;
 		case "4":
 		romanThousandth = thousandth["4"];
 		break;
 		case "5":
 		romanThousandth = thousandth["5"];
 		break;
 		case "6":
 		romanThousandth = thousandth["6"];
 		break;
 		case "7":
 		romanThousandth = thousandth["7"];
 		break;
 		case "8":
 		romanThousandth = thousandth["8"];
 		break; 
 		case "9":
 		romanThousandth = thousandth["9"];
 		break;
 	}
 	output.innerHTML = romanThousandth + romanHundredth + romanTenth + romanSingle;
}
}