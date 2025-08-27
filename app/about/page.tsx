"use client"
import Image from "next/image";
import Dot from "../components/FullStop";
import { useEffect, useState } from "react";

const skills = [
    { skill: "Responsive Design", quality: 5 },
    { skill: "User Experience", quality: 4 },
    { skill: "Javascript", quality: 5 },
    { skill: "jQuery", quality: 4.8 },
    { skill: "React.js", quality: 4.5 },
    { skill: "Next.js", quality: 4.7 },
    { skill: "HTML5", quality: 5 },
    { skill: "CSS3", quality: 5 },
    { skill: "PHP", quality: 4 },
    { skill: "Laravel", quality: 4 },
    { skill: "Database Management", quality: 5 },
    { skill: "MySQL", quality: 4 },
]

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

        // Set initial dimensions
        updateDimensions();

        // Update dimensions on window resize
        window.addEventListener('resize', updateDimensions);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);
    return (
        <>
            <section id="top">
                <h3>About me <Dot size="big" /></h3>
                <Image src={'/images/mark.png'} alt="" width={120} height={120} />
                <p>Developing user-friendly and functional websites is what I love doing, and that{"'"}s why I give my all in every new challenge.</p>
            </section>
            <section className="myself">
                <div className="image">
                    <img src="/images/me.jpg" alt="My Picture" className="w-full h-full" />
                </div>
                <div className="journey">
                    <h1>My Journey</h1>
                    <p>
                        My journey as a full-stack developer began in 2021. After honing my skills independently for some time, I ventured into the professional world, starting as a website developer.
                        <br />
                        As I continued to refine my craft, I expanded into React and Next.js, which allowed me to build dynamic, scalable web applications. This foray into modern front-end development, combined with my expertise in back-end technologies, positioned me as a versatile developer capable of handling complex projects from start to finish.
                        <br />
                        Eventually, I decided to settle into a role that offers both challenge and stability, and I{"'"}m now continuing my journey at a company that values innovation and creativity. Each day, I get to do what I love—building secure, user-friendly web applications with React, Next.js, and other cutting-edge technologies. And you know what? I wouldn{"'"}t trade it for anything!  ❤️</p>
                </div>
            </section>
            {/* <section id="xp">
                <h1>My Experience <Dot size="big" /></h1>
            </section> */}
            <section className="stack py-16 px-3" id="stack">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-12 text-center">
                        My Stack.
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, key) => (
                            <div key={key} className="relative group cursor-pointer">
                                {/* Background bar */}
                                <div className="h-12 w-full bg-gray-200 shadow-md rounded-full overflow-hidden relative">
                                    {/* Filled bar with custom gradient */}
                                    <div
                                        className="absolute top-0 left-0 h-12 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                        style={{
                                            width: `${skill.quality * 20}%`,
                                            background: 'linear-gradient(to right, #f2061a, #24262f)',
                                        }}
                                    ></div>

                                    {/* Label on hover */}
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-2 py-1 text-sm font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {skill.quality * 20}%
                                    </span>

                                    {/* Skill name */}
                                    <span className={`absolute w-full text-center ${(skill.quality * 20) > 65 ? "hover:text-white" : "hover:text-gray-900"} font-semibold top-0 h-12 flex items-center justify-center pointer-events-none`}>
                                        {skill.skill}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
