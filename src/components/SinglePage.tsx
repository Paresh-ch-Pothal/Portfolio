
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { RiFileTextLine, RiMailLine, RiMapPinLine, RiExternalLinkLine, RiCodeSSlashLine, RiTerminalLine, RiBriefcaseLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import logo from '../../public/logo/PortfolioLogo.png';
import type { Project, Skill } from '../types';
import { portfolioData } from '../Data/portfoliodata';
import image from '../assets/image.png';

interface SocialIconProps {
    href: string;
    icon: React.ComponentType<{ size: number }>;
    label: string;
    darkMode: boolean;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, label, darkMode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border-2 ${darkMode ? 'border-gray-400 hover:bg-gray-400 hover:border-gray-400 text-gray-400 hover:text-gray-900' : 'border-gray-800 hover:bg-gray-900 hover:border-gray-900 text-gray-900 hover:text-white'} transition-all duration-300 transform hover:scale-110`}
        aria-label={label}
    >
        <Icon size={18} />
    </a>
);

const Portfolio: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'projects', 'contact'];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string): void => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled 
                ? darkMode 
                    ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
                    : 'bg-white/95 backdrop-blur-sm shadow-lg' 
                : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden hover:opacity-80 transition-opacity"
                        >
                            <img 
                                src={logo} 
                                alt="Logo" 
                                className="w-full h-full object-contain"
                            />
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
                            {['home', 'about', 'projects', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`relative text-xs lg:text-sm font-medium uppercase tracking-widest transition-colors group ${
                                        activeSection === section 
                                            ? darkMode ? 'text-gray-400' : 'text-gray-900'
                                            : darkMode ? 'text-gray-400' : 'text-gray-500'
                                        }`}
                                >
                                    {section}
                                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${darkMode ? 'bg-gray-400' : 'bg-gray-900'} transform origin-left transition-transform duration-300 ${activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </button>
                            ))}
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`w-9 h-9 lg:w-10 lg:h-10 border-2 ${darkMode ? 'border-gray-400 hover:bg-gray-400 hover:text-gray-900' : 'border-gray-900 hover:bg-gray-900 hover:text-white'} flex items-center justify-center transition-all duration-300`}
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? '☀️' : '🌙'}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden gap-3 items-center">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className={`w-9 h-9 border-2 ${darkMode ? 'border-gray-400 hover:bg-gray-400 hover:text-gray-900' : 'border-gray-900 hover:bg-gray-900 hover:text-white'} flex items-center justify-center transition-all duration-300`}
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? '☀️' : '🌙'}
                            </button>
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className={`w-9 h-9 border-2 ${darkMode ? 'border-gray-400' : 'border-gray-900'} flex items-center justify-center transition-all duration-300`}
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className={`md:hidden pb-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                            {['home', 'about', 'projects', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`block w-full text-left px-4 py-3 text-sm font-medium uppercase tracking-widest transition-colors ${
                                        activeSection === section 
                                            ? darkMode ? 'text-gray-400 bg-gray-800' : 'text-gray-900 bg-gray-100'
                                            : darkMode ? 'text-gray-400' : 'text-gray-500'
                                        }`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Home Section */}
            <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-0">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(0deg, ${darkMode ? '#60a5fa' : '#000'} 0px, ${darkMode ? '#60a5fa' : '#000'} 1px, transparent 1px, transparent 40px),
                             repeating-linear-gradient(90deg, ${darkMode ? '#60a5fa' : '#000'} 0px, ${darkMode ? '#60a5fa' : '#000'} 1px, transparent 1px, transparent 40px)`
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                        <div className="lg:col-span-7 text-center lg:text-left">
                            <div className={`inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 border-2 ${darkMode ? 'border-gray-400' : 'border-gray-900'}`}>
                                <p className="text-xs font-bold uppercase tracking-widest">Available for Work</p>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-none tracking-tight">
                                {portfolioData.personal.name}
                            </h1>

                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 justify-center lg:justify-start">
                                <div className={`h-px w-8 sm:w-12 ${darkMode ? 'bg-gray-400' : 'bg-gray-900'}`}></div>
                                <p className={`text-lg sm:text-xl lg:text-2xl font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {portfolioData.personal.title}
                                </p>
                            </div>

                            <p className={`text-base sm:text-lg lg:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0`}>
                                {portfolioData.personal.tagline}
                            </p>

                            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-10 justify-center lg:justify-start">
                                <SocialIcon href={portfolioData.social.github} icon={FaGithub} label="GitHub" darkMode={darkMode} />
                                <SocialIcon href={portfolioData.social.linkedin} icon={FaLinkedin} label="LinkedIn" darkMode={darkMode} />
                                <SocialIcon href={portfolioData.social.twitter} icon={FaTwitter} label="Twitter" darkMode={darkMode} />
                                <SocialIcon href={portfolioData.social.leetcode} icon={SiLeetcode} label="LeetCode" darkMode={darkMode} />
                                <SocialIcon href={portfolioData.social.gfg} icon={SiGeeksforgeeks} label="GeeksforGeeks" darkMode={darkMode} />
                            </div>

                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                                <a
                                    href={portfolioData.social.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 ${darkMode ? 'bg-gray-200 text-black hover:bg-gray-600' : 'bg-black text-white hover:bg-gray-800'} transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg text-sm sm:text-base`}
                                >
                                    <RiFileTextLine size={18} />
                                    <span className="font-semibold">View Resume</span>
                                </a>

                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className={`inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 ${darkMode ? 'border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-gray-900' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'} transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base`}
                                >
                                    <RiMailLine size={18} />
                                    <span className="font-semibold">Get In Touch</span>
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 flex justify-center mt-8 lg:mt-0">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-112.5 lg:h-112.5">
                                {/* Rotating text circle */}
                                <svg className="absolute inset-0 w-full h-full animate-spin hidden sm:block" style={{ animationDuration: '20s' }} viewBox="0 0 100 100">
                                    <path
                                        id="circlePath"
                                        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                        fill="none"
                                    />
                                    <text className={`text-[4px] font-bold uppercase tracking-widest ${darkMode ? 'fill-gray-400' : 'fill-gray-900'}`}>
                                        <textPath href="#circlePath">
                                            WEB DEVELOPER • AI/ML ENTHUSIAST • CREATOR • INNOVATOR • PROBLEM SOLVER • LEARNER
                                        </textPath>
                                    </text>
                                </svg>
                                
                                {/* Circular profile image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72">
                                        <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-linear-to-br from-gray-500 to-purple-600' : 'bg-linear-to-br from-gray-700 to-gray-900'} opacity-20 blur-xl`}></div>
                                        <div className={`relative w-full h-full rounded-full overflow-hidden border-4 ${darkMode ? 'border-gray-400' : 'border-gray-900'} ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                            <img 
                                                src={image} 
                                                alt={portfolioData.personal.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <RiCodeSSlashLine size={24} className={`sm:w-8 sm:h-8 ${darkMode ? 'text-gray-400' : 'text-gray-900'}`} />
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight">About Me</h2>
                        </div>
                        <div className={`h-1 w-16 sm:w-24 ${darkMode ? 'bg-gray-400' : 'bg-gray-900'}`}></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-20">
                        <div>
                            <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6 sm:mb-8`}>
                                {portfolioData.personal.bio}
                            </p>

                            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <div className={`flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'} group`}>
                                    <div className={`w-9 h-9 sm:w-10 sm:h-10 border-2 ${darkMode ? 'border-gray-400 group-hover:bg-gray-400' : 'border-gray-900 group-hover:bg-gray-900'} flex items-center justify-center transition-colors shrink-0`}>
                                        <RiMapPinLine size={16} className={`sm:w-4.5 sm:h-4.5 ${darkMode ? 'group-hover:text-gray-900' : 'group-hover:text-white'}`} />
                                    </div>
                                    <span className="font-medium text-sm sm:text-base">{portfolioData.personal.location}</span>
                                </div>

                                <div className={`flex items-center gap-3 ${darkMode ? 'text-white' : 'text-gray-900'} group`}>
                                    <div className={`w-9 h-9 sm:w-10 sm:h-10 border-2 ${darkMode ? 'border-gray-400 group-hover:bg-gray-400' : 'border-gray-900 group-hover:bg-gray-900'} flex items-center justify-center transition-colors shrink-0`}>
                                        <RiMailLine size={16} className={`sm:w-4.5 sm:h-4.5 ${darkMode ? 'group-hover:text-gray-900' : 'group-hover:text-white'}`} />
                                    </div>
                                    <span className="font-medium text-sm sm:text-base break-all">{portfolioData.personal.email}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 uppercase tracking-tight flex items-center gap-2 sm:gap-3">
                                <RiTerminalLine size={24} className="sm:w-7 sm:h-7" />
                                Skills
                            </h3>
                            <div className={`p-4 sm:p-6`}>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.skills.flatMap((skill: Skill) => skill.items).map((item: string, i: number) => (
                                        <span key={i} className={`text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 border ${darkMode ? 'border-gray-400 hover:bg-gray-300 hover:text-gray-900' : 'border-gray-900 hover:bg-gray-900 hover:text-white'} font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer`}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`pt-12 sm:pt-16`}>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 uppercase tracking-tight flex items-center gap-2 sm:gap-3">
                            <RiBriefcaseLine size={24} className="sm:w-7 sm:h-7" />
                            My Journey
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {portfolioData.timeline.map((item: any, index: number) => (
                                <div key={index} className="group">
                                    <div className={`border-2 ${darkMode ? 'border-gray-400 bg-gray-900 hover:bg-gray-500' : 'border-gray-900 bg-white hover:bg-gray-900'} hover:text-white p-5 sm:p-6 transition-all duration-300 h-full transform hover:-translate-y-1`}>
                                        <div className={`text-4xl sm:text-5xl font-black mb-3 sm:mb-4 ${darkMode ? 'text-gray-400 group-hover:text-gray-200' : 'text-gray-200 group-hover:text-white'}`}>
                                            {item.year}
                                        </div>
                                        <h4 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h4>
                                        <p className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wider opacity-70">
                                            {item.company}
                                        </p>
                                        <p className="text-xs sm:text-sm leading-relaxed opacity-90">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <RiTerminalLine size={24} className={`sm:w-8 sm:h-8 ${darkMode ? 'text-gray-400' : 'text-gray-900'}`} />
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight">Featured Work</h2>
                        </div>
                        <div className={`h-1 w-16 sm:w-24 ${darkMode ? 'bg-gray-400' : 'bg-gray-900'}`}></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {portfolioData.projects.map((project: Project) => (
                            <div key={project.id} className="group">
                                <div className={`border-2 ${darkMode ? 'border-gray-700' : 'border-gray-900'} overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}>
                                    <div className={`w-full h-48 sm:h-56 ${darkMode ? 'bg-linear-to-br from-gray-700 to-gray-800' : 'bg-linear-to-br from-gray-100 to-gray-200'} flex items-center justify-center overflow-hidden relative`}>
                                        {project.image ? (
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        ) : (
                                            <div className="text-center">
                                                <div className={`text-5xl sm:text-7xl font-black ${darkMode ? 'text-gray-400' : 'text-gray-300'} mb-2`}>
                                                    {project.title.split(' ').map((w: string) => w[0]).join('')}
                                                </div>
                                                <div className={`h-1 w-12 sm:w-16 ${darkMode ? 'bg-gray-400' : 'bg-gray-300'} mx-auto`}></div>
                                            </div>
                                        )}
                                        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-500' : 'bg-gray-900'} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4`}>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-10 h-10 sm:w-12 sm:h-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex items-center justify-center hover:scale-110 transition-transform`}
                                            >
                                                <FaGithub size={18} className="sm:w-5 sm:h-5" />
                                            </a>
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`w-10 h-10 sm:w-12 sm:h-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} flex items-center justify-center hover:scale-110 transition-transform`}
                                                >
                                                    <RiExternalLinkLine size={18} className="sm:w-5 sm:h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className={`p-5 sm:p-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                                        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-3 sm:mb-4 leading-relaxed`}>
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech: string, i: number) => (
                                                <span key={i} className={`text-xs px-2.5 sm:px-3 py-1 border ${darkMode ? 'border-gray-400 text-white hover:bg-gray-400 hover:text-gray-900' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'} font-semibold uppercase tracking-wider transition-colors`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-900 text-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 text-center">
                    <div className="mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 uppercase tracking-tight">Let's Work Together</h2>
                        <div className={`h-1 w-16 sm:w-24 ${darkMode ? 'bg-gray-400' : 'bg-white'} mx-auto`}></div>
                    </div>

                    <p className={`text-base sm:text-lg md:text-xl lg:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-300'} mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4`}>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
                        <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 ${darkMode ? 'border-gray-400 hover:bg-gray-400' : 'border-white hover:bg-white'} hover:text-gray-900 transition-all duration-300 transform hover:scale-110`}>
                            <FaGithub size={20} className="sm:w-6 sm:h-6" />
                        </a>
                        <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 ${darkMode ? 'border-gray-400 hover:bg-gray-400' : 'border-white hover:bg-white'} hover:text-gray-900 transition-all duration-300 transform hover:scale-110`}>
                            <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
                        </a>
                        <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 ${darkMode ? 'border-gray-400 hover:bg-gray-400' : 'border-white hover:bg-white'} hover:text-gray-900 transition-all duration-300 transform hover:scale-110`}>
                            <FaTwitter size={20} className="sm:w-6 sm:h-6" />
                        </a>
                        <a href={portfolioData.social.leetcode} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 ${darkMode ? 'border-gray-400 hover:bg-gray-400' : 'border-white hover:bg-white'} hover:text-gray-900 transition-all duration-300 transform hover:scale-110`}>
                            <SiLeetcode size={20} className="sm:w-6 sm:h-6" />
                        </a>
                        <a href={portfolioData.social.gfg} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 ${darkMode ? 'border-gray-400 hover:bg-gray-400' : 'border-white hover:bg-white'} hover:text-gray-900 transition-all duration-300 transform hover:scale-110`}>
                            <SiGeeksforgeeks size={20} className="sm:w-6 sm:h-6" />
                        </a>
                    </div>

                    <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className={`inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-12 py-4 sm:py-5 ${darkMode ? 'bg-gray-500 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} ${darkMode ? 'text-white' : 'text-gray-900'} transition-all duration-300 text-base sm:text-xl font-bold transform hhover:-translate-y-1 shadow-2xl`}
                    >
                        <RiMailLine size={20} className="sm:w-6 sm:h-6" />
                        Send Me an Email
                    </a>

                    <div className={`mt-16 sm:mt-24 pt-8 sm:pt-12 border-t ${darkMode ? 'border-gray-800' : 'border-gray-700'}`}>
                        <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'} font-medium`}>
                            © {new Date().getFullYear()} {portfolioData.personal.name}. Crafted with precision.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;