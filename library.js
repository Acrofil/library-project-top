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

/* validation */

function checkLen(...arr) {

  let valid = true;

  arr.forEach((str) => {

    if (str.length < 2) {

      valid = false;
    };

  });

  return valid;
}

/* Handle add book button clicks */

const addBookBtn = document.querySelector(".add-book-btn");

addBookBtn.addEventListener("click", (e) => {

    let valid = false;

    let bookName = document.querySelector("#name").value;
    let bookAuthor = document.querySelector("#author").value;
    let bookPages = document.querySelector("#pages").value;
    let status = document.querySelector('input[name="status"]:checked').value;

    valid = checkLen(bookName, bookAuthor, bookPages);

    if (valid) {
  
      addBookToLibrary(bookName, bookAuthor, bookPages, status);  
      showAddedBooks();
    }
 

    e.preventDefault();
});

/* Handle displaying the added books */

function showAddedBooks() {
const tableBody = document.querySelector("tbody");

  myLibrary.forEach((book) => {
    
    if (!book.added) {
    
    let cardsContainer = document.querySelector(".cards");
    let card = document.createElement("div");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    card.classList.add("card");

    let tableRowName = document.createElement("tr");
    let tableRowAuthor = document.createElement("tr");
    let tableRowPages = document.createElement("tr");
    let tableRowStatus = document.createElement("tr");
    let tableRowChangeStatus = document.createElement("tr");
    let tableRowDelete = document.createElement("tr");

    let tableHeadName = document.createElement("th");
    tableHeadName.textContent = "Name";

    let tableHeadAuthor = document.createElement("th");
    tableHeadAuthor.textContent = "Author";

    let tableHeadPages = document.createElement("th");
    tableHeadPages.textContent = "Pages";

    let tableHeadStatus = document.createElement("th");
    tableHeadStatus.textContent = "Status";

    let tableHeadChangeStatus = document.createElement("th");
    tableHeadChangeStatus.textContent = "Change Status";

    let tableHeadDelete = document.createElement("th");
    tableHeadDelete.textContent = "Delete";

    let tableDataChangeStatu = document.createElement("td");

    let label = document.createElement("label");
    label.htmlFor = "change-status";
    label.textContent = "Change to ";

    let select = document.createElement("select");
    select.setAttribute("name", "change");
    select.setAttribute("id", "change-status");

    let optionDefaut = document.createElement("option");
    optionDefaut.setAttribute("value", "");
    optionDefaut.textContent = "----------";

    let optionRead = document.createElement("option");
    optionRead.setAttribute("value", "Readed");
    optionRead.textContent = "Read";

    let optionNotRead = document.createElement("option");
    optionNotRead.setAttribute("value", "Not readed");
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
    tableDataStatus.textContent = book.status;

    if (select) {
      select.addEventListener("change", () => {

        book.status = select.value;
        tableDataStatus.textContent = book.status;
        
      });
    }

    tableRowName.appendChild(tableHeadName);
    tableRowName.appendChild(tableDataName);

    tableRowAuthor.appendChild(tableHeadAuthor);
    tableRowAuthor.appendChild(tableDataAuthor);

    tableRowPages.appendChild(tableHeadPages);
    tableRowPages.appendChild(tableDataPages);

    tableRowStatus.appendChild(tableHeadStatus);
    tableRowStatus.appendChild(tableDataStatus);

    tableRowChangeStatus.appendChild(tableHeadChangeStatus);

    tableDataChangeStatu.appendChild(label);
    select.appendChild(optionDefaut);
    select.appendChild(optionRead);
    select.appendChild(optionNotRead);
    tableDataChangeStatu.appendChild(select);

    tableRowChangeStatus.appendChild(tableDataChangeStatu);

    tableRowDelete.appendChild(tableHeadDelete);
    tableRowDelete.appendChild(span);

    tbody.appendChild(tableRowName);
    tbody.appendChild(tableRowAuthor);
    tbody.appendChild(tableRowPages);
    tbody.appendChild(tableRowStatus);
    tbody.appendChild(tableRowChangeStatus);
    tbody.appendChild(tableRowDelete);

    table.appendChild(tbody);

    card.appendChild(table);

    cardsContainer.appendChild(card);
      
    if (span) {
      span.addEventListener("click", () => {

        if (confirm(`Are you sure you want to delete ${book.name}?`)) {
          
          myLibrary.splice(parseInt(span.value, 1));
          cardsContainer.removeChild(card);

        }; 
    });

    book.added = true;

  };

      
};

 });
}

function populatePlaceholderBooks() {

  let bookName = "Lord Of The Rings";
  let bookAuthor = "J.R.R. Tolkien";
  let bookPages = "1178";
  let status = "Readed";

  addBookToLibrary(bookName, bookAuthor, bookPages, status);  

  bookName = "East of Eden";
  bookAuthor = "John Steinbeck";
  bookPages = "608";
  status = "Readed";

  addBookToLibrary(bookName, bookAuthor, bookPages, status);

  bookName = "Shogun";
  bookAuthor = "James Clavell";
  bookPages = "1152";
  status = "Not readed";

  addBookToLibrary(bookName, bookAuthor, bookPages, status);

}

populatePlaceholderBooks();
showAddedBooks();

