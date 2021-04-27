/*$(".feedback__switcher-link").click((e) => {
    e.preventDefault();


    const $this = $(e.currentTarget);
    const curItem = $this.closet(".feedback__switcher-item");

    curItem.addClass("active").siblings().removeClass("active");

})*/


const swicherLink = document.querySelectorAll(".feedback__switcher-link");
let swicherItem = document.querySelectorAll(".feedback__switcher-item");

const target = $this.attr("data-open")

swicherLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let parent = link.parentNode;
    parent.classList.add("active");
    swicherItem.forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });
  });
});

const findBlocksByAlias = alias => {
  return $(".feedback__item").filter((ndx, item) => {
    return $(item).attr("data-linked-with") === alias;
  })
}

const itemToShow = findBlocksByAlias(target);
itemToShow.addClass("active").siblings().removeClass("active");

