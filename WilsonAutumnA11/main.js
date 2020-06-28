function monthly(I, N, S) {
	//I =YEARLY INTEREST IN DECIMAL FORM

	//N = NUMBER OF PAYMENTS TO MAKE IN TOTAL (MONTHLY)

	//S = LOAN AMOUNT

	return (S * I / 12 * Math.pow(I / 12 + 1, N)) / (Math.pow(I / 12 + 1, N) - 1);
}

function showVal() {
	
	//LOAN AMOUNT
	var loanAmount = document.getElementById("LoanAmountInput");
	var loanAmountValue = loanAmount.value;
	
	//Check if loan amount is 0, null, or negative
		while (loanAmountValue == 0 || loanAmountValue%loanAmountValue != 0 || loanAmountValue < 0) {
			var aPrompt = prompt("Enter A Valid Loan Amount", "40000");
			if (aPrompt != 0 && aPrompt != null && aPrompt > 0) {
				loanAmountValue = aPrompt;
				break;
			}
		}

	//INTEREST RATE DIVIDED BY 100
	var interestRate = document.getElementById("InterestRateInput");
	var interestRateValue = interestRate.value / 100;

	//LOAN LENGTH
	var loanLength = document.getElementById("LoanLength");
	var loanLengthValue = loanLength.value * 12;

	//LOAN TYPE
	var loanType = document.getElementsByName("LoanType");
	var loanTypeValue = loanType.value;
	var loanTypeValueFinal;

	var output4 = document.getElementById("TotalPaymentsOutput");
	if (document.getElementById("Personal").checked) {
		loanTypeValueFinal = parseInt(loanAmountValue) + parseInt(1000);
	} else if (document.getElementById("Business").checked) {
		loanTypeValueFinal = parseInt(loanAmountValue) + parseInt(500);
	} else if (document.getElementById("Education").checked) {
		loanTypeValueFinal = loanAmountValue;
	}

	//FULL TIME STUDENT
	var fullTimeStudent = document.getElementsByName("FullTimeStudent");
	var fullTimeStudentValue = fullTimeStudent.value;
	var fullTimeStudentValueFinal;

	var output5 = document.getElementById("TotalPaymentsOutput");
	if (document.getElementById("Student").checked) {
		fullTimeStudentValueFinal = interestRateValue - .01;
	} else {
		fullTimeStudentValueFinal = interestRateValue;
	}

	

	//Call to Monthly
	//Full Time Student Value Final = Interest Rate (Changes Depending if Full Time Student)
	//Loan Length Value = The Length of the loan in years converted into months
	//Loan Type Final = Depending which loan type is selected, the loan amount changes
	var callToMonthly = monthly(parseFloat(fullTimeStudentValueFinal), parseFloat(loanLengthValue), parseFloat(loanTypeValueFinal));
	if (callToMonthly > 5000){
		alert("We need at least 5 years of tax returns for all monthly loan payments over $5000.00");
	}

	var output5 = document.getElementById("MonthlyPaymentsOutput");
	//Calculates Monthly Payment Amount
	output5.value = callToMonthly.toFixed(2);
	
	//Calculates Total Payment Amount
	var output6 = document.getElementById("TotalPaymentsOutput");
	var TotalPaymentAmount = (parseFloat(callToMonthly) * parseFloat(loanLengthValue));
	output6.value = TotalPaymentAmount.toFixed(2);
}

//Reload Method With Confirmation Message
function reloadMethod () {
	var confirmMessage = confirm("Confirm the Relaoad?");
	if (confirmMessage == true) {
		window.location.reload();
	}
}
