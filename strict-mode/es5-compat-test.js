// adapted for NodeJS from http://kangax.github.com/es5-compat-table/
//
// https://github.com/kangax/es5-compat-table/blob/gh-pages/strict-mode/index.html
// modified to run under NodeJS
//
// enable strict globally
"use strict";

var E5TEST4NODE = {};
var __global = E5TEST4NODE;

function print(message) {
    console.log(message);
}

function getResultOkString(result) {
    if (result === true) {
        return "OK";
    } else {
        return "Not OK";
    }
}

 (function() {
    var result = (function() {
        try {
            eval('"\\010"');
            return false;
        } catch(err) {
            return err instanceof SyntaxError;
        }
    })();
    print(getResultOkString(result) + " " + 'eval(\'"\\010"\') is a SyntaxError');
})();

 (function() {
    var result = (function() {
        try {
            eval('010');
            return false;
        } catch(err) {
            return err instanceof SyntaxError;
        }
    })();
    print(getResultOkString(result) + " " + 'eval(\'010\') is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('__i_dont_exist = 1');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof ReferenceError) + " " + '__i_dont_exist = 1; is a ReferenceError');
})();

 (function() {
    var error;
    try {
        eval('eval = 1;');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " +  'eval = 1; is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('arguments = 1;');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'arguments = 1; is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('eval++;');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'eval++; is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('arguments++;');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'arguments++; is a SyntaxError');
})();

 (function() {
    var error;
    try {
        (function() {
            return arguments.caller;
        })();
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'arguments.caller; is a TypeError');
})();

 (function() {
    var error;
    try {
        (function() {
            return arguments.callee;
        })();
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof TypeError) + " " + 'arguments.callee; is a TypeError');
})();

 (function() {
    var result = (function(x) {
        x = 2;
        return arguments[0] === 1;
    })(1);
    print(getResultOkString(result) + " " + '(function(x){ x = 2; return arguments[0] === 1; })(1); ');
})();

 (function() {
    var result = (function(x) {
        arguments[0] = 2;
        return x === 1;
    })(1);
    print(getResultOkString(result) + " " + '(function(x){ arguments[0] = 2; return x === 1; })(1); ' + getResultOkString(result));
})();

 (function() {
    var error;
    try {
        eval('({ x: 1, x: 1 })');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + '({ x: 1, x: 1 }); is a SyntaxError');
})();

 (function() {
    var error1,
    error2;
    try {
        eval('({ set x(eval){ } })');
    }
    catch(err) {
        error1 = err;
    }
    try {
        eval('({ set x(y){ } })');
    }
    catch(err) {
        error2 = err;
    }
    print(getResultOkString(error1 instanceof SyntaxError && error2 === undefined) + " " + '({ set x(eval){ } }); is a SyntaxError');
})();

 (function() {
    var error1,
    error2;
    try {
        eval('({ set x(arguments){ } })');
    }
    catch(err) {
        error1 = err;
    }
    try {
        eval('({ set x(y){ } })');
    }
    catch(err) {
        error2 = err;
    }
    print(getResultOkString(error1 instanceof SyntaxError && error2 === undefined) + " " + '({ set x(arguments){ } }); is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('var __some_unique_variable;');
        __some_unique_variable;
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof ReferenceError) + " " + 'eval(\'var x\'); x; is a ReferenceError');
})();

 (function() {
    var result = (function() {
        return this === undefined;
    })();
    print(getResultOkString(result) + " " + '(function(){ return this === undefined; })();' );
})();

 (function() {
    var result = (function() {
        return this === undefined;
    }).call();
    print(getResultOkString(result) + " " + '(function(){ return this === undefined; }).call();');
})();

 (function() {
    var error;
    try {
        eval('var x; delete x;');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'var x; delete x; is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('delete (function(){}).length;');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof TypeError) + " " + 'delete (function(){}).length; is a TypeError');
})();

 (function() {
    var error;
    try {
        (function f() {
            f = 123;
        })();
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof TypeError) + " " + '(function f() { f = 123; })() is a TypeError');
})();

 (function() {
    var error;
    try {
        if (Object.defineProperty) {
            Object.defineProperty({},
            'x', {
                writable: false
            }).x = 1;
        }
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof TypeError) + " " + 'Object.defineProperty({ }, "x", { writable: false }).x = 1 is a TypeError');
})();

 (function() {
    var error;
    try {
        eval('({ get x(){ } }).x = 1');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof TypeError) + " " + '({ get x(){ } }).x = 1; is a TypeError');
})();

 (function() {
    var error;
    try {
        eval('var eval;');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'var eval; is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('var arguments;');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'var arguments; is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('with({}) { }');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'with({}){ } is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('try { } catch (eval) { }');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'try { } catch (eval) { } is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('try { } catch (arguments) { }');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'try { } catch (arguments) { } is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('function f(eval) { }');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'function f(eval) { } is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('function f(arguments) { }');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'function f(arguments) { } is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('function f(x, x) { }');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'function f(x, x) { } is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('(function(){}).caller');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof TypeError) + " " + '(function(){}).caller; is a TypeError');
})();

 (function() {
    var error;
    try {
        eval('(function(){}).arguments');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof TypeError) + " " + '(function(){}).arguments; is a TypeError');
})();

 (function() {
    var error;
    try {
        eval('function eval(){ }');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'function eval(){ } is a SyntaxError');
})();

 (function() {
    var error;
    try {
        eval('function arguments(){ }');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'function arguments(){ } is a SyntaxError');
})();

print("\n" + 'NON-STANDARD (i.e. not part of ECMA-262 standard)' + "\n");

 (function() {
    var error;
    try {
        eval('if (1) { function f(){ } }');
    }
    catch(err) {
        error = err;
    }
    print(getResultOkString(error instanceof SyntaxError) + " " + 'Function declarations in statements are disallowed ' +
    '(e.g.: if (...) { function f(){ } }) ' +
    '[as per http://wiki.ecmascript.org/doku.php?id=conventions:no_non_standard_strict_decls - ES5 Implementation Best Practice]');
})();

 (function() {
    setTimeout(function() {"use strict"; try { (function(){ arguments.callee; })() } catch(err) { __global.__setTimeoutError = err; }}, 10);
    setTimeout(function() {
        print(getResultOkString(__global.__setTimeoutError instanceof TypeError) + " " + 'setTimeout follows strict mode rules when string starts with ' +
        'use strict directive (e.g.: setTimeout(\'"use strict"; ...\', ...)) ')    
    },
    50);
})();

(function() {
    function myreset() {
        "use strict"; 
        try { 
            eval('with({}){}') 
        } catch(err) { 
            __global.__eventHandlerError = err; 
        }         
    }
    myreset();
//    console.log(" 443 err = " + __global.__eventHandlerError);       
    print(getResultOkString(__global.__eventHandlerError instanceof SyntaxError) + " " + 'Event handler follows strict mode rules when its body starts with ' +
    'use strict directive');    
})();

