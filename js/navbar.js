
document.addEventListener('DOMContentLoaded', () => {
  const defaultLink = document.querySelector('.nav-link[href="#slide1"]')
  if (defaultLink) {
    defaultLink.classList.add('active')
  }
  const container = document.getElementById('container')
  const menuToggle = document.getElementById('menuToggle')
  const mobileNav = document.getElementById('mobileNav')
  const links = document.querySelectorAll('.nav-link')
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden')
      mobileNav.classList.remove('hide')
    })
  }
  
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const target = document.querySelector(link.getAttribute('href'))
      if (target) target.scrollIntoView({ behavior: 'smooth' })

      links.forEach(l => l.classList.remove('active'))
      link.classList.add('active')

      if (container.innerWidth < 768) {
        mobileNav.classList.add('hidden')
      }
    })
  })

  container.addEventListener('scroll', () => {
  const scrollY = container.scrollTop + 150

  links.forEach(l => l.classList.remove('active'))

  links.forEach(link => {
    const sec = document.querySelector(link.getAttribute('href'))
    if (sec && sec.offsetTop !== undefined && sec.offsetHeight !== undefined) {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        link.classList.add('active')
      }
    }
  })
})

})