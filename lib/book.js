// Added a book.js file functions to choose random data 

/**
*
@namespace faker.book
*
*/

var Book = function(faker){
    var self = this;
    
    /**
     * arthur
     *
     * @method faker.book.arthur
     */
    self.arthur = function() {
        return faker.random.arrayElement(faker.definitions.book.arthur);
    };

    self.arthur.schema = {
        "description": "Generates a arthur.",
        "sampleResults": ["Fable", "Legend", "Short Story"]
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
        "sampleResults": ["Fable", "Legend", "Short Story"]
    };

    /**
     * publiser
     *
     * @method faker.book.publiser
     */
    self.publiser = function() {
        return faker.random.arrayElement(faker.definitions.book.publiser);
    };

    self.publiser.schema = {
        "description": "Generates a publiser.",
        "sampleResults": ["Fable", "Legend", "Short Story"]
    };

    /**
     * pages
     *
     * @method faker.book.pages
     */
    self.pages = function() {
        return faker.random.arrayElement(faker.definitions.book.pages);
    };

    self.genre.schema = {
        "description": "Generates a pages.",
        "sampleResults": ["Fable", "Legend", "Short Story"]
    };

};

module["exports"] = Book;