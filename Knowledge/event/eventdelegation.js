const list = document.getElementById('list');
list.addEventListener('click', function (event) {
    console.log(event.target);
    console.log(this); // "this" is list, it is allocated handler
})

/*
    new item is append listener
*/
const li = document.createElement('li');
const button = document.createElement('button');
const text = document.createTextNode('3');
button.appendChild(text);
li.appendChild(button);
list.appendChild(li);