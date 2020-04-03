// ............................................................
// Mathias Fernandes Duarte Coelho
// NUSP: 10734352
// Email: mathfern444@gmail.com
// EmailUSP: mathfernandes@usp.br
// ............................................................

// Change color background 
function bodystyle() {
    document.body.style.background = "pink";
    document.body.style.fontFamily = "Bradley Hand, cursive";
    console.log(document.body)
}

// Fill infos forms 
function injectForm(nickname, favorites, hometown) {
    document.getElementById('nickname').innerHTML = nickname;
    document.getElementById('favorites').innerHTML = favorites;
    document.getElementById('hometown').innerHTML = hometown;
}

// Insert image on page
function injectImg(title, url) {
    
    // Create img element. 
    let img = document.createElement('img');  
                    
    // Set the title. 
    img.title = title 
    
    // Set the src property. 
    img.src = url
    
    // Set width and height
    img.setAttribute("width", "50%")
    img.setAttribute("heigth", "50%")

    // Append the anchor element to the body. 
    document.body.appendChild(img);
}

function injectText(text) {
    let p = document.createElement('p')
    p.append(text)

    document.body.appendChild(p)
}

// call functions
bodystyle()
injectForm("Eeney", "Meeny", "Miney")
injectImg("Sixty_minutes_of_good_music", "eeney.jpg")
injectText("60 minutes of really good music. Experts, them keeping saying: How humanity do not created it before.")