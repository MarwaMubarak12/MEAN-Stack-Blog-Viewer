# MEAN Stack Blog Viewer

A simple web application built with the MEAN Stack that displays a list of blog post titles. Clicking on a title reveals a short static description on the same page.

## Technologies Used

- **MongoDB** - Not used (static data)
- **Express.js** - Backend framework
- **Angular** - Frontend framework
- **Node.js** - Runtime environment

## Project Structure
blog-viewer/
├── blog-backend/      # Node.js + Express server
└── blog-frontend/     # Angular application

## How to Run

### Backend
```bash
cd blog-backend
npm install
node server.js
```
Server runs on: `http://localhost:3000`

### Frontend
```bash
cd blog-frontend
npm install
ng serve
```
App runs on: `http://localhost:4200`

## API Endpoint

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts | Returns list of blog posts |

## Features

- Displays a list of pre-defined blog post titles
- Clicking a title reveals a short static description
- No user input required
- No database or authentication needed
