import BaseView from './BaseView'

class TargetView extends BaseView {
    render(promise, source_object) {
        promise.success(function (response) {
            var trg = $(source_object.data('view-target'))
            trg.children().remove()
            trg.hide()
            trg.append(response['data']['html_resp']);
        }).fail(function (response) {
            console.log('Query failed')
        })
    }


}

export default TargetView