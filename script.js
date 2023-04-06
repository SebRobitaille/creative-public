// Nav bar
const mobileNavItems = document.querySelectorAll(".mobile-nav-item")
const navLogo = document.querySelector(".nav-logo")

const navToggle = document.getElementById("nav-toggle")
const nav = document.querySelector(".primary-nav")

navToggle.addEventListener("click", () => {
  nav.classList.toggle("active")
})

mobileNavItems.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    nav.classList.toggle("active")
  })
})

navLogo.addEventListener("click", () => {
  nav.classList.toggle("active")
})

// Header transitions
const headerImage = document.querySelector(".header")
const headerText = document.querySelector(".header-text")
const decrease = document.getElementById("decrease")
const increase = document.getElementById("increase")
let headerIndex = 1

const backgroundImages = [
  `url('/hero-background.jpg')`,
  `url("/hero-2.jpeg")`,
  "url('/hero-3.jpg')",
]

const headerTexts = [
  `<h1 class="primary-header hero-primary">We can change <br>
your digital world</h1>
<h4 class="secondary-header hero-secondary">Bold enough to blow a hole in your next marketing campaign.
</h4>`,
  `<h1 class="primary-header hero-primary">You need <br>
a good partner</h1>
<h4 class="secondary-header hero-secondary">Let us help you realise your true potential
</h4>`,
  `<h1 class="primary-header hero-primary">Shoot for <br>
the hoop!</h1>
<h4 class="secondary-header hero-secondary">Aiming low is not an option for us
</h4>`,
]

function changeHeader() {
  headerImage.style.backgroundImage = backgroundImages[headerIndex]
  headerText.innerHTML = headerTexts[headerIndex]
}

changeHeader()

function headerTransition() {
  headerIndex += 1
  if (headerIndex > 2) {
    headerIndex = 0
  }
  changeHeader()
}

const headerInterval = setInterval(() => {
  headerTransition()
}, 4000)

decrease.addEventListener("click", () => {
  headerIndex -= 1
  if (headerIndex < 0) {
    headerIndex = 2
  }
  changeHeader()
  clearInterval(headerInterval)
})

increase.addEventListener("click", () => {
  headerIndex += 1
  if (headerIndex > 2) {
    headerIndex = 0
  }
  changeHeader()
  clearInterval(headerInterval)
})
