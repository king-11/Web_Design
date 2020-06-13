images = document.querySelectorAll(".imgbox img")
contents = document.querySelectorAll(".imgbox div")
images.forEach(img => {
    img.addEventListener('click', function () {
        this.style.transform = "scale(1.2)"
        let content = this.parentNode.lastElementChild

        // let parentobj = this.parentElement;
        // let content = parentobj.lastChild;
        content.classList.toggle('display');
    })
})

contents.forEach(content => {
    content.addEventListener('click', function () {
        content.classList.toggle('display');
        let img = this.parentNode.firstElementChild
        img.style.transform = "scale(1.0)"
    })
})