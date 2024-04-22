function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


let main = document.querySelector('main');
let mainChildren = main.children;

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}


const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  const clickedColor = e.target.classList[1];
  const newDisplayedSquare = document.createElement('div');

  newDisplayedSquare.classList.add('displayedsquare');
  newDisplayedSquare.style.backgroundColor = clickedColor;

  const displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper');
  displayedSquareWrapper.appendChild(newDisplayedSquare);

  const logEntry = document.createElement('li');
  logEntry.textContent = `[${getElapsedTime()}] Created a new ${clickedColor} square`;

  const logList = document.querySelector('ul');
  logList.appendChild(logEntry);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


let body = document.querySelector('body');

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        body.style.backgroundColor = randomColor();

        const logEntry = document.createElement('li');
        logEntry.textContent = `[${getElapsedTime()}] SpaceBar was pressed to changed the background color`;
        const logList = document.querySelector('ul');
        logList.appendChild(logEntry);
    }
})

document.addEventListener('keyup', event => {

    const logList = document.querySelector('ul');
    
    if (event.code === 'KeyI') {
        while (logList.firstChild) {
            logList.removeChild(logList.firstChild);;
        }
    }
})

document.addEventListener('keyup', event => {

    const displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper');
    
    if (event.code === 'KeyS') {
        while (displayedSquareWrapper.firstChild) {
            displayedSquareWrapper.removeChild(displayedSquareWrapper.firstChild);;
        }
    }
})


const clickOnNewSquare = (e) => {
    const squareColor = e.target.style.backgroundColor;
    alert(`The color of the clicked square is : ${squareColor}`);
}

const squareWrapper = document.querySelector('.displayedsquare-wrapper');

squareWrapper.addEventListener('click', function(event) {
    const clickedElement = event.target;
    
    
    if (clickedElement.classList.contains('displayedsquare')) {
        clickOnNewSquare(event);
    }
});