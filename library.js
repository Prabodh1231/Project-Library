const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

const dialog = document.getElementById("sampleDialog");
const addNew = document.getElementById("addNew");
const closeButton = document.getElementById("closeDialog");

// Event listener to open the dialog
addNew.addEventListener("click", function () {
  dialog.showModal();
});

// Event listener to close the dialog
closeButton.addEventListener("click", function () {
  dialog.close();
});
