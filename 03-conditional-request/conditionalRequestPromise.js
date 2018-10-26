'use strict';

const getJSON = () => new Promise(resolve => {
    resolve({
        needsAnotherRequest: true
    });
});

const makeAnotherRequest = (data) => new Promise(resolve => resolve(data));

const makeRequest = () =>
    getJSON()
        .then(data => {
            if (data.needsAnotherRequest) {
                return makeAnotherRequest(data)
                    .then(moreData => moreData);
            } else {
                return data;
            }
        });

module.exports = makeRequest;
