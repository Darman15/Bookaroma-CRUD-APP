// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// // console.log(document.all[10].textContent = "hello");
// console.log(document.forms);
// console.log(document.links);

// get element by id

// console.log(document.getElementById('page-banner'));

// let banner = document.getElementById('page-banner');
// console.log(banner);

// let bookList = document.getElementById('book-list');

// console.log(bookList);

// // get element by className

// console.log(document.getElementsByClassName('delete'));

// // get element by tag name

// console.log(document.getElementsByTagName('li'));

// var lis = document.getElementsByTagName('li');

// //  querey selector

// var header = document.querySelector('#book-list');
// console.log(header);

// Traversing Section 2

// var itemList = document.querySelector('.delete');
// parentNode

// console.log(itemList.parentNode.parentNode);

// parentElement

// console.log(itemList.parentElement);
// childNodes

// console.log(itemList.parentElement.firstElementChild.nextElementSibling);

// event add event listner
// add event listner below

// var btns = document.querySelectorAll('#book-list .delete');
// console.log(btns);

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     })
// })

// traversing
// usually done first on any project
document.addEventListener("DOMContentLoaded", function() {
    const list =  document.querySelector("#book-list ul");
    const forms = document.forms;

    // delete books
    list.addEventListener('click', function(e) {

        if(e.target.className == "delete") {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }

    });


// insert/post

    const addForm = forms["add-book"];
    addForm.addEventListener("submit", function(e) {
        e.preventDefault();  
        // create new element
        const value = addForm.querySelector('input[type = "text"]').value;
        console.log(value);
        // create an element
        const li = document.createElement("li");
        const bookName = document.createElement("span");
        const deleteBtn = document.createElement("span");

        bookName.textContent = value;
        deleteBtn.textContent = "delete";

        bookName.classList.add("name");
        deleteBtn.classList.add("delete");

        li.appendChild(bookName);
        li.appendChild(deleteBtn);

        list.appendChild(li);     
    });

    // filter / search books read

    const searchBar = forms["search-books"].querySelector("input");
    searchBar.addEventListener("keyup", e => {
        const term = e.target.value.toLowerCase();
        console.log(term)

        const books = list.getElementsByTagName('li');

        Array.from(books).forEach(book => {
            const title = book.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        })
        
    })


});

