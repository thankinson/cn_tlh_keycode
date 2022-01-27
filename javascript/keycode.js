// const pressKey = document.createElement('main-container')


// showhidebtn.addEventListener('keypress', () => {
//     document.classList.remove('show');
// }) 

let keyEvent = document.getElementsByTagName("h2");
let keyEvent2 = document.getElementsByTagName("h1")
let div = document.querySelector('div')


document.addEventListener("keypress", (e) => {

    div.classList.remove('show');
    keyEvent2[0].textContent = e.keyCode
    keyEvent[0].textContent = e.key;
    keyEvent[1].textContent = e.which;
    keyEvent[2].textContent = e.code; 

})