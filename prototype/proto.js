/*
    protype method
*/
console.log('proto type method')
function z(key) {
    this.key = key;
}

z.prototype.log = function (word) {
    console.log(this.key + ':' +  word)
}

let w = new z('w');
w.log('word')

z.prototype.log = function () { console.log(this.key + ':' + 'proto dummy') }
w.log()