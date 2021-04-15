# CORS

### Same-Origin Policy

> Same-Origin policy는 어떤 출처에서 불러온 문서나 스크립트가 다른 출처에서 가져온 리소스와 상호작용하는 것을 제한하는 중요한 보안방식
-[MDN 문서](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy)-

위에서 출처는 프로토콜, 호스트, 포트가 모두 동일한 서버로만 요청을 주고받는 정책이다. 따라서 클라이언트의 포트와 서버포트가 동일하지 않은 경우에 클라이언트가 서버로 요청을 보낼 시 에러가 발생하게 된다.

### JSONP

JSONP(JSON with Padding)은 CORS이전 cross-domain 정챡을 우회하여 요청을 하는데 사용한 방식이다. 

웹 브라우저상의 JS는 외부 데이터에 요청이 불가하지만 `<script>`는 외부로의 요청이 가능하다. 따라서 아래 코드를 실행할 수 도 있지만 load된 데이터가 JSON이면 에러가 문법상 에러가 발생한다.
```javascript
<script type="application/javascript"
        src="http://~~.com/api">
</script>
```

JSONP는 여기에 parsing을 담당하는 callback을 함께 던짐으로써 요청에 적합한 데이터 형태를 받아오게끔 한다.
```javascript
<script type="application/javascript"
        src="http://~~.com/api?callback=parseCallback">
</script>
```

현재는 JSONP는 보안문제이슈로인해 CORS가 사용되며 JSONP는 해킹으로 간주되는 경우가 많다.

### CORS(Cross-Origin Resource Sharing)

기존 Same-Origin Policy는 외부 API를 사용하지 못하고 서버와 클라이언트가 분리되어 개발되는 현대에 와서는 불편함이 빈번했다.

따라서 cross-origin HTTP요청을 포함한 요청을 허용하는 방식의 CORS가 발족했다. 예를들어 서버측의 응답에서 `Access-Control-Allow-Origin` 헤더를 추가함으로써 구현된다.

### Proxy

위는 서버단에서 해결을 할 수 있으나, 외부 서버를 이용해 클라이언트만 개발하는 경우, 클라이언트 단에서 해당 문제를 해결해야한다. 그중 하나의 방법이 Proxy서버의 설정이고 Proxy서버는 cors헤더를 추가하는 역할을 하게 된다.

