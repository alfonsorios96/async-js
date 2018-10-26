'use strict';


const colors = require('colors');

const example01 = require('./01-simple-request');
const example02 = require('./02-handling-error');
const example03 = require('./03-conditional-request');
const example04 = require('./04-intermediate-values');

example01.requestPromise().then(response => {
    console.log(colors.cyan('Promise output: '));
    console.log(colors.green(response));
});

example01.requestAsync().then(response => {
    console.log(colors.cyan('Async/Await output: '));
    console.log(colors.green(response));
});

example02.errorPromise()
    .then(error => {
        console.log(colors.cyan('Promise output: '));
        console.log(colors.red(error))
    });

example02.errorAsync()
    .then(error => {
        console.log(colors.cyan('Async/Await output: '));
        console.log(colors.red(error));
    });

example03.conditionalPromise()
    .then(response => {
        console.log(colors.cyan('Promise output: '));
        console.log(colors.green(JSON.stringify(response)));
    });

example03.conditionalAsync()
    .then(response => {
        console.log(colors.cyan('Async/Await output: '));
        console.log(colors.green(JSON.stringify(response)));
    });

example04.intermediateValuesPromise()
    .then(response => {
        console.log(colors.cyan('Promise output: '));
        console.log(colors.green(response));
    });

example04.intermediateValuesAsync()
    .then(response => {
        console.log(colors.cyan('Async/Await output: '));
        console.log(colors.green(response));
    });
