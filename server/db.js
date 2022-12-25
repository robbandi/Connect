const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/collaborative-drawing-app';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  connection.close(() => {
    console.log('Mongoose connection closed through app termination');
    process.exit(0);
  });
});

module.exports = connection;