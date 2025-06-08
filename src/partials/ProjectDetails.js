import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../assets/data";

const ProjectDetails = () => {
    const { id } = useParams();
    const project = data.projects.find((p) => p.id === id);

    if (!project) return <div className="p-10 text-center">Prosject not found</div>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6">
                { project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg mb-6 w-full object-cover max-h-64 shadow-lg"
                    />
                ) }

                <h1 className="text-3xl font-bold mb-4">{ project.title }</h1>
                <p className="mb-6 text-gray-700">{ project.details }</p>

                <div className="mb-6 flex flex-wrap gap-2">
                    { project.tags.map((tag, index) => (
                        <span
                            key={ index }
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
              { tag }
            </span>
                    )) }
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                    <a
                        href={ project.link }
                        target="_blank"
                        rel="noreferrer"
                        className="bg-black text-white px-5 py-2 rounded shadow hover:opacity-90"
                    >
                        GitHub repo
                    </a>
                    { project.live && (
                        <a
                            href={ project.live }
                            target="_blank"
                            rel="noreferrer"
                            className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:opacity-90"
                        >
                            Live site
                        </a>
                    ) }
                </div>

                <Link to="/" className="text-blue-600 hover:underline">
                    ← Back
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetails;

