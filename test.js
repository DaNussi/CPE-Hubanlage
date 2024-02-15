{
    // element = document.getElementsByClassName("un-input-group__input")[1];
    // element.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'}));
    // element.dispatchEvent(new KeyboardEvent('keyup', {'key': 'a'}));


    document.getElementsByClassName("un-input-group__input")[1].select()
    document.getElementsByClassName("un-input-group__input")[1].value = "test";
    document.getElementsByClassName("un-input-group__input")[1].onchange();
    
    // document.getElementsByClassName("redesigned-button un2-utils__mt-2 redesigned-button__primary")[0].click()
    
}