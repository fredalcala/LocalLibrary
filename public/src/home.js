function getTotalBooksCount(books) {
return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((counter, book) => {!book.borrows[0].returned ? counter ++ : null;
    return counter;}, 0);
}

  function _getTop5(array) {
    array.sort((itemA, itemB) => itemB.count - itemA.count);
    return array.slice(0,5);
  }

function getBooksBorrowedCount(books) {
return books.reduce((counter, book) => {!book.borrows[0].returned ? counter ++ : null;
  return counter;}, 0);
  }

function getMostCommonGenres(books) {
  let genreList ={};
  books.forEach((book) => {
  (genreList[book.genre] == null) ? genreList[book.genre] = 1 : genreList[book.genre] += 1;})
  let bookArr = [];
  for (const [key, value] of Object.entries(genreList)) {
    bookArr.push({
      "name" : key,
      "count" : value
    });
  }
  //let genreList = Object.keys(genres);
  /*genreList.sort((bookA, bookB) => genres[bookA].length - genres[bookB].length);
  return genreList.slice(0,5);*/
  return _getTop5(bookArr);
}

function getMostPopularBooks(books) {
  let poppinBooks = [];
  books.forEach(({title, borrows}) => {
    poppinBooks.push({
      "name" : title,
      "count" : borrows.length
    });
  });
  return _getTop5(poppinBooks);
}

function getMostPopularAuthors(books, authors) {
  let poppinAuthors = [];
  authors.forEach((author) => {
    let journalist = {
      name: `${author.name.first} ${author.name.last}`, count: 0
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        journalist.count += book.borrows.length;
      }
    });
    poppinAuthors.push(journalist);
  });
  return _getTop5(poppinAuthors);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};




// check git
