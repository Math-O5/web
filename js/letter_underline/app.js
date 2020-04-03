// ............................................................
// Mathias Fernandes Duarte Coelho
// NUSP: 10734352
// Email: mathfern444@gmail.com
// EmailUSP: mathfernandes@usp.br
// ............................................................

function putDecoration(name, _debug = 0) {
    if(_debug===0) {
        console.log("putDecoration")
    }
    let text = document.getElementsByTagName(name)[0]
    let words = text.innerHTML.split(' ')
    let decorationText = ''
    let n;
    for( let i = 0;i < words.length; ++i) {
        n = words[i].length
        aux = words[i].split(/[!"#$%&'()*+,./:;<=>?]/g)

        if(_debug===0) {
            decorationText += words[i].length
        }
        
        for(let j = 0; j < aux.length; ++j) {
            if(aux[j] != "") {
                let n = aux[j].length
                if(n >= 8) {
                    decorationText += words[i].replace(aux[j], '<marker class="destaque1">'  + aux[j] + '</marker>') + ' '
                } else if(n === 6) {
                    decorationText += words[i].replace(aux[j], '<marker class="destaque2">'  + aux[j] + '</marker>') + ' '
                } else if(n === 4 || n === 5) {
                    decorationText += words[i].replace(aux[j], '<marker class="destaque3">'  + aux[j] + '</marker>') + ' '
                } else {
                    decorationText += '<marker>' + words[i] + '</marker> '
                }
                break;
            }
        }
    }
    
    document.getElementsByTagName(name)[0].innerHTML = decorationText
    if(_debug===0) {
        console.log(words)
    }
}

function countWords() {
    let count = 0;
    let text = document.getElementsByTagName('p')[0]
    let words = text.innerHTML.split(' ')
    for(let i = 0; i < words.length; ++i) {
        if(words[i].length > 0)
         count += 1;
    }

    document.body.prepend("Words in the text = " + count)
}

function linkItself() {
     // Create anchor element. 
     let a = document.createElement('a');  
                  
     // Create the text node for anchor element. 
     let link = document.createTextNode("Home"); 
       
     // Append the text node to anchor element. 
     a.appendChild(link);  
       
     // Set the title. 
     a.title = "Home";  
       
     // Set the href property. 
     a.href = "index.html";  
       
     // Append the anchor element to the body. 
     document.body.appendChild(a);
}

function splitPharses() {
    let text = document.getElementsByTagName('p')[0]
    let words = text.innerHTML.split(/([!.;?])/g)
    let decorationText = ''
    for(let i = 0; i < words.length - 1; ++i) {
        decorationText +=  words[i] + words[i+1] + '</br>'
        ++i;
    }
    document.getElementsByTagName('p')[0].innerHTML = decorationText
}

countWords()
putDecoration("p", 1)
putDecoration("h1", 1)
linkItself()
splitPharses()