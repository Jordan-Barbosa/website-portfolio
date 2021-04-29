import type { Project } from 'ROOT';

export const PROJECTS: Project[] = [
  {
    technology: ['React', 'Redux', 'NodeJS', 'Express.js', 'Mongoose'],
    _id: '5e55bc97f278e11ae0c29701',
    name: 'Old portfolio website',
    url: 'https://old-jordanbarbosa-portfolio.herokuapp.com/',
    github: 'https://github.com/jordanjordanb1/old-portfolio',
    desc:
      "This is V1 of my portfolio website. It was created more as a proof of concept. But as I didn't like it too much, due to complexity, I created another one.",
    isHeroku: true,
  },
  {
    technology: ['React', 'Redux', 'NodeJS', 'Express.js', 'SCSS', 'Passport.js'],
    _id: '5e5ab4a1989ebd2d343cbb7b',
    name: 'Jetcakes Project',
    url: 'https://jetcakes-project.herokuapp.com/',
    github: 'https://github.com/jordanjordanb1/jetcake-project',
    desc:
      'This is a simple project for the Jetcakes challenge. It was created with authentication, using passport.js. Feel free to try it out, and login in with either the default user, or create your own. The default user is: test@user.com with the password: Password1 (capital P)',
    isHeroku: true,
  },
  {
    technology: ['React', 'Redux', 'NodeJS', 'Express.js'],
    _id: '5ddc7fd53fe78a46803cba03',
    name: 'Movie Search',
    url: 'https://simplemoviesearchapp.herokuapp.com/',
    github: 'https://github.com/jordanjordanb1/movie-search',
    desc: 'A simple movie search app that utilizes the OMDB API',
    isHeroku: true,
  },
  {
    technology: ['React', 'Redux', 'NodeJS', 'Express.js', 'Mongoose'],
    _id: '5dd03edd9b062930984d7ccc',
    name: 'My portfolio website',
    url: 'https://jordanbarbosa.com',
    github: 'https://github.com/jordanjordanb1/portfolio',
    desc:
      'This is the current website that your are on. I created it as, obviously, my portfolio. It is the 2nd itteration of my portfolio.',
    isHeroku: false,
  },
  {
    technology: ['React', 'Redux', 'NodeJS', 'Express.js', 'TypeScript', 'SCSS', 'IndexedDB'],
    _id: '5dfc089b266a9e1b20a7b6ea',
    name: 'Todo App',
    url: 'https://asimpletodoapp.herokuapp.com/',
    github: 'https://github.com/jordanjordanb1/todo-list',
    desc: 'A simple todo app that utilizes the IndexedDB API in the browser',
    isHeroku: true,
  },
];
