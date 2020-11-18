//Added a test code for book modules which we had added

if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("book.js", function() {
    describe("author()", function() {
        it("returns a author", function() {
            sinon.stub(faker.book, 'author').returns('Virginia Woolf');
            var author = faker.book.author();

            assert.equal(author, 'Virginia Woolf');
            faker.book.author.restore();
        });
    });

    describe("genre()", function() {
        it("returns a genre", function() {
            sinon.stub(faker.book, 'genre').returns('Fan-Fiction');
            var genre = faker.book.genre();

            assert.equal(genre, 'Fan-Fiction');
            faker.book.genre.restore();
        });
    });

    describe("publisher()", function() {
        it("returns a publisher", function() {
            sinon.stub(faker.book, 'publisher').returns('Goops Unlimited');
            var publisher = faker.book.publisher();

            assert.equal(publisher, 'Goops Unlimited');
            faker.book.publisher.restore();
        });
    });

    describe("page()", function() {
        it("returns a page", function() {
            sinon.stub(faker.book, 'page').returns('423');
            var page = faker.book.page();

            assert.equal(page, '423');
            faker.book.page.restore();
        });
    });
}); 