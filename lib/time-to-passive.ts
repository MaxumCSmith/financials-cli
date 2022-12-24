import fsExtra from 'fs-extra'

// NOTE: these two terms were a simple derivation of from difference equations assuming simple interest

const term1 = (n: number, x_naught: number, interest_rate: number) => {
	return x_naught * (1 + interest_rate)**n
}

const term2 = (n: number, s: number, interest_rate: number) => {
	let summation = 0;
	for (let i = 0; i < n; i++) {
		summation += (1 + interest_rate)**i
	}
	return s * summation;
}

const futureAmt = (n: number, x_naught: number, s: number, interest_rate: number) => term1(n, x_naught, interest_rate) + term2(n, s, interest_rate);

interface IArgs {
	startingAmount: string;
	annualSave: string;
	interestRate: string;
	desiredPassiveIncome: string;
	outputFileName: string;
}

export const main = (args: IArgs) => {
	const startingAmount = parseFloat(args.startingAmount);
	const annualSave = parseFloat(args.annualSave);
	const interestRate = parseFloat(args.interestRate);
	const desiredPassiveIncome = parseFloat(args.desiredPassiveIncome);

	

	let passiveIncome = 0;
	let i = 0;
	let net_worth = 0;

	while (passiveIncome < desiredPassiveIncome) {
		net_worth = futureAmt(i, startingAmount, annualSave, interestRate);
		passiveIncome = interestRate * net_worth;
		i++;
	}

	console.log(`Years taken: ${i}`);
	console.log(`Interest Rate: ${interestRate}`);
	console.log(`Starting Amt, Ending Amt: (${startingAmount}, ${Math.round(net_worth)})`);
	console.log(`Desired Passive Income: ${Math.round(desiredPassiveIncome)}`);
	console.log(`Expected Annual Income at end: ${Math.round(passiveIncome)}`);

	fsExtra.writeJsonSync(
		`./output/${args.outputFileName}`,
		{
			yearsTaken: i,
			interestRate: i,
			startingAmount,
			endingAmount: Math.round(net_worth),
			desiredPassiveIncome,
			expectedAnnualIncomeEnd: Math.round(passiveIncome)
		}
	)
}
