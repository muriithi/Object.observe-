(function () {
    'use strict';
    var obj = {
            foo: 0,
            bar: 1
        };
    Object.observe(obj, function (changes) {
        console.log(changes);
    });
    obj.baz = 3;
}());
