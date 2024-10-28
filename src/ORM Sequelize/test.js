const { Author, Book, Borrower, BorrowRecord } = require('./models');

async function testDatabase() {
  try {
    const authors = await Author.findAll({
      include: [{ model: Book, as: 'books' }]
    });
    console.log("All Authors:", JSON.stringify(authors, null, 2));

    const borrower = await Borrower.findOne({
      where: { name: 'John Doe' },
      include: [{ model: BorrowRecord, as: 'borrow_records', include: ['book'] }]
    });
    console.log("John Doe's Borrow Records:", JSON.stringify(borrower, null, 2));
  } catch (error) {
    console.error("Error in testDatabase:", error);
  }
}

testDatabase();
