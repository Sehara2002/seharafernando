'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/Styles/home.scss';
import { Github, Linkedin, Twitter, Mail,Clock,GraduationCap, Settings, BrainCircuit, Brain, } from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "AI Development",
      description: "Creating intelligent solutions with machine learning and artificial intelligence",
      icon: <Brain/>,
      color: "from-blue-500 to-sky-500",
      details: ["Machine Learning Models", "Generative AI", "Deep Learning", "Predictive Analytics"]
    },
    {
      title: "Mobile App Development", 
      description: "Building cross-platform mobile applications for iOS and Android",
      icon: "📱",
      color: "gray-500",
      details: ["Flutter", "Native iOS/Android", "Progressive Web Apps"]
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web development from frontend to backend",
      icon: "💻", 
      color: "from-blue-900 to-sky-900",
      details: ["React/Next.js", "Node.js/Express", "Database Design", "Python"]
    },
    {
      title: "IT Teaching",
      description: "Sharing knowledge through comprehensive programming education",
      icon: "👨‍🏫",
      color: "from-blue-500 to-sky-500", 
      details: ["Programming Fundamentals", "Web Development", "Mobile Development", "Data Science"]
    }
  ];

  const stats = [
    { number: "10+", label: "Projects Completed", icon: <Github className='m-auto h-10 w-10'/> },
    { number: "2+", label: "Years Experience", icon: <Clock className='m-auto h-10 w-10'/> },
    { number: "100+", label: "Students Taught", icon: <GraduationCap className='m-auto h-10 w-10'/> },
    { number: "15+", label: "Technologies Mastered", icon: <Settings className='m-auto h-10 w-10'/> }
  ];

  const scrollToSection = (sectionId:any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            {/* Profile Image */}
            <div className={`hero__image ${isVisible ? 'hero__image--visible' : ''}`}>
              <div className="hero__image-wrapper">
                {/* Replace with your actual image path */}
                <Image
                  src="/profile.jpg" // Add your image to public folder
                  alt="Sehara Arunodya Fernando - Full Stack Developer"
                  width={320}
                  height={320}
                  className="hero__img"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="hero__image-border"></div>
                <div className="hero__image-glow"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className={`hero__text ${isVisible ? 'hero__text--visible' : ''}`}>
              <div className="hero__greeting">
                <span className="hero__greeting-emoji"></span>
                <span>{"Hello, I'm"}</span>
              </div>
              
              <h1 className="hero__name">
                <span className="hero__name-first">Sehara Arunodya</span>
                <span className="hero__name-last">Fernando</span>
              </h1>
              
              <div className="hero__titles">
                <span className="hero__title-static">{"I'm a passionate"}</span>
                <div className="hero__title-rotating">
                  <span className={`hero__title-item ${currentServiceIndex === 0 ? 'active' : ''}`}>
                    AI Developer
                  </span>
                  <span className={`hero__title-item ${currentServiceIndex === 1 ? 'active' : ''}`}>
                    Mobile App Developer
                  </span>
                  <span className={`hero__title-item ${currentServiceIndex === 2 ? 'active' : ''}`}>
                    Full Stack Developer
                  </span>
                  <span className={`hero__title-item ${currentServiceIndex === 3 ? 'active' : ''}`}>
                    IT Educator
                  </span>
                </div>
              </div>
              
              <p className="hero__description">
                Creating innovative digital solutions through cutting-edge technology. 
                From AI-powered applications to mobile experiences and full-stack web solutions, 
                I bring ideas to life while sharing knowledge with the next generation of developers.
              </p>
              
              <div className="hero__actions">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hero__btn hero__btn--primary"
                >
                  <span>Explore My Work</span>
                  {/* <span className="hero__btn-icon">🚀</span> */}
                </button>
                <Link href="/Pages/Contact" className="hero__btn hero__btn--secondary">
                  <span>Get In Touch</span>
                  {/* <span className="hero__btn-icon">💬</span> */}
                </Link>
              </div>
              
              <div className="hero__social">
                <a href="https://github.com/seharaarunodya" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
                  <span><Github /></span>
                </a>
                <a href="https://linkedin.com/in/seharaarunodya" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
                  <span><Linkedin /></span>
                </a>
                <a href="https://twitter.com/seharaarunodya" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="Twitter">
                  <span><Twitter /></span>
                </a>
                <a href="mailto:sehara@example.com" className="hero__social-link" aria-label="Email">
                  <span><Mail /></span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          {/* <div className="hero__scroll">
            <div className="hero__scroll-text">Scroll to explore</div>
            <div className="hero__scroll-arrow">↓</div>
          </div> */}
        </div>
        
        {/* Background Elements */}
        <div className="hero__bg">
          <div className="hero__bg-circle hero__bg-circle--1"></div>
          <div className="hero__bg-circle hero__bg-circle--2"></div>
          <div className="hero__bg-circle hero__bg-circle--3"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats__container">
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="stats__item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="stats__icon">{stat.icon}</div>
                <div className="stats__number">{stat.number}</div>
                <div className="stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">My Services</h2>
            <p className="services__subtitle">
              Comprehensive technology solutions tailored to your needs
            </p>
          </div>
          
          <div className="services__grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="services__card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`services__card-bg bg-blue-900`}></div>
                <div className="services__card-content">
                  <div className="services__card-icon">{service.icon}</div>
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-description">{service.description}</p>
                  
                  <div className="services__card-details">
                    {service.details.map((detail, idx) => (
                      <span key={idx} className="services__card-tag">
                        {detail}
                      </span>
                    ))}
                  </div>
                  
                  <Link href="/Pages/Services" className="services__card-link">
                    Learn More
                    <span className="services__card-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta__container">
          <div className="cta__content">
            <h2 className="cta__title">Ready to Start Your Next Project?</h2>
            <p className="cta__description">
             {" Let's "}collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="cta__actions">
              <Link href="/Pages/Projects" className="cta__btn cta__btn--primary">
                View My Portfolio
              </Link>
              <Link href="/Pages/Contact" className="cta__btn cta__btn--secondary">
                Start a Conversation
              </Link>
            </div>
          </div>
          <div className="cta__visual">
            <div className="cta__code">
              <div className="cta__code-line">
                <span className="cta__code-comment">{"// Let's build something amazing"}</span>
              </div>
              <div className="cta__code-line">
                <span className="cta__code-keyword">const</span>
                <span className="cta__code-variable"> project</span>
                <span className="cta__code-operator"> = </span>
                <span className="cta__code-function">createInnovation</span>
                <span className="cta__code-bracket">(</span>
              </div>
              <div className="cta__code-line cta__code-line--indent">
                <span className="cta__code-property">yourIdeas</span>
                <span className="cta__code-operator">, </span>
              </div>
              <div className="cta__code-line cta__code-line--indent">
                <span className="cta__code-property">myExpertise</span>
              </div>
              <div className="cta__code-line">
                <span className="cta__code-bracket">);</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;