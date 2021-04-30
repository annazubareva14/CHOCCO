const tabs = document.querySelectorAll('.snacks__title');

tabs.forEach(item => {
    item.addEventListener('click', function (event) {
        const target = event.target;

        document.querySelectorAll('.snacks__description').forEach(el => {
            if (el.parentElement.querySelector('.snacks__title').textContent !== target.textContent) {
                el.classList.remove('snacks__description--active');
            }
        });

        const activeElement = target.parentElement.querySelector('.snacks__description');

        fillActiveElement(activeElement);
    });
})  

function fillActiveElement(el) {

    el.classList.contains('snacks__description--active') ?
        el.classList.remove('snacks__description--active')
        : el.classList.add('snacks__description--active')

}    
