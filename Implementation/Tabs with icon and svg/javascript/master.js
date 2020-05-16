let swapItems = document.querySelectorAll('.swp');
swapItems.forEach((item, i) => {
  item.addEventListener('mouseover', () => {
    item.children[0].style.display="block";
  });
  item.addEventListener('mouseout', () => {
    item.children[0].style.display="none";
  });
  item.addEventListener('click',() => {
    document.querySelector('.swp-active').classList.remove("swp-active");
    item.classList.add("swp-active");
  })
});
