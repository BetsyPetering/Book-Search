import axios from 'axios';

export default {
  // Gets all books
  getBooks: function (input) {
    console.log('inside API.js');
    return axios.get('/api/books', { params: { q: 'title:' + input } });
  },
  // Gets the book with the given id
  getWishList: function () {
    return axios.get('/api/books/');
  },
  // Deletes the book from the Wish List using its id
  deleteWishListBook: function (id) {
    return axios.delete('/api/books/' + id);
  },
  // Saves a book to the WishList database
  saveBook: function (bookStats) {
    return axios.post('/api/books', bookStats);
  },
};
