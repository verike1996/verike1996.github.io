function Book(title, author, readYet) {
    this.title = title
    this.author = author
    this.readYet = readYet
}

function getValues() {
    bookTitle = titleInput.value;
    bookAuthor = authorInput.value;
    bookReadYet = bookStatus.options[bookStatus.selectedIndex].text;
}

function showForm() {
    bookAddForm.classList.add('show-form');
    bookAddForm.classList.remove('hide-form');
}

function hideForm() {
    bookAddForm.classList.add('hide-form');
    bookAddForm.classList.remove('show-form');
}

function resetValues() {
    bookTitle = null;
    bookAuthor = null;   
    bookReadYet = null;
    titleInput.value = '';
    authorInput.value = '';
}

function clearDOM() {
    libraryMain.textContent = '';
}

function insertBook() {
    clearDOM();
    for (let i = 0; i < bookList.length; i++) {
        let bookElement = document.createElement("div");
        bookElement.setAttribute('class', 'library-book test-class');
        bookElement.setAttribute('id', `${i}`);
    
        let bookElementTitle = document.createElement('h2');
        //add text node that says "book title:"
        bookElementTitle.appendChild(document.createTextNode(`${bookList[i].title}`));
    
        let bookElementAuthor = document.createElement('h3');
        //add textnode that says book author:
        bookElementAuthor.appendChild(document.createTextNode(`${bookList[i].author}`));
    
        let bookElementReadYet = document.createElement('button');
        bookElementReadYet.appendChild(document.createTextNode(`${bookList[i].readYet}`));
    
        if (bookElementReadYet.textContent == 'Read') {
            bookElementReadYet.style.backgroundColor = 'green';
        } else if (bookElementReadYet.textContent == 'Not Read') {
            bookElementReadYet.style.backgroundColor = 'red';
        }
    
        bookElementReadYet.addEventListener('click', event => {
            if (event.target.textContent == 'Read') {
                bookElementReadYet.textContent = 'Not Read';
                bookList[bookElement.id].readYet = 'Not Read'
                bookElementReadYet.style.backgroundColor = 'red';
            } else if (bookElementReadYet.textContent == 'Not Read') {
                bookElementReadYet.textContent = 'Read';
                bookList[bookElement.id].readYet = 'Read'
                bookElementReadYet.style.backgroundColor = 'green';
            }
        });
    
        let bookElementButton = document.createElement('button');
        bookElementButton.setAttribute('class', 'removal-button');
        bookElementButton.appendChild(document.createTextNode(`Remove Book`));
    
        bookElementButton.addEventListener('click', event => {
            let parentOfBook = bookElementButton.parentNode;
            if (confirm('Are you sure you want to remove this book?')) {
                if (bookList.length == 1) {
                    bookList.pop();
                } else {
                    bookList = bookList.filter((book) => book.title !== bookList[bookElement.id].title)
                }
                parentOfBook.parentNode.removeChild(bookElement);
                insertBook();
            }
        });
    
        bookElement.appendChild(bookElementTitle);
        bookElement.appendChild(bookElementAuthor);
        bookElement.appendChild(bookElementReadYet);
        bookElement.appendChild(bookElementButton)
        libraryMain.appendChild(bookElement);
    }

}

function getBook() {
    getValues();
    if (bookTitle == '' || bookAuthor ==  '') {
        alert('You must have values in each input field');
    } else {
        let newBook = new Book(bookTitle, bookAuthor, bookReadYet);
        bookList.push(newBook);
        resetValues();
        insertBook();
    }
}

let titleInput = document.getElementById('book-title');
let authorInput = document.getElementById('book-author');
let bookStatus = document.getElementById('status');
let addBookButton = document.getElementById('add-book-button');
let libraryMain = document.getElementById('library-main');
let newBookButton = document.getElementById('new-book');
let removalButtons = document.querySelectorAll('.removal-button');
let cancelButton = document.getElementById('cancel-book-button');

let bookAddForm = document.querySelector('.add-book-card');

let bookTitle = null;
let bookAuthor = null;
let bookReadYet = null;

let bookList = [];

addBookButton.addEventListener('click', event => {
    getBook();
    if (bookTitle !== '' && bookAuthor !== '') {
        hideForm();
    }
});
newBookButton.addEventListener('click', event => {
    showForm();
});
cancelButton.addEventListener('click', event => {
    hideForm();
})