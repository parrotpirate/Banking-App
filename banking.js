var userName = "Stephen";
var userAddress = "1000 Somewhere Drive";
var accountNumber = 42;
var acountOpenDate = "January 1st, 1989";
var accountBalance = 1.00;

function printAccountInfo() {
	console.log("Welcome " + userName);
	console.log("Your current address is " + userAddress);
	console.log("Your account number is " + accountNumber);
	console.log("Your account was opened on " + acountOpenDate);
	console.log("Your current account balance is $" + accountBalance);
}

function printBalance() {
	console.log("Current account balance is $" + accountBalance);
}


function withdraw(withdrawlAmount) {
	setBalance( accountBalance - withdrawlAmount );
}

function deposit(depositAmount) {
	setBalance( accountBalance + depositAmount );
}

function setBalance(newBalance) {
	accountBalance = newBalance;
	printBalance();
}

function setAddress(newAddress) {
	userAddress = newAddress;
	console.log("New address set to " + userAddress);
}

function giveInterest() {
	if (accountBalance > 0) {
	setBalance (accountBalance + (accountBalance * 0.03) );
	}
}



var i;

function estimateIntrest(days) {

var estimateBalance = accountBalance;


	for (i = 0; i < days; i++) {
		estimateBalance = (estimateBalance + (estimateBalance * 0.03) );
	}
	console.log(estimateBalance);
}

// with for loop
function predictInterestForLoop( numYearsToPredict) {
var pretendBalance = accountBalance;

for( i=0; i < numYearsToPredict * 365; i++){
	pretendBalance = pretendBalance * 1.03;

	}
	console.log("After " + numYearsToPredict + "years your balance would be " + pretendBalance);

}

// with while loop
function predictInterestWhileLoop( numYearsToPredict) {
var	pretendBalance = accountBalance;

var i = 0;
while( i<numYearsToPredict*365  ) {
		pretendBalance = pretendBalance * 1.03;
		i++;
	}

}
// using recursion
function predictInterestRecursive( numYearsToPredict, pretendBalance) {

	if(numDaysToPredict <= 0 ) {
		console.log( printBalance);
		return pretendBalance;
	}

	else predictInterestRecursive( numDaysToPredict-1, pretendBalance*1.03);

}