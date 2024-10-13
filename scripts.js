const hamburger = document.getElementsByClassName('hamburger')[0]
const nav = document.querySelector('.navigator');

console.log("hello")

hamburger.addEventListener('click', () => {
    console.log("CLICKED")
    nav.classList.toggle('show');
})
