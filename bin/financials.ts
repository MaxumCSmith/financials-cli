#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
	.command('time-to-passive-income', 'test')
    .parse(process.argv);
