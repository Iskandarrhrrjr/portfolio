const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

window.addEventListener("scroll", () => {
  let current = ""

  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active")
    }
  })
})

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").slice(1)
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const formData = new FormData(contactForm)

    // Show success message
    alert("Xabaringiz yuborildi! Tez orada javob beriladi.")

    // Reset form
    contactForm.reset()
  })
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "slideInLeft 0.6s ease forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

document.querySelectorAll(".skill-card").forEach((card) => {
  card.style.opacity = "0"
  observer.observe(card)
})
