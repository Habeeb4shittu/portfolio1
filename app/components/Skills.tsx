"use client";
import Link from "next/link";
import React from "react";
import {
    Smartphone,
    Settings,
    Sparkles,
    Code2,
    Database,
    MessageSquare,
    Users,
    Target,
    UserCheck
} from "lucide-react";

// Mock Dot component
const Dot = ({ size }: { size: string }) => (
    <span className={`inline-block bg-[#f2061a] rounded-full ${size || "w-2 h-2"}`}></span>
);

export default function Skills() {
    const skillCategories = [
        {
            title: "Web Design",
            gradient: "from-violet-600 via-purple-600 to-indigo-600",
            bgGradient: "from-violet-50 to-purple-50",
            skills: [
                {
                    name: "Responsive Design",
                    icon: Smartphone,
                    color: "text-violet-600"
                },
                {
                    name: "Content Management",
                    icon: Settings,
                    color: "text-purple-600"
                },
                {
                    name: "User Experience",
                    icon: Sparkles,
                    color: "text-indigo-600"
                },
            ],
        },
        {
            title: "Frontend",
            gradient: "from-blue-600 via-cyan-600 to-teal-600",
            bgGradient: "from-blue-50 to-cyan-50",
            skills: [
                {
                    name: "JavaScript & jQuery",
                    icon: Code2,
                    color: "text-yellow-600",
                    tech: "JS"
                },
                {
                    name: "React.js",
                    icon: Code2,
                    color: "text-cyan-600",
                    tech: "⚛"
                },
                {
                    name: "Next.js",
                    icon: Code2,
                    color: "text-gray-800",
                    tech: "▲"
                },
                {
                    name: "HTML5 & CSS3",
                    icon: Code2,
                    color: "text-orange-600",
                    tech: "<>"
                },
            ],
        },
        {
            title: "Backend",
            gradient: "from-emerald-600 via-green-600 to-teal-600",
            bgGradient: "from-emerald-50 to-green-50",
            skills: [
                {
                    name: "PHP & Laravel",
                    icon: Code2,
                    color: "text-indigo-600",
                    tech: "PHP"
                },
                {
                    name: "Database Management",
                    icon: Database,
                    color: "text-emerald-600"
                },
                {
                    name: "MySQL",
                    icon: Database,
                    color: "text-blue-600"
                },
            ],
        },
        {
            title: "Soft Skills",
            gradient: "from-rose-600 via-pink-600 to-red-600",
            bgGradient: "from-rose-50 to-pink-50",
            skills: [
                {
                    name: "Effective Communication",
                    icon: MessageSquare,
                    color: "text-rose-600"
                },
                {
                    name: "Collaboration",
                    icon: Users,
                    color: "text-pink-600"
                },
                {
                    name: "Commitment",
                    icon: Target,
                    color: "text-red-600"
                },
                {
                    name: "Team Work",
                    icon: UserCheck,
                    color: "text-orange-600"
                },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20 text-center">
                    <div className="inline-block mb-4">
                        <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                            Expertise
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                        Skills & Abilities<Dot size="w-3 h-3" />
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A comprehensive overview of my technical expertise and professional competencies
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Main Card */}
                            <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200/60 overflow-hidden h-full">
                                {/* Top Gradient Bar */}
                                <div className={`h-1.5 bg-gradient-to-r ${category.gradient}`}></div>

                                {/* Card Content */}
                                <div className="p-6">
                                    {/* Category Title */}
                                    <div className={`inline-block bg-gradient-to-r ${category.bgGradient} px-4 py-2 rounded-xl mb-6`}>
                                        <h3 className={`text-lg font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skills List */}
                                    <div className="space-y-3">
                                        {category.skills.map((skill, skillIndex) => {
                                            const IconComponent = skill.icon;
                                            return (
                                                <div
                                                    key={skillIndex}
                                                    className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-default"
                                                >
                                                    {/* Icon Container */}
                                                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${category.bgGradient} flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                                                        {skill.tech ? (
                                                            <span className={`text-lg font-bold ${skill.color}`}>
                                                                {skill.tech}
                                                            </span>
                                                        ) : (
                                                            <IconComponent
                                                                className={`w-5 h-5 ${skill.color}`}
                                                                strokeWidth={2.5}
                                                            />
                                                        )}
                                                    </div>

                                                    {/* Skill Name */}
                                                    <span className="text-gray-700 font-medium text-sm leading-tight flex-1 group-hover/item:text-gray-900 transition-colors">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Hover Effect Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`}></div>
                            </div>

                            {/* Decorative Background Element */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-16">
                    <Link
                        href="/about#stack"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 group shadow-lg hover:shadow-xl"
                    >
                        <span>Explore Full Technology Stack</span>
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}