const { appendFile } = require("fs").promises;

module.exports = {
  addBook(title, author = "Me") {
    let newBook = appendFile(
      "booksRead.txt",
      `${title} by ${author}\n`,
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  },
};
