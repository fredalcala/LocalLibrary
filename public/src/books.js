function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  // function should return an array containing two arrays
  // one array is for returned books, one is for borrowed books
  // ternary operator shortens code by simply moving books where they belong in each array
  return books.reduce((acc, book) => {
    book.borrows[0].returned ? acc[1].push(book) : acc[0].push(book);
    return acc;
  }, [[],[]]);
}

function getBorrowersForBook(book, accounts) {
  let borrowerId = book.borrows.map(({id}) => id).slice(0,10);
  let borrowerList = [];
  for (let id in borrowerId) {
    const borrower = accounts.find((account) => account.id === borrowerId[id]);
    borrower.returned = book.borrows.find((borrow) => borrow.id === borrowerId[id]).returned;
    borrowerList.push(borrower);
  }
  return borrowerList;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
