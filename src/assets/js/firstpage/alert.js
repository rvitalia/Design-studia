//====================================alert===========================

export function alertButton() {
    const alert = document.querySelector('.alert');
    const arrayalertButton = document.querySelectorAll("#portfolio");
    const alertContent = document.querySelector('.alert__content');
    const header = document.querySelector('.header');
    const alertMessage = document.querySelector('#alert-message');
    //  console.log(alertMessage);


    function openAlert (text = 'На сайте ведутся технические работы'){
        alert.classList.add("_open-alert");

        setTimeout(function () {
            alert.style.opacity = "1";
            alertMessage.innerText = text;
        }, 400)

        if(header.classList.contains('activebg')){
            header.classList.remove('activebg');
        }
    }

    arrayalertButton.forEach(alertButton => {
        if (alertButton) {
            alertButton.addEventListener("click", function (event) {
                event.preventDefault();
                openAlert ();
            });
        };

    });

    // if(document.querySelector('#filebutton')){
    //     const fileButton = document.querySelector('#filebutton');
    //     fileButton.addEventListener('click', ()=>{
    //         let error = 'Данная функция сейчас временно недоступна';
    //         openAlert(error);
    //     });
    // }
    


    // const alertCancel = document.querySelector('.alert__cancel');

    // if (alertCancel) {
    //     // console.log(alertCancel)
    //     alertCancel.addEventListener("click", function () {
    //         alert.style.opacity = "0";

    //         setTimeout(function () {
    //             alert.classList.remove("_open-alert");

    //         }, 400)
    //     });
    // }

    // alertContent.addEventListener('click', (event) => {
    //     event.stopPropagation();
    // })
    // alert.addEventListener('click', () => {
    //     alert.style.opacity = "0";
    //     setTimeout (function() {
    //         alert.classList.remove("_open-alert");

    //     },400)    })
}