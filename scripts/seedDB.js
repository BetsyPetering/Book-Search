const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
});

const bookSeed = [
  {
    title: 'Outlander',
    author: 'Diana Gabaldon',
    synopsis:
      'Here is the story that started it all, introducing two remarkable characters, Claire Beauchamp Randall and Jamie Fraser, in a spellbinding novel of passion and history that combines exhilarating adventure with a love story for the ages.',
    date: new Date(Date.now()),
  },
  {
    title: 'Educated: A Memoir',
    author: 'Tara Westover',
    synopsis:
      'Tara Westover was seventeen the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches. In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her father’s junkyard.',
    date: new Date(Date.now()),
  },
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
