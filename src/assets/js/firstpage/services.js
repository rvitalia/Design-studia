export function changeColor() {
    let buttons = document.querySelectorAll('[data-filter="servises"]');

    buttons.forEach(element => {
        element.addEventListener('mouseover', () => {
            const parentEl = element.closest('.services__inner__wrapper__item__list');
            const title = parentEl.querySelector('.services__inner__wrapper__item__list__title');
            title.classList.add('accent');

            element.addEventListener('mouseout', () => {
                title.classList.remove('accent');
            })
        })
    });
}

export function openPopupServises(){
    const buttonsReadMore = document.querySelectorAll('[data-filter="servises"]');
    const popupServices = document.querySelector('#popupservices');
    const popupBody = document.querySelector('.popup__services-body');
    const body = document.querySelector('body');

    buttonsReadMore.forEach(element => {
        element.addEventListener('click', ()=>{
            popupServices.classList.add('active__services');
            body.classList.add('_lock');

            setTimeout(function(){
                popupServices.style.transform = 'rotateX(0)';
                popupServices.style.opacity = '1';
            },300)
        })
    });
    console.log(popupServices)
}

export function closePopupServises(){
    const popupServices = document.querySelector('#popupservices');
    const popupBody = document.querySelector('.popup__services-body');
    const body = document.querySelector('body');

    popupBody.addEventListener('click',(event) => {
        event.stopPropagation();
    });

    popupServices.addEventListener('click',() => {
        popupServices.style.transform = 'rotateX(90deg)';
                popupServices.style.opacity = '0';

                setTimeout(function(){
                    popupServices.classList.remove('active__services');
                    body.classList.remove('_lock');
                },300)   
    })
}