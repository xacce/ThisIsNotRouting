import BaseView from './BaseView'
require('fancybox')($);

class ModalView extends BaseView {
    render(promise) {
        promise.success(function (response) {
            var modal_body = response['data']['html_resp']
            new Modal(modal_body).show()
        }.bind(this)).fail(function (response) {
            console.log('Query failed')
        })
    }


}

class Modal {
    constructor(body) {
        this.body = $(body)
        this.body.find('.btn_close_popup').click(this.close)

    }

    show() {
        $.fancybox.open({
            content: this.body,
            closeClick: false,
            closeBtn: false,
            modal: true,
            closeSpeed: 150,
            openEffect: 'none'
            //beforeShow: function () {
            //
            //    beforeShow();
            //    // $.fancybox.update();
            //
            //}
        });
    }

    close() {
        console.log('testttttt')
        $.fancybox.close();
    }
}

export default ModalView