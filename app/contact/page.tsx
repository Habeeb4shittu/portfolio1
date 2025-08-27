"use client";
import Link from "next/link";
import Dot from "../components/FullStop";
import Image from "next/image";

export default function Contact() {
    const handleResumeDownload = () => {
        // Create a temporary link element to trigger download
        const link = document.createElement('a');
        link.href = '/documents/shittu_habeeb.pdf'; // Adjust path as needed
        link.download = 'Habeeb_Shittu_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="hero contact-hero">
            <div className="details">
                <h1>
                    Get In Touch <Dot size="big" />
                </h1>
                <p>Looking to partner or work together? Reach out through the contact details and I{"'"}ll get back to you in the next 24 hours.</p>

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

                {/* Resume Download Section - Styled with Tailwind */}
                <div className="mt-8">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <button
                            onClick={handleResumeDownload}
                            className="group flex items-center gap-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-bold text-md transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-2 border border-red-400/20 hover:border-red-300/40"
                            style={{
                                background: 'linear-gradient(135deg, #f2061a 0%, #d90519 50%, #24262f 100%)',
                                boxShadow: '0 10px 30px rgba(242, 6, 26, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <svg
                                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </button>

                        <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800/20 px-3 py-2 rounded-lg backdrop-blur-sm border border-gray-700/30">
                            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">PDF • Updated Recently</span>
                        </div>
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