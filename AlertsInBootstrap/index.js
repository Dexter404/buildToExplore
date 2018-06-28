let myAlert = new AppPopups();
window.error = function (msg) {
    myAlert.alertError(msg);
}
window.warning = function (msg) {
    myAlert.alertWarning(msg);
}
window.info = function (msg) {
    myAlert.alertInfo(msg);
}
window.success = function (msg) {
    myAlert.alertSuccess(msg);
}