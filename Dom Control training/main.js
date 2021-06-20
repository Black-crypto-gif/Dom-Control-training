/*  creating a getElement id proprietes to control the Dom
as training technique*/
// Get getElement by idea
const pop = document.getElementById('id');
// Get element by className
const pop1 = document.getElementsByClassName('className')
// get element by tag name or tag selector like li div ect...

const pop1 = document.getElementsByTagName('tagName')
// using the querySelector :

const pop 2 = document.querySelector('query');

// if you want to grappe all the selector at once do this :

const pp = document.querySelectorAll('classpp');

//
pp.textContent // this to change or to log any text you want.

const books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function (book) {
  book.textContent += ' (Book title) ';
})

const bookList = document.querySelector('#book-list');

//bookList.innerHTML ='<h1> Books and more books..</h1>';
bookList.innerHTML += '<span class="pool"> This is just attempt to append</span>';

console.log(' the parent node is:', bookList.parentNode);
console.log(' the parent element is:', bookList.parentElement);
console.log(bookList.children);
console.log(bookList.nextSibling);
// nextElement previousSibling previousElement
if (e.shiftKey) {
  alert('yes shift key is clicked')
}else {
  alert('no shift key has been pressed');
}
