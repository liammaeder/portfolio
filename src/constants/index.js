import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    bootstrap,
    nodejs,
    git,
    docker,
    mip,
    freelance,
    iomi,
    threejs,
    stratusolve,
    systemsio,
    linkedin,
    facebook,
    githubbtn,
    outsystems
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "skill",
        title: "Skills",
    },
    {
        id: "project",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const socials = [
    {
        icon: linkedin,
        name: "linkedin",
        link: "https://www.linkedin.com/in/liam-kenneth-maeder/"
    },
    {
        icon: facebook,
        name: "facebook",
        link: "https://www.facebook.com/Monarkle98/"
    },
    {
        icon: githubbtn,
        name: "github",
        link: "https://github.com/liammaeder/"
    },
]

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Fullstack Developer",
        icon: creator,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Three Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "Outsystems",
        icon: outsystems
    }
];

const experiences = [
    {
        title: "Junior Software Engineer",
        company_name: "MIP Holdings",
        icon: mip,
        iconBg: "#4a4d66",
        date: "May 2018 - April 2022",
        points: [
            "Developing and maintaining our automated regression scripts, using groovy and Java.",
            "Managing the admin of our Jira Server instance as well as creating plugins to assist our reporters, using mainly Java and Groovy as well as JavaScript.",
            "Generating and handling the reporting of our scrum, weekly and monthly sprints.",
            "Participating in weekly Estimations and Sprint Reviews.",
        ],
    },
    {
        title: "Freelance Software Engineer",
        company_name: "",
        icon: freelance,
        iconBg: "#E6DEDD",
        date: "April 2022 - May 2022",
        points: [
            "Studied various JavaScript frameworks as well as PHP8.",
            "Completed the Scrumba online ReactJS course.",
        ],
    },
    {
        title: "Intern Software Developer",
        company_name: "StratuSolve",
        icon: stratusolve,
        iconBg: "#4a4d66",
        date: "June 2022 - Sep 2023",
        points: [
            "Developing and maintaining web applications using Divblox.php, JavaScript, PHP and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser and platform compatibility.",
            "Participating in Estimations and Dev Gyms to strengthen our skills in development.",
        ],
    },
    {
        title: "Junior Outsystems Developer",
        company_name: "Systems iO",
        icon: systemsio,
        iconBg: "#E6DEDD",
        date: "Sep 2023 - Present",
        points: [
            "Developing and maintaining web applications using Outsystems.",
            "Working with Ops and Devs to develop quality and robust solutions.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Iomi",
        description:
            "A free invoicing application, that allows users to keep track of their earnings, stock and customers with ease.",
        tags: [
            {
                name: "javascript",
                color: "orange-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
            {
                name: "mysql",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: iomi,
        source_code_link: "https://www.iomi.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };