"use client";
import Image from "next/image";
import Dot from "../components/FullStop";
import { useEffect, useState } from "react";
import {
    Smartphone,
    Sparkles,
    Database,
    Server,
    Layout,
    Layers,
    Briefcase,
    MapPin,
    Calendar
} from "lucide-react";

const skillsData = {
    frontend: [
        { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-600", badge: "text-yellow-700 bg-yellow-50" },
        { name: "jQuery", icon: "jQ", color: "from-blue-500 to-blue-700", badge: "text-blue-700 bg-blue-50" },
        { name: "React.js", icon: "⚛", color: "from-cyan-400 to-cyan-600", badge: "text-cyan-700 bg-cyan-50" },
        { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900", badge: "text-gray-700 bg-gray-50" },
        { name: "HTML5", icon: "HTML", color: "from-orange-500 to-orange-700", badge: "text-orange-700 bg-orange-50" },
        { name: "CSS3", icon: "CSS", color: "from-blue-400 to-blue-600", badge: "text-blue-700 bg-blue-50" }
    ],
    backend: [
        { name: "PHP", icon: "PHP", color: "from-indigo-500 to-purple-600", badge: "text-indigo-700 bg-indigo-50" },
        { name: "Laravel", icon: "L", color: "from-red-500 to-red-700", badge: "text-red-700 bg-red-50" },
        { name: "MySQL", icon: "SQL", color: "from-blue-600 to-blue-800", badge: "text-blue-700 bg-blue-50" }
    ],
    design: [
        { name: "Responsive Design", icon: Smartphone, color: "from-violet-500 to-purple-600", badge: "text-violet-700 bg-violet-50" },
        { name: "User Experience", icon: Sparkles, color: "from-pink-500 to-rose-600", badge: "text-pink-700 bg-pink-50" },
        { name: "Database Management", icon: Database, color: "from-emerald-500 to-green-600", badge: "text-emerald-700 bg-emerald-50" }
    ]
};

type ExperienceItem = {
    role: string;
    company: string;
    location?: string;
    start: string;
    end: string | "Present";
    bullets: string[];
    stack?: string[];
    link?: string;
};

const experiences: ExperienceItem[] = [
    {
        role: "Frontend Developer",
        company: "KlemWeb",
        location: "Remote",
        start: "2023",
        end: "Present",
        link: "https://klemweb.com",
        bullets: [
            "Built and scaled websites with React, Next.js, and Tailwind CSS",
            "Improved UX, reduced bounce with responsive UI and faster page loads",
            "Owned CI-friendly release flow and zero-downtime updates"
        ],
        stack: ["Next.js", "React.js", "Tailwind", "SCSS", "Vercel", "GitHub", "Figma"]
    },
    {
        role: "Frontend Developer",
        company: "Strabl",
        location: "Remote",
        start: "September 2024",
        end: "February 2025",
        bullets: [
            "Delivered React/Next interfaces with accessible components",
            "Shipped a fully working checkout system integrated with Stripe",
            "Collaborated with designers to translate Figma to code"
        ],
        stack: ["React", "Next", "JavaScript", "SCSS", "Stripe API", "GitHub", "Vercel", "Figma", "Tailwind CSS"]
    }
];

export default function About() {
    const [dimensions, setDimensions] = useState({ width: 520, height: 520 });

    useEffect(() => {
        const updateDimensions = () => {
            if (document.body.clientWidth <= 430) {
                setDimensions({ width: 295, height: 295 });
            } else {
                setDimensions({ width: 520, height: 520 });
            }
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const SkillCard = ({ skill }: { skill: any }) => {
        const IconComponent = skill.icon && skill.icon.$$typeof ? skill.icon : null;
        return (
            <div className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-md border border-gray-200/60 transition-all duration-300">
                <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                    {IconComponent ? (
                        <IconComponent className="w-7 h-7 text-white" strokeWidth={2.5} />
                    ) : (
                        <span className="text-white font-bold text-lg">{skill.icon}</span>
                    )}
                </div>
                <div className={`${skill.badge} rounded-lg px-3 py-1.5 text-center`}>
                    <p className="text-sm font-semibold truncate">{skill.name}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            </div>
        );
    };

    const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
        return (
            <li className="relative pl-8 pb-10 last:pb-0">
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-[#f2061a]" />
                <div className="absolute left-1.5 top-5 bottom-0 w-[2px] bg-gray-200" />
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center gap-2 text-[#24262f] font-semibold">
                            <Briefcase className="h-4 w-4 text-[#f2061a]" />
                            <span>{item.role}</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        {item.link ? (
                            <a href={item.link} target="_blank" className="font-semibold text-[#f2061a] hover:underline">
                                {item.company}
                            </a>
                        ) : (
                            <span className="font-semibold text-gray-800">{item.company}</span>
                        )}
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        {item.location && (
                            <span className="inline-flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {item.location}
                            </span>
                        )}
                        <span className="inline-flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {item.start} — {item.end}
                        </span>
                    </div>

                    <ul className="mt-4 space-y-2 text-gray-700">
                        {item.bullets.map((b, i) => (
                            <li key={i} className="leading-relaxed">• {b}</li>
                        ))}
                    </ul>

                    {item.stack && item.stack.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.stack.map((t) => (
                                <span
                                    key={t}
                                    className="px-2.5 py-1 rounded-full text-xs font-semibold border border-black/10 bg-[#24262f] text-white"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </li>
        );
    };

    return (
        <>
            <section id="top">
                <h3>
                    About me <Dot size="big" />
                </h3>
                <Image src={"/images/mark.png"} alt="" width={120} height={120} />
                <p className="text-gray-600 text-lg leading-relaxed">
                    Developing user-friendly and functional websites is what I love doing, and that{"'"}s why I give my all in every new challenge.
                </p>
            </section>

            <section className="myself flex flex-col md:flex-row items-center justify-between gap-10 py-16">
                <div className="image flex-shrink-0 rounded-3xl overflow-hidden shadow-lg w-[320px] md:w-[400px]">
                    <img src="/images/me.jpg" alt="My Picture" className="w-full h-full object-cover" />
                </div>
                <div className="journey max-w-2xl">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900">My Journey</h1>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        My journey as a full-stack developer began in 2021. After honing my skills independently for some time, I ventured into the professional world, starting as a website developer.
                        <br />
                        <br />
                        As I continued to refine my craft, I expanded into React and Next.js, which allowed me to build dynamic, scalable web applications. This foray into modern front-end development, combined with my expertise in back-end technologies, positioned me as a versatile developer capable of handling complex projects from start to finish.
                        <br />
                        <br />
                        Today, I’m passionate about working with teams that value creativity and innovation. Every day, I get to build secure, user-friendly web applications with React, Next.js, and other cutting-edge tools — and honestly, I wouldn’t trade it for anything ❤️.
                    </p>
                </div>
            </section>

            <section className="stack py-20" id="stack">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Technology Stack</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                            My Stack<span className="text-[#f2061a]">.</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            The tools and technologies I use to build exceptional web experiences.
                        </p>
                    </div>

                    {[
                        { title: "Frontend Development", icon: Layout, color: "from-blue-500 to-cyan-600", skills: skillsData.frontend },
                        { title: "Backend Development", icon: Server, color: "from-emerald-500 to-green-600", skills: skillsData.backend },
                        { title: "Design & Tools", icon: Layers, color: "from-purple-500 to-pink-600", skills: skillsData.design }
                    ].map((section, idx) => {
                        const Icon = section.icon;
                        return (
                            <div key={idx} className="mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                                        <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                    {section.skills.map((skill, i) => (
                                        <SkillCard key={i} skill={skill} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section id="experience" className="py-20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Experience<span className="text-[#f2061a]">.</span>
                        </h2>
                        <p className="mt-3 text-gray-600">Places I’ve built, shipped, and broken things then fixed them better.</p>
                    </div>
                    <ol className="relative">
                        {experiences.map((item, i) => (
                            <ExperienceCard key={i} item={item} />
                        ))}
                    </ol>
                </div>
            </section>
        </>
    );
}
