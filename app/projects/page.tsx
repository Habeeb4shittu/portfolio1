"use client";
import Dot from "../components/FullStop";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import Image from "next/image";
import Link from "next/link";
const projects = [
    {
        name: "Gradient Generator",
        tools: ["jQuery", "Javascript", "SCSS"],
        image: [{ url: "/images/gradient_generator.png" }, { url: "/images/gradient_generator_desktop.png" }],
        link: "https://habeeb4shittu.github.io/gradient_generator",
        description: "I developed a Gradient Generator using JavaScript and SCSS, designed to help users create custom gradient backgrounds with ease. The application allows users to select colors, adjust gradient directions, and instantly preview the results. With a clean and responsive interface, this tool is perfect for designers and developers looking to enhance their web projects. This project highlights my skills in JavaScript for dynamic functionality and SCSS for advanced styling and layout management."
    },
    {
        name: "Calendar",
        tools: ["Javascript", "SCSS"],
        image: [{ url: "/images/calendar.png" }, { url: "/images/calendar_desktop.png" }],
        link: "https://habeeb4shittu.github.io/js_calendar",
        description: "I also created a fully functional calendar application using vanilla JavaScript, available at https://habeeb4shittu.github.io/js_calendar. This project demonstrates my ability to develop interactive web applications without relying on external libraries or frameworks. The calendar includes features like date selection, dynamic month and year navigation, and a clean, intuitive user interface. This project showcases my proficiency in JavaScript, DOM manipulation, and front-end design."
    },
    {
        name: "SnapShop",
        tools: ["Laravel", "SCSS", "Blade"],
        image: [{ url: "/images/snapshop.png" }, { url: "/images/snapshop_desktop.png" }],
        link: "https://snapshop.klemweb.com",
        description: "I developed a comprehensive e-commerce application using Laravel, available at https://snapshop.klemweb.com. The app features a robust backend with efficient product management, user authentication, and a smooth checkout process. It is designed with a focus on user experience, ensuring seamless navigation and a secure shopping environment. The project highlights my expertise in Laravel, database integration, and creating scalable, responsive web applications tailored to meet the needs of modern online businesses."
    },
    {
        name: "Flick Finder",
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "TMDB API"],
        image: [{ url: "/images/flick_finder.png" }, { url: "/images/flick_finder_desktop.png" }],
        link: "https://flick-finder-sigma.vercel.app/",
        description: "Flick Finder is a movie discovery web application built with Next.js and TypeScript, utilizing the TMDB API to provide users with trending, top-rated, and genre-specific movies. It features an intuitive search functionality, dynamic filtering, and responsive design powered by Tailwind CSS. This project demonstrates my ability to work with third-party APIs, manage asynchronous data fetching, and create seamless user experiences for entertainment-focused applications."
    }
];

export default function Projects() {
    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        const imgElement = e.currentTarget.children[0] as HTMLImageElement | undefined;

        if (imgElement) {
            const currentSrc = imgElement.getAttribute('src')?.slice(0, -4);
            if (currentSrc) {
                imgElement.setAttribute('src', currentSrc + '-hover.svg');
            }
        }
    };
    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        const imgElement = e.currentTarget.children[0] as HTMLImageElement | undefined;

        if (imgElement) {
            const currentSrc = imgElement.getAttribute('src')?.slice(0, -10);
            if (currentSrc) {
                imgElement.setAttribute('src', currentSrc + '.svg');
            }
        }
    };
    return (
        <>
            <section id="top">
                <h3>My <span>Best</span> Creations</h3>
                <p>Designing and Developing Robust and Stylish Web Applications For Years and Still Counting</p>
            </section>
            <section id="projects" className="space-y-16">
                {projects.map((proj, key) => (
                    <div
                        key={key}
                        className="group relative border-b border-black/20 pb-12 last:border-none transition-all duration-300"
                    >
                        {/* Project Title */}
                        <div className="flex items-center gap-3 mb-8">
                            <Link
                                href={proj.link}
                                className="text-2xl font-bold text-gray-900 group-hover:text-[#f2061a] transition-colors"
                            >
                                {proj.name}
                            </Link>
                            <Link
                                href={proj.link}
                                className="opacity-70 hover:opacity-100 transition-opacity"
                            >
                                <Image src="/images/link.svg" width={23} height={23} alt="project link" />
                            </Link>
                        </div>

                        {/* Content Layout */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Image Slider */}
                            <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-[38rem]">
                                {proj.image.map((img, i) => (
                                    <div key={i} className="relative w-full lg:w-1/2 h-[20rem]">
                                        <Image
                                            src={img.url}
                                            alt={`Project ${proj.name} view ${i + 1}`}
                                            fill
                                            className="object-contain rounded-lg p-2"
                                        />
                                    </div>
                                ))}
                            </div>




                            {/* Project Info */}
                            <div className="flex flex-col justify-between lg:w-1/2">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                        About The Project
                                    </h3>
                                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                                        {proj.description}
                                    </p>
                                </div>

                                {/* Tools Badge */}
                                <div className="mt-8 text-right">
                                    <span className="inline-block rounded-full bg-gradient-to-r from-[#24262f] to-[#f2061a] text-white px-5 py-2 text-sm sm:text-base font-semibold shadow-md group-hover:scale-105 transition-transform duration-300">
                                        Tools: {proj.tools.join(", ")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>


        </>
    );
}