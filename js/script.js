let modal = document.getElementById('modal');
let modalContent = document.getElementById('modal-content');

window.onload = function() {
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var close = document.getElementById('close');
    btn1.addEventListener('click', openModal);
    btn2.addEventListener('click', openModal);
    btn3.addEventListener('click', openModal);
    close.addEventListener('click', closeModal);
}

var openModal = function() {
    modal.style.display = 'block';
    modalContent.style.display = 'block';
}

var closeModal = function() {
    modal.style.display = 'none';
    modalContent.style.display = 'none';
}