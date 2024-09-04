"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
            <hr />
            <footer>
                <div className="interest">
                    <p>Interested in working with me<span>?</span></p>
                    <div className="in-touch-actions">
                        <Link href={'/contact'}>Get in Touch</Link>
                        <Link href={'/projects'}>Browse Projects</Link>
                    </div>
                </div>
                <div className="copyright">
                    <div className="socials">
                        <Link href={''} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Image src={'images/instagram.svg'} alt="instagram-icon" width={25} height={25} />
                        </Link>
                        <Link href={'https://github.com/habeeb4shittu'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Image src={'images/github.svg'} alt="github-icon" width={25} height={25} />
                        </Link>
                        <Link href={'https://www.linkedin.com/in/habeeb-shittu-5a013824b/'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Image src={'images/linkedin.svg'} alt="linkedin-icon" width={25} height={25} />
                        </Link>
                        <Link href={'https://x.com/HabeebAdedolapo'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Image src={'images/twitter.svg'} alt="twitter-icon" width={25} height={25} />
                        </Link>
                    </div>
                    <p>&copy;{new Date().getFullYear()} All Rights Reserved.</p>
                    <p>Made with ❤️ by Habeeb Shittu(the__dark__phoenix)</p>
                </div>
            </footer>
        </>
    );
}