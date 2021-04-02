# prototype

Js는 모든 객체가 상속을 위한 templete로 prototype을 객체로 가진다. 객체의 모든 property(속성)와 method(함수)는 `__proto__`속성에 정의되어 상위 / 또는 하위 객체로 상속되거나 받을 수 있다. 이를 **prototype chain**이라 한다.

이는 전통적인 상속과 굉장히 유사하게 동작한다. 어떤 객체의 함수를 실행할 때, 브라우저(실행모듈)는 함수를 객체가 가진 프로토를 계속 거슬러 오르며 찾는다.

다만 상속된 함수들은 prototype에 정의된 함수들 뿐이다. 예를 들어 `Object.keys()`와 같은 함수는 prototype에 정의 되 있지 않으므로 아래로 생성된 객체에서 사용이 불가하다.

### Object로 살펴보는 prototype
```javascript
const x = Object.create(y);
```

위 코드를 실행하면 `x`는 `y`를 기반으로 생성된다. 즉 `x`의 `__proto__`가 `y`가 된다. 

위에서 y가 정의한 내용의 변경을 x에서도 정의시키고 싶으면 반드시 `prototype`에 정의를 내려야한다.. 예를 들어 아래 상황을 보자.

```javascript
function x(key) {
    this.key = key;

    this.log = function (word) {
        console.log(this.key + ':' +  word)
    }
}

let y = new x('y');
y.log('word')  //y:word 출력

x.log = function () { console.log(this.key + ':' + 'dummy') }
y.log()   //y:undefined 출력

x.prototype.log = function () { console.log(this.key + ':' + 'proto dummy') }


```

위를 보면 
