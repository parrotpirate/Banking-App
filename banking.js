var userName = "Stephen";
var userAddress = "1000 Somewhere Drive";
var accountNumber = 0000000001;
var acountOpenDate = "January 1st, 1989";
var accountBalance = 1.00;

function printAccountInfo() {
	console.log(userName);
	console.log(userAddress);
	console.log(accountNumber);
	console.log(acountOpenDate);
	console.log(accountBalance);
};

function printBalance() {
	console.log(accountBalance);
};

function setBalance(newBalance) {
	accountBalance = newBalance;
};

function withdraw(withdrawlAmount) {
	setBalance( accountBalance - withdrawlAmount );
};

function deposit(depositAmount) {
	setBalance( accountBalance + depositAmount );
};