const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("If you'd like to use addition, type the + symbol followed by the two numbers with spaces between the symbol and each number");
console.log("If you'd like to use subtraction, type the - symbol followed by the two numbers with spaces between the symbol and each number");
console.log("If you'd like to use multiplication, type the + symbol followed by the two numbers with spaces between the symbol and each number");
console.log("If you'd like to use division, type the + symbol followed by the two numbers with spaces between the symbol and each number");
console.log("If you'd like to find the squre root, type the # symbol followed by the number you'd like to find the square root of");


reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');

mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	if (mathSymbol === "+"){
		  console.log(num1 + num2);
	}

	if (mathSymbol === "-"){
		  console.log(num1 - num2);
	}

	if (mathSymbol === "*"){
		console.log(num1 * num2);
	}

	if (mathSymbol === "/"){
		console.log(num1 / num2);
	}
	
	if (mathSymbol === "#"){
		result = Math.sqrt(num1)
		console.log(result)
	}

	reader.close()

  });