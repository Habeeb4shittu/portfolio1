"use client";
import React, { useRef, useState } from "react";
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
    Mail,
    Menu,
    X
} from "lucide-react";

// Responsive distance and width values
const DISTANCE = 150;
const FULL_WIDTH_DESKTOP = 80;
const FULL_WIDTH_MOBILE = 60;

function DockItem({
    mouseX,
    href,
    children,
    label,
    isMobile,
    onClick
}: {
    mouseX: MotionValue;
    href: string;
    children: React.ReactNode;
    label: string;
    isMobile: boolean;
    onClick?: () => void;
}) {
    const ref = useRef<HTMLLIElement>(null);
    const FULL_WIDTH = isMobile ? FULL_WIDTH_MOBILE : FULL_WIDTH_DESKTOP;
    const minWidth = isMobile ? 40 : 45;

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(
        distance,
        [-DISTANCE, 0, DISTANCE],
        [minWidth, FULL_WIDTH, minWidth]
    );
    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    const handleClick = (e: React.MouseEvent) => {
        if (href.startsWith('tel:') || href.startsWith('mailto:')) {
            window.location.href = href;
            e.preventDefault();
        }
        onClick?.();
    };

    return (
        <motion.li
            ref={ref}
            style={{ width }}
            className="relative flex items-center justify-center aspect-square rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 group"
        >
            <span className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-white text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {label}
            </span>
            <a
                href={href}
                onClick={handleClick}
                className="flex items-center justify-center w-full h-full text-black"
            >
                {children}
            </a>
        </motion.li>
    );
}

export default function Nav() {
    const mouseX = useMotionValue(Infinity);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navItems = [
        { href: "/", icon: <Home size={isMobile ? 18 : 22} />, label: "Home" },
        { href: "/about", icon: <User size={isMobile ? 18 : 22} />, label: "About" },
        { href: "/projects", icon: <Briefcase size={isMobile ? 18 : 22} />, label: "Projects" },
        { href: "/contact", icon: <MessageCircle size={isMobile ? 18 : 22} />, label: "Contact" },
        { href: "tel:+2349166852821", icon: <Phone size={isMobile ? 18 : 22} />, label: "Call" },
        { href: "mailto:habeeb4shittu@gmail.com", icon: <Mail size={isMobile ? 18 : 22} />, label: "Email" },
    ];

    return (
        <>
            {/* Desktop/Tablet Navigation */}
            <nav className="hidden sm:block fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[1000] px-2 md:px-4 max-w-[95vw]">
                <motion.ul
                    onMouseMove={(e) => mouseX.set(e.pageX)}
                    onMouseLeave={() => mouseX.set(Infinity)}
                    className="flex items-end gap-0.5 md:gap-1 px-2 md:px-4 py-2 md:py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl h-[55px] md:h-[70px] overflow-x-auto"
                >
                    <motion.li
                        className="flex items-center justify-center px-2 md:px-4 h-[40px] md:h-[45px] rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs md:text-sm whitespace-nowrap shrink-0"
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                        <a href="/">Habeeb S.</a>
                    </motion.li>
                    <div className="w-[1px] h-6 md:h-8 bg-white/20 self-center mx-0.5 md:mx-1 shrink-0" />
                    {navItems.map((item, index) => (
                        <DockItem
                            key={index}
                            mouseX={mouseX}
                            href={item.href}
                            label={item.label}
                            isMobile={isMobile}
                        >
                            {item.icon}
                        </DockItem>
                    ))}
                </motion.ul>
            </nav>

            {/* Mobile Navigation */}
            <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-[1000]">
                {/* Mobile Menu Button */}
                <div className="flex justify-center mb-4">
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="px-4 py-3 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl text-black"
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                        opacity: isMenuOpen ? 1 : 0,
                        y: isMenuOpen ? 0 : 100,
                        pointerEvents: isMenuOpen ? 'auto' : 'none'
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-20 left-4 right-4 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-4"
                >
                    <div className="grid grid-cols-3 gap-4">
                        {/* Profile Item */}
                        <a
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="col-span-3 flex items-center justify-center px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-sm"
                        >
                            Habeeb S.
                        </a>

                        {/* Navigation Items */}
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors"
                            >
                                {item.icon}
                                <span className="text-xs">{item.label}</span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </nav>
        </>
    );
}