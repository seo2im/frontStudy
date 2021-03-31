/*
    this mean "caller".
*/
console.log("====\"this\" is mean====")
console.log(this === window) // true

const host = {
    func: function() {
        console.log(this === window); //false
        console.log(this === host); // true
    }
}

host.func();

/*
    bind sub-routine
*/
console.log("====BIND TEST====")
function NonBind() {
    this.a = 'abcd'
    const list = ['1', '2', '3']

    list.map(function (e) {
        console.log(this.a + e) //this === window(when use new callable)
    })
}
function Bind() {
    this.a = 'abcd'
    const list = ['1', '2', '3']

    list.map(function (e) {
        console.log(this.a + e)
    }.bind(this)) //bind `Bind` in map function's this
}

function Arrow() {
    this.a = 'abcd'
    const list = ['1', '2', '3']

    list.map((e) => {
        console.log(this.a + e)
    }) //arrow function have `_this = this` allocation automatically
}
console.log("==NonBind==")
const nonBind = new NonBind();

console.log("==Bind==")
const bind = new Bind();

console.log("==Arrow==")
const arrow = new Arrow()
