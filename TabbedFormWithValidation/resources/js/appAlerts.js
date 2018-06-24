function showInfo(message) {
    let alert = $('.alert-info');
    alert.find('span').html(message);
    let alertWidth = alert.width();
    let centerPos = window.innerWidth / 2 - alertWidth / 2;
    alert.css('left', centerPos);
    alert.show();
}

function showSuccess(message) {
    let alert = $('.alert-success');
    alert.find('span').html(message);
    let alertWidth = alert.width();
    let centerPos = window.innerWidth / 2 - alertWidth / 2;
    alert.css('left', centerPos);
    alert.show();
}

function showWarning(message) {
    let alert = $('.alert-warning');
    alert.find('span').html(message);
    let alertWidth = alert.width();
    let centerPos = window.innerWidth / 2 - alertWidth / 2;
    alert.css('left', centerPos);
    alert.show();
}

function showError(message) {
    let alert = $('.alert-danger');
    alert.find('span').html(message);
    let alertWidth = alert.width();
    let centerPos = window.innerWidth / 2 - alertWidth / 2;
    alert.css('left', centerPos);
    alert.show();
}

function showErrorList(arr) {
    let list = "<ul>";
    for (let msg of arr)
        list += "<li>" + msg + "</li>";
    list += "</ul>";
    showError(list);
}

function dismiss(element) {
    $(element).parent('.alert').hide();
}

$(document).ready(function () {
    $('.alert').hide();
});