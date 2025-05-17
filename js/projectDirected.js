document.querySelectorAll('.card.open-detail').forEach(card => {
  card.addEventListener('click', () => {
    const cover = document.getElementById('page-cover')
    const wipe = card.querySelector(".card-wipe")
    const span = card.querySelector(".textCoverCard")

    wipe?.classList.add("animate-wipeOut")
    wipe?.classList.remove('animate-wipe')
    
    span?.classList.remove('animate-wipe')
    span?.classList.add("animate-wipeOut")
    setTimeout(() => {
      cover.classList.add('pointer-events-auto')
      cover.classList.add('animate-coverSlide')

      cover.addEventListener('animationend', () => {
        const link = card.dataset.link || 'Projects/web1.html'
        window.location.href = link
      }, { once: true })
    }, 500)
  })
})
