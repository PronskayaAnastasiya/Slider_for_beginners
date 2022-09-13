window.addEventListener('load', () => {
    //buttons
    const left = document.querySelector('.btn-left');
    const right = document.querySelector('.btn-right');
    console.log(right);
    //carusel
    const slider = document.querySelector('.carusel__slide');
    const images = document.querySelectorAll('.carusel__slide img');

    //couner
    let counter = 0;
    const stepSize = images[0].clientWidth;

    //slider.getElementsByClassName.transform = 'translateX(' + `${-stepSize * counter}px)`;

    right.addEventListener('click', () => {
        counter++;
        slider.getElementsByClassName.transform = 'translateX(' + `${-stepSize * counter}px)`;
    })
});