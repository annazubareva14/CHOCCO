const swicherLink = document.querySelectorAll(".feedback__switcher-link");
const switcherItem = document.querySelectorAll(".feedback__switcher-item");
const feedItems = document.querySelectorAll(".feedback__item");

swicherLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // ссылка
    let target = e.currentTarget;
    // родитель ссылки - li
    let parent = target.parentNode;

    switcherItem.forEach((par) => {
      if (par !== parent) {
        par.classList.remove("active");
      } else {
        par.classList.add("active");
      }
    });

    let dataText = target.getAttribute("data-open");

    findBlocksByAlias(dataText);
  });
});

const findBlocksByAlias = (dataText) => {
  feedItems.forEach((item) => {
    if (item.getAttribute("data-linked-with") === dataText) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};
