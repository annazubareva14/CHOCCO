const tabs = document.querySelectorAll(".snacks__item");

tabs.forEach((item) => {
  item.addEventListener("click", function (event) {
    //   li
    let target = event.currentTarget;
    // description
    let description = target.querySelector(".snacks__description");


    if (description.classList.contains("snacks__description--active")) {
      description.classList.remove("snacks__description--active");
    } else {
      description.classList.add("snacks__description--active");
    }

    tabs.forEach((li) => {
      if (li !== target) {
        let content = li.querySelector(".snacks__description");
        content.classList.remove("snacks__description--active");
      }
    });
  });
});


    
