# "this" keyword

Java나 c++에서 `this`는 객체(class)의 reference를 의미한다. js도 유사하지만 조금 다른 의미로 적용된다.

기본적으로 this는 현재 호출자를 의미한다. 예를들어

```javascript
console.log(this === window); //window 객체가 호출자
// result: true
```

위와같이 결과가 나온다. 실제로는 `window.console.log()`가 동작한 것이기 때문이다. 전역객체와 일반객체에 따라 조금의 차이(특히 strict mode에서)가 있지만 기본적으로 `this`가 호출자를 의미하는 것은 맞다.

위와같은 동작은 객체를 생성할 때 일반적인 객체지향방식과 동일한 방식으로 동작한다. 다만 아래 경우를 생각해야한다.

```javascript
function NonBind() {
    this.a = 'abcd'
    const list = ['1', '2', '3']

    list.map(function (e) {
        console.log(this.a + e)
    })
}

const nonBind = new NonBind()
```

위 경우에 `this`가 호출 객체인 window가 된다. 이런 부분이 일반적인 객체지향언어와 javascript의 `this`의 근본적 차이를 보여준다.

이를 원하는 방식(객체지향언어와 같은 방식)으로 동작시키기 위해 객체 내부의 서브루틴에 객체를 바인드(bind)해야한다. `map`의 callback에 객체의 `this`를 바인딩하면 원하는 방식의 동작을 취한다.

```javascript
list.map(function (e) {
    console.log(this.a + e)
}.bind(this))
```