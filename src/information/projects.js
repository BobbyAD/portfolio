import portfolio from "../images/portfolio.png";
import gnarly from "../images/gnarly.png";
import firefly from "../images/firefly.png";

const projects = [
    {
        name: "Firefly",
        description: `I worked together with nine other team members to create a coding game aimed at young children. My main efforts were spent on setting up the Firestore database, integrating the database with the front end, creating some of the account pages, and creating the system for animating the "firefly" on the game pages. to create a coding game aimed at young children. My main efforts were spent on setting up the Firestore database, integrating the database with the front end, creating some of the account pages, and creating the system for animating the "firefly" on the game pages.`,
        link: "https://projectfirefly-production.netlify.com/",
        git: "https://github.com/projectfirefly",
        image: firefly
    },
    {
        name: "Gnarly Funky",
        description: "Gnarly Funky is an exercise in random room generation and interaction with a Django back-end. I worked on a team with three other people to help create it. My main focuses were to help write the room generation algorithm and style the front end.",
        link: "https://gnarly-funky.netlify.com",
        git: "https://github.com/Gnarly-Funky/",
        image: gnarly
    },
    {
        name: "Portfolio",
        description: "This is the portfolio site you're currently on. I wrote the app from scratch using React, and will continue to iterate on it until I'm happy. Once I've got the styling where I like it, the next steps will be to push the project list and images on to a backend database, so I can update the site without taking it down.",
        link: "#top",
        git: "https://github.com/BobbyAD/portfolio",
        image: portfolio
    },
];

export default projects