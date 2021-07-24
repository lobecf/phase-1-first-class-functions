function receivesAFunction (callback){
    callback();
}

function returnsANamedFunction (){
    //takes no arugments
    //returns a named function
    return function namedFunction(){
        return sayHello();
    };
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}