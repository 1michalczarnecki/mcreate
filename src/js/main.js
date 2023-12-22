const textElements = document.querySelectorAll('.company-name')
const footerYear = document.querySelector('.footer-year')
const navDesktop = document.querySelector('.nav__desktop')
const arrowLeft = document.querySelector('.portfolio__arrow-left')
const arrowRight = document.querySelector('.portfolio__arrow-right')
let activeSlideNumber = 1
const navItems = document.querySelectorAll('.nav__desktop-item')
const section = document.querySelectorAll('.section')
const sectionsToAnimate = document.querySelectorAll('.aboutme, .offer')

//scroll

window.onscroll = () => {
	section.forEach(sec => {
		let top = window.scrollY
		let offset = sec.offsetTop - 86
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navItems.forEach(links => {
				links.classList.remove('nav__desktop-item--active')
				const link = document.querySelector('.nav__desktop-items a[href*=' + id + ']')
				if (link) {
					link.classList.add('nav__desktop-item--active')
				}
			})
		}
	})
}

//slider

const hideActiveSlide = () => {
	const activeElement = document.querySelector('.active')
	activeElement.classList.remove('active')
}

const showSlide = slideNumber => {
	hideActiveSlide()
	document.querySelector('#slide' + slideNumber).classList.add('active')
}

const showNextSlide = () => {
	if (activeSlideNumber === 3) {
		activeSlideNumber = 1
	} else {
		activeSlideNumber = activeSlideNumber + 1
	}
	showSlide(activeSlideNumber)
}

const showNPreviousSlide = () => {
	if (activeSlideNumber === 1) {
		activeSlideNumber = 3
	} else {
		activeSlideNumber = activeSlideNumber - 1
	}
	showSlide(activeSlideNumber)
}

for (let i = 1; i <= 3; i++) {
	let showSlideI = () => {
		activeSlideNumber = i
		showSlide(i)
	}
}

//animationTextLogo

textElements.forEach(textElement => {
	const inputValue = textElement.innerHTML

	let timeout
	let index = 0
	let speed = 30

	const writingAnimation = () => {
		textElement.innerHTML = inputValue.slice(0, index)
		index++

		if (index <= inputValue.length) {
			timeout = setTimeout(writingAnimation, speed)
		}
	}

	writingAnimation()
})

//addShadowBg

function addShadowBg() {
	if (window.scrollY >= 100) {
		navDesktop.classList.add('shadow-bg')
	} else {
		navDesktop.classList.remove('shadow-bg')
	}
}

//aboutme&OfferShow
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 
  };
  
  const animateBoxes = (section) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const boxes = entry.target.querySelectorAll('.aboutme__box, .offer__box');
          boxes.forEach((box, index) => {
            setTimeout(() => {
              box.classList.add('box-show');
            }, index * 600);
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    observer.observe(section);
  };
  
  sectionsToAnimate.forEach(section => {
    animateBoxes(section);
  });

//footerYear

const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}


currentYear()
window.addEventListener('scroll', addShadowBg)
arrowRight.addEventListener('click', showNextSlide)
arrowLeft.addEventListener('click', showNPreviousSlide)
