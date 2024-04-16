let importantItem = document.querySelectorAll('.important');

importantItem.forEach(element => {
    element.setAttribute('title', 'This is an important item');
});

console.log(document.title);

let importantImage = document.querySelectorAll('img');

importantImage.forEach(img => {
    if (!img.classList.contains('important')) {
        img.style.display ='none';
    }
})

let allPara = document.querySelectorAll('p');

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

allPara.forEach(para => {
    console.log(para.textContent);

    if (para.classList.length > 0) {
        console.log('Here is the classes: ', para.classList);
    } else {
        para.style.color = randomColor();
    }

})