const capture = document.getElementsByClassName("capturing");

for (let comp of capture) {
    comp.addEventListener('click', function (event) {
        console.log(event.currentTarget.id);
    }, {
        capture: true
    })
}
