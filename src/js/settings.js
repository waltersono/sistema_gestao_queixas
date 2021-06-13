'use strict';

const delegation = document.querySelector('#delegation');

const fullname = document.querySelector('#fullname');

const btnSave = document.querySelector('#btnSave');


btnSave.addEventListener('click', () => {

    removeAllData('settings');

    saveSettings();

});

function saveSettings() {
    let data = {
        delegation: delegation.value,
        fullname: fullname.value
    };

    writeData('settings', data)
        .then(() => {
            console.log('Settings saved successfully');
        }).catch(err => {
            console.log(err, 'Error saving settings');
        });
}



