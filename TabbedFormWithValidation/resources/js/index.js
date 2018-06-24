$(document).ready(function () {
    initEvents();
    initValidator();
});

function initEvents() {
    /* modal on-show and on-hide event handlers */
    $('#accountFormModal').on('show.bs.modal', (e) => {
        //make first tab active on modal show
        $('#formTabs a:first').tab('show');
    });
    $('#accountFormModal').on('hidden.bs.modal', (e) => {
        resetForm();
        resetValidator();
    });

    //show/hide dynamic form controls
    $("#enableAdvanceOptions").on("click", (e) => {
        updateForm(e);
        updateValidator();
    });

    $("#country").on("change", (e) => {
        populateStates(e.target);
    });
}

function updateForm(event) {
    //display on/off basic or advance form fields
    if (event.target.checked) {
        $("[data-input-basic").parents('.form-group').addClass('hide');
        $("[data-input-advance").parents('.form-group').removeClass('hide');
    } else {
        $("[data-input-basic").parents('.form-group').removeClass('hide');
        $("[data-input-advance").parents('.form-group').addClass('hide');
    }
    //make only non hidden fields required
    $("[data-required]").attr('required', true);
    $(".hide [data-required]").attr('required', false);
}

function resetForm() {
    //return back to basic form fields
    if (!$("[data-input-advance").parents('.form-group').hasClass('hide')) {
        $("#enableAdvanceOptions").trigger("click");
    }
    //reset form
    $("#accountForm").get(0).reset();
}

function populateStates(element) {
    let states = [];
    if (element.value == "FR")
        states = ["Paris", "Nantes", "Strasbourg"];
    else if (element.value == "GE")
        states = ["Berlin", "Frankfurt", "Hamburg"];
    else if (element.value == "IT")
        states = ["Rome", "Venice", "Lucca"];
    else if (element.value == "JP")
        states = ["Hiroshima", "Tokyo", "Osaka"];
    else if (element.value == "RU")
        states = ["Moscow", "Saint Peterburg", "Saratov"];
    else if (element.value == "US")
        states = ["New York", "Chicago", "Seattle"];
    else if (element.value == "UK")
        states = ["Manchester", "Oxford", "Cambridge"];
    else
        states = ["other"];

    let options = "<option value=''>Select a state</option>";
    for (let state of states)
        options += "<option>" + state + "</options>";
    $("#state").html(options);
}