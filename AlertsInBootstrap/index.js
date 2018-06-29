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

function attachEventHandlers($element) {
    $element.on("confirmed.bs.alert", () => {
        $("#displayMessage").fadeIn().html("Clicked OK!");
    })
    .on("cancelled.bs.alert", () => {
        $("#displayMessage").fadeIn().html("Clicked cancel.");
    });
}
function confirmError(msg) {
    $element = myAlert.confirmError(msg);
    attachEventHandlers($element);

    setTimeout(function () {
        $("#displayMessage").fadeOut(function () {
            $("#displayMessage").html("");
        });
    }, 3000);
}
function confirmWarning(msg) {
    $element = myAlert.confirmWarning(msg);
    attachEventHandlers($element);

    setTimeout(function () {
        $("#displayMessage").fadeOut(function () {
            $("#displayMessage").html("");
        });
    }, 3000);
}
function confirmInfo(msg) {
    $element = myAlert.confirmInfo(msg);
    attachEventHandlers($element);

    setTimeout(function () {
        $("#displayMessage").fadeOut(function () {
            $("#displayMessage").html("");
        });
    }, 3000);
}
function confirmSuccess(msg) {
    $element = myAlert.confirmSuccess(msg);
    attachEventHandlers($element);

    setTimeout(function () {
        $("#displayMessage").fadeOut(function () {
            $("#displayMessage").html("");
        });
    }, 3000);
}