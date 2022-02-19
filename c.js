const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("To calculate multiplacation enter the * symbol");
console.log("To calculate division enter the / symbol");
console.log("To calculate addition enter the + symbol");
console.log("To calculate subtraction enter the - symbol");

mathSymbol.question("What would you like to calculate? ", function(input){





	if (mathSymbol === "*"){
        num1.question(" What is the first number? ", function(input);
        num2.question("What is the second number? ", function(input);
		console.log(num1 * num2);
	}

	if (mathSymbol === "/"){
        num1.question(" What is the first number? ", function(input);
        num2.question("What is the second number? ", function(input);
		console.log(num1 / num2);
	}

	if (mathSymbol === "+"){
        num1.question(" What is the first number? ", function(input);
        num2.question("What is the second number? ", function(input);
		console.log(num1 + num2);
	}

	if (mathSymbol === "-"){
        num1.question(" What is the first number? ", function(input);
        num2.question("What is the second number? ", function(input);
		console.log(num1 - num2);
	}

    
	// This line closes the connection to the command line interface.
	reader.close()

});
