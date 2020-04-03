function putDecoration(name, _debug = 0) {
    if(_debug===0) {
        console.log("putDecoration")
    }
    let text = document.getElementsByTagName(name)[0]
    let words = text.innerHTML.split(" ")
    let decorationText = ''
    let aux;
    for( let i = 0;i < words.length; ++i) {
        if(_debug===0) {
            decorationText += words[i].length
        }
        if(words[i].length >= 8) {
            decorationText += '<marker class="destaque1">' + words[i] + '</marker> '
        } else if(words[i].length === 6) {
            decorationText += '<marker class="destaque2">' + words[i] + '</marker> '
        } else if(words[i].length === 4 || words[i].length === 5) {
            decorationText += '<marker class="destaque3">' + words[i] + '</marker> '
        } else {
            decorationText += '<marker>' + words[i] + '</marker> '
        }
    }

    document.getElementsByTagName(name)[0].innerHTML = decorationText
    if(_debug===0) {
        console.log(words)
    }
}

putDecoration("p", 1)
putDecoration("h1", 1)