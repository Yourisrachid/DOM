const ul = document.querySelector('ul');
const ulChildren = ul.children;
const firstElement = ulChildren[0]
const li = document.querySelector('li')

for (i=0; i < ulChildren.length; i++) {
    console.log(ulChildren[i].textContent)
}

// ---------------------------------------

function alertName(index) {
    return function() {

        if (ulChildren[index].textContent === 'Fast and Furious') {
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
        } else {
            alert(ulChildren[index].textContent);
        }
    }
}

for (i=0; i < ulChildren.length; i++) {

    for (j=0; j < ulChildren.length; j++) {
        if (ulChildren[i].isEqualNode(ulChildren[j]) && i !== j) {
            ul.removeChild(ulChildren[i]);
        }
    }

    ulChildren[i].style.cursor = 'pointer';

    if (ulChildren[i].nodeType === 1) {
        console.log ('True')
    }

    if (ulChildren[i].textContent === 'Fast and Furious') {
        ulChildren[i].classList.add('important')
        ul.insertBefore(ulChildren[i], firstElement);
    }   else {
        ulChildren[i].classList.add('normal')
    }
    
}


for (i=0; i < ulChildren.length; i++) {

    ulChildren[i].addEventListener('click', alertName(i))

}

document.addEventListener('keyup', event => {
    if (event.code === 'KeyR') {
        for (i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ulChildren[Math.random() * i | 1]);
        }
    }

    if (event.code === 'KeyD') {
        let newNode = ulChildren[0].cloneNode(true);
        ul.appendChild(newNode)
    }
})

// ---------------------


const body = document.querySelector('body')

const div = document.createElement('div')

body.appendChild(div)
body.insertBefore(div, ul)


const select = document.createElement('select')
const optionFirst = document.createElement('option')
const optionSecond = document.createElement('option')

div.appendChild(select)
select.appendChild(optionFirst)
select.appendChild(optionSecond)

optionFirst.textContent = 'important franchises'
optionSecond.textContent = 'normal franchises'

optionFirst.setAttribute('id', 'toggleFirst')
optionFirst.setAttribute('value', 'important')
optionSecond.setAttribute('id', 'toggleSecond')
optionSecond.setAttribute('value', 'normal')


const toggle = document.querySelector('#toggle')
console.log(toggle)

const imp = document.querySelector('.important')
const norm = document.querySelectorAll('li.normal')


select.addEventListener('change', toggleFilm)


function toggleFilm() {


    if (select.value === 'important') {

        imp.style.visibility = 'visible';

        norm.forEach(element => {
            element.style.visibility = 'hidden'
        })

    }   else if (select.value === 'normal') {

            imp.style.visibility = 'hidden'

            norm.forEach(element => {
                element.style.visibility = 'visible'
            })

    }

}



