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

// let odd = document.querySelectorAll('.li:nth-child(odd)')
// for(let i=0; i<odd.length; i++)
// {
//     odd[i].style.backgroundColor = 'green'    
// }

// let itemList = document.querySelector('#items')
// console.log(itemList.parentElement)
// console.log(itemList.parentNode)
// itemList.parentElement.style.color='red'
// itemList.lastElementChild.style.color='red'
// console.log(itemList.lastChild)
// itemList.firstElementChild.style.color='blue'
// console.log(itemList.firstChild)
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)
// console.log(itemList.previousSibling)
// itemList.previousElementSibling.style.color= 'red'
// let newElement = document.createElement('div')
// newElement.className = 'newE';
// newElement.id = 'newId';
// newElement.setAttribute('title', 'Hello Ele')
// let text = document.createTextNode('Hello World')
// newElement.appendChild(text)
// console.log(newElement)
// let addTitle = document.querySelector('header .container')
// let header = document.querySelector('header h1')
// addTitle.insertBefore(newElement, header)
// let add = document.querySelector('ul')
// let header = document.querySelector('ul .list-group-item')
// add.insertBefore(newElement, header)


let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

form.addEventListener('submit',addItem)
itemList.addEventListener('click', removeItem)
function addItem(e)
{
    e.preventDefault()

    let newItem = document.getElementById('item').value 
    let text = document.createTextNode(newItem)
    let list = document.createElement('li')
    list.className = 'list-group-item'
    list.appendChild(text)
    itemList.appendChild(list)

    let delBtn = document.createElement('button')
    delBtn.className = "btn btn-danger btn-sm float-right delete"
    delBtn.appendChild(document.createTextNode('X'))
    list.appendChild(delBtn)
    
}
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        let removeList = e.target.parentElement
        itemList.removeChild(removeList)
    }

}

