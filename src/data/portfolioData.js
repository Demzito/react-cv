import Media0 from "../media/project0.png"
import Media00 from "../media/SignUp.png"
import Media01 from "../media/Trending.png"
import Media02 from "../media/Profil.png"
import Media1 from "../media/project1.png"
import Media12 from "../media/project12.png"
import Media13 from "../media/project13.png"
import Media14 from "../media/project14.png"
import Media15 from "../media/project15.png"
import Media2 from "../media/project2.jpg"
import Media3 from "../media/project3.jpg"
import Media4 from "../media/project4.jpg"
import Media5 from "../media/project5.jpg"

export const portfolioData = [
  {
    id: 1,
    name: 'DemzWork',
    languages: ['projets','javascript','react', 'nodejs'],
    languagesIcons: ['fab fa-js','fab fa-react', 'fa-brands fa-node-js'],
    source: 'https://github.com/Demzito/DemzWork',
    info: "Version 2.0 du réseau social de mon dernier projet OC. Stack: MongoDB, Express, React, Nodejs. Featuring JWT, Mongoose, Multer, Bcrypt, Redux, Sass.",
    picture: [Media0, Media00, Media01, Media02]
  },
  {
    id: 2,
    name: 'Grossiste Végétal',
    languages: ['projets','css', 'wordpress'],
    languagesIcons: ['fa-brands fa-wordpress', 'fa-brands fa-elementor'],
    source: 'https://grossistevegetal-vasserotmerle.com/',
    info: "Création d'un site vitrine Wordpress dans le domaine du végétal. Création du design (UX/UI) puis réalisation et mise en ligne.",
    picture: [Media1, Media12, Media13, Media14, Media15,]
  },
  {
    id: 3,
    name: 'Groupomania',
    languages: ['projets', 'javascript','react', 'php'],
    languagesIcons: ['fab fa-js','fab fa-react', 'fab fa-php'],
    source: 'https://github.com/Demzito/P7-Groupomania',
    info: "Le dernier projet de mon parcours OpenClassrooms, la réalisation d'un réseau social d'entreprise. Réalisation de la base de donnée MySql, de l'api et du frontend.",
    picture: [Media2]
  },
  {
    id: 4,
    name: 'Orinoco',
    languages: ['projets', 'javascript','css'],
    languagesIcons: ['fab fa-js','fab fa-css3-alt'],
    source: 'https://github.com/Demzito/P5-Orinoco',
    info: "Projet OpenClassrooms de création d'un site de e-commerce. Pour ce projet une base de donnée et des spécifications des paramètres de l'API m'était fourni. J'ai réalisé l'intégralité du front-end, la mise en place d'un panier ainsi que les requêtes de l'API et les contrôles REGEX. Les Promises sont utilisées pour éviter les callback hell.",
    picture: [Media3]
  },
  {
    id: 5,
    name: 'API sécurisée',
    languages: ['projets', 'javascript','php'],
    languagesIcons: ['fab fa-js','fab fa-php'],
    source: 'https://github.com/Demzito/P6-CreationAPI',
    info: "Projet OpenClassrooms de la création d'une API sécurisée. Le projet utilise le framework Express, il est hebergé par un serveur Node.JS et utilise une base de donnée MongoDB Atlas. L'application utilise un plug-in Mongoose pour garantir que toutes les erreurs de la base de données sont signalées.",
    picture: [Media4]
  },
  {
    id: 6,
    name: "Optimisation SEO",
    languages: ['projets', 'javascript','css'],
    languagesIcons: ['fab fa-js', 'fab fa-css3-alt'],
    source: 'https://github.com/Demzito/P4-opti',
    info: "Projet OpenClassrooms d'optimisation du référencement,de l'accessibilité et des temps de chargement d'un site existant.",
    picture: [Media5]
  },
]