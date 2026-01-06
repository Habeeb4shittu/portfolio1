"use client";

import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeInOut }
    }
};

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export default function Footer() {
    return (
        <motion.footer
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full px-6 md:px-16 pb-32 pt-20 bg-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* CTA Section */}
                <motion.div
                    variants={fadeUp}
                    className="relative overflow-hidden bg-[#16181B] rounded-[2.5rem] p-10 md:p-16 text-center space-y-8 mb-24"
                >
                    {/* Decorative Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />

                    <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
                        Interested in working with me<span className="text-blue-500">?</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2"
                        >
                            Get in Touch <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md font-semibold rounded-full hover:bg-white/20 transition-all"
                        >
                            Browse Projects
                        </Link>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    variants={container}
                    className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-100 pt-12"
                >
                    {/* Socials - Using Lucide for cleaner consistency */}
                    <div className="flex items-center gap-6">
                        {[
                            { icon: <Instagram size={20} />, href: "https://instagram.com" },
                            { icon: <Github size={20} />, href: "https://github.com/habeeb4shittu" },
                            { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/shittuhabeeb/" },
                            { icon: <Twitter size={20} />, href: "https://x.com/HabeebAdedolapo" },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                whileHover={{ y: -4, color: "#3b82f6" }}
                                className="text-gray-400 transition-colors"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    <div className="text-center md:text-right space-y-2">
                        <motion.p variants={fadeUp} className="text-gray-500 text-sm font-medium">
                            &copy; {new Date().getFullYear()} All Rights Reserved.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-gray-400 text-xs">
                            Made with ❤️ by <span className="text-gray-700 font-semibold italic">Habeeb Shittu (the__dark__phoenix)</span>
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}