const program = require('commander');
const pkg = require('../package.json');
import { main } from '../lib/time-to-passive'
const { wrapCommand } = require('./utils');

program
    .version(pkg.version)
    .requiredOption('-x0, --starting-amount <startingAmount>', 'the amount starting with')
	.requiredOption('-s, --annual-save <annualSave>', 'annual amount saved')
	.requiredOption('-int, --interest-rate <interestRate>', 'the assumed return rate')
	.requiredOption('-end, --desired-passive-income <desiredPassiveIncome>', 'the amount of passive income you want')
	.requiredOption('-out, --output-file-name <outputFileName>', 'the name of the file to show in the output folder')
	.action(wrapCommand(main))
    .parse(process.argv);
