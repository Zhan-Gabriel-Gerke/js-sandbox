//1
let mainTitle = document.getElementById('main-title')
mainTitle.innerHTML = "Welcome to the DOM World!"

//2
let sumbitBtn = document.getElementById('submit-btn')

function alertFunction(){
    alert('Button clicked!')
}

sumbitBtn.addEventListener('click', alertFunction)

//3 change background color on mouseover

let colorDiv = document.querySelector('.highlight')

function yellowBackground(){
    colorDiv.style.backgroundColor = 'yellow'
}

colorDiv.addEventListener('mouseover', yellowBackground)

//4 create new li and set some text to it and append it to the ul with id (list-container)

let listContainer = document.getElementById('list-container')

let newIntem = document.createElement('li')

newIntem.innerText = 'some text'
listContainer.appendChild(newIntem)

// 5 sctipt prevent default form submission behavior and console log the input values

let form = document.getElementById('form-example')

function handleSubmit(e){
    e.preventDefault()
}

form.addEventListener('submit', handleSubmit)

// 6

let proBtn = document.querySelector('button')
function stopPropogation(e) {
    e.stopPropogation()
}

proBtn.addEventListener('click', stopPropogation)


// 7 

let toggleElement = document.getElementById('toggle-element')

function toggleStyle(){
    toggleElement.classList.toggle('active')
}

toggleElement.addEventListener('click', toggleStyle)


// 8 

let paragraph = document.querySelector('p')

paragraphElement.innerHTML = new Date()

//9

document.getElementById('james-is-cool').removeEventListener('click', myFunction)

//10

document.querySelector('img').setAttribute('src', 'new-image.png')

//11

let informationDiv = document.getElementById('info')
console.log(informationDiv.dataset.info)