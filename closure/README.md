# Closure

클로저는 프로퍼티와 함수의 조합으로 생각 할 수 있고 이는 객체지향언어의 private와 유사하게 동작한다.

### Lexical scoping
```javascript
function init() {
  var name = "Mozilla"; // name은 init에 의해 생성된 지역 변수이다.
  function displayName() { // displayName() 은 내부 함수이며, 클로저다.
    alert(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  displayName();
}
init();
//코드 출처: https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures
```

위 코드를 보면 `name`은 `displayName()`에 선언되어 있지 않지만, `name`을 사용한다. 파서(parser)가 변수를 해석하는 방식이 scoping에 따라 구현되며 이를 lexical scoping(어휘적 범위 지정)이라 칭한다. 즉, 중첩함수는 외부 범위에서 선언된 변수에도 접근할 수 있다는 점이다.

### Closure

```javascript
function makeClosure() {
    var value = 'value'
    function func() {
        value = 'new value'
        console.log(value)
    }
    return func
}

var closure = makeClosure()
closure()
```

위 코드에서 `closure`는 `func`함수를 담고 있고 `func`함수에는 `value`변수를 참조할 수 없어 문제가 발생할 것 같지만 정상적으로 동작한다. 이는 js가 lexical environment를 함수와 함께 묶어 반환하기 때문이다. lexical environment는 lexical scope에 해당하는 변수를 모두 담고있으며 따라서 closure로 생성된 함수는 해당 변수를 사용할 수 있으며 접근도 가능하다.