const myElement = document.getElementById('my-id');

myElement.innerHTML = '<h2>Hello, world!</h2>';

const parentElement = document.getElementById('parent-id');

const childElement = document.createElement('div');

parentElement.appendChild(childElement);


// css
myElement.classList.add('my-class');
myElement.style.backgroundColor = 'red';

