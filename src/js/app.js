'use strict';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
        console.log('Service worker registered successfully');
    });
}

let btnSave = document.querySelector('#btnSave');

let btnShow = document.querySelector('#btnShow');

const cases = [
    { province: 'Niassa', district: 'Lichinga', fullname: 'Walter', gender: 'M', type: '0' },
    { province: 'Niassa', district: 'Cuamba', fullname: 'Mauro', gender: 'M', type: '2' },
    { province: 'Maputo Cidade', district: 'Kamavota', fullname: 'Tucha', gender: 'F', type: '1' },
    { province: 'Gaza', district: 'Chokwe', fullname: 'Lisley', gender: 'F', type: '3' }
];



btnSave.addEventListener('click', () => {

    if ('indexedDB' in window) {
        writeData('cases', getRandomCase());
    }

});

btnShow.addEventListener('click', () => {

    readAllData('cases')
        .then(function (data) {
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                alert(data[i].fullname);
            }
        });


});


function getRandomCase() {
    let randomNumber = Math.floor(Math.random() * cases.length);
    return cases[randomNumber];
}


