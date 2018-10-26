## Javascript Async (Promise vs Async/defer)


[Blog](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)


### 01 Simple request

Look at how much code we didn’t write! Even in the contrived example above, it’s clear we saved a decent amount of code. We didn’t have to write .then, create an anonymous function to handle the response, or give a name data to a variable that we don’t need to use. We also avoided nesting our code. These small advantages add up quickly, which will become more obvious in the following code examples.


### 02 Handling error

Async/await makes it finally possible to handle both synchronous and asynchronous errors with the same construct, good old try/catch. In the example below with promises, the try/catch will not handle if JSON.parse fails because it’s happening inside a promise. We need to call .catch on the promise and duplicate our error handling code, which will (hopefully) be more sophisticated than console.log in your production ready code.

### 03 Conditional request

Just looking at this gives you a headache. It’s easy to get lost in all that nesting (6 levels), braces, and return statements that are only needed to propagate the final result up to the main promise.

### 04 Intermediate values

You have probably found yourself in a situation where you call a promise1 and then use what it returns to call promise2, then use the results of both promises to call a promise3. 


### Conclusion

Async/await is one of the most revolutionary features that have been added to JavaScript in the past few years. It makes you realize what a syntactical mess promises are, and provides an intuitive replacement.
