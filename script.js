const images = document.querySelectorAll(".images-container img")

const options = {
  // root: null,
  rootMargin: "-100px 0px",
  threshold: 0,
}

const handleIntersect = (entries) => {
  console.log(entries)
}

const observer = new IntersectionObserver(handleIntersect, options)

images.forEach((image) => {
  observer.observe(image)
})
