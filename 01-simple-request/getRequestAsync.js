'use strict';

const getJSON = () => {
    return new Promise(resolve => {
        resolve('Async/Await');
    });
};

const makeRequest = async () => await getJSON();

module.exports = makeRequest;
