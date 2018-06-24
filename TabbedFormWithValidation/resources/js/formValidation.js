/* for storing (field name, error message) */
let errorMessages = {};

function initValidator() {
    //customized constructor's input selector
    $.fn.validator.Constructor.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button, .hide input)'

    //activate validator
    let options = {
        html: true, //make html true in error message
        disable: false, //make submit button disable until the form is valid to false
    };
    $("#accountForm").validator(options);

    //validate form on submit button click
    $("#accountForm input[type='submit']").on("click", (e) => {
        //prevent further default events
        //this will also prevent trigerring of form submit event
        e.preventDefault();

        //validate form
        $("#accountForm").validator('validate');

        //if has any error
        if (Object.keys(errorMessages).length > 0) {
            showErrorList(Object.values(errorMessages));

            //fetch all invalid fields
            let $invalidFields = $(Object.keys(errorMessages)).map((i, value) => {
                return $(`input[name='${value}']`).get(0);
            });

            //get the tab that contains the first invalid field
            let $tabPane = $invalidFields.parents('.tab-pane'),
                invalidTabId = $tabPane.attr('id');

            //if the tab is not active
            if (!$tabPane.hasClass('active')) {
                //then activate it
                $tabPane.parents('.tab-content')
                    .find('.tab-pane')
                    .each(function (index, tab) {
                        let tabId = $(tab).attr('id'),
                            $li = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent();

                        if (tabId === invalidTabId) {
                            //activate the tab pane
                            $(tab).addClass('active');
                            //and the associated <li> element
                            $li.addClass('active');
                        } else {
                            $(tab).removeClass('active');
                            $li.removeClass('active');
                        }
                    });

                //focus on the field
                $invalidFields.focus();
            }
        } else {
            //trigger submit event on validation success
            $("#accountForm").trigger("submit");
        }
    });

    $("#accountForm").on("submit", (e) => {
        e.preventDefault();
        alert("Form submitted!");
    }).on('validate.bs.validator', (e) => {
        //console.log("Validation started for field:", e.relatedTarget.name);
    }).on('invalid.bs.validator', (e) => {
        //add invalid field find to error messages
        errorMessages[e.relatedTarget.name] = getLabel(e.relatedTarget) + ": " + e.detail;
        console.log("Invalid field:", e.relatedTarget, e.detail, getLabel(e.relatedTarget));
    }).on('valid.bs.validator', (e) => {
        //remove error message corresponding to current valid field
        delete errorMessages[e.relatedTarget.name];
        //console.log("Valid field:", e.relatedTarget, e.detail);
    }).on('validated.bs.validator', (e) => {
        //console.log("Validation done for field:", e.relatedTarget.name);
    });
}

function updateValidator() {
    $("#accountForm").validator("update");
}

function resetValidator() {
    //clear error message map
    errorMessages = {};
}

function getLabel(element) {
    return $("label[for='" + $(element).attr('id') + "']").text();
}