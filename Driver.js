import HtmlController from './HtmlController'
import FormController from './FormController'

import PageView from './PageView'
import ModalView from './ModalView'
import TargetView from './TargetView'


class HtmlDriver {


    constructor(endpoint) {
        this.endpoint = endpoint

        this.CONTROLLERS = {
            'HtmlController': new HtmlController(),
            'FormController': new FormController()
        }
        this.VIEWS = {
            'PageView': new PageView(),
            'ModalView': new ModalView(),
            'TargetView': new TargetView(),
        }

        this.DEFAULT_VIEW = 'PageView'
        this.DEFAULT_CONTROLLER = 'HtmlController'
        this.create_events()
    }

    create_events() {
        $('body').on('click', '.html_driver_link', function (e) {
            var elem = $(e.target)
            var url = this.endpoint
            var ctrl_name = elem.data('controller') || this.DEFAULT_CONTROLLER
            var ctrl = this.CONTROLLERS[ctrl_name]
            var view_name = elem.data('view') || this.DEFAULT_VIEW
            var view = this.VIEWS[view_name]

            var response = null
            var promise = ctrl.request(this.endpoint, elem)
            view.render(promise, elem)
            return false;
        }.bind(this))
    }
}

export default HtmlDriver