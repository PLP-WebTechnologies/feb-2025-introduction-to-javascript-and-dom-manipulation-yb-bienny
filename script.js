document.querySelector('h1').textContent = "Welcome to JavaScript DOM Manipulation!";

document.querySelector('p').style.color = "blue";
document.querySelector('p').style.fontSize = "18px";

document.getElementById('myButton').addEventListener('click', function() {
    const ul = document.querySelector('ul');
    const newItem = document.createElement('li');
    newItem.textContent = "New Item";
    ul.appendChild(newItem);
});