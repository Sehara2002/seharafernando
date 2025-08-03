'use client';
import Link from "next/link";
import { useState } from "react";
import "@/app/Styles/footer.scss";
import { Github, Linkedin, Twitter, Mail, Clock, GraduationCap, Settings, Instagram, Pin, LocationEditIcon, RadioReceiver, PhoneCallIcon, } from 'lucide-react';
const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const currentYear = new Date().getFullYear();

    const navigationLinks = [
        { href: "/Pages/Home", label: "Home" },
        { href: "/Pages/Education", label: "Education" },
        { href: "/Pages/Projects", label: "Projects" },
        { href: "/Pages/Services", label: "Services" },
        { href: "/Pages/Experiences", label: "Experiences" },
        { href: "/Pages/Blogs", label: "Blogs" },
        { href: "/Pages/Contact", label: "Contact" }
    ];

    const socialLinks = [
        {
            href: "https://github.com",
            label: "GitHub",
            icon: <Github className='m-auto' />,
            hoverColor: "#333"
        },
        {
            href: "https://linkedin.com",
            label: "LinkedIn",
            icon: <Linkedin className='m-auto' />,
            hoverColor: "#0077b5"
        },
        {
            href: "https://twitter.com",
            label: "Twitter",
            icon: <Twitter className='m-auto' />,
            hoverColor: "#1da1f2"
        },
        {
            href: "https://instagram.com",
            label: "Instagram",
            icon: <Instagram className='m-auto' />,
            hoverColor: "#e4405f"
        },
        {
            href: "mailto:your.email@example.com",
            label: "Email",
            icon: <Mail className='m-auto' />,
            hoverColor: "#ea4335"
        }
    ];

    const quickInfo = [
        { icon: <LocationEditIcon/>, text: "245/22,Banduragoda Road, Veyangoda" },
        { icon: <PhoneCallIcon/>, text: "+94 77 117 20 96" },
        { icon: <Mail/>, text: "sehara.fernando0410@gmail.com" }
    ];

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer__main">
                <div className="footer__container">
                    <div className="footer__grid">

                        {/* Brand Section */}
                        <div className="footer__brand">
                            <div className="footer__logo">
                                <span className="footer__logo-text">Sehara Fernando</span>
                                <div className="footer__logo-dot"></div>
                            </div>
                            <p className="footer__description">
                                Passionate developer creating amazing digital experiences.
                                Let's build something incredible together!
                            </p>

                            {/* Quick Info */}
                            <div className="footer__quick-info">
                                {quickInfo.map((item, index) => (
                                    <div key={index} className="footer__info-item">
                                        <span className="footer__info-icon">{item.icon}</span>
                                        <span className="footer__info-text">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="footer__section">

                        </div>

                        {/* Services */}
                        <div className="footer__section">
                            <h3 className="footer__section-title">Useful Links</h3>
                            <ul className="footer__links">
                                {navigationLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="footer__link">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="footer__section">
                            <h3 className="footer__section-title">Stay Updated</h3>
                            <p className="footer__newsletter-text">
                                Subscribe to get the latest updates about my projects and blog posts.
                            </p>

                            <form className="footer__newsletter" onSubmit={handleSubscribe}>
                                <div className="footer__newsletter-input-group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="footer__newsletter-input"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="footer__newsletter-button"
                                        disabled={isSubscribed}
                                    >
                                        {isSubscribed ? '✓' : '→'}
                                    </button>
                                </div>
                                {isSubscribed && (
                                    <p className="footer__newsletter-success">
                                        Thanks for subscribing! 🎉
                                    </p>
                                )}
                            </form>

                            {/* Social Links */}
                            <div className="footer__social">
                                <p className="footer__social-title">Follow Me</p>
                                <div className="footer__social-links">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="footer__social-link"
                                            aria-label={social.label}
                                            title={social.label}
                                        >
                                            <span className="footer__social-icon">{social.icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer__bottom">
                <div className="footer__container">
                    <div className="footer__bottom-content text-center">


                        <div className="footer__copyright text-center">
                            <p>© {currentYear} Sehara Fernando. All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                className="footer__scroll-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Scroll to top"
            >
                <span className="footer__scroll-icon">↑</span>
            </button>
        </footer>
    );
};

export default Footer;