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
    }
]
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
            <section id="projects">
                {projects.map((proj, key) =>
                    <div className="project" key={key}>
                        <h1>
                            <Link href={proj.link}>{proj.name}</Link>
                            <Link href={proj.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><Image src={'/images/link.svg'} width={23} height={23} alt="" /></Link>
                        </h1>
                        <div className="flex">
                            <div className="image-slider">
                                <Slider imageList={proj.image} loop={true} autoPlay={true} autoPlayInterval={3000} />
                            </div>
                            <div className="about">
                                <h3>About The Project</h3>
                                <p>{proj.description}</p>
                                <div className="tools">
                                    Tools - {proj.tools.join(", ")}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}