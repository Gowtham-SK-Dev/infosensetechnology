// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Counter animation for hero stats
function animateCounters() {
  const counters = {
    projects: { element: document.getElementById("projects-counter"), target: 200, suffix: "+" },
    experience: { element: document.getElementById("experience-counter"), target: 4.4, suffix: "+" },
    saas: { element: document.getElementById("saas-counter"), target: 100, suffix: "%" },
  }

  const duration = 2000 // 2 seconds
  const steps = 50
  const stepDuration = duration / steps

  Object.keys(counters).forEach((key) => {
    const counter = counters[key]
    const increment = counter.target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment

      if (current >= counter.target) {
        current = counter.target
        clearInterval(timer)
      }

      // Format the display value
      let displayValue
      if (key === "experience") {
        displayValue = current.toFixed(1)
      } else {
        displayValue = Math.floor(current)
      }

      counter.element.textContent = displayValue + counter.suffix
    }, stepDuration)
  })
}

// Intersection Observer for counter animation
const heroSection = document.getElementById("home")
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters()
        counterObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

counterObserver.observe(heroSection)

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Contact form handling
const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  }

  // Simple validation
  if (!data.name || !data.email || !data.subject || !data.message) {
    alert("Please fill in all fields")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    alert("Please enter a valid email address")
    return
  }

  // Simulate form submission
  alert("Thank you for your message! We will get back to you soon.")
  contactForm.reset()
})

// Add active class to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.clientHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Parallax effect for hero background elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".bg-element")

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
