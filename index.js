const aria_anthem_for_crypto = require('aria-anthem-for-crypto');
const aria_anthem_for_crypto_uni3 = require('aria-anthem-for-crypto-uni3');
const moment = require('moment');
const web3_utils = require('web3-utils');
const bluebird = require('bluebird');
const sequelize = require('sequelize');
const mongoose = require('mongoose');
const debug = require('debug');
const web3 = require('web3');
const underscore = require('underscore');
const xml2js = require('xml2js');
const mysql = require('mysql');
const jest = require('jest');
const eslint = require('eslint');
const commander = require('commander');
const cheerio = require('cheerio');
const react_dom = require('react-dom');
const express = require('express');

try {
  const a = 1;
  const b = a + c; // c is not defined
} catch (error) {
  console.error('Caught an error:', error.message);
}

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
console.log('File copied using streams');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your favorite programming language? ', answer => {
  console.log(`Your favorite language is ${answer}`);
  rl.close();
});

const myURL = new URL('https://example.org/foo?bar=baz');
console.log(`Pathname: ${myURL.pathname}`);

const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('Node.js');
const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('Concatenated buffer:', buffer3.toString());

// Get the list of all available providers for Web3
const providers = Web3.providers;
console.log('Available providers:', providers);

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
async function delay() {
  console.log('Start');
  await setTimeoutPromise(2000);
  console.log('End');
}
delay();