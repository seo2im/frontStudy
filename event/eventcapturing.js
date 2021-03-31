const capture = document.getElementsByClassName("capturing");
/*
    up to down => 1 2 3
*/
for (let comp of capture) {
    comp.addEventListener('click', function (event) {
        console.log(event.currentTarget.id);
    }, {
        capture: true
    })
}
