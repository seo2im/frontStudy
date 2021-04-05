# Ajax

### Ajax의 등장배경

Ajax이전 **"새로운 정보" == "새로운 페이지"** 였기 때문에 하나의 정보가 변경되면 서버는 페이지를 새로 그려(HTML)클라이언트에 전달하는 과정을 거쳤다. 그냥 생각해봐도 이는 굉장히 비효율적이다. 이러한 과정을 SSR(Serverside rendering)이라 하였다. 이를 해결하기 위해 Ajax(Asynchronous Javascript And XML)이 발족하였고 현재로썬 하나의 기술로 정의되었다.

### Ajax의 동작방식

기존의  HttpRequest가 아닌 XMLHttpRequest를 서버로 요청하고 이에따른 응답을 HTML이 아닌 필요 데이터(XML, JSON, ...)만 응답으로 보낸다. 이 응답에 대응하여 페이지(Client)는 필요한 부분만 리 렌더링 작업을 수행한다.

### Ajax의 장점

1. 데이터 통신량 감소
2. 페이지 교체시간이 적게 걸려 응답성 향상
3. 비동기적 수행덕분에 통신 중 페이지 기능 이용 가능
4. 서버와 클라이언트의 로직 분리가 확실함

### Ajax의 단점

1. Javascript환경에서만 실행 가능함
2. 동적 페이지를 북마크하기 어려움
3. DOM을 복잡하게 조작해야함

### ajax 모듈

1. XMLHttpRequest module
2. fetch
3. axios

### CSR / SPA

Ajax의 발족으로 CSR(Clientside rendering)이 등장하였다. 클라이언트는 최초 요청시 리소스를 받고 이후에는 서버에 데이터만 요청한다. 즉, 모든 렌더링과정을 client에서 담당한다. 따라서 초기요청을 느리지만 이후 리 렌더링과정은 빠르게 동작한다.

위 과정에서 SPA(Single Page Application)가 등장했다. SPA는 CSR중 페이지를 하나만 가지는 어플리케이션으로 virtual DOM을 통해 화면의 변화를 캐치하고 해당 부분만 리 랜더링하는 과정을 거쳐 리소스의 활용을 최소화하는 과정을 거친다.

### SSR with Hydration

CSR의 최대 단점은 SEO(Search Engine Optimization)이다. 대부분의 크롤러는 Javascript를 지원하지 않기 때문에, SEO의 과정이 상당히 어렵다. 따라서 SSR을 고려하게 되고 이러한 과정에서 SSR과 CSR을 결합하는 시도가 이뤄졌다.

최초에만 SSR을 진행하고 이후 페이지에선 CSR을 이용하는 방식으로 `Next(React)`와 `Nuxt(Vue)`가 해당 기법을 구현한 프레임워크이다.
