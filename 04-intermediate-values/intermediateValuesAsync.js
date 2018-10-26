'use strict';

const promise1 = () => new Promise(resolve => {
    resolve('done');
});

const promise2 = (string) => new Promise(resolve => {
    resolve(string);
});

const promise3 = (string1, string2) => new Promise(resolve => {
    resolve(string1 + string2);
});

const makeRequest = async () => {
    const value1 = await promise1();
    const value2 = await promise2(value1);
    return promise3(value1, value2);
};

module.exports = makeRequest;
