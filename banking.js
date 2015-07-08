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

function setBalance(newBalance) {
	accountBalance = newBalance;
	console.log("Current account balance is $" + accountBalance);
}

function withdraw(withdrawlAmount) {
	setBalance( accountBalance - withdrawlAmount );
	console.log("Current account balance is $" + accountBalance);
}

function deposit(depositAmount) {
	setBalance( accountBalance + depositAmount );
	console.log("Current account balance is $" + accountBalance);
}

function setAddress(newAddress) {
	userAddress = newAddress;
	console.log("New address set to " + userAddress);
}

function giveInterest() {
	setBalance (accountBalance + (accountBalance * 0.03) );
	// console.log("Current account balance is $" + accountBalance);
}

var i;

function estimateIntrest() {
	for (i = 0; i <= 365; i++) {
			accountBalance + (accountBalance * 0.03);
	}
	console.log(accountBalance);
}

