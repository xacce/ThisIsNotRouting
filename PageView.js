import BaseView from './BaseView'
import ShopSlider from '../shop_slider'; //... https://api.jquery.com/on/
class PageView extends BaseView {
    constructor() {
        super()
        this.container = $('.l_main .m_width')
    }

    render(promise) {
        promise.success(function (response) {
            this.clear_container()
            this.container.prepend(response['data']['html_resp']);
            this.reset_events()
        }.bind(this)).fail(function (response) {
            console.log('Query failed')
        })
    }

    reset_events() {
        // Т.к по каким-то причинам у нас SpaНеSpa, то все события повешаны на click. Переписывать вашу верстку я сейчас не собираюсь
        // Проблема исчезнет сама собой если подобные события повесить на on.
        // Если on по каким-то причинам вам не подходит, то можно организовать PageSliderView контроллер.
        new ShopSlider()
        $('.b_shop_card').click(function () {

            $(this).addClass('b_shop_card_show');

        });
    }

    clear_container() {
        this.container.children().not('.clear').remove();
    }

}

export default PageView