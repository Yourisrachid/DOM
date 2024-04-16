console.log(document.title);

document.title = "Modifying the DOM";

console.log(document.title);

document.body.style.backgroundColor = "#FF69B4";

let all = document.body.children;

for (const element of all) {
    console.log(element.tagName);
}