import gitview from '../../assets/projectpics/gitview.png';
import celeblook from '../../assets/projectpics/celeblook.JPG';
import personalwebsite from '../../assets/projectpics/personalwebsite.png';
import inventory from '../../assets/projectpics/inventory.png';
import budget from '../../assets/projectpics/budget.png';

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
      'A group project done in which we created an REST API using Node.js and Express. The project was done to create an inventory tracking system allowing users to input, edit, delete, information pretaining to items in the warehouses.',
    git: 'https://github.com/moabre/inventory',
    demo: '',
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
      'Yes, this very website that you are on ! Built using React.js, styled components, react scroll, and much much more !',
    git: 'https://github.com/moabre/arweb-v1',
    demo: '',
  },
];

export default projects;
