const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

// =======Starts here =========

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// DESTRUCTURING
/*
const book = getBook(2);
book;

// const title = book.title;
// const author = book.author;

// create obj destructure
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

// primaryGenres = genres[0];
// secondaryGenres = genres[1];

// using destructure
// REST-SPREED OPERATOR
const [primaryGenres, ...otherGenres] = genres;

console.log(title, ",", genres);
console.log(primaryGenres, otherGenres);

// using the spread operator
const newGenres = ["epic fantasy", ...genres];
newGenres;

const updatedBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",
  // to overwriting an existing property
  pages: 1210,
};
updatedBook;

//======= ARROW FUNCTION =====
// function getYear(str){
//   return str.split("-")[0]
// }
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// TEMPLATE LITERALS
const summary = `${title}, is a book with a ${pages} pages, which was written by ${author} 
which was published on ${getYear(publicationDate)}. the has ${
  // an example  ternaries operator inside a template strings
  hasMovieAdaptation ? " " : "not"
} adapted as a movie `;
summary;

// TERNARIES OPERATORS (IF- ELSEIF- ELSE STATEMENT)
const pagesRange =
  pages > 1000 ? "over a thousand pages " : "less than one thousand pages ";
pages;

console.log(pagesRange);

// ARROW FUNCTION
// help in writing quick and short line of code

// example  long function
/*
function getYear(str) {
  return str.split("-")[0] 
} 

console.log(getYear(publicationDate));
*/

// arrow function example
/*
const getYear = (str) => str.split("-")[0] // can also used return {}
console.log(getYear(publicationDate));
*/

// SHORT CIRCUITING AND LOGICAL OPERATORS &&, ||, ??

// ======= "AND '&&' Operators" ========
/*
console.log(true && "this is false value"); // return false when the first  value is true  can be 0, '', null, undefined
console.log(0 && "some strings");

// e.g
const getGenres = genres[2] && "this is not available in the is book catalog ";
console.log(getGenres);

// ======= "OR '||' Operators" ========
console.log(true || "some strings"); // return when the first value is true
console.log(false || "some strings");

console.log(book.translations.chinese);

// e.g
const spanishTranslation =
  book.translations.spanish || "is not in the books categories";
console.log(spanishTranslation);
*/
// error can be found
// const countWrong = book.reviews.librarything.reviewsCount|| "NO DATA"
// console.log(countWrong); // supposed to be 0 no =>

// ======= "NUllising  '??' Operators" ========
//e.g
// const countReview = book.reviews.librarything.reviewsCount ?? "No Data"
// console.log(countReview);

// OPTIONAL CHAINING
// function getTotaReviewCount(book) {
//   const goodread = book.reviews.goodreads.reviewsCount;
//   const librayThing = book.reviews.librarything?.reviewsCount ?? 0; // using the optionally '?'
//   librayThing; // to confirm

//   return goodread + librayThing;
// }

// console.log(getTotaReviewCount(book));

// ===== ARRAY METHODS ===========
//===========================================
const books = getBooks();
// ------ ARRAY MAP METHOD -------------
/*
books;
// e.g
const x = [1, 2, 3, 4, 5].map((el) => el * 6);
console.log(x);

// array for title for all the books
const getTitle = books.map((book) => book.title);
console.log(getTitle);

// get all the books authors
const booksAuthor = books.map((book) => book.author);
console.log(booksAuthor);

// get all the id's for books
const idBooks = books.map((book) => book.id);
console.log(idBooks);

// to get the title and the author together
// 1st method
const essentialData = books.map((book) => {
  return {
    id: book.id,
    title: book.title,
    author: book.author,
  };
});
console.log(essentialData);

// 2nd method
function getTotaReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  const librayThing = book.reviews.librarything?.reviewsCount ?? 0; // using the optionally '?'
  librayThing; // to confirm

  return goodread + librayThing;
}

const essentialData2 = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: getTotaReviewCount(book),
}));

console.log(essentialData2);

const idAndgenres = books.map((book) => ({
  id: book.id,
  genres: book.genres,
}));

// console.log(idAndgenres);
*/
// ===== FILTER METHODS ===========
//===========================================
/*
const longBooks = books.filter((book) => book.pages > 500); // this books.filter(book => *** will return a condition of 'IF OR ELSE I.E TRUE OR FALSE ** )
console.log(longBooks);

const longBooks2 = books
  .filter((book) => book.pages > 700)
  .filter((book) => book.hasMovieAdaptation);
longBooks2;

// filter the adventure Books
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

// filter for fantasy
const fantasy = books
  .filter((book) => book.genres.includes("fantasy"))
  .map((book) => book.author);
fantasy;

*/

// ===== ARRAY REDUCE METHODS ===========
//===========================================
/*
const NumberOfPages = books.reduce((acc, book) => acc + book.pages, 0);
NumberOfPages;

// ===== ARRAY SORT METHODS ===========
//===========================================
const arr = [3, 7, 1, 9, 6, 10, 23];
const sorted = arr.sort((a, b) => b - a);
sorted;

// sort books
const sortBooks = books.map((book) => book.author); //.sort((a, b) => b - a )
sortBooks;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

*/

// ===== IMMUTABLE ARRAY ===========
//===========================================
/*
const newBook = {
  id: 6,
  title: "harmony in  the cloud",
  author: "harmony",
};

//1.  Add new array
const newUpdatedBook = [...books, newBook];
newUpdatedBook;

// 2 Delete book object from array
const booksAfterDelete = newUpdatedBook.filter((book) => book.id !== 3);
booksAfterDelete


// 3 Update  book object from array
const bookAfterUpdate = booksAfterDelete.map((book) =>book.id === 1 ? {} : book )
bookAfterUpdate

// can still be 
const bookAfterUpdate2 = booksAfterDelete.map((book) =>book.id === 1 ? {...book, pages: 1223} : book )
bookAfterUpdate2

*/

// ===== ASYNCHRONOUS JS PROMISES ===========
//===========================================
fetch('https://jsonplaceholder.typicode.com/todos').then()
