'use strict';

const getJSON = () => {
    return new Promise(resolve => {
        resolve('Promise');
    });
};

const makeRequest = () =>
    getJSON()
        .then(data => data);

module.exports = makeRequest;
