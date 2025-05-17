
window.addEventListener('DOMContentLoaded', () => {
  const slide = document.getElementById('slide1')
 
  const sl1Text = slide.querySelector('.sl1_text')
  const sl1Svg = slide.querySelector('.sl1_svg')
  const textDesc = document.querySelector('.sl1_text_desc')
  const container = document.getElementById("textContainer")


 
  // ---  từ ---
  function wrapWords(el, delayStart = 0) {
    const text = el.textContent
    const words = text.split(/(\s+)/)
    el.textContent = ''
    let wordIndex = 0

    words.forEach((word) => {
      if (word.trim() === '') {
        el.appendChild(document.createTextNode(word))
      } else {
        const span = document.createElement('span')
        span.textContent = word
        span.classList.add('word')
        span.style.animationDelay = `${delayStart + wordIndex * 0.1}s`

        if (word === 'Ngọc') {
          span.classList.add('text-[#521cd0]', 'font-semibold')
        }
        el.appendChild(span)
        wordIndex++
      }
    })

    return wordIndex
  }

  // ---  slide vào ---
  setTimeout(() => {
    slide.classList.remove('opacity-0', 'translate-y-[150vh]')
    slide.classList.add('opacity-100', 'translate-y-0')
  }, 500)

  // ---  chữ slide ---
  setTimeout(() => {
    sl1Text.classList.add('animate')
    sl1Svg.classList.add('animate')

    const paragraphs = sl1Text.querySelectorAll('p')
    let currentDelay = 0.2

    paragraphs.forEach((p) => {
      const wordsCount = wrapWords(p, currentDelay)
      currentDelay += wordsCount * 0.1 + 0.3
    })

    if(textDesc) {
      setTimeout(() => {
        textDesc.classList.add('active')
      }, 500) // delay để textDesc hiện sau animation chữ
    }
  }, 1000)

  // --- Xáo chữ ---
  const phrases = [
    "Websites",
    "Webapps",
    "Mobile",
  ]
  const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
  let phraseIndex = 0

  function shuffleText(targetText, callback) {
    container.innerHTML = ""

    const maxShuffles = 10
    const shuffleInterval = 80

    const spans = targetText.split("").map((char) => {
      const span = document.createElement("span")
      span.className = "letter"
      span.textContent = char === " " ? "\u00A0" : randomChars[Math.floor(Math.random() * randomChars.length)]
      span.style.animationDelay = `${(Math.random() * 2).toFixed(2)}s`
      container.appendChild(span)
      return { span, targetChar: char, isSpace: char === " ", shuffleCount: 0 }
    })

    spans.forEach((item) => {
      if (item.isSpace) return

      const startTime = Math.random() * 1000 + 500

      setTimeout(() => {
        const interval = setInterval(() => {
          if (item.shuffleCount < maxShuffles) {
            item.span.textContent = randomChars[Math.floor(Math.random() * randomChars.length)]
            item.shuffleCount++
          } else {
            item.span.textContent = item.targetChar
            clearInterval(interval)
          }
        }, shuffleInterval)
      }, startTime)
    })

    const checkComplete = setInterval(() => {
      if (spans.every(item => item.isSpace || item.shuffleCount >= maxShuffles)) {
        clearInterval(checkComplete)
        callback?.()
      }
    }, shuffleInterval)
  }

  function loopPhrases() {
    shuffleText(phrases[phraseIndex], () => {
      setTimeout(() => {
        phraseIndex = (phraseIndex + 1) % phrases.length
        loopPhrases()
      }, 2500)
    })
  }

  loopPhrases()
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return

    const el = entry.target

    // Slide 2: xử lý card
    if (el.classList.contains("card")) {
      const wipe = el.querySelector(".card-wipe")
      const span = el.querySelector(".textCoverCard")
      el.classList.remove("opacity-0")
      wipe?.classList.add("animate-wipe")
      span?.classList.add("animate-wipe")
    }

    // Slide 3: xử lý .start-cover và span trong #slide3
    if (el.id === "slide3") {
      const wipe = el.querySelector(".start-cover")
      const span = el.querySelector(".textCoverCard")
      const spanO = el.querySelector(".textCover")

      wipe?.classList.add("animate-wipe")
      span?.classList.add("animate-wipe")
      spanO?.classList.add("animate-wipe")
      
    }

    observer.unobserve(el)
  })
}, {
  threshold: 0.3,
})

// Gắn observer cho tất cả card trong slide 2
document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card)
})

// Gắn observer cho slide 3
const slide3 = document.getElementById("slide3")
if (slide3) observer.observe(slide3)

document.querySelectorAll(".card").forEach((card) => {
  const cardInner = card.querySelector("#card-inner")
  const dText = card.querySelector(".detail-text")

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -(y - centerY) / 15
    const rotateY = (x - centerX) / 15

    if (cardInner) cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    if (dText) dText.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  })

  card.addEventListener("mouseleave", () => {
    if (cardInner) cardInner.style.transform = `rotateX(0deg) rotateY(0deg)`
    if (dText) dText.style.transform = `rotateX(0deg) rotateY(0deg)`
  })
})
