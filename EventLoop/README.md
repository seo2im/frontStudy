# Event Loop

### JS function call

아래 코드를 보자.

```javascript
const b = () => {
    console.log('b')
}

console.log('a')
setTimeout(b, 0)
console.log('c')
console.log('d')
console.log('e')
console.log('f')
console.log('g')
```

위 코드는 `a -> c -> d -> e -> f -> g`순으로 출력된다. b는 setTimeout에 의해 0초만에 동작하는데 왜 `b`가 마지막에 출력이 될까? 다른 로그들이 0초보다 빠르게 동작하기 때문에? 하지만 뒤에 아무리 출력을 늘려도 `b`는 마지막에 출력된다.

이를 이해하기 위해선 **event loop, task queue, call stack**이 어떻게 동작하는지 알아야 한다.

### Event Loop, Test Queue, Call Stack

Call Stack은 기본적으로 메인함수가 올라가고 이후 실행 컨텍스트가 하나씩 올라간다. 위 코드의 `console.log(a)`가 먼저 등록되고 이후 `setTimout()`이 올라간다. 이 때 실행함수인 b는 웹API(background)에 timer와 함께 저장된다. 0초시점에 웹API는 Task Queue에 `b()`를 넣고 Call stack은 실행 컨택스트를 계속 밀어넣어 `console.log('g')`까지 등록한다. 이때 Event Loop는 Call Stack이 비는지를 계속 검사하고 `console.log('g')`가 Call Stack에서 비워지고(실행)나서야 `b()`
를 Call Stack에 올린다. 이러한 특성때문에 `b`의 출력이 가장 늦게 되는것이다.

따라서 Call Stack, Event Loop가 어떻게 동작하는지에 대한 이해가 서비스 동작을 정확히 구현하는데 이점이 된다.
