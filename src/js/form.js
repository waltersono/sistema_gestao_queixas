let code = document.querySelector('#code').value;
let fullname = document.querySelector('#fullname').value;
let gender = document.querySelector('#gender').value;
let documentType = document.querySelector('#document_type').value;
let documentyNumber = document.querySelector('#document_number').value;
let caseType = document.querySelector('#case_type').value;
let details = document.querySelector('#details').value;
let formData = {};


function getValues() {
    code = document.querySelector('#code').value;
    fullname = document.querySelector('#fullname').value;
    gender = document.querySelector('#gender').value;
    documentType = document.querySelector('#document_type').value;
    documentyNumber = document.querySelector('#document_number').value;
    caseType = document.querySelector('#case_type').value;
    details = document.querySelector('#details').value;

    formData = {
        code: code,
        fullname: fullname,
        gender: gender,
        document_type: documentType,
        document_number: documentyNumber,
        case_type: caseType,
        details: details
    };
}


