
let swapItems = document.querySelectorAll('.swp');
swapItems.forEach((item, i) => {
  item.addEventListener('click',() => {
    document.querySelector('.swp-active').classList.remove("swp-active");
    item.classList.add("swp-active");
  });
});

let ham = document.querySelector('.hamBtn');
let nav = document.querySelector('.swapper');
let link = document.querySelector('.swapper-link');



ham.addEventListener('click', () => {
     nav.classList.toggle('swapper2');
     console.log(window.innerWidth);

});

window.addEventListener("resize", function() {
  if (window.innerWidth < 700) nav.classList.remove("swapper2");
});
