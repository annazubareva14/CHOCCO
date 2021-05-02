const tabs = document.querySelectorAll('.snacks__title');
let description = document.querySelectorAll('.snacks__description')

tabs.forEach(item => {
    item.addEventListener('click', function (event) {
        const target = event.target;

        document.querySelectorAll('.snacks__description').forEach(el => {
            if (el.parentElement.querySelectorAll('.snacks__title').textContent !== target.textContent) {
                el.classList.remove('snacks__description--active');
            }
        });

        const activeElement = target.parentElement.querySelector('.snacks__description');

        fillActiveElement(activeElement);
    });
})  

console.log(activeElement);

function fillActiveElement(activeElement) {

    activeElement.classList.contains('.snacks__description--active') ?
    activeElement.classList.remove('.snacks__description--active')
        : activeElement.classList.add('.snacks__description--active')

}    
