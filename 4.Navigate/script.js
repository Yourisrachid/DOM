let section = document.querySelector('section');
let sectionsChildren = section.children;

let ol = section.children[2].nextElementSibling;
let olChildren = ol.children;

console.log(ol.children[4]);

let last = ol.children[4];
let first = ol.children[0];

ol.insertBefore(last, first);

// // // //

let main = document.querySelector('main');
let mainChildren = main.children;
let sectionThird = mainChildren[1];
let sectionThirdChildren = sectionThird.children;
let sectionSecond = mainChildren[2];
let sectionSecondChildren = sectionSecond.children;
let div = sectionSecondChildren[0];
let divChildren = div.children;

sectionSecond.appendChild(sectionThirdChildren[0]);
sectionThird.appendChild(divChildren[0]);

sectionThird.insertBefore(sectionThirdChildren[1], sectionThirdChildren[0]);
sectionSecond.insertBefore(sectionSecondChildren[1], div);


main.removeChild(sectionSecond)