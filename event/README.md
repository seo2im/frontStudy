# Event

Event란 clinet가 발생시킨 특정 action이다. 이에 대한 기능을 listener로 등록한다.

### Event bubbling

이벤트가 발생했을 때 그 상위요소로 하나씩 이벤트가 올라가는 특성이다. default로 설정되어있다. 다만 focus같이 버블링 되지 않는 이벤트도 있다.

등록된 가장 안쪽의 component가 target이고 this는 실행중인 handler가 할당된 component이다.

### Event capturing

bubbling과 반대로 내려가는 방식이다.
왜 쓸까?

### Event Delegation

상위요소에 적용된 handler가 하위 핸들러에서 동작한다.(bubbling 원리에 따라)이는 새 요소를 추가할 때, 이벤트를 바인딩할 필요가 없고 반대로 지우는 요소에 핸들러를 해제할 필요가 없어진다.
