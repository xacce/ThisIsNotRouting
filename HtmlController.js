import BaseController from './BaseController'

class HtmlController extends BaseController {

    make_params(elem) {
        var cmd = elem.data('cmd')
        var keys = elem.data('keys')
        var values = elem.data('values')
        if (keys) {
            keys = keys.split(',')
            values = values.split(',')
        }
        else {
            keys = values = []
        }
        var params = {'c': cmd, 'd': {}}
        for (var i in keys) {
            params['d'][keys[i]] = values[i]
        }
        console.log(params)
        params['d'] = JSON.stringify(params['d'])
        return params
    }

}

export default HtmlController