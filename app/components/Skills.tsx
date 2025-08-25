"use client";
import Link from "next/link";
import React from "react";

// Mock Dot component
const Dot = ({ size }: { size: string }) => (
    <span className={`inline-block bg-[#f2061a] rounded-full ${size || "w-2 h-2"}`}></span>
);


export default function Skills() {
    const skillCategories = [
        {
            title: "Web Design",
            skills: [
                { name: "Responsive Design", level: 90 },
                { name: "Content Management System", level: 75 },
                { name: "User Experience", level: 85 },
            ],
        },
        {
            title: "Frontend",
            skills: [
                { name: "JavaScript | jQuery", level: 85 },
                { name: "React.js", level: 80 },
                { name: "Next.js", level: 70 },
                { name: "HTML5 | CSS3", level: 95 },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "PHP | Laravel", level: 75 },
                { name: "Database Management", level: 80 },
                { name: "MySQL", level: 80 },
            ],
        },
        {
            title: "Soft Skills",
            skills: [
                { name: "Effective Communication", level: 95 },
                { name: "Collaboration", level: 90 },
                { name: "Commitment", level: 90 },
                { name: "Team Work", level: 95 },
            ],
        },
    ];

    return (
        <section id="skills" className=" py-5 px-3">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
                        Skills <Dot size="w-3 h-3" />
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl">
                        A showcase of my technical and soft skills
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-700 font-medium">{skill.name}</span>
                                            <span className="text-gray-500 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-[#f2061a] h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Details Link */}
                <div className="text-center mt-12">
                    <Link
                        href="/about#stack"
                        className="text-xl font-medium text-blue-500 hover:text-blue-600 transition-colors"
                    >
                        See full stack details...
                    </Link>
                </div>
            </div>
        </section>
    );
}
