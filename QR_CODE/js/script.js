const inputValue = document.querySelector('[data-input-value]')
const buttonGenerator = document.querySelector('[data-gerar-qrcode]')
const imgQrCode = document.querySelector('.qr-code-img')

function generator() {
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue.value}`
}

buttonGenerator.addEventListener('click', () => {
    if (!inputValue.value) return
    generator()
})

document.addEventListener('keydown', (e) => {
    if (!inputValue.value) return
    if (e.key === 'Enter') {
        generator()
    }
})

inputValue.addEventListener('keyup', () => {
    if (!inputValue.value) {
        imgQrCode.src = ''
    }
})