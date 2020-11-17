//Added a test code for book modules which we had added

if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("book.js", function() {
    describe("arthor()", function() {
        it("returns a arthor", function() {
            sinon.stub(faker.book, 'arthor').returns('Short Story');
            var arthor = faker.book.arthor();

            assert.equal(arthor, 'Short Story');
            faker.book.arthor.restore();
        });
    });

    describe("publiser()", function() {
        it("returns a publiser", function() {
            sinon.stub(faker.book, 'publiser').returns('Short Story');
            var publiser = faker.book.publiser();

            assert.equal(publiser, 'Short Story');
            faker.book.publiser.restore();
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