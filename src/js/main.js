const textElements = document.querySelectorAll('.company-name')
const footerYear = document.querySelector('.footer-year')
const navDesktop = document.querySelector('.nav__desktop')
const arrowLeft = document.querySelector('.portfolio__arrow-left')
const arrowRight = document.querySelector('.portfolio__arrow-right')

let activeSlideNumber = 1

const hideActiveSlide = () => {
    const activeElement = document.querySelector('.active')
    activeElement.classList.remove('active')
}

const showSlide = (slideNumber) => {
    hideActiveSlide()
    document.querySelector('#slide'+slideNumber).classList.add('active')
}

const showNextSlide = () => {
    if(activeSlideNumber === 3){
        activeSlideNumber = 1
    }else{
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlide(activeSlideNumber)
}

const showNPreviousSlide = () => {
    if(activeSlideNumber === 1){
        activeSlideNumber = 3
    }else{
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlide(activeSlideNumber)
}

for (let i = 1; i <= 3; i++){
    let showSlideI = () => {
        activeSlideNumber = i
        showSlide(i)
    }
    
}




//animationText
textElements.forEach(textElement => {
    const inputValue = textElement.innerHTML;

    let timeout;
    let index = 0;
    let speed = 30;

    const writingAnimation = () => {
        textElement.innerHTML = inputValue.slice(0, index);
        index++;

        if (index <= inputValue.length) {
            timeout = setTimeout(writingAnimation, speed);
        }
    };

    writingAnimation();
});

//addShadowBg
function addShadowBg(){
    if(window.scrollY >= 100){
        navDesktop.classList.add('shadow-bg')
    }else{
        navDesktop.classList.remove('shadow-bg')
    }
}

//footerYear

const currentYear = () =>{
    const year = new Date().getFullYear()
    footerYear.innerText = year
}



currentYear()
window.addEventListener('scroll', addShadowBg)
arrowRight.addEventListener('click', showNextSlide)
arrowLeft.addEventListener('click', showNPreviousSlide)