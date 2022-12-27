function clickMe(button) {
    if (button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';

    else
        button.innerHTML = 'Щелчок';
}

function student1(button) {
    if (button.innerHTML == 'Шениязов')
        button.innerHTML = 'Всеволод';
    else
    button.innerHTML = 'Шениязов';   
}

function student2(button) {
    if (button.innerHTML == 'Коломеец')
        button.innerHTML = 'Егор';
    else
    button.innerHTML = 'Коломеец';   
}

function clickMe2(button) {
    if (button.innerHTML == 'Нажми меня')
        button.innerHTML = 'Ещё раз нажми';
    else
    button.innerHTML = 'Нажми меня';   
}

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ' ' + ', y = ' + event.offsetY + ' ' + (event.ctrlKey? '<b>Ctrl</b>':'<s>Ctrl</s>') + ' ' + (event.shiftKey? '<b>Shift</b>':'<s>Shift</s>') + ' ' + (event.altKey? '<b>Alt</b>':'<s>Alt</s>' );
}
window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove',  showCoords);
});

function showFocus(event) {
    event.target.style.color = 'red';
    event.target.style.fontSize = '20px';
}

window.addEventListener('DOMContentLoaded', function() {
    let texts = document.querySelectorAll('input[type = "text"]');
    texts[0].addEventListener('focus',  showFocus);
    texts[1].addEventListener('focus',  showFocus);
    texts[2].addEventListener('focus',  showFocus);
});

function showBlur(event) {
    event.target.style.color = 'black';
    event.target.style.fontSize = '30px';
}

window.addEventListener('DOMContentLoaded', function() {
    let texts = document.querySelectorAll('input[type = "text"]');
    texts[0].addEventListener('blur',  showBlur);
    texts[1].addEventListener('blur',  showBlur);
    texts[2].addEventListener('blur',  showBlur);
});

function showChange(event) {
    document.getElementById('output').innerHTML=event.target.value;
}

window.addEventListener('DOMContentLoaded', function() {
    let texts = document.querySelectorAll('input[type = "text"]');
    texts[0].addEventListener('change',  showChange);
    texts[1].addEventListener('change',  showChange);
    texts[2].addEventListener('change',  showChange);
});