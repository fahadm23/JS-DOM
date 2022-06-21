// Clicking the button will initiate the function using addEventListener
// You can use this to say "Submitted!" once the buton is clicked, or change colours, etc.

// var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
console.log('Button clicked');

document.getElementById('header-title').textContent = 'Changed'
document.querySelector('#main').style.backgroundColor = '#f4f4f4';

console.log(e);

console.log(e.target);
console.log(e.target.id);
console.log(e.target.className);
console.log(e.target.classList);

console.log(e.type);

console.log(e.clientX);
console.log(e.clientY);

console.log(e.offsetX);
console.log(e.offsetY);

console.log(e.altKey);
console.log(e.ctrlKey);
console.log(e.shiftKey);
}

var button = document.getElementById('button');


button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

button.addEventListener('mouseenter', runEvent);
button.addEventListener('mouseleave', runEvent);

button.addEventListener('mouseover', runEvent); //mouseover will fire off on inner elemements as well as whole element
button.addEventListener('mouseout', runEvent);

button.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
itemInput.addEventListener('keydown', runEvent)
itemInput.addEventListener('keyup', runEvent)
itemInput.addEventListener('keypress', runEvent)

itemInput.addEventListener('focus', runEvent)
itemInput.addEventListener('blur', runEvent)

itemInput.addEventListener('cut', runEvent)
itemInput.addEventListener('paste', runEvent)

itemInput.addEventListener('input', runEvent)

select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);



function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);

    console.log(e.target.value);

    //Change colour as mouse moves around
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}

