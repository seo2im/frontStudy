# IIFE(즉시실행함수)

### 즉시실행함수란?

함수는 선언과 실행으로 블록이 나뉘는게 보통이지만 JS에선 선언과 동시에 실행시키는 것이 가능하다. 아래 코드를 보자

```javascript
(function (x) {
    console.log(x)
})(5);
```
위 함수는 받아들인 값을 콘솔에 찍는 함수로 선언과 동시에 '5'을 콘솔에 찍는다. 함수이기 때문에 값을 바로 저장하는것도 가능하고 함수를 저장하는 것도 가능하다.

```javascript
/*
    함수를 저장하여 다시 사용 가능
*/
(var func = function (x) {
    return x + 1
})(5);
func(3);
/*
    6
    4
    출력
*/

/*
    실행과 동시에 값을 저장함
*/
var value = (function (x) {
    return x + 1;
})(5)
/*
    6
    출력
*/
```

### 왜 사용할까?

첫번째 이유는 변수의 초기화이다. 최초에 선언만 필요한 경우 변수를 초기화할 때 사용하는데 즉시실행함수로 선언하면 전역(global scope)선언을 피할 수 있다. 예를 들어 아래 코드를 보자

```javascript
var flag

(function (key) {
    var ketList = ['valid', 'key', 'is here']
    if (keyList.find(key)) {
        flag = true
    } else {
        flag = false
    }
})('valid')

console.log(flag)
console.log(keyList)
/*
    true 출력 후 keyList는 참조 불가 에러 발생
*/
```

위처럼 keyList의 값이 지역적으로 선언되므로 이후 코드 충돌없이 진행하기에 용이하다. 주로 **플러그인**이나 **라이브러리 제작**에 많이 활용된다.

위 이유에 이어져서 이미 만들어진 라이브러리의 사용시 충돌할 경우를 방지할 수 있다. 예를 들어 Prototype과 JQuery는 모두 `$`의 전역변수를 사용한다. 이를 방지하기 위해 IIFE를 사용할 수 있다.
