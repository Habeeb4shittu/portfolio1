import Link from "next/link";
import Dot from "../components/FullStop";
import Image from "next/image";

export default function Contact() {
    return (
        <section className="hero contact-hero">
            <div className="details">
                <h1>
                    Get In Touch <Dot size="big" />
                </h1>
                <p>Looking to partner or work together? Reach out through the form and I{"'"}ll get back to you in the next 48 hours.</p>
                <div className="contact-opts">
                    <div className="opt">
                        <div className="icon">
                            <Image src={'/images/mail.svg'} alt="mail-icon" width={23} height={23} />
                        </div>
                        <Link href={'mailto:habeeb4shittu@gmail.com'}>
                            habeeb4shittu@gmail.com
                        </Link>
                    </div>
                    <div className="opt">
                        <div className="icon">
                            <Image src={'/images/phone-call.svg'} alt="phone-icon" width={23} height={23} />
                        </div>
                        <Link href={'tel:+2349166852821'}>
                            +2349166852821
                        </Link>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <div className="my-image">
                    <img src={'/images/me.jpg'} alt="my image" />
                </div>
            </div>
        </section>
    );
}