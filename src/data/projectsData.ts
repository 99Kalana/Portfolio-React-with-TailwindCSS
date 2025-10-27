export interface Project {
    id: number;
    title: string;
    description: string;
    images: string[];
    githubLink: string;
    technologies: string[];
    liveLink?: string; 
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Book Club Library Management (MERN Stack)",
        description: "A full-stack library management system built for librarians. Features a RESTful API with Node.js/Express.js, a MongoDB database, secure user authentication, comprehensive CRUD operations for books/readers, and a streamlined lending/returns process. Engineered with React/TypeScript and Tailwind CSS for a professional, responsive UI.",
        images: [
            // CORRECTED PATHS: Start with /projects/
            "public/projects/1/1.png",
            "/projects/1/2.png",
            "/projects/1/3.png",
        ],
        githubLink: "https://github.com/99Kalana/Book-Club-Library-Management-Backend.git", 
        technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "MERN Stack", "JWT"]
    },
    {
        id: 2,
        title: "Honda Cub Atheneum (Spring Boot & MySQL)",
        description: "A full-featured web platform for a global motorcycle community. Backend built with Java and Spring Boot to create a multi-vendor e-commerce marketplace. Features include secure authentication (QR code logi), advanced search for spare parts, and comprehensive order tracking.",
        images: [
            // CORRECTED PATHS: Start with /projects/
            "/projects/2/1.png", 
            "/projects/2/2.png",
            "/projects/2/3.png",
        ],
        githubLink: "https://github.com/99Kalana/Springboot-Web-App-Project-HondaCub-Atheneum.git", 
        technologies: ["Java", "Spring Boot", "MySQL", "Microservices", "RESTful API", "Secure Authentication"],
        liveLink: "https://youtu.be/yyYzYcrJMrY?si=zBXMn-I--ECSdqVX"
    },
    {
        id: 3,
        title: "GreenScape Mobile Application (React Native)",
        description: "A single-user mobile application for plant enthusiasts developed using React Native and Firebase. Implemented core CRUD operations for managing a personal collection, setting watering/fertilizing reminders, and integrating a third-party API for plant identif from photos.",
        images: [
            // CORRECTED PATHS: Start with /projects/
            "/projects/3/1.png", 
            "/projects/3/2.png",
            "/projects/3/3.png",
        ],
        githubLink: "https://github.com/99Kalana/GreenScape-React-Native-Expo-App.git",
        technologies: ["React Native", "Firebase", "Android/iOS", "CRUD", "API Integration"],
        liveLink: "https://youtu.be/oWZTPoYdmxE?si=ij0wzNMa6aLiBJYC"
    },
    {
        id: 4,
        title: "Personal Portfolio Website (First Site)",
        description: "The first portfolio built from scratch to showcase my HTML, CSS and Javascript skills. Developed with HTML and JavaScript for robustness and styled using CSS for efficiency and responsiveness.",
        images: [
            // CORRECTED PATHS: Start with /projects/
            "/projects/4/1.png", 
            "/projects/4/2.png",
            "/projects/4/3.png",
        ],
        githubLink: "https://github.com/99Kalana/my-portfolio", 
        technologies: ["HTML", "JavaScript", "CSS", "Responsive Design"],
        liveLink: "https://portfolio-project-taupe-two.vercel.app/"
        
    },
    {
        id: 5,
        title: "Pet Empire Animal Hospital Management System",
        description: "A foundational standalone desktop application built with Java and JavaFX (front end) and MySQL (database). The project was designed using a Layered Architecture to enforce separation of concerns, organization, and maintainability. It served as a practical application of core concepts like Object-Oriented Programming (OOP) and database integration. The system streamlines clinic operations by managing client/pet records, automated billing, and appointment/staff details.",
        images: [
            // CORRECTED PATHS: Start with /projects/
            "/projects/5/1.png", 
            "/projects/5/2.png",
            "/projects/5/3.png",
        ],
        githubLink: "https://github.com/99Kalana/Pet-Empire-Animal-Hospital---Project-.git", 
        technologies: ["Java", "JavaFX", "MySQL", "Layered Architecture", "OOP", "Database Integration", "Desktop Application"]
    }
];