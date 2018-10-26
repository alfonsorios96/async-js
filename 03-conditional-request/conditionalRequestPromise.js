'use strict';

const getUsers = () => new Promise(resolve => {
    resolve([
        {
            username: 'hola'
        },
        {
            username: '2'
        },
        {
            username: '3'
        }]);
});

const getUser = (username) => new Promise(resolve => resolve(username));

const makeRequest = () => {
    return getUsers()
        .then(users => {
            if (users.length === 3) {
                return getUser(users[0].username)
                    .then(username => username);
            } else {
                return users;
            }
        });
};

module.exports = makeRequest;
