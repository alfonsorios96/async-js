'use strict';

const promise1 = () => new Promise(resolve => {
    resolve('done');
});

const promise2 = (string) => new Promise(resolve => {
    resolve(string);
});

const promise3 = (string) => new Promise(resolve => {
    resolve(string + string);
});

const makeRequest = () =>
    promise1()
        .then(value1 => promise2(value1)
            .then(value2 => promise3(value2)));

/**
 *
 * If promise3 didn’t require value1 it would be easy to flatten the promise nesting a bit.
 const makeRequest = () => {
  return promise1()
    .then(value1 => {
      // do something
      return Promise.all([value1, promise2(value1)])
    })
    .then(([value1, value2]) => {
      // do something
      return promise3(value1, value2)
    })
}
 */

module.exports = makeRequest;
