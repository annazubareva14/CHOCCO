/*$(".feedback__switcher-link").click((e) => {
    e.preventDefault();


    const $this = $(e.currentTarget);
    const curItem = $this.closet(".feedback__switcher-item");

    curItem.addClass("active").siblings().removeClass("active");

})*/

let swicherLink = document.querySelectorAll('#feedback__switcher-link');
let swicherItem = document.querySelectorAll('#feedback__switcher-item');

swicherLink.forEach(function(e){
    e.preventDefault();
    e.addEventListener('click', toggleActive);
});

function toggleActive(){
    swicherItem.classList.toggle('active');
};

swicherLink.addEventListener('click', toggleActive);