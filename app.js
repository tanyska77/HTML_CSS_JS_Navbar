const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()

const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

// ******nav-header**********
navToggle.addEventListener('click', function () {
  const linksHeight = links.getBoundingClientRect().height
  const containerHeight = linksContainer.getBoundingClientRect().height
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})

//  ********** navbar ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }
  if (scrollHeight > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
  }
})

// ********** smooth scroll ************
const scroolLinks = document.querySelectorAll('.scroll-link')

scroolLinks.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    const Rid = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(Rid)

    // big screen
    const navHeight = navbar.getBoundingClientRect().height
    let position = element.offsetTop - navHeight

    const fixedNav = navbar.classList.contains('fixed-nav')
    if (!fixedNav) {
      position = position - navHeight
    }

    // small screen
    const containerHeight = linksContainer.getBoundingClientRect().height

    if (navHeight > 82) {
      position = position + containerHeight
    }
    linksContainer.style.height = 0


    window.scrollTo({
      left: 0,
      top: position,
    })
  })
})
