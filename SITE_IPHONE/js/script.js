const imgIphoneColor = document.querySelector('.img-iphone')
const allButtonChangeColor = document.querySelectorAll('.selector-cor')

allButtonChangeColor.forEach(button => {
    button.addEventListener('click', () => {
        const allCircle = document.querySelectorAll('.circle')
        const circleClicked = button.querySelector('.circle')
        const span = button.querySelector('span')
        allCircle.forEach(circle => {
            circle.classList.remove('active')
        })
        circleClicked.classList.add('active')

        imgIphoneColor.style.opacity = '.3'
        setTimeout(() => {
            imgIphoneColor.src = `img/iphone_${span.getAttribute('class')}.jpg`
            imgIphoneColor.style.opacity = '1'
        }, 400);
    })
})