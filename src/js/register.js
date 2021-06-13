'use strict';

let btnNext = document.querySelectorAll('.btnNext');

let btnPrevious = document.querySelectorAll('.btnPrevious');

let btnSave = document.querySelector('#btnSave');

btnNext.forEach(button => {

    button.addEventListener('click', element => {

        let currentPage = element.target.parentNode.parentNode.parentNode;

        let nextPage = element.target.getAttribute('data-page');

        currentPage.classList.add('hide');

        document.querySelector(".section[data-page='" + nextPage + "']").classList.remove('hide');

        getValues();

    });

});

btnPrevious.forEach(button => {

    button.addEventListener('click', element => {

        let currentPage = element.target.parentNode.parentNode.parentNode;

        let previousPage = element.target.getAttribute('data-page');

        currentPage.classList.add('hide');

        document.querySelector(".section[data-page='" + previousPage + "']").classList.remove('hide');
    });

});

btnSave.addEventListener('click', () => {

    writeData('cases', formData)
        .then(() => {
            window.location.href = "index.html";
            showToastr('Dados salvos');
        })
        .catch(err => {
            console.log(err, 'Error saving form data to database');
        });

    console.log('Form save successfully: ', formData);
});