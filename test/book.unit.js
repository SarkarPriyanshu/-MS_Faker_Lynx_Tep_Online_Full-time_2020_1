//Added a test code for book modules which we had added

if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("book.js", function() {
    describe("author()", function() {
        it("returns a author", function() {
            sinon.stub(faker.book, 'author').returns('Short Story');
            var author = faker.book.author();

            assert.equal(author, 'Short Story');
            faker.book.author.restore();
        });
    });

    describe("publisher()", function() {
        it("returns a publisher", function() {
            sinon.stub(faker.book, 'publisher').returns('Short Story');
            var publisher = faker.book.publisher();

            assert.equal(publisher, 'Short Story');
            faker.book.publisher.restore();
        });
    });

    describe("genre()", function() {
        it("returns a genre", function() {
            sinon.stub(faker.book, 'genre').returns('Short Story');
            var genre = faker.book.genre();

            assert.equal(genre, 'Short Story');
            faker.book.genre.restore();
        });
    });

    describe("page()", function() {
        it("returns a page", function() {
            sinon.stub(faker.book, 'page').returns('Short Story');
            var page = faker.book.page();

            assert.equal(page, 'Short Story');
            faker.book.page.restore();
        });
    });
}); 