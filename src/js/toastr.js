

const toastr = document.querySelector('#toastr');

function showToastr(message) {

    toastr.textContent = message;

    toastr.classList.add('toastr--show');

    setTimeout(function () {

        toastr.classList.remove('toastr--show');

    }, 5000);
}