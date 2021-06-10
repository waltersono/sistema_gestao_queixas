'use strict';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
        console.log('Service worker registered successfully');
    });
}

const btnSave = document.querySelector('#btnSave');
const btnRemove = document.querySelector('#btnRemove');



const cases = [
    { province: 'Niassa', district: 'Lichinga', fullname: 'Walter', gender: 'M', type: '0' },
    { province: 'Niassa', district: 'Cuamba', fullname: 'Mauro', gender: 'M', type: '2' },
    { province: 'Maputo Cidade', district: 'Kamavota', fullname: 'Tucha', gender: 'F', type: '1' },
    { province: 'Gaza', district: 'Chokwe', fullname: 'Lisley', gender: 'F', type: '3' }
];



btnSave.addEventListener('click', () => {

    if ('indexedDB' in window) {
        writeData('cases', getRandomCase());
        alert('Data saved');
    }

});

btnRemove.addEventListener('click', () => {
    if ('indexedDB' in window) {
        removeAllData('cases');
        alert('All data removed');
    }
})


function getRandomCase() {
    let randomNumber = Math.floor(Math.random() * cases.length);
    return cases[randomNumber];
}




