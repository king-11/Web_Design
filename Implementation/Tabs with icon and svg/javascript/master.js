let swapItems = document.querySelectorAll('.swp');
swapItems.forEach((item, i) => {
  item.addEventListener('click',() => {
    document.querySelector('.swp-active').classList.remove("swp-active");
    item.classList.add("swp-active");
  })
});
