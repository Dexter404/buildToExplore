$(document).ready(function () {
    let errorMessagesList = [];
    $('#accountForm')
        .formValidation({
            framework: 'bootstrap',
            // Only disabled elements are excluded
            // The invisible elements belonging to inactive tabs must be validated
            excluded: [':disabled'],
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required'
                        }
                    }
                },
                company: {
                    validators: {
                        notEmpty: {
                            message: 'The company name is required'
                        }
                    }
                },
                address: {
                    validators: {
                        notEmpty: {
                            message: 'The address is required'
                        }
                    }
                },
                city: {
                    validators: {
                        notEmpty: {
                            message: 'The city is required'
                        }
                    }
                }
            }
        })
        .on('err.field.fv', function (e, data) {
            // data.fv --> The FormValidation instance

            var $field = data.element,
                $messages = $field.data('fv.messages').find('.help-block[data-fv-for="' + data.field + '"]');

            // Get a random message
            var message = $messages.filter('[data-fv-result="INVALID"]').eq(0).html();
            //msgList += "<li>" + message + "</li>";
            //showDialog("<ul>" + msgList + "</ul>");
            console.log(message)
            errorMessagesList.push(message);
            showErrorList(errorMessagesList);

            // Get the first invalid field
            var $invalidFields = data.fv.getInvalidFields().eq(0);

            // Get the tab that contains the first invalid field
            var $tabPane = $invalidFields.parents('.tab-pane'),
                invalidTabId = $tabPane.attr('id');

            // If the tab is not active
            if (!$tabPane.hasClass('active')) {
                // Then activate it
                $tabPane.parents('.tab-content')
                    .find('.tab-pane')
                    .each(function (index, tab) {
                        var tabId = $(tab).attr('id'),
                            $li = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent();

                        if (tabId === invalidTabId) {
                            // activate the tab pane
                            $(tab).addClass('active');
                            // and the associated <li> element
                            $li.addClass('active');
                        } else {
                            $(tab).removeClass('active');
                            $li.removeClass('active');
                        }
                    });

                // Focus on the field
                $invalidFields.focus();
            }
        });

    $('.alert').hide();
    $("#accountFormModal").modal('show');
});

/*TODO
 * use data-dismiss in place of own dismiss function
 * aria-hidden for hiding alerts
 * alert() in place of show() to display alert
 * sources:
 * - http://getbootstrap.com/docs/3.3/javascript/#alerts
 * - http://getbootstrap.com/docs/3.3/components/#alerts
 */

function showInfo(message) {
    var alert = $('.alert-info');
    alert.find('span').html(message);
    var alertWidth = alert.width();
    var centerPos = window.innerWidth / 2 - alertWidth / 2;
    alert.css('left', centerPos);
    alert.show();
}

function showSuccess(message) {
    var alert = $('.alert-success');
    alert.find('span').html(message);
    var alertWidth = alert.width();
    var centerPos = window.innerWidth / 2 - alertWidth / 2;
    alert.css('left', centerPos);
    alert.show();
}

function showWarning(message) {
    var alert = $('.alert-warning');
    alert.find('span').html(message);
    var alertWidth = alert.width();
    var centerPos = window.innerWidth / 2 - alertWidth / 2;
    alert.css('left', centerPos);
    alert.show();
}

function showError(message) {
    var alert = $('.alert-danger');
    alert.find('span').html(message);
    var alertWidth = alert.width();
    var centerPos = window.innerWidth / 2 - alertWidth / 2;
    alert.css('left', centerPos);
    alert.show();
}

function showErrorList(arr) {
    var list = "<ul>";
    for(var msg of arr)
        list += "<li>" + msg + "</li>";
    list += "</ul>";
    showError(list);
}

function dismiss(element) {
    $(element).parent('.alert').hide();
}
