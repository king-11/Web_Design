let toggle = document.querySelector(".toggle")
let navLinks = document.querySelector(".nav-items")
toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
})