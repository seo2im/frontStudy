# WebWorker

### 웹 워커(WebWorker)란?

Web Worker는 백그라운드 스레드에서 스크립트를 실행하는 방법을 제공하는 Web API로 인터페이스(화면)를 방해하지 않고 작업을 수행한다. 특히 XMLHttpRequest를 통해 I/O작업을 수행할 수 있다.

### 사용법은?

Worker는 기본적으로 어떤 동작을 정의하여 사용한다.

```javascript
const worker = new Worker('script file define some working')
```
생성된 worker는 `postMessgae()`와 `onmessage()`로 통신을 진행하고 생성된 worker는 항상 백그라운드에서 작업을 진행한다. worker끼리의 작업을 공유하려면 `SharedWorker`를 통해 구현할 수 있다.

### worker.js

worker의 실제 동작파일의 예시를 하나 만들어보면

```javascript
self.onmessage = () => {
    let message = event.data

    self.postMesage({ response: 'recieve' })
}
```

위 작업을 보면 self가 `window`가 아닌 `worker`임을 확인 할 수 있을것이다.