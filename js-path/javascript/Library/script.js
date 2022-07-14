function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    if (this.read) isRead = " already read";
    else isRead = " not read yet";
    return (
      "Title: " +
      title +
      " Author: " +
      author +
      " Number of Pages: " +
      pages +
      isRead
    );
  };
}
const theHobbit = new Book("The Hobbit", "someone", 567, false);
const harryPotter = new Book("Harry Potter", "anyone", 34, true);

let myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayAllBooks() {
  const all_books = document.createElement("div");
  all_books.classList.add("all-books");
  for (book of myLibrary) {
    let book_info = create_book(book);

    all_books.appendChild(book_info);
  }
  return all_books;
}

function create_book(book) {
  let book_info = document.createElement("div");
  let book_title = document.createElement("p");
  book_title.innerHTML = book.title;
  let book_author = document.createElement("div");
  book_author.innerHTML = "Author: " + book.author;
  let book_pages = document.createElement("div");
  book_pages.classList.add("book-pages");

  book_pages.innerHTML = book.pages + " pages";

  book_info.appendChild(book_title);
  book_info.appendChild(book_author);
  book_info.appendChild(book_pages);

  if (book.read) {
    book_info.classList.add("read");
  } else {
    book_info.classList.add("not-read");
  }
  book_info.classList.add("book");
  return book_info;
}

function add_book_functionality() {
  const formContainer = document.querySelector("#formContainer");
}

function create_webpage() {
  const library = document.querySelector("#library");

  const container = document.createElement("div");

  container.classList.add("library-container");

  const shelf = document.createElement("div");
  const all_books = displayAllBooks();

  shelf.appendChild(all_books);
  library.appendChild(shelf);

  add_book_functionality();
}

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(harryPotter);
addBookToLibrary(harryPotter);
addBookToLibrary(harryPotter);
addBookToLibrary(theHobbit);

create_webpage();
