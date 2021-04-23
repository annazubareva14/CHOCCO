const compLink = document.querySelector('.composition__link');
const modal = document.querySelector('.offer__modal-wrapper');

compLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block";

        compLink.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = "none";
    });
});
