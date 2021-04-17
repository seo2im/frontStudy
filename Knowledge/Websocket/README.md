# Websocket

### Websocket 이란?

socket통신을 생각해보면 기본적인 실시간 통신이 그 목적이다. 웹에서도 이러한 부분을 해결하고자 하는 생각이 Websocket으로 발족되었다.

HTTP5부터 웹소켓이 가능하게 되었고 실시간 양방향 통신을 지원하여 일반 TCP socket과 유사한 스펙으로 동작한다. 연결수립은 HTTP를 통해 Handshake로 이루어지고 이후 80, 443포트를 그대로 사용한다. 

### 보안

HTTP에 HTTPS가 있듯이 Websocket도 기본 헤더인 ws외에 wss를 지원한다. TLS를 통과하여 전달되 데이터 암호화를 지원한다. 

### WebSocket 객체

JS에서 웹소켓은 `WebSocket`객체로 구현된다. 해당 객체는 `open`, `message`, `error`, `close` 이벤트로 통신을 구현할 수 있다.

```javascript
const socket = new WebSocket("wss://~~~")

socket.onopen = (e) => {
    socket.send("data");
}
socket.onmessage = (e) => {
    console.log(e.data) /* 전송받은 데이터 */
}
socket.onclose = (e) => {
    if (e.wasClean) /* 정상 종료 확인 */
        console.log(e.code, e.reason)
    else
        console.log(e.code, e.reason) /* 넷 장애시 코드는 1006 */
}
socket.onerror = (err) => {
    console.log(err.message)
}

```