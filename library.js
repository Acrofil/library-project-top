const myLibrary = [];

function Book(name, author, pages, readStatus) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = readStatus;
    this.added = false;
  }
  

  function addBookToLibrary(bookName, author, pages, readStatus) {
    let book = new Book(bookName, author, pages, readStatus);
    myLibrary.push(book);

  }

/* Handle add book button clicks */

const addBookBtn = document.querySelector(".add-book-btn");

addBookBtn.addEventListener("click", (e) => {

    let bookName = document.querySelector("#name").value;
    let bookAuthor = document.querySelector("#author").value;
    let bookPages = document.querySelector("#pages").value;
    let status = document.querySelector('input[name="status"]:checked').value;

    addBookToLibrary(bookName, bookAuthor, bookPages, status);  
    test();

    e.preventDefault();
});

/* Handle displaying the added books */

function test() {
const tableBody = document.querySelector("tbody");

myLibrary.forEach((book) => {

  if (!book.added) {
  let tableRow = document.createElement("tr");

  let tableDataChangeStatu = document.createElement("td");
  let tableDataDeleteBook = document.createElement("td");

  let label = document.createElement("label");
  label.htmlFor = "change-status";
  label.textContent = "Change to";

  let select = document.createElement("select");
  select.setAttribute("name", "change");
  select.setAttribute("id", "change-status");

  let optionDefaut = document.createElement("option");
  optionDefaut.setAttribute("value", "");
  optionDefaut.textContent = "----------";

  let optionRead = document.createElement("option");
  optionRead.setAttribute("value", "read");
  optionRead.textContent = "Read";

  let optionNotRead = document.createElement("option");
  optionNotRead.setAttribute("value", "not read");
  optionNotRead.textContent = "Not read";

  let span = document.createElement("span");
  span.className = "mdi mdi-delete delete-book";
  span.setAttribute("value", `${myLibrary.length - 1}`);

  let tableDataName = document.createElement("td");
  tableDataName.textContent = book.name;

  let tableDataAuthor = document.createElement("td");
  tableDataAuthor.textContent = book.author;

  let tableDataPages = document.createElement("td");
  tableDataPages.textContent = book.pages;

  let tableDataStatus = document.createElement("td");
  
  if (book.status === "true") {
    tableDataStatus.textContent = "Readed";

  } else {

    tableDataStatus.textContent = "Not readed";
  }

  tableRow.appendChild(tableDataName);
  tableRow.appendChild(tableDataAuthor);
  tableRow.appendChild(tableDataPages);
  tableRow.appendChild(tableDataStatus);
  
  tableDataChangeStatu.appendChild(label);
  select.appendChild(optionDefaut);
  select.appendChild(optionRead);
  select.appendChild(optionNotRead);
  tableDataChangeStatu.appendChild(select);

  tableRow.appendChild(tableDataChangeStatu);

  tableDataDeleteBook.appendChild(span);
  tableRow.appendChild(tableDataDeleteBook);

  tableBody.appendChild(tableRow);

  };

  book.added = true;

});

}


const deleteBtn = document.querySelector(".delete-book");
const myTable = document.querySelector("table");

if (deleteBtn) {
  deleteBtn.addEventListener("click", () => {

   // myLibrary.splice(parseInt(deleteBookBtn.value, 1));
    //myTable.deleteRow(parseInt(deleteBookBtn.value) + 1);
    console.log("a");
  });

}