const tabs = document.querySelectorAll('.snacks__title');
let description = document.querySelectorAll('.snacks__description');


tabs.forEach(item => {
    item.addEventListener('click', function (event) {
        const target = event.currentTarget;


        description.forEach(el => {
            if (el.parentElement.querySelectorAll('.snacks__title').textContent !== target.textContent) {
                el.classList.remove('snacks__description--active');
            }
        });

        //const activeElement = target.parentElement.querySelector('.snacks__description');

        fillActiveElement();
    });
    
})  

function fillActiveElement() {

    description.forEach((item) => {
    if (item.classList.contains('snacks__description--active')) {
        item.classList.remove('snacks__description--active');
    } else {item.classList.add('snacks__description--active');}
    }
    )};

    
