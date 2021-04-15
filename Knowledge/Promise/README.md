# Promise

### Promise란?

Promise는 비동기(Async) 작업의 미래를 표현할 수 있는 방식이다. 
비동기 작업은 코드가 호출된 시점에 결과를 확인할 수 없고 백그라운드에서 실행되어 어떤 시점에 결과가 나타난다. 따라서 성공/실패시점에 동작할 작업을 콜백(callback)함수로 등록하게 되는데, 이를 프로미스를 통해 구현할 수 있다.

### Promise의 상태

Promise는 대기(pending), 이행(fullfilled), 거부(rejected)상태가 존재한다.

**대기 상태**는 작업이 이벤트루프에 올라가 작업이 수행되지 않은 상태를 의미한다. 작업이 완료되면 **이행**(성공)되거나 **거부**(실패)된다. 이러한 일련의 동작을 여러 Promise를 연결하여 진행할 수 있다.

### 예시

```javascript
const promise = new Promise((resolve, reject) => {
    var data = 'some work'
    if ('work success!')
        resolve(data)
    else //work fail
        reject();
})
```

위 코드를 보자. `new Promise()`를 통해 생성된 프로미스는 기본적으로 대기상태가 된다. 콜백으로 받은 함수의 `resolve()`가 실행되면 프로미스는 **이행상태**가 되고 받은 파라미터를 성공값으로 반환한다. 반대로 `reject()`가 실행되면 **거부상태**가 된다. 위 프로미스를 아래처럼 사용한다.

```javascript
promise().then(result => {
    //result is data!!
    //some work
}).catch(err => {
    //error handling
})
```

`then()`을 통해 성공결과를 얻거나 `catch()`를 통해 실패된 에러를 핸들링한다. 

### Promise Chain

**Callback 지옥**이라는 말이 JS에선 당연시되었다. 여러 비동기작업을 연속해서 진행하려면 해당 작업에 대한 콜백을 연속으로 할당해야 했기에 아래와 같은 코드가 만들어졌다.

```javascript
one((resultOne) =>{
    two(resultOne, (resultTwo) => {
        three(resultTwo, (resultThree) => {
            //do somthing use result Three
        }, errorCallback)
    }, errorCallback)
}, errorCallback)
```

프로미스의 `then()`의 return값은 Promise이므로 연속적인 `then()`의 사용으로 작업을 chaining할 수 있다.

```javascript
one()
.then((resultOne) => two(resultOne))
.then((resultTwo) => three(resultTwo))
.then((resultThree) => {
    //do something use esult Three
})
.catch(errorCallback)
```

### Promise.all()

비동기작업을 순차적으로 할 수 도 있지만 병렬적으로 처리해야 할 상황도 있을 것이다. 병렬로 비동기 작업을 처리하고 모든 결과가 이행되었을 때의 작업을 수행하기 위한 방식으로 `all()`을 Promise는 제공한다.

`all()`은 프로미스나 프로미스가 아닌 객체를 받아 병렬 프로미스를 반환한다. 프로미스를 반환하므로 동작은 위와 동일하다.