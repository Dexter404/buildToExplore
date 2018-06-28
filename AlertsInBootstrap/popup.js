class AppPopups {
    __createAlertElement(msg, type) {
        /* valid types: info, warning, error, success */
        let alertClass = 'alert-' + type;
        if (type == 'error')
            alertClass = 'alert-danger';

        let glyphiconClass = "";
        switch (type) {
            case 'info':
                glyphiconClass = "glyphicon-info-sign";
                break;
            case 'warning':
                glyphiconClass = "glyphicon-question-sign";
                break;
            case 'error':
                glyphiconClass = "glyphicon-exclamation-sign";
                break;
            case 'success':
                glyphiconClass = "glyphicon-ok";
                break;
        }

        let dom = '<div class="top-alert">' +
            '<div class="alert ' + alertClass + ' alert-dismissible fade in " role="alert">' +
            '<i class="glyphicon ' + glyphiconClass + '"></i> ' +
            msg +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">×</span>' +
            '</button>' +
            '</div>' +
            '</div>';
        return dom;
    }
    alertError(msg) {
        let dom = this.__createAlertElement(msg, 'error');
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
        let dom = this.__createAlertElement(msg, 'warning');
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
        let dom = this.__createAlertElement(msg, 'info');
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
        let dom = this.__createAlertElement(msg, 'success');
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
};