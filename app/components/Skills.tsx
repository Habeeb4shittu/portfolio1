import Link from "next/link";
import Dot from "./FullStop";

export default function Skills() {
    return (
        <section id="skills">
            <h1>Skills <Dot size="" /></h1>
            <div className="skill-set">
                <div className="skill">
                    <h3 className="head">Web Design</h3>
                    <ul>
                        <li>Responsive Design</li>
                        <li>Content Management System</li>
                        <li>User Experience</li>
                    </ul>
                </div>
                <div className="skill">
                    <h3 className="head">Frontend</h3>
                    <ul>
                        <li>Javascript | jQuery</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>HTML5 | CSS3</li>
                    </ul>
                </div>
                <div className="skill">
                    <h3 className="head">Backend</h3>
                    <ul>
                        <li>PHP | Laravel</li>
                        <li>Database Management</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div className="skill">
                    <h3 className="head">Soft Skills</h3>
                    <ul>
                        <li>Effective communication</li>
                        <li>Collaboration</li>
                        <li>Commitment</li>
                        <li>Team Work</li>
                    </ul>
                </div>
            </div>
            <Link href={'/about#stack'}>Details...</Link>
        </section>
    );
}