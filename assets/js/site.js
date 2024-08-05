// write cool JS here!!
const myWarning = 'Jeg er en advarsel!'
const myError = 'Jeg er en fejl!!!'
const myInfo = 'Jeg er en konsol info: En variabel';
const myBooks = ["The Catcher in the Rye",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Great Gatsby",
    "The Hobbit",
    "Harry Potter and the Sorcerer's Stone",
    "The Lord of the Rings",
    "The Da Vinci Code",
    "The Hunger Games"]

console.clear();
console.time();
console.group('Konsol Opgave');
console.log('Jeg er en almindelig konsol log');
console.info(myInfo);
console.warn(myWarning);
console.error(myError);
console.table(myBooks);
console.timeLog();

