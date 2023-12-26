const myLibrary = [];

function Book(name, author, pages, readStatus) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    

  }
  

  function addBookToLibrary() {

    let book = new Book(bookName, author, pages, readStatus);
    myLibrary.push(book);

  }



  addBookToLibrary();