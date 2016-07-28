import HtmlController from './HtmlController'

class FormController extends HtmlController {

    make_params(elem) {
        var params = super.make_params(elem)
        params['f'] = $(elem.data('form')).serialize()
        return params
    }

}

export default FormController