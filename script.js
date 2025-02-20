const images = document.querySelectorAll(".images-container img")

const options = {
  // root: null,
  rootMargin: "-100px 0px",
  threshold: 0,
}

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1
    } else {
      entry.target.style.opacity = 0
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)

images.forEach((image) => {
  observer.observe(image)
})
