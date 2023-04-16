// console.dir(document);
// console.log(document.title)
// console.log(document.all[10].textContent = 'Hello')
// let title = document.getElementById('header-title')
// let header = document.getElementById('main-header')
// title.textContent = 'World'
// console.log(title.textContent)
// header.style.border="solid 4px #000"
// let titleN = document.getElementById('title-name')
// titleN.style.color = 'green'
// titleN.style.fontWeight = 'bold'
// let itemList = document.getElementsByClassName('list-group-item')
// console.log(itemList[2].textContent='Hello')
// itemList[2].style.backgroundColor = 'green'
// for(let i=0; i<itemList.length; i++)
// {
//     itemList[i].style.fontWeight = 'bold'
// }
// let li = document.getElementsByTagName('li')
// for(let i=0; i<li.length; i++)
// {
//     li[i].style.fontWeight = 'bold'    
// }
// let secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color='green'
// let thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.visibility='hidden'

let odd = document.querySelectorAll('.li:nth-child(odd)')
for(let i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor = 'green'    
}