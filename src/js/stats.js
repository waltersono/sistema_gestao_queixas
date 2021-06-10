'use strict';

const btnShow = document.querySelector('#btnShow');

const tableStats = document.querySelector('#tableStats');

let countMale;

let countFemale;

let countTypeZero;
let countTypeOne;
let countTypeTwo;



btnShow.addEventListener('click', () => {

    readAllData('cases')
        .then(function (data) {

            let tbody = tableStats.querySelector('tbody');

            tbody.textContent = '';
            countMale = 0;

            countFemale = 0;

            countTypeZero = 0;
            countTypeOne = 0;
            countTypeTwo = 0;

            if (data.length > 0) {


                for (let i = 0; i < data.length; i++) {

                    let tr = document.createElement('tr');

                    let tdProvince = document.createElement('td');
                    let tdDistrict = document.createElement('td');
                    let tdFullname = document.createElement('td');
                    let tdGender = document.createElement('td');
                    let tdType = document.createElement('td');

                    tdProvince.textContent = data[i].province;
                    tdDistrict.textContent = data[i].district;
                    tdFullname.textContent = data[i].fullname;
                    tdGender.textContent = countGender(data[i].gender);
                    tdType.textContent = countType(data[i].type);

                    tr.append(tdProvince);
                    tr.append(tdDistrict);
                    tr.append(tdFullname);
                    tr.append(tdGender);
                    tr.append(tdType);

                    tbody.append(tr);



                }



            } else {

                let tr = document.createElement('tr');
                let td = document.createElement('td');

                td.textContent = 'Nenhum dado encontrado';
                td.setAttribute('colspan', 100);
                tr.append(td);

                tbody.append(tr);

            }

            showSummary();

        });

});

function countType(type) {

    if (type == '0') {
        countTypeZero++;
    } else if (type == '1') {
        countTypeOne++;
    } else if (type == '2') {
        countTypeTwo++;
    }

    return type;
}

function countGender(gender) {

    if (gender == 'M') {
        countMale++;
    } else if (gender == 'F') {
        countFemale++;
    }

    return gender;
}

function showSummary() {
    console.log('M:' + countMale);
    console.log('F:' + countFemale);
    console.log('0:' + countTypeZero);
    console.log('1:' + countTypeOne);
    console.log('2:' + countTypeTwo);
}
