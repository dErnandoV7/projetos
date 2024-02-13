const allImg = document.querySelectorAll(".image-container img")

const observerImg = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const img = entry.target
        img.src = img.src.replace("&w=10&", "&w=1000&")
    })
}, {})

allImg.forEach(img => {
    observerImg.observe(img)
})

