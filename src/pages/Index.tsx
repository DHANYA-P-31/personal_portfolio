import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";
import dhanyaPhoto from "@/assets/dhanya-photo.jpg";
import restaurantProject from "@/assets/restaurant-project.jpg";
import fakeNewsProject from "@/assets/fake-news-project.jpg";
import { useState } from "react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <div className="flex gap-6 text-sm font-medium">
        <button onClick={() => scrollToSection('home')} className="neon-underline text-foreground hover:text-primary transition-smooth">
          Home
        </button>
        <a href="/Dhanya_P_Resume.pdf" target="_blank" rel="noopener noreferrer" className="neon-underline text-foreground hover:text-primary transition-smooth">
          Resume
        </a>
        <button onClick={() => scrollToSection('projects')} className="neon-underline text-foreground hover:text-primary transition-smooth">
          Projects
        </button>
        <a href="https://www.linkedin.com/in/dhanya-prabharam/" target="_blank" rel="noopener noreferrer" className="neon-underline text-foreground hover:text-primary transition-smooth">
          LinkedIn
        </a>
        <button onClick={() => scrollToSection('contact')} className="neon-underline text-foreground hover:text-primary transition-smooth">
          Contact
        </button>
      </div>
    </nav>
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 z-10" />
      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Hi, I'm <span className="gradient-text">Dhanya P</span> 👋
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Aspiring Machine Learning Engineer | Passionate about AI, Data, and Innovation
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-semibold px-8 py-3"
            onClick={() => window.open('/Dhanya_P_Resume.pdf', '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-secondary text-secondary hover:bg-secondary/10 glow-purple font-semibold px-8 py-3"
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
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-heading font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I am a Computer Science and Engineering student with a passion for solving real-world problems through technology. 
              My interests lie in machine learning and data science, aiming to uncover meaningful insights from data and develop innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Currently pursuing B.E in Computer Science at Government College of Technology, Coimbatore. 
              I aim to deepen my understanding of machine learning and data science concepts through hands-on practice and real-world scenarios.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Programming Languages</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Python</li>
                  <li>C</li>
                  <li>Java</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary">CS Concepts</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Machine Learning</li>
                  <li>OOPS</li>
                  <li>Data Structures</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Tools & Frameworks</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Django</li>
                  <li>HTML</li>
                  <li>TailWind CSS</li>
                  <li>Jupyter Notebook</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary">Libraries & Database</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Sklearn</li>
                  <li>NumPy, Pandas</li>
                  <li>Matplotlib</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Kanyakumari, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>9489412025</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="relative max-w-md mx-auto">
              <img 
                src="/lovable-uploads/78d756e8-d8b6-4745-888f-beb87a699d7c.png"
                alt="Dhanya P - Aspiring ML Engineer" 
                className="w-full rounded-2xl shadow-card border-2 border-primary/20"
              />
              <div className="absolute -inset-4 bg-neon-gradient opacity-20 rounded-2xl blur-xl" />
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
      tags: ["Django", "Python", "MariaDB", "Web Development", "CRUD"],
      techStack: ["Django", "Python", "MariaDB", "Bootstrap"],
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
    }
  ];

  const filters = ['All', 'Machine Learning', 'Web Development'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-heading font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full glow-cyan" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
          {filters.map((filterOption) => (
            <Button
              key={filterOption}
              variant={filter === filterOption ? "default" : "outline"}
              onClick={() => setFilter(filterOption)}
              className={filter === filterOption 
                ? "bg-primary text-primary-foreground glow-cyan" 
                : "border-muted text-muted-foreground hover:border-primary hover:text-primary"
              }
            >
              {filterOption}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-gradient rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-smooth hover:scale-105 animate-fade-in-up"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="glow-cyan"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground">
                  <strong>Tech Stack:</strong> {project.techStack.join(", ")}
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
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-heading font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's connect and discuss opportunities in Machine Learning and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-4 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            <div className="text-left">
              <h3 className="text-xl font-heading font-semibold mb-6">Connect with me</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:dhanyaprabharam@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <Mail className="h-5 w-5 group-hover:glow-cyan" />
                  dhanyaprabharam@gmail.com
                </a>
                
                <a
                  href="https://www.linkedin.com/in/dhanya-prabharam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <Linkedin className="h-5 w-5 group-hover:glow-cyan" />
                  LinkedIn Profile
                </a>
                
                <a
                  href="https://github.com/DHANYA-P-31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth group"
                >
                  <Github className="h-5 w-5 group-hover:glow-cyan" />
                  GitHub Profile
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5" />
                  +91 9489412025
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  Kanyakumari, Tamil Nadu, India
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
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © 2025 Dhanya P | Built with ❤️ & AI
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/dhanya-prabharam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/DHANYA-P-31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:dhanyaprabharam@gmail.com"
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <Mail className="h-5 w-5" />
          </a>
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