# LinkSlice - URL Shortener

This project is a solution to the [Frontend Mentor Shortly URL Shortening API Challenge](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). LinkSlice is a responsive web application that allows users to shorten URLs using a public API, manage their shortened links, and copy them easily.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [What I Learned](#what-i-learned)
- [Future Improvements](#future-improvements)
- [Resources](#resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

LinkSlice lets users:
- Enter a URL and get a shortened version via a public API.
- View and manage a list of their shortened links (persisted in local storage).
- Copy shortened links to the clipboard with one click.
- Enjoy a fully responsive and accessible design.

## Features

- **Responsive Design:** Works on all device sizes.
- **URL Shortening:** Integrates with a public API to shorten URLs.
- **Persistent Links:** Stores shortened links in local storage.
- **Copy to Clipboard:** One-click copy functionality.
- **Error Handling:** User-friendly error messages for invalid input.

## Screenshots

![LinkSlice Screenshot](./screenshot.jpg)

## Demo

- [Live Demo](https://your-live-site-url.com)
- [Frontend Mentor Solution](https://your-solution-url.com)

## Built With

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Semantic HTML5
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/linkslice-url-shortener.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## What I Learned

- How to consume APIs in React.
- Managing state and local storage for data persistence.
- Creating responsive layouts with Tailwind CSS, Grid, and Flexbox.
- Implementing copy-to-clipboard functionality.

**Example: Copy to Clipboard**
```js
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};
```

## Future Improvements

- Add user authentication for personalized link management.
- Improve accessibility and keyboard navigation.
- Add analytics for shortened links.
- Enhance error handling and user feedback.

## Resources

- [MDN Web Docs - Using the Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Frontend Mentor Community](https://www.frontendmentor.io/community)

## Author

- [codewithstephen](https://www.your-site.com)
- [Frontend Mentor](https://www.frontendmentor.io/profile/codewithstephen)
- [Twitter](https://www.twitter.com/yourusername)

## Acknowledgments

Thanks to the Frontend Mentor community for feedback and inspiration!
