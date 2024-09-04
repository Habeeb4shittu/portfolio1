"use client"
import Image from "next/image";
import Dot from "../components/FullStop";
import { useEffect, useState } from "react";

const skills = [
    { skill: "Responsive Design", quality: 5 },
    { skill: "User Experience", quality: 4 },
    { skill: "Javascript", quality: 5 },
    { skill: "jQuery", quality: 4 },
    { skill: "React.js", quality: 4 },
    { skill: "Next.js", quality: 3 },
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
                    <Image src="/images/me.jpg" alt="My Picture" width={dimensions.width} height={dimensions.height} />
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
            <section className="stack" id="stack">
                <h1>My Stack.</h1>
                <div className="about-skill-set">
                    {skills.map((skill, key) =>
                        <div className="skill" key={key}>
                            <span> {skill.skill}</span>
                            <div className="stars">
                                {Array.from({ length: skill.quality }, (_, i) => (
                                    <Image src={'images/star.svg'} alt="" key={i} width={22} height={22} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </section>
        </>
    );
}
