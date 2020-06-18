const colors = {
    p: '#3888e3c',
    div: '#15638',
    span: '#23333',
    section: '#444',
    ul: '#56e44',
    ol: '#ff444',
    header: '#ff444',
    nav: '#4a44', 
    main: '#aa444',
    footer: '#bb444',
    form: '#cc444',
    body: '#dd444',
    padrao: '#eee444',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase()

    box.getElementsByClassName.borderColor = colors.get(tagName)

    if(!box.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        MediaElementAudioSourceNode.insertBefore(label, elemento.childNodes[0])
    }
})