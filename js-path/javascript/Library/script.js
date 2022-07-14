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

  this.toggleRead = function () {
    this.read = !this.read;
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
  book_info.setAttribute("id", "book" + numBooks);

  let bookButtons = document.createElement("div");

  bookButtons.classList.add("bookButtons");
  let changeButton = document.createElement("button");
  changeButton.classList.add("changeButton");
  changeButton.addEventListener("click", () =>
    changeReadStatus(book_info.id.split("k")[1])
  );
  changeButton.textContent = "Toggle Read";

  bookButtons.appendChild(changeButton);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", () => deleteBook(book_info.id));
  deleteButton.textContent = "Delete";
  bookButtons.appendChild(deleteButton);

  book_info.appendChild(bookButtons);

  numBooks++;
  return book_info;
}

function changeReadStatus(bookNum) {
  myLibrary[bookNum].toggleRead();
  let book = document.getElementById("book" + bookNum);

  // if is read
  if (book.classList.contains("read")) {
    book.classList.remove("read");
    book.classList.add("not-read");
  }
  // not read
  else {
    book.classList.remove("not-read");
    book.classList.add("read");
  }
}
function deleteBook(bookId) {
  let book = document.getElementById(bookId);
  console.log(book);
  book.remove();
}

function add_book_functionality() {
  let newBook = document.forms["addBook"];
  let newBookName = newBook["bookName"].value;
  let newBookAuthor = newBook["author"].value;
  let newBookNumPages = newBook["numPages"].value;
  let newBookRead = newBook["read"].checked;

  if (
    newBookName == "" ||
    newBookAuthor == "" ||
    newBookNumPages == "" ||
    newBookNumPages <= 0
  )
    return;

  const book = new Book(
    newBookName,
    newBookAuthor,
    newBookNumPages,
    newBookRead
  );
  addBookToLibrary(book);
  let all_books = document.querySelector(".all-books");
  all_books.appendChild(create_book(book));
}

function create_webpage() {
  const library = document.querySelector("#library");

  let addButton = document.querySelector(".add-button");
  addButton.addEventListener("click", () => add_book_functionality());

  const container = document.createElement("div");

  container.classList.add("library-container");

  const shelf = document.createElement("div");
  const all_books = displayAllBooks();

  shelf.appendChild(all_books);
  library.appendChild(shelf);
}

let numBooks = 0;

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
