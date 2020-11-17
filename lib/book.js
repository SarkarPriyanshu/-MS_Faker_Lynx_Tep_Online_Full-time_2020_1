// Added a book.js file functions to choose random data 

/**
*
@namespace faker.book
*
*/

var Book = function(faker){
    var self = this;
    
    /**
     * arthor
     *
     * @method faker.book.author
     */
    self.author = function() {
        return faker.random.arrayElement(faker.definitions.book.author);
    };

    self.author.schema = {
        "description": "Generates a author.",
        "sampleResults": ["George Orwell", "J. K. Rowling", "Kurt Vonnegut"]
    };

    /**
     * genre
     *
     * @method faker.book.genre
     */
    self.genre = function() {
        return faker.random.arrayElement(faker.definitions.book.genre);
    };

    self.genre.schema = {
        "description": "Generates a genre.",
        "sampleResults": ["Action and Adventure", "Anthology", "Fan-Fiction"]
    };

    /**
     * publiser
     *
     * @method faker.book.publisher
     */
    self.publisher = function() {
        return faker.random.arrayElement(faker.definitions.book.publisher);
    };

    self.publisher.schema = {
        "description": "Generates a publisher.",
        "sampleResults": ["Allen & Busby", "Black Diary", "Europa"]
    };

    /**
     * pages
     *
     * @method faker.book.pages
     */
    self.page = function() {
        return faker.random.arrayElement(faker.definitions.book.pages);
    };

    self.page.schema = {
        "description": "Generates a pages.",
        "sampleResults": ["240", "340", "373"]
    };

};

module["exports"] = Book;