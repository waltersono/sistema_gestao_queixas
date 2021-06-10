'use strict';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
        console.log('Service worker registered successfully');
    });
}

let btnOpenFile = document.querySelector('#btnOpenFile');

let fileHandle;

btnOpenFile.addEventListener('click', async () => {

    [fileHandle] = await window.showOpenFilePicker();

    console.log(fileHandle);
});




