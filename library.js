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

// let dialog = document.querySelector("dialog");
// let showButton = document.querySelector("dialog + button");
// let closeButton = document.querySelector("dialog button");

// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });

// closeButton.addEventListener("click", () => {
//   dialog.close();
// });

const dialog = document.getElementById("sampleDialog");
const openButton = document.getElementById("openDialog");
const closeButton = document.getElementById("closeDialog");

// Event listener to open the dialog
openButton.addEventListener("click", function () {
  dialog.showModal();
});

// Event listener to close the dialog
closeButton.addEventListener("click", function () {
  dialog.close();
});
