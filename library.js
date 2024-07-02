const myLibrary = [];
const dialog = document.getElementById("sampleDialog");
const addNew = document.getElementById("addNew");
const closeButton = document.getElementById("closeDialog");
const form = dialog.querySelector("form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks(); // Update the UI with the new book
}

// Event listener to open the dialog
addNew.addEventListener("click", function () {
  dialog.showModal();
});

// Event listener to close the dialog
closeButton.addEventListener("click", function () {
  dialog.close();
});

// Event listener to handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("book_name").value;
  const author = document.getElementById("author_name").value;
  const pages = document.getElementById("pages").value;
  const read = document.querySelector(
    'input[name="book_status"]:checked'
  ).value;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  form.reset(); // Clear the form
  dialog.close(); // Close the dialog
});

const bookListContainer = document.querySelector(".self");

// Function to display books in the UI
function displayBooks() {
  bookListContainer.innerHTML = ""; // Clear the current list
  myLibrary.forEach((book, index) => {
    let bookbox = document.createElement("div");
    bookbox.classList.add("bookcover");

    const bookItem = document.createElement("div");
    const deleteButton = document.createElement("button");

    bookItem.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read}`;
    deleteButton.textContent = "Delete Me";

    bookbox.appendChild(bookItem);
    bookbox.appendChild(deleteButton);
    bookListContainer.appendChild(bookbox);

    deleteButton.addEventListener("click", () => {
      deleteBook(index);
    });
  });
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}
