function findAccountById(accounts, id) {
  return accounts.find((accounts) => accounts.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last < accountB.name.last ? -1 : 1));
}

function getTotalNumberOfBorrows(account, books) {
//should return the number of times an account has created a 'borrow' record
return books.reduce((totalBorrows, {borrows}) => {
  if (borrows.some((checkedOut) => checkedOut.id === account.id)) totalBorrows++;
  return totalBorrows
}, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
return books.filter((book) => book.borrows[0].id === account.id && 
!book.borrows[0].returned).map((book) => {book["author"] = authors.find((author) => author.id === book.authorId);
return book;
});
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
