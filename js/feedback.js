/*$(".feedback__switcher-link").click((e) => {
    e.preventDefault();


    const $this = $(e.currentTarget);
    const curItem = $this.closet(".feedback__switcher-item");

    curItem.addClass("active").siblings().removeClass("active");

})*/

const swicher = document.querySelectorAll('.feedback__switcher-link');
const swicherItem = document.querySelectorAll('.feedback__switcher-item');


swicher.addEventListener('click', e => {
    e.preventDefault();

    swicherItem.addClass('active');
})