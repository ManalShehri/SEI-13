let charactersDivs = document.querySelectorAll('.character')

for (let i = 0; i < charactersDivs.length; i++) {
  let characterBtn = document.createElement("button")
  characterBtn.innerHTML = "More Info"
  characterBtn.setAttribute("class", "more-info")
  charactersDivs[i].append(characterBtn)
}

let buttons = document.querySelectorAll('.more-info')

for (let i = 0; i < charactersDivs.length; i++) {
  let paragraph = document.createElement('p')
  paragraph.innerHTML = characters[i].bio
  paragraph.style.visibility = "hidden"
  charactersDivs[i].appendChild(paragraph)
}

let charactersBios = document.querySelectorAll('.character p')

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    console.log(characters[i].name)
    if (charactersBios[i].style.visibility == "hidden") {
      charactersBios[i].style.visibility = "visible"
    } else {
      charactersBios[i].style.visibility = "hidden"
    }
  })
}


// Part 3

for(let i =0; i< charactersDivs.length; i++){
  let deadOrAliveBtn = document.createElement("button")
  deadOrAliveBtn.innerHTML = characters[i].status
  deadOrAliveBtn.setAttribute("class", "alive-or-dead")
  deadOrAliveBtn.style.filter = 'blur(4px)'
  deadOrAliveBtn.style.cursor = "pointer"
  
  deadOrAliveBtn.addEventListener('click', function(){
    deadOrAliveBtn.style.filter = 'blur(0px)'
  })
  charactersDivs[i].append(deadOrAliveBtn)
}
