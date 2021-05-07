const sections = $(".section");
const display = $(".wrapper");

let inScroll = false;

sections.first().addClass("activeNow");

const performTransition = (sectionEq) => {

    if(inScroll === false) {
        inScroll = true;
        const position = sectionEq * -100;

        const currentSection = sections.eq(sectionEq);
        const menuTheme = currentSection.attr("data-sidemenu-theme");
        const sideMenu = $(".fixed-menu");
        const sideMenuItem = $(".fixed-menu__item");
        const hamburgerTheme = $(".hamburger");

        if(menuTheme === "white") {
            sideMenu.addClass("fixed-menu--white");
            sideMenuItem.addClass("fixed-menu__item--white");
            hamburgerTheme.removeClass("hamburger--blue");
        } else {
            sideMenu.removeClass("fixed-menu--white");
            sideMenuItem.removeClass("fixed-menu__item--white");
            hamburgerTheme.addClass("hamburger--blue");
        }

        display.css({
            transform: `translateY(${position}%)`
        });

        sections.eq(sectionEq).addClass("activeNow").siblings().removeClass("activeNow");



        setTimeout(() => {
            inScroll = false;

            sideMenu
            .find(".fixed-menu__item")
            .eq(sectionEq).addClass("fixed-menu__item--active")
            .siblings()
            .removeClass("fixed-menu__item--active");

        }, 1300)
    };

    
}

const scrollViewport = (direction) => {
    const activeSection = sections.filter(".activeNow");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length) {
        performTransition(nextSection.index())
    }

    if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index())
    }
}

$(window).on("wheel", e => {

    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");
    } 
    if (deltaY < 0) {
        scrollViewport("prev");
    }
    
});

$(window).on("keydown", e => {
    const tagName = e.target.tagName.toLowerCase();

    if (tagName !== "input" && tagName !== "textarea") {
        switch(e.keyCode) {
            case 38: 
                scrollViewport("prev");
                break;

            case 40:
                scrollViewport("next");
                break;

         }
    }
})

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());
});