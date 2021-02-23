console.log('Linked')

var cont = document.querySelector('#container')
console.log(cont)

var h2 = document.querySelector('h2')
console.log(h2)

document.querySelector('h1').innerText = 'Welcome to Alhasa';

document.querySelector('title').innerHTML = 'Alhasa'

h2.innerHTML = h2.innerHTML + '...'

var classes = document.querySelectorAll('.header')
console.log(classes)

document.querySelectorAll('li')[0].style.color = 'hotpink';

document.querySelectorAll('li')[1].innerText = 'Jamboree sandwich at the Jambo-ree';

var elem = document.querySelectorAll('li')[2]
elem.remove()

var image = document.createElement('img');

image.setAttribute('src', 'https://img.theculturetrip.com/1024x574/smart/wp-content/uploads/2018/07/al-ahsa-2.jpg')

document.querySelector('#container').appendChild(image);

// cont.insertBefore(image, cont.childNodes[0])

image.style.width = '700px'

var listItems = document.querySelectorAll('li')

for(var i=0; i < listItems.length; i++){
    listItems[i].style.color = 'green'
}