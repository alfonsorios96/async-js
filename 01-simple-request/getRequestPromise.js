'use strict';

const getJSON = () => {
    return new Promise(resolve => {
        resolve('Promise');
    });
};

// resolve => then , reject => catch

const makeRequest = () =>
getJSON()
    .then(data => data);

module.exports = makeRequest;
