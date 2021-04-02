/*
    only Ojbect method
*/
console.log('object type method')
function x(key) {
    this.key = key;

    this.log = function (word) {
        console.log(this.key + ':' +  word)
    }
}

let y = new x('y');
y.log('word')

x.log = function () { console.log(this.key + ':' + 'dummy') }
y.log()