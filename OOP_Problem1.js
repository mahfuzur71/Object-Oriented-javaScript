// 1. Create a new constructor function, Book, which logs books in the school library (id, title, author, tags[]). Add ids, titles, and authors for your two favorite books. Use the prototype keyword to add a tag property to the books. Create 5 book objects and add at least one tag to each of your books.

function Book(id, title, author, tags = []) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.tags = tags;
}

Book.prototype.tag = function (tag) {
  this.tags = [...this.tags, tag];
};

const book1 = new Book(1, "বৃহন্নলা", "Humayun Ahmed");
book1.tag("Mysterious");
const book2 = new Book(2, "Nil Poddo", "Humayun Ahmed");
book2.tag("Novel");
const book3 = new Book(3, "নৌকাডুবি", "রবীন্দ্রনাথ ঠাকুর");
book3.tag("Novel");
const book4 = new Book(4, "দীপু নাম্বার টু", "মুহম্মদ জাফর ইকবাল");
book4.tag("Child Novel");
const book5 = new Book(5, "হাজার বছর ধরে", "জহির রায়হান");
book5.tag("Classic Novel");

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
