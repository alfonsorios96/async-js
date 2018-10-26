'use strict';

const getJSON = () => {
    return new Promise((resolve, reject) => {
        reject('Async/Await');
    });
};

const makeRequest = async () => {
    try{
        await getJSON();
    } catch(error) {
        return error;
    }
};

module.exports = makeRequest;
