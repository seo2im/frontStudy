# javascript

1. [What is Javascript](#chapter-1)

## What is Javascript <a id="chapter-1"></a>
### 스크립트 언어란?

소스코드를 컴파일 하지 않고 인터프리터가 줄단위로 프로그램을 실행시키는 언어로 통상 존재하는 응용소프트웨어를 제어하는 용도로 활용되는 언어를 통칭한다.

### javascript
**Javascript(JS)**는 스크립트언어이자 [JIT 컴파일](https://ko.wikipedia.org/wiki/JIT_%EC%BB%B4%ED%8C%8C%EC%9D%BC)을 지원하는 프로그래밍언어이다. 최초엔 브라우저에 동적작업을 추가하기 위한 언어로 개발되었으나 이후 다양한 방식으로 활용되고 있다.

### CommonJS
브라우저 이외의 작업에 JS를 사용하고자 하는 워킹그룹을 총칭한다. 쉽게 말해서 모듈시스템을 개발하여 서버사이드 어플리케이션에서 JS를 사용할 수 있게 구현하는 방법이다.

기본적으로 scope / define / usage로 나뉘어 기본 모듈화를 구성했고 그 구조는 우리가 사용하는 `함수/export/require`이다.

이 방향성은 브라우저 방식에서 모든 모듈을 다운로드할때까지 실행이 불가하므로 `<script>`태그를 삽입하는 방식으로 해결하고 있다.

CommonJs는 근본적으로 동기식이므로 브라우저보다는 서버에 중점을 두고 발족되었다. 물론 브라우저에서의 사용성을 높이기 위해 모듈 전송포맷을 정의해 비동기적으로 모듈을 로드할 수 있게끔 하였다.
```javascript
/*
    해당 코드는 비동기적으로 로드할 수 있게 만들었다.
*/
require.define({"complex-numbers/plus-two": function(require, exports){

//콜백 함수 안에 모듈을 정의한다.
var sum = require("./complex-number").sum;  
exports.plusTwo = function(a){  
return sum(a, 2);  
};
},["complex-numbers/math"]);

//출저 : https://d2.naver.com/helloworld/12864
```

### AMD
상대적으로 AMD는 근본적으로 비동기식으로 브라우저를 기준으로 설계되었다고 볼 수 있다. 다만 AMD는 대체적으로 구문이 장황하여 사용이 어렵다고 판단한다. 자세한 내용들은 [JavaScript 표준을 위한 움직임: CommonJS와 AMD](https://d2.naver.com/helloworld/12864)를 참고하자.

### ES2015
동기식 비동기식을 동시에 접근할 수 있도록 구성한 새로운 모델, 아직 서버에선 commonJS를 많이 활용하지만 브라우저는 사실상 es2015(현대로는 es6)가 표준이라 보면 된다.

## Inside of JS
### undefined vs null vs undeclared
`null` vs `undefined`
`null`: 명시적으로 선언
`undefined`: 값이 할당되지 않음
`undeclared`: 선언이 되지 않음(`const`, `let`, `var`가 없음)

### IIFE
즉시 실행함수
```javascript
(function x() {
    console.log('IIFE')
})();
```

### 호스트 객체 ? 내장 객체?

내장 객체는 ECMA에 정의된 js 내부에서 동작하는 객체이고, 호스트 객체는 호출자(브라우저, node, ..)에서 제공되는 객체이다.

### 호이스팅

선언이 항상 우선시 되는 JS의 특징이다. 호이스팅은 ES6 표기식(화살표 함수 등)에선 동작하지 않으며 그 방식이 권장된다.(선언식)