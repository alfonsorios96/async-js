'use strict';

const getJSON = () => {
    return new Promise((resolve, reject) => {
        reject('Promise');
    });
};

const makeRequest = () =>
    getJSON()
        .catch(error => error);

module.exports = makeRequest;
