class AppPopups {
    __createPopupElement(msg, css, type) {
        /* valid types: alert, confirm
         * valid css: info, warning, danger, success 
         */
        let title = "";
        let glyphiconClass = "";
        switch (css) {
            case 'info': {
                title = "Info"
                glyphiconClass = "glyphicon-info-sign";
                break;
            }
            case 'warning': {
                title = "Warning";
                glyphiconClass = "glyphicon-question-sign";
                break;
            }
            case 'danger': {
                title = "Error";
                glyphiconClass = "glyphicon-exclamation-sign";
                break;
            }
            case 'success': {
                title = "Success";
                glyphiconClass = "glyphicon-ok";
                break;
            }
        }

        let btnClass = 'btn-' + css;
        let buttons = '<p class="pull-right" style="margin-right: -20px;">'
            + '<button type="button" class="btn ' + btnClass + '" id="confirmButton">OK</button> '
            + '<button type="button" class="btn btn-default" id="cancelButton" data-dismiss="alert">Cancel</button>'
            + '</p>';

        let alertClass = 'alert-' + css;
        let dom = '<div class="top-alert">'
            + '<div class="alert ' + alertClass + ' alert-dismissible fade in text-left" role="alert">'
            + '<h4>' + '<i class="glyphicon ' + glyphiconClass + '"></i> ' + title + '</h4>'
            + '<p>' + msg + '</p>';

        if (type == 'confirm')
            dom += buttons;

        dom += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
            + '<span aria-hidden="true">×</span>'
            + '</button>'
            + '</div>'
            + '</div>';
        return dom;
    }
    alertError(msg) {
        let dom = this.__createPopupElement(msg, 'danger', 'alert');
        let $dom = $(dom);
        $dom.hide();
        $("body").append($dom);
        $dom.fadeIn();
        setTimeout(function () {
            $dom.fadeOut(function () {
                $dom.remove();
            });
        }, 6000);
    }
    alertWarning(msg) {
        let dom = this.__createPopupElement(msg, 'warning', 'alert');
        let $dom = $(dom);
        $dom.hide();
        $("body").append($dom);
        $dom.fadeIn();
        setTimeout(function () {
            $dom.fadeOut(function () {
                $dom.remove();
            });
        }, 6000);
    }
    alertInfo(msg) {
        let dom = this.__createPopupElement(msg, 'info', 'alert');
        let $dom = $(dom);
        $dom.hide();
        $("body").append($dom);
        $dom.fadeIn();
        setTimeout(function () {
            $dom.fadeOut(function () {
                $dom.remove();
            });
        }, 6000);
    }
    alertSuccess(msg) {
        let dom = this.__createPopupElement(msg, 'success', 'alert');
        let $dom = $(dom);
        $dom.hide();
        $("body").append($dom);
        $dom.fadeIn();
        setTimeout(function () {
            $dom.fadeOut(function () {
                $dom.remove();
            });
        }, 6000);
    }

    __bindEvents($dom) {
        $dom.find("#confirmButton").on("click", (e) => {
            $(e.target).trigger("confirmed.bs.alert");
            $(e.target).parents(".alert").alert('close');
        });
        $dom.find("#cancelButton").on("click", (e) => {
            $(e.target).trigger("cancelled.bs.alert");
            $(e.target).parents(".alert").alert('close');
        });
    }
    confirmError(msg) {
        let dom = this.__createPopupElement(msg, 'danger', 'confirm');
        let $dom = $(dom);
        $dom.hide();
        $("body").append($dom);
        $dom.fadeIn();

        this.__bindEvents($dom);

        return $dom;
    }
    confirmWarning(msg) {
        let dom = this.__createPopupElement(msg, 'warning', 'confirm');
        let $dom = $(dom);
        $dom.hide();
        $("body").append($dom);
        $dom.fadeIn();

        this.__bindEvents($dom);

        return $dom;
    }
    confirmInfo(msg) {
        let dom = this.__createPopupElement(msg, 'info', 'confirm');
        let $dom = $(dom);
        $dom.hide();
        $("body").append($dom);
        $dom.fadeIn();

        this.__bindEvents($dom);

        return $dom;
    }
    confirmSuccess(msg) {
        let dom = this.__createPopupElement(msg, 'success', 'confirm');
        let $dom = $(dom);
        $dom.hide();
        $("body").append($dom);
        $dom.fadeIn();

        this.__bindEvents($dom);

        return $dom;
    }
};