"use client";
import Link from "next/link";
import Dot from "./FullStop";
import Image from "next/image";

export default function Nav() {
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
    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        document.querySelector('nav ul')?.classList.toggle('show-menu')
    }
    return (
        <nav>
            <Link href={'/'} className="logo">
                Habeeb Shittu <Dot size="" />
            </Link>
            <ul>
                <li><Link href={'/'} onClick={handleMenuClick} >Home</Link></li>
                <li><Link href={'/about'} onClick={handleMenuClick} >About Me</Link></li>
                <li><Link href={'/projects'} onClick={handleMenuClick} >My Projects</Link></li>
                <li><Link href={'/contact'} onClick={handleMenuClick} >Contact Me</Link></li>
                <div className="nav-actions">
                    <li>
                        <Link href={'tel:+2349166852821'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Image src={'images/phone-call.svg'} alt="phone-icon" width={25} height={25} />
                        </Link>
                    </li>
                    <li>
                        <Link href={'mailto:habeeb4shittu@gmail.com'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <Image src={'images/mail.svg'} alt="mail-icon" width={25} height={25} />
                        </Link>
                    </li>
                </div>
            </ul>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMenuClick} id="menu-bar">
                <Image src={'/images/menu.svg'} alt="" width={25} height={25} />
            </button>
        </nav>
    );
}