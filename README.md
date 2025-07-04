# Frontend Mentor - Shortly URL Shortening API Challenge Solution

This repository contains my solution to the [Shortly URL shortening API Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). The goal of this project is to build a responsive URL shortening landing page that interacts with a public API.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built With](#built-with)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This project allows users to shorten URLs, view a list of their shortened links (persisted after refresh), and copy links to the clipboard. The layout is fully responsive and adapts to different screen sizes.

## Features

- Responsive design for all device sizes
- Shorten any valid URL using a public API
- Persistent list of shortened links (local storage)
- Copy shortened links to clipboard with one click
- Error handling for empty input fields

## Screenshot

![Screenshot of the Shortly URL Shortening App](./screenshot.jpg)

## Links

- [Solution on Frontend Mentor](https://your-solution-url.com)
- [Live Site](https://your-live-site-url.com)

## Built With

- Semantic HTML5
- CSS custom properties
- Flexbox & CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)

## What I Learned

During this project, I improved my skills in:

- Consuming APIs in React
- Managing state and local storage for persistence
- Creating responsive layouts with CSS Grid and Flexbox
- Implementing copy-to-clipboard functionality

Example code snippet for copying to clipboard:

```js
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};
```

## Continued Development

In future projects, I plan to:

- Explore more advanced state management solutions
- Improve accessibility and keyboard navigation
- Add user authentication for personalized link management

## Useful Resources

- [MDN Web Docs - Using the Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Frontend Mentor Community](https://www.frontendmentor.io/community)

## Author

- [Your Name](https://www.your-site.com)
- [Frontend Mentor](https://www.frontendmentor.io/profile/yourusername)
- [Twitter](https://www.twitter.com/yourusername)

## Acknowledgments

Thanks to the Frontend Mentor community for feedback and inspiration!
