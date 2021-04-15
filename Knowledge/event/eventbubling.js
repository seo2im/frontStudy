const bubble = document.getElementsByClassName("bubbling");
/*
    down to up => 3 2 1
*/
for (let comp of bubble) {
    comp.addEventListener('click', function (event) {
        console.log(event.currentTarget.id);
    })
}
