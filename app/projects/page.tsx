"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, memo } from "react";

type Project = {
    name: string;
    tools: string[];
    image: { url: string }[];
    link: string;
    description: string;
};

const projects: Project[] = [
    {
        name: "Gradient Generator",
        tools: ["jQuery", "Javascript", "SCSS"],
        image: [
            { url: "/images/gradient_generator.png" },
            { url: "/images/gradient_generator_desktop.png" },
        ],
        link: "https://habeeb4shittu.github.io/gradient_generator",
        description:
            "I developed a Gradient Generator using JavaScript and SCSS, designed to help users create custom gradient backgrounds with ease. The application allows users to select colors, adjust gradient directions, and instantly preview the results. With a clean and responsive interface, this tool is perfect for designers and developers looking to enhance their web projects. This project highlights my skills in JavaScript for dynamic functionality and SCSS for advanced styling and layout management.",
    },
    {
        name: "Calendar",
        tools: ["Javascript", "SCSS"],
        image: [
            { url: "/images/calendar.png" },
            { url: "/images/calendar_desktop.png" },
        ],
        link: "https://habeeb4shittu.github.io/js_calendar",
        description:
            "I also created a fully functional calendar application using vanilla JavaScript, available at https://habeeb4shittu.github.io/js_calendar. This project demonstrates my ability to develop interactive web applications without relying on external libraries or frameworks. The calendar includes features like date selection, dynamic month and year navigation, and a clean, intuitive user interface. This project showcases my proficiency in JavaScript, DOM manipulation, and front-end design.",
    },
    {
        name: "SnapShop",
        tools: ["Laravel", "SCSS", "Blade"],
        image: [
            { url: "/images/snapshop.png" },
            { url: "/images/snapshop_desktop.png" },
        ],
        link: "https://snapshop.klemweb.com",
        description:
            "I developed a comprehensive e-commerce application using Laravel, available at https://snapshop.klemweb.com. The app features a robust backend with efficient product management, user authentication, and a smooth checkout process. It is designed with a focus on user experience, ensuring seamless navigation and a secure shopping environment. The project highlights my expertise in Laravel, database integration, and creating scalable, responsive web applications tailored to meet the needs of modern online businesses.",
    },
    {
        name: "Flick Finder",
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "TMDB API"],
        image: [
            { url: "/images/flick_finder.png" },
            { url: "/images/flick_finder_desktop.png" },
        ],
        link: "https://flick-finder-sigma.vercel.app/",
        description:
            "Flick Finder is a movie discovery web application built with Next.js and TypeScript, utilizing the TMDB API to provide users with trending, top-rated, and genre-specific movies. It features an intuitive search functionality, dynamic filtering, and responsive design powered by Tailwind CSS. This project demonstrates my ability to work with third-party APIs, manage asynchronous data fetching, and create seamless user experiences for entertainment-focused applications.",
    },
];

const AccentBar = () => (
    <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#24262f] to-[#f2061a]" />
);

const ToolChip = ({ label }: { label: string }) => (
    <span className="px-3 py-1 text-xs font-semibold rounded-full border border-black/10 bg-[#24262f] text-white">
        {label}
    </span>
);

const ProjectCard = memo(function ProjectCard({ proj }: { proj: Project }) {
    const [active, setActive] = useState(0);

    return (
        <article className="rounded-2xl border border-black/10 bg-white/95 backdrop-blur p-5 md:p-6 transition-transform duration-200 hover:-translate-y-0.5">
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <Link href={proj.link} target="_blank" className="group inline-flex items-center gap-2">
                        <h4 className="text-xl md:text-2xl font-bold text-[#24262f] group-hover:text-[#f2061a] transition-colors truncate">
                            {proj.name}
                        </h4>
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f2061a]/10 text-[#f2061a] text-xs font-bold">
                            ↗
                        </span>
                    </Link>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {proj.tools.map((t) => (
                            <ToolChip key={t} label={t} />
                        ))}
                    </div>
                </div>
                <Link
                    href={proj.link}
                    target="_blank"
                    className="shrink-0 inline-flex items-center rounded-full bg-[#f2061a] px-4 py-2 text-sm font-bold text-white hover:opacity-90"
                >
                    View
                </Link>
            </div>

            <div className="mt-5">
                <div className="relative w-full aspect-[16/9] rounded-xl border border-black/10 bg-white overflow-hidden">
                    <Image
                        src={proj.image[active]?.url ?? "/images/placeholder.png"}
                        alt={`${proj.name} image`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                    />
                </div>

                {proj.image.length > 1 && (
                    <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
                        {proj.image.map((img, i) => (
                            <button
                                key={img.url + i}
                                onClick={() => setActive(i)}
                                aria-label={`Show ${proj.name} image ${i + 1}`}
                                className={`relative h-16 rounded-lg border ${active === i ? "border-[#f2061a]" : "border-black/10"
                                    } overflow-hidden`}
                            >
                                <Image src={img.url} alt={`${proj.name} thumb ${i + 1}`} fill className="object-contain p-1" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <p className="mt-5 text-gray-700 leading-relaxed">{proj.description}</p>

            <div className="mt-6 flex items-center justify-between">
                <AccentBar />
                <Link href={proj.link} target="_blank" className="text-sm font-semibold text-[#f2061a] hover:underline">
                    Visit live
                </Link>
            </div>
        </article>
    );
});

export default function Projects() {
    return (
        <section className="relative">
            <div className="text-center mb-10 md:mb-14">
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#24262f]">
                    My <span className="text-[#f2061a]">Best</span> Creations
                </h3>
                <p className="mt-3 max-w-2xl mx-auto text-gray-700">
                    Designing and developing robust, stylish web apps for years and still counting.
                </p>
            </div>

            <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
                {projects.map((proj) => (
                    <ProjectCard key={proj.name} proj={proj} />
                ))}
            </div>
        </section>
    );
}
