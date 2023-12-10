const textElements = document.querySelectorAll('.company-name')
const footerYear = document.querySelector('.footer-year')
const navDesktop = document.querySelector('.nav__desktop')

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