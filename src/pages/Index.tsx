import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Menu, X } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";
import restaurantProject from "@/assets/restaurant-project.jpg";
import fakeNewsProject from "@/assets/fake-news-project.jpg";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 right-0 z-50 p-8">
        <div className="flex gap-8 text-sm font-medium">
          <button onClick={() => scrollToSection('home')} className="elegant-underline text-foreground hover:text-primary transition-smooth">
            Home
          </button>
          <button onClick={() => scrollToSection('projects')} className="elegant-underline text-foreground hover:text-primary transition-smooth">
            Projects
          </button>
          <a href="https://www.linkedin.com/in/dhanya-prabharam/" target="_blank" rel="noopener noreferrer" className="elegant-underline text-foreground hover:text-primary transition-smooth">
            LinkedIn
          </a>
          <button onClick={() => scrollToSection('contact')} className="elegant-underline text-foreground hover:text-primary transition-smooth">
            Contact
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 right-0 z-50 p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-background/80 backdrop-blur-sm border border-border hover:bg-primary/10"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-background/95 backdrop-blur-md border border-border rounded-2xl p-6 min-w-48 shadow-elevated">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <button onClick={() => scrollToSection('home')} className="text-left elegant-underline text-foreground hover:text-primary transition-smooth py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left elegant-underline text-foreground hover:text-primary transition-smooth py-2">
                Projects
              </button>
              <a href="https://www.linkedin.com/in/dhanya-prabharam/" target="_blank" rel="noopener noreferrer" className="elegant-underline text-foreground hover:text-primary transition-smooth py-2">
                LinkedIn
              </a>
              <button onClick={() => scrollToSection('contact')} className="text-left elegant-underline text-foreground hover:text-primary transition-smooth py-2">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90 z-10" />
      
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 sm:px-8 animate-fade-in-up">
        <div className="floating-element">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold mb-6 sm:mb-8 leading-tight">
            Hi, I'm <span className="gradient-text">Dhanya P</span> 👋
          </h1>
          <p className="text-lg sm:text-xl lg:text-3xl mb-8 sm:mb-12 text-muted-foreground font-light leading-relaxed max-w-4xl mx-auto">
            Aspiring Machine Learning Engineer | Passionate about AI, Data, and Innovation
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-bounce-in">
          <a href="https://drive.google.com/file/d/1TgoOLqBr7JaTOqBUpsCF9Metob7CtDRe/preview" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-primary-gradient text-primary-foreground hover:scale-105 glow-primary font-semibold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg transition-spring shadow-elevated w-full sm:w-auto"
            >
              <ExternalLink className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
          </a>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-secondary bg-transparent text-secondary hover:bg-secondary/10 hover:scale-105 glow-secondary font-semibold px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg transition-spring w-full sm:w-auto"
          >
            Explore Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 sm:mb-8 gradient-text-primary">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
              I am a Computer Science and Engineering student with a passion for solving real-world problems through technology. 
              My interests lie in machine learning and data science, aiming to uncover meaningful insights from data and develop innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-light">
              Currently pursuing B.E in Computer Science at Government College of Technology, Coimbatore. 
              I aim to deepen my understanding of machine learning and data science concepts through hands-on practice and real-world scenarios.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="card-gradient p-6 rounded-2xl hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Programming Languages
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Python
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    C
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Java
                  </li>
                </ul>
              </div>
              <div className="card-gradient p-6 rounded-2xl hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-secondary flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  CS Concepts
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Machine Learning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    OOPS
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Data Structures
                  </li>
                </ul>
              </div>
              <div className="card-gradient p-6 rounded-2xl hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Tools & Frameworks
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Django
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    HTML
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    TailWind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Jupyter Notebook
                  </li>
                </ul>
              </div>
              <div className="card-gradient p-6 rounded-2xl hover-lift">
                <h3 className="text-xl font-semibold mb-4 text-secondary flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Libraries & Database
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Sklearn
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    NumPy, Pandas
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    Matplotlib
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    MySQL
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 card-gradient rounded-2xl flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-medium">Kanyakumari, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-accent" />
                <span className="font-medium">9489412025</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative max-w-lg mx-auto">
              <img 
                src="/lovable-uploads/f1980d36-9a9f-4617-a306-c22d7c8f1036.png"
                alt="Dhanya P - Aspiring ML Engineer" 
                className="w-full rounded-3xl shadow-elevated border-2 border-primary/20 hover-lift"
              />
              <div className="absolute -inset-6 bg-primary-gradient opacity-10 rounded-3xl blur-2xl animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "Restaurant Management System",
      description: "Developed a web-based application using Django and Python to streamline restaurant operations with features for managing food categories, menu items, customers, and order processing.",
      image: restaurantProject,
      tags: ["Django", "Python", "MySQL", "Web Development", "CRUD"],
      techStack: ["Django", "Python", "MySQL", "Bootstrap"],
      github: "https://github.com/DHANYA-P-31/RestaurantManagementsystem",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Fake News Detection",
      description: "Built a fake news detection system using NLP techniques including tokenization, sentiment analysis, and Word2Vec with models like LSTM, Random Forest, and Naive Bayes.",
      image: fakeNewsProject,
      tags: ["NLP", "Machine Learning", "LSTM", "Python", "AI"],
      techStack: ["Python", "NLP", "LSTM", "TailWind CSS", "Jupyter Notebook"],
      github: "https://github.com/Q12AND8/FakeNewsDetection",
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "Portfolio Optimizer Using MPT",
      description: "Built a financial portfolio optimization tool leveraging Modern Portfolio Theory (MPT). Implemented features for fetching historical stock data using Yahoo Finance, calculating returns and risk metrics, and optimizing portfolios for maximum Sharpe ratio and minimum volatility. Designed an interactive Streamlit dashboard with Efficient Frontier visualization, discrete share allocation, and downloadable CSV reports.",
      image: fakeNewsProject, // Using existing image as placeholder
      tags: ["Python", "Streamlit", "Finance", "MPT", "Data Science"],
      techStack: ["Python", "Streamlit", "PyPortfolioOpt", "Yahoo Finance API", "Plotly"],
      github: "https://github.com/DHANYA-P-31/PortfolioOptimizationUsingMPT",
      category: "Machine Learning"
    }
  ];

  const filters = ['All', 'Machine Learning', 'Web Development'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 bg-background-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="gradient-text-secondary">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-8">
            Exploring the intersection of technology and innovation through hands-on development
          </p>
          <div className="w-32 h-1 bg-primary-gradient mx-auto rounded-full glow-primary animate-shimmer" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up">
          {filters.map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? "default" : "outline"}
              onClick={() => setFilter(filterOption)}
              className={filter === filterOption 
                ? "bg-primary-gradient text-primary-foreground glow-primary hover:scale-105 transition-spring px-6 py-3 text-base font-medium" 
                : "border-2 border-muted bg-transparent text-muted-foreground hover:border-primary hover:text-primary hover:scale-105 transition-spring px-6 py-3 text-base font-medium"
              }
            >
              {filterOption}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card-elevated rounded-3xl overflow-hidden hover:border-primary/50 hover:scale-[1.02] transition-spring animate-fade-in-up hover-glow ${
                index % 2 === 0 ? 'lg:translate-y-8' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="flex gap-4">
                    <Button 
                      size="lg" 
                      className="bg-primary-gradient glow-primary hover:scale-110 transition-spring shadow-elevated"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-3 h-5 w-5" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed font-light text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-4 py-2 text-sm rounded-full border font-medium transition-all duration-300 hover:scale-105 ${
                        tagIndex % 3 === 0 
                          ? 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20' 
                          : tagIndex % 3 === 1 
                          ? 'bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20'
                          : 'bg-accent/10 text-accent border-accent/20 hover:bg-accent/20'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-xl">
                  <strong className="text-foreground">Tech Stack:</strong> {project.techStack.join(" • ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 gradient-text-primary">Get in Touch</h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Let's connect and discuss opportunities in Machine Learning and AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fade-in-left">
            <div className="card-elevated p-10 rounded-3xl">
              <h3 className="text-2xl font-display font-semibold mb-8 text-center">Send a Message</h3>
              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-5 bg-background-secondary border-2 border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground placeholder-muted-foreground text-lg"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-5 bg-background-secondary border-2 border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground placeholder-muted-foreground text-lg"
                  />
                </div>
                <div>
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full p-5 bg-background-secondary border-2 border-border rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none text-foreground placeholder-muted-foreground text-lg"
                  />
                </div>
                <Button className="w-full bg-primary-gradient text-primary-foreground hover:scale-105 glow-primary py-4 text-lg font-semibold transition-spring">
                  <Mail className="mr-3 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-right">
            <div className="card-elevated p-8 rounded-3xl">
              <h3 className="text-2xl font-display font-semibold mb-8 text-center">Connect with me</h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:dhanyaprabharam@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 group border-2 border-transparent hover:border-primary/20"
                >
                  <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm">dhanyaprabharam@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/dhanya-prabharam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background-secondary hover:bg-secondary/10 text-muted-foreground hover:text-secondary transition-all duration-300 group border-2 border-transparent hover:border-secondary/20"
                >
                  <div className="p-3 bg-secondary/10 rounded-2xl group-hover:bg-secondary/20 transition-colors">
                    <Linkedin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <p className="text-sm">Professional Profile</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/DHANYA-P-31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300 group border-2 border-transparent hover:border-accent/20"
                >
                  <div className="p-3 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                    <Github className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">GitHub</p>
                    <p className="text-sm">Code Repository</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-background-secondary border-2 border-muted/20">
                  <div className="p-3 bg-muted/10 rounded-2xl">
                    <Phone className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 9489412025</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-background-secondary border-2 border-muted/20">
                  <div className="p-3 bg-muted/10 rounded-2xl">
                    <MapPin className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Kanyakumari, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-8 border-t border-border/30 bg-background-tertiary/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-lg">
              © 2025 <span className="font-semibold text-foreground">Dhanya P</span> | Crafted with ❤️ & AI
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Building the future through Machine Learning & Innovation
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/dhanya-prabharam/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background-secondary border-2 border-border rounded-2xl text-muted-foreground hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/DHANYA-P-31"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background-secondary border-2 border-border rounded-2xl text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:dhanyaprabharam@gmail.com"
              className="p-3 bg-background-secondary border-2 border-border rounded-2xl text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-hero-gradient">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;