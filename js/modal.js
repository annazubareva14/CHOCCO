const validateFields = (form, fieldsArray) => {
    fieldsArray.forEach((field) => {
        field.removeClass("input-error");
        if(field.val().trim() === "") {
            field.addClass('input-error');
        }
    })

    const errorFields = form.find(".input-error");

    return errorFields.length === 0;
}

$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal = $("#modal");
    const content = modal.find(".modal__text");

    const isValid = validateFields(form, [name, form, comment, to]);

    if (isValid) {
        $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val(),
            },
            success: data => {
                content.text(data.message);
                
            }
        })
    }

    
})



const openBtn = document.querySelector("#orderBtn");
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeBtn');

openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.toggle('modal--active');

    const overlay = document.querySelector('#modal__overlay');
    
    overlay.addEventListener("click", (e) => {
        if (!e.target.classList.contains("modal__content")) {
            modal.classList.remove('modal--active');
        }
    });

});

closeBtn.addEventListener("click", (e) => {
    modal.classList.remove('modal--active');
})