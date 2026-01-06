"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";
import {
    Home,
    User,
    Briefcase,
    MessageCircle,
    Phone,
    Mail
} from "lucide-react";

// The distance from the mouse where the scaling starts
const DISTANCE = 150;
// The maximum scale of an icon
const FULL_WIDTH = 80;

function DockItem({
    mouseX,
    href,
    children,
    label
}: {
    mouseX: MotionValue,
    href: string,
    children: React.ReactNode,
    label: string
}) {
    const ref = useRef<HTMLLIElement>(null);

    // Calculate distance between mouse and the center of this icon
    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    // Map distance to width (Scale effect)
    const widthTransform = useTransform(distance, [-DISTANCE, 0, DISTANCE], [45, FULL_WIDTH, 45]);
    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.li
            ref={ref}
            style={{ width }}
            className="relative flex items-center justify-center aspect-square rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 group"
        >
            {/* Tooltip */}
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {label}
            </span>
            <Link href={href} className="flex items-center justify-center w-full h-full text-black">
                {children}
            </Link>
        </motion.li>
    );
}

export default function Nav() {
    const mouseX = useMotionValue(Infinity);

    const navItems = [
        { href: "/", icon: <Home size={22} />, label: "Home" },
        { href: "/about", icon: <User size={22} />, label: "About" },
        { href: "/projects", icon: <Briefcase size={22} />, label: "Projects" },
        { href: "/contact", icon: <MessageCircle size={22} />, label: "Contact" },
        { href: "tel:+2349166852821", icon: <Phone size={22} />, label: "Call" },
        { href: "mailto:habeeb4shittu@gmail.com", icon: <Mail size={22} />, label: "Email" },
    ];

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] px-4">
            <motion.ul
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex items-end gap-1 px-4 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl h-[70px]"
            >
                {/* Profile/Name Item (Distinct Style) */}
                <motion.li
                    className="flex items-center justify-center px-4 h-[45px] rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm whitespace-nowrap"
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                    <Link href="/">Habeeb S.</Link>
                </motion.li>

                {/* Separator Line */}
                <div className="w-[1px] h-8 bg-white/20 self-center mx-1" />

                {/* Dynamic Icons */}
                {navItems.map((item, index) => (
                    <DockItem
                        key={index}
                        mouseX={mouseX}
                        href={item.href}
                        label={item.label}
                    >
                        {item.icon}
                    </DockItem>
                ))}
            </motion.ul>
        </nav>
    );
}