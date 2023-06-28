let ftag = document.getElementById('form');
let myName = document.getElementById('name');
let mail = document.getElementById('email');
let error1 = document.getElementById('error1');
let error2 = document.getElementById('error2');
let tel = document.getElementById('tel');
let subject = document.getElementById('sub');
let error3 = document.getElementById('error3');

ftag.onsubmit = function(event){
    if(myName.value == ''){
        alert('error.. name required');
        event.preventDefault()
    }else if(mail.value == ''){
       error1.innerHTML="please input your email"
        event.preventDefault()
    }else if(tel.value == ''){
        error2.innerHTML="cannot be empty"
        event.preventDefault()
    }else if(subject.value == ''){
        error3.innerHTML="your subject dey important"
        event.preventDefault()
    }
}

let bar = document.getElementById('bar');
let list = document.getElementById('list');
let x = document.getElementById('x');

// function show() { 
//     list.style.display = 'block';
//     bar.style.display = 'none';
//     x.style.display = 'block';
// }

bar.onclick = function(){
    list.style.display = 'block';
    bar.style.display = 'none';
    x.style.display = 'block';
}
// function hide() {
//     list.style.display = 'none';
//     bar.style.display = 'block';
//     x.style.display = 'none';
// }

x.addEventListener('click', function() {
    list.style.display = 'none';
    bar.style.display = 'block';
    x.style.display = 'none';
})

