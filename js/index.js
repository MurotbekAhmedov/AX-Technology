let close = document.querySelector('.close');
let main_modal = document.querySelector('.main__modal');
let buttons = document.querySelectorAll('.button');
let close_form = document.querySelector('.close_form');
let form_modal = document.querySelector('.form__modal');
let button_form = document.querySelector('.button-form')
close.addEventListener('click', (event)=>{
    if (event.target) {
        main_modal.classList.remove('show');
        let psv_containers = document.querySelectorAll('.psv-container')
        psv_containers.forEach(box=>box.remove())
    }
})

 buttons.forEach((item,i)=>{
    item.addEventListener('click', (event)=>{
        if (event.target) {

            main_modal.classList.add('show')
            const viewer = new PhotoSphereViewer.Viewer({
                container: document.querySelector('#viewer'),
                panorama: `assets/images/image${i+1}.png`,
            });
        }
    })
 })

 close_form.addEventListener('click', (event)=>{
    if (event.target) {
        form_modal.classList.remove('show');
    }
})
button_form.addEventListener('click', (event)=>{
    if (event.target) {
        form_modal.classList.add('show');
    }
})