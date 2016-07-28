class BaseController {
    constructor() {

    }

    make_params(params) {
        return params
    }

    request(url, params) {
        console.log(url)
        return $.post(url, this.make_params(params))
    }
}

export default BaseController