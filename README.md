    #Ctrl+c Ctrl+v -> src/js/ ну или как сабмодуль
    # build.js
    new HtmlDriver('endpoint url')
    
## Загрузка контента с сервера

    <a href="#" class="html_driver_link" data-cmd="offer.get_my">Full page</a>
    
    
## Модальное окно

    <a href="#!" class="html_driver_link" 
    data-cmd="offer.info" 
    data-view="ModalView" 
    data-keys="pk,type" 
    data-values="1,3">Подробнее</a>
> pk,type | 1,3 -> {pk:1,type:3}

## Целевая замена контента (например, нажатие на кнопку "Купить")

    <a href="#!" class="b_btn html_driver_link" id="trg"
    data-view-target='#trg' 
    data-cmd="offer.info" 
    data-keys="pk,type" 
    data-values="2,1" 
    data-view="TargetView">КУПИТЬ</a>


## Form
    
    <a href="#" class="html_driver_link" 
    data-controller="FormController" 
    data-form="#form" 
    data-view="TargetView" 
    data-view-target="#form"
    data-cmd="offer.get_my">Send</a>
       

