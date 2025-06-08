import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
    name: "Tom Christer Schöön",
    title: "Front-End Developer/Designer",
    social: {
        github: "https://github.com/TomChrister",
        email: "tomchrister.dev@gmail.com",
    },
    about: {
        title: "My Background",
        description: "A front-end developer using React, TypeScript along with Tailwind.\n" +
            "          Proficient in programming and coding with a focus on\n" +
            "          front-end development and design. I'm also doing a 1-year\n" +
            "          online program for UX-design alongside work.\n" +
            "\n" +
            "          I'm currently learning to master TypeScript."
    },
    skills: [
        {
            skillName: "Frontend",
            skillIcon: <FaCode className={ BOOTSTRAP_FOR_SKILL_ICON }/>,
        },
        {
            skillName: "Design/UX",
            skillIcon: <FaPalette className={ BOOTSTRAP_FOR_SKILL_ICON }/>,
        },
        {
            skillName: "ReactJS",
            skillIcon: <FaReact className={ BOOTSTRAP_FOR_SKILL_ICON }/>,
        },
    ],
    projects: [
        {
            id: "project1",
            title: "Holidaze",
            description: "⚡ This project is a fully functional accommodation " +
                "booking application built with React, TypeScript, and Tailwind CSS, using the Holidaze API by Noroff. It includes pages and features for " +
                "browsing venues, booking stays, and managing listings and bookings as a venue manager.",
            tags: [
                "reactjs",
                "typescript",
                "tailwindcss",
                "figma"
            ],
            link: "https://github.com/TomChrister/holidaze",
            live: "https://holidaze-eta.vercel.app/",
            image: "/holidaze.png",
        },
        {
            id: "project2",
            title: "MINISTORE",
            description: "⚡ This project is a fully functional eCommerce store built with React, " +
                "using the API provided by Noroff. The app includes various pages and " +
                "features such as product listing, product details, shopping cart, checkout, and a contact form.",
            tags: [
                "reactjs",
                "tailwindcss",
                "Zuztand",
            ],
            link: "https://github.com/TomChrister/react-eCom",
            live: "https://minishop-react.vercel.app/",
            image: "/ministore.png"
        },
        {
            id: "project3",
            title: "BidWise",
            description: "👨‍🎨 On this website you are able to search, filter and share articles." +
                " As a logged-in user you are also able to create, edit and delete articles with API requests." +
                " Login details are provided on the login page, feel free to test out the page.",
            tags: [
                "html",
                "tailwindcss",
                "javascript",
                "figma"
            ],
            link: "https://github.com/TomChrister/auction-website",
            live: "https://auction-bidwise.vercel.app/",
            image: "/Bidwise.png",
        },
    ]
};
export default data;
