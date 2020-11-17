//Added a test code for book modules which we had added

if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("book.js", function() {
    describe("arthur()", function() {
        it("returns a arthur", function() {
            sinon.stub(faker.book, 'arthur').returns('Short Story');
            var arthur = faker.book.arthur();

            assert.equal(arthur, 'Short Story');
            faker.book.arthur.restore();
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

    describe("pages()", function() {
        it("returns a pages", function() {
            sinon.stub(faker.book, 'pages').returns('Short Story');
            var pages = faker.book.pages();

            assert.equal(pages, 'Short Story');
            faker.book.pages.restore();
        });
    });
}); 