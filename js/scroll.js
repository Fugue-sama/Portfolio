document.addEventListener('DOMContentLoaded', () => {
  const pageContainer = document.getElementById('container')
  const kyouBtn = document.getElementById('goToSlide1')
  const projectsBtn = document.querySelector('#mouseSlide2')
  const aboutBtn = document.querySelector('#mouseSlide3')


  const slide1 = document.getElementById('slide1')
  const slide2 = document.getElementById('slide2')

  let lastScroll = pageContainer.scrollTop

  kyouBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (slide1) slide1.scrollIntoView({ behavior: 'smooth' })
  })
  projectsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (slide2) slide2.scrollIntoView({ behavior: 'smooth' })
  })

  pageContainer.addEventListener('scroll', () => {
    const currentScroll = pageContainer.scrollTop
    const desktopNav = document.getElementById('desktopNav')
    const mobileNav = document.getElementById('mobileNav')
    if (currentScroll > lastScroll) { 
      kyouBtn.classList.remove('show')
      kyouBtn.classList.add('hide')

      if (desktopNav) {
        desktopNav.classList.remove('show')
        desktopNav.classList.add('hide')
      }
      if (mobileNav) {
        mobileNav.classList.remove('show')
        mobileNav.classList.add('hide')
        mobileNav.classList.toggle('hidden')
      }
    } else {
      kyouBtn.classList.remove('hide')
      kyouBtn.classList.add('show')

      if (desktopNav) {
        desktopNav.classList.remove('hide')
        desktopNav.classList.add('show')
      }
    }
    lastScroll = currentScroll
  })
})
