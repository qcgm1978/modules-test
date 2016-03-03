define(['./second'],function(secondScript){
    //console.log('Color from secondScript', secondScript.color);
    return {
        hello: function () {
            //console.log('Hello from firstScript');
            return secondScript
        }
    }
});

//var second = require('./second.js');
//console.log('Color from secondScript', second.color);
//
//module.exports = {
//    hello: function () {
//        console.log('Hello from firstScript');
//    }
//};