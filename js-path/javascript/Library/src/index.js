import "./style.css";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  deleteDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import { getFirebaseConfig } from "./firebase-config.js";

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = 0;
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
  setID(newID) {
    this.id = newID;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

let myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayAllBooks() {
  const all_books = document.createElement("div");
  all_books.classList.add("all-books");
  for (const book of myLibrary) {
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

async function deleteBook(bookId) {
  let getID = bookId.split("k")[1];
  console.log(getID);
  try {
    console.log(myLibrary[getID].id);

    await deleteDoc(doc(getFirestore(), "books", myLibrary[getID].id));
    let book = document.getElementById(bookId);
    book.style.display = "none";
  } catch (error) {
    console.error("Error deleting book", error);
  }
}

async function add_book_functionality() {
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
  let newID = await saveBook(book);
  book.setID(newID);
  addBookToLibrary(book);
  const display = displayAllBooks();

  const container = document.querySelector(".books-container");
  container.replaceChildren(display);
}

function create_webpage() {
  const library = document.querySelector("#library");

  let addButton = document.querySelector(".add-button");
  addButton.addEventListener("click", () => add_book_functionality());

  const container = document.createElement("div");

  container.classList.add("library-container");

  const shelf = document.createElement("div");
  shelf.classList.add("books-container");
  const all_books = displayAllBooks();

  shelf.appendChild(all_books);
  library.appendChild(shelf);
}

async function saveBook(book) {
  const bookJSON = bookToJson(book);
  try {
    let response = await addDoc(collection(getFirestore(), "books"), bookJSON);
    return response.id;
  } catch (error) {
    console.error("Error writing new message to Firebase Database", error);
  }
}

async function loadBooks() {
  const allBooksQuery = query(
    collection(getFirestore(), "books"),
    orderBy("title", "desc")
  );

  const querySnapshot = await getDocs(allBooksQuery);

  querySnapshot.forEach((doc) => {
    var newBook = JsonToBook(doc.data());
    newBook.setID(doc.id);
    addBookToLibrary(newBook);
    let all_books = document.querySelector(".all-books");
    all_books.appendChild(create_book(newBook));
  });
}

const bookToJson = (book) => {
  return {
    title: book.title,
    author: book.author,
    pages: book.pages,
    read: book.read,
    id: book.id,
  };
};

const JsonToBook = (book) => {
  return new Book(book.title, book.author, book.pages, book.read, book.id);
};

let numBooks = 0;

loadBooks();
create_webpage();
