'use strict';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(() => {
        console.log('Service worker registered successfully');
    });
}

let btnOpenFile = document.querySelector('#btnOpenFile');
let btnSaveFile = document.querySelector('#btnSaveFile');

let fileHandle;

btnOpenFile.addEventListener('click', async () => {

    [fileHandle] = await window.showOpenFilePicker();

    console.log(fileHandle);
});


btnSaveFile.addEventListener('click', async () => {

    const options = {
        types: [
            {
                description: 'Text Files',
                accept: {
                    'text/plain': ['.txt'],
                },
            },
        ],
    };
    const handle = await window.showSaveFilePicker(options);
    return handle;
})





