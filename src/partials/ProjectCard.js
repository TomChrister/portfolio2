import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project: { id, title, description, tags } }) => {
    return (
        <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
            <Link to={`/project/${id}`}>
                <h1 className="text-xl text-center font-bold">
                    {title} <FaExternalLinkAlt className="inline align-baseline" />
                </h1>
            </Link>
            <hr className="my-4" />
            <p>{description}</p>
            <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
                {tags.map((tag, index) => (
                    <div key={index} className="px-4 py-1 border-2 rounded-full">
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;

