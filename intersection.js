const appearOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-150px 0px 0px 0px",
}

const faders = document.querySelectorAll(".fade-in")
const appearLefts = document.querySelectorAll(".appear-left")
const appearRights = document.querySelectorAll(".appear-right")
const appearUps = document.querySelectorAll(".appear-up")

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    }
    entry.target.classList.add("appear")
    appearOnScroll.unobserve(entry.target)
  })
},
appearOptions)

faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})

appearLefts.forEach((appearLeft) => {
  appearOnScroll.observe(appearLeft)
})

appearRights.forEach((appearRight) => {
  appearOnScroll.observe(appearRight)
})

appearUps.forEach((appearUp) => {
  appearOnScroll.observe(appearUp)
})
