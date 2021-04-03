import gitview from '../../assets/projectpics/gitview.png';
import celeblook from '../../assets/projectpics/celeblook.JPG';
import personalwebsite from '../../assets/projectpics/personalwebsite.png';
import inventory from '../../assets/projectpics/inventory.png';
import budget from '../../assets/projectpics/budget.png';
import reduxtest from '../../assets/projectpics/redux-website.png';
import graphchat from '../../assets/projectpics/graph-chat.png';
import socialNetwork from '../../assets/projectpics/social-network.png';
import jwtAuth from '../../assets/projectpics/JWT-auth.png';

const projects = [
  {
    img: gitview,
    title: 'GitView',
    description:
      ' A web application that takes the github username and displays the data in charts and dynamically generates a list of repos. Made with particle js so feel free to check out the demo and click away at the screen for some fun!',
    git: 'https://github.com/moabre/GitView',
    demo: 'https://trusting-kalam-802f3a.netlify.app/',
  },
  {
    img: socialNetwork,
    title: 'social-network',
    description:
      'This project is made using the MERN technology stack. Built with Material-UI, Redux, Express, Mongoose, JWT Auth, etc. The backend is built on Node and using the Express web framework. All the authentication is handled on the server and images are hosted on google firebase storage.',
    git: 'https://github.com/moabre/social-network',
    demo: 'https://social-network23.herokuapp.com/',
  },
  {
    img: budget,
    title: 'Budget',
    description:
      'A project I built within a few days. This was done to tackle the problem of keeping track of my receipts. Using tesseract.js, this website is able to take pictures as an input and convert it to text. ',
    git: 'https://github.com/moabre/budget',
    demo: '',
  },
  {
    img: inventory,
    title: 'Inventory',
    description:
      'A group project done in which we created a REST API using Node.js and Express. The project was done to create an inventory tracking system allowing users to input, edit, delete, information pretaining to items in the warehouses.',
    git: 'https://github.com/moabre/inventory',
    demo: 'https://instock.herokuapp.com/',
  },
  {
    img: celeblook,
    title: 'CelebLook',
    description:
      'A web application that takes an input image and then determines the likeness of the person in the picture to celebrities using the clarifai api.',
    git: 'https://github.com/moabre/celebrityclone',
    demo: 'https://peaceful-perlman-54903c.netlify.app/',
  },
  {
    img: personalwebsite,
    title: 'Personal Website',
    description:
      'Yes, this very website that you are on! Built using React.js, styled components, react scroll, and much much more!',
    git: 'https://github.com/moabre/arweb-v1',
    demo: '',
  },
  {
    img: reduxtest,
    title: 'Basic Redux App',
    description:
      'This project was setup to experiment with redux and create a small booklist.',
    git: 'https://github.com/moabre/redux-test',
    demo: 'https://trusting-dubinsky-2def93.netlify.app/',
  },
  {
    img: jwtAuth,
    title: 'JWT-Auth',
    description:
      'This project is made using Node, Mongoose, and MongoDb. The purpose was to create a template for user auth and ensure protected routes on the back end.',
    git: 'https://github.com/moabre/JWT-auth',
    demo: '',
  },
  {
    img: graphchat,
    title: 'Graph Chat',
    description:
      'This project uses webpack, node, graphql, websockets, react-bootstrap, and express. Have fun and open multiple links and converse!',
    git: 'https://github.com/moabre/graph-chat',
    demo: 'https://friendly-newton-244193.netlify.app/',
  },
];

export default projects;
