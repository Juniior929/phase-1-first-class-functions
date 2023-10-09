function receivesAFunction(callback) {
     callback();

}

function returnsANamedFunction() {
    return function(nameFunction) {
        console.log('to not deeply equal');

        }

}

function returnsAnAnonymousFunction() {
    return function() {
        console.log();
    }
 }