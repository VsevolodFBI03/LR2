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