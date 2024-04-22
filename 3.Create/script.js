let learner = ['Iliess Abdelmadjid', 'Maryam Akraiche', 'Nathanaël Amand', 'Zahra Anaflous', 'Dorian Blariau', 'Adrien Boels', 'Jean-Emmanuel Carenjot', 'Adrien Caufriez', 'Caroline Deconinck', 'Tom Delinte', 'Stacy Druart', 'Dylan Feys', 'Justine Frigo', 'Mohamed Kamal', 'Lyne Kapongo Tshilumbwa', 'Dzheylyan Kyamilova', 'Ludovic Lacroix', 'Justine Lambert', 'Denis Lettany', 'Jordan Masy', 'Nataliia Melnykova', 'Angel Nittelet', 'Pierre Noël', 'Isabelle Noël', 'Youris Rachid', 'Giovanni Tummino', 'Arnaud Van Acker', 'Julie Wustefeld'];
let article = document.querySelector('article');

function shuffle (array) {

    let arrLen = array.length;


    while (arrLen != 0) {

  
      let randomArray = Math.floor(Math.random() * arrLen);
      arrLen--;

  
      [array[arrLen], array[randomArray]] = [
        array[randomArray], array[arrLen]];
    }
  }

shuffle(learner);


function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


for (i=0; i < learner.length; i++) {
    let section = document.createElement('section');
    section.style.backgroundColor = randomColor();

    let para = document.createElement('p');
    para.textContent = learner[i];

    section.appendChild(para);
    article.appendChild(section);

    let style = window.getComputedStyle(section);
    let bgColor = style.backgroundColor;
    let rgb = bgColor.match(/\d+/g);

    let rgbNum = rgb.map(function(item) {
        return parseInt(item, 10);
    })
    let sum=0;


    for (j=0; j < rgb.length; j++) {
        sum += rgbNum[j];
    }
    
    if (sum < 384) {
        section.style.color = 'white';
    }
}
