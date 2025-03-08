import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'iNoteBook Web App',
        description: "I have developed an iNotebook Web App which is • Built using React, Node.js, Express, and MongoDB to provide a seamless note-taking experience. • Implemented user authentication and authorization, allowing users to sign up and log in securely. • Utilized MongoDB for efficient data storage and retrieval, ensuring scalability and reliability of the application. • Designed a clean and intuitive UI with React for easy navigation and smooth user interaction. • Tested and optimized APIs using Postman to enhance performance and security.",
        tools: ['React','Express', 'MongoDB', 'Nodejs', 'Postman'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'JobPortal Web App',
        // description: 'I have designed and developed a a real-time chat application , a travel agency in Armenia. I Implemented a responsive user interface using HTML and CSS for seamless interaction across devices.. The app Utilizes Socket.io library for enabling real-time bidirectional event-based communication between clients and server. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        description: 'I have designed and developed JobPortal, a modern web application using React, Node.js, Express, and MongoDB. The front-end is built with Vite and styled using Tailwind CSS and ShadCN UI, ensuring a sleek and responsive user interface. The backend is powered by Express.js and MongoDB, handling efficient data storage and retrieval. I utilized Postman for API testing and validation, ensuring robust backend functionality. The application provides a seamless experience for job seekers and employers with real-time updates and secure authentication.',
        tools: ['HTML', 'Tailwind CSS', "JavaScript", "Nodejs", "Socket.io"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Portfolio Website',
        description: 'Software Developer Portfolio Website built with next.js and tailwind CSS that helps you showcase your work and skills as a software developer and My website is designed to be user-friendly and easily customizable, making it perfect for both developers and freelancers.',
        tools: ['React', 'Bootstrap', 'SCSS','Express', 'Tailwind CSS'],
        code: '',
        role: 'frontend  Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Snack Game',
        description: "I developed a  Snake Game using HTML, CSS, and JavaScript. This interactive game provides a smooth and engaging user experience with dynamic gameplay mechanics. Implemented collision detection, score tracking, and responsive controls to enhance player engagement. Ensured an optimized and efficient code structure for seamless performance across different devices.",
        tools: ['HTML', 'CSS', 'JS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'frontend  Developer',
    },
    // {
    //     id: 5,
    //     name: 'BookStore Application ',
    //     description: "•	React.js is used to build a responsive and dynamic user interface. Users can browse books, view book details.•	Secure user authentication is implemented using JWT (JSON Web Tokens). Users can register, log in, and log out.The backend server is developed using Node.js and Express.js. It provides RESTful API endpoints for managing books, users.",
    //     tools: ['React', 'ExpressJS', 'NodeJS', 'MongoDB'],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },