console.dir(document);
console.log(document.title)
console.log(document.all[10].textContent = 'Hello')
let title = document.getElementById('header-title')
let header = document.getElementById('main-header')
title.textContent = 'World'
console.log(title.textContent)
header.style.border="solid 4px #000"
let titleN = document.getElementById('title-name')
titleN.style.color = 'green'
titleN.style.fontWeight = 'bold'