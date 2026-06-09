require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const posts = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    description: 'Web development is a broad field that includes designing and building websites and applications, using technologies like HTML, CSS, and JavaScript.'
  },
  {
    id: 2,
    title: 'What is the MEAN Stack?',
    description: 'MEAN Stack is a set of technologies consisting of MongoDB, Express, Angular, and Node.js, used to build full-stack web applications.'
  },
  {
    id: 3,
    title: 'The Importance of REST API',
    description: 'REST API is a communication method between frontend and backend that relies on HTTP requests and returns data in JSON format.'
  },
  {
    id: 4,
    title: 'Introduction to Angular',
    description: 'Angular is a framework from Google for building web applications, based on TypeScript, providing an organized system for components and services.'
  }
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(` http://localhost:${PORT}/api/posts`);
});