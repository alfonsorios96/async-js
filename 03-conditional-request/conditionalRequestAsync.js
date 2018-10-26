'use strict';

const getJSON = () => {
    return new Promise(resolve => {
        resolve({
            needsAnotherRequest: true
        });
    });
};

const makeAnotherRequest = (data) => new Promise(resolve => resolve(data));

const makeRequest = async () => {
    const data = await getJSON();
    if (data.needsAnotherRequest) {
        const moreData = await makeAnotherRequest(data);
        return moreData;
    } else {
        return data;
    }
};

module.exports = makeRequest;
