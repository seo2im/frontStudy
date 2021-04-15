# DOM

### DOM이란?

> DOM은 HTML, XML 문서의 프로그래밍 interface이다. DOM은 문서의 구조화된 표현을 제공하여 programing language가 DOM에 접근할 수 있는 방법을 제공한다.
-[MDN 문서](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)-

### DOM의 접근

DOM은 브라우저마다 다른 방법으로 구현되어 있으며 스크립트 언어로 접근하여 사용한다. API를 객체에서 접근하여 바로 사용할 수 있으며 그 구조는 아래와 같다고 볼 수 있다.

**API (web or XML page) = DOM + Scripting language**

따라서 script에서 언제든지 문서에 접근하여 요소를 추가하고 삭제할 수 있다.

### Interface

DOM과 프로그래밍언어를 연결하는 매개체로 엘리먼트가 가지고있는 상위 어트리뷰트를 포함하고 있으며, 이를 통해 Element가 구성된다.

### 페이지 라이프 사이클

`DOMContentLoaded`: 리소스를 제외한 초기 HTML만 로드된 상황에서 발생하는 이벤트
`load`: 모든 리소스가 전부 로드된 후 발생하는 이벤트
`beforeunload/unload`: 페이지를 떠날 때 발생하는 이벤트