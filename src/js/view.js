
getAllCases();

function getAllCases() {
    readAllData('cases')
        .then(data => {
            if (data.length > 0) {
                let caseContainer = document.querySelector('.case');

                caseContainer.textContent = '';

                for (let i = 0; i < data.length; i++) {

                    let caseItem = document.createElement('div');
                    caseItem.classList.add('case__item');

                    let caseTextBox = document.createElement('div');
                    caseTextBox.classList.add('case__text-box');

                    let caseActiobox = document.createElement('div');
                    caseActiobox.classList.add('case__action-box');


                    let caseId = document.createElement('p');
                    caseId.classList.add('case__id');
                    caseId.textContent = 'Queixa #' + data[i].id;

                    let caseFullname = document.createElement('p');
                    caseFullname.classList.add('case__fullname');
                    caseFullname.textContent = 'Nome: ' + data[i].fullname;

                    let caseType = document.createElement('p');
                    caseType.classList.add('case__type');
                    caseType.textContent = 'Tipo: ' + data[i].case_type;

                    let caseTimestamp = document.createElement('p');
                    caseTimestamp.classList.add('case_timestamp');
                    caseTimestamp.textContent = 'Data e hora: 2021-06-13 15:33:20';


                    caseTextBox.append(caseId);
                    caseTextBox.append(caseFullname);
                    caseTextBox.append(caseType);
                    caseTextBox.append(caseTimestamp);

                    let actionSee = document.createElement('button');
                    actionSee.classList.add('action__btn');
                    actionSee.classList.add('action__btn--see');
                    actionSee.setAttribute('id', data[i].id);

                    actionSee.textContent = 'Y';

                    let actionRemove = document.createElement('button');
                    actionRemove.classList.add('action__btn');
                    actionRemove.classList.add('action__btn--remove');
                    actionRemove.setAttribute('id', data[i].id);
                    actionRemove.textContent = 'X';

                    caseActiobox.append(actionSee);
                    caseActiobox.append(actionRemove);

                    caseItem.append(caseTextBox);

                    caseItem.append(caseActiobox);

                    caseContainer.append(caseItem);


                }

            } else {
                showToastr('Nenhum dado!');
            }
        }).catch(err => {
            console.log(err, 'Error reading data from database');
        })
}

document.addEventListener('click', e => {

    if (e.target.classList.contains('action__btn--remove')) {

        let param = "?id=" + 2;

        window.location.href = "view-single.html" + param;


    } else if (e.target.classList.contains('action__btn--see')) {


    }
});
