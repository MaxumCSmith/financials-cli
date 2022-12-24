#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
	.command('time-to-passive', 'Calculates time needed to reach a threshold of passive income given assumre return rate, starting amount, and expected annual savings.')
    .parse(process.argv);
