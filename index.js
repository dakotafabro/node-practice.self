const addBook = require("./addBook");
const { readFile, readLine } = require("fs").promises;

const showBookList = async () => {
  let currentBooks = await readFile("./booksRead.txt", "utf-8");

  console.log(currentBooks);
};

process.stdin.on("data", (data) => {
  let input = data.toString().trim();

  if (input == 1) {
    console.log("you pressed 1");
  }
});
