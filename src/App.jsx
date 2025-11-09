import React from 'react';
import { Plane, Code, Database, Zap, HardHat, Link, Linkedin, Github, Mail } from 'lucide-react';
import cacic from './assets/cacic.jpg';
import flightFinder from './assets/cheap-flight-finder.jpg';
import todo from './assets/task-manager.jpg';
import profile from './assets/profile_pic.jpg'
import resume from "./assets/ANDREW-RESUME.pdf"
import blog from "./assets/blog-space.jpg"

// --- CONFIGURATION DATA ---
const PORTFOLIO_DATA = {
  name: "Andrew Nwaneri",
  title: "Full Stack Developer | Data Analyst | Automation Specialist",
  summary: "A highly versatile and results-driven Full Stack Developer and Data Analyst with comprehensive experience across the entire development lifecycle. Proven expertise in building scalable web applications, designing interactive dashboards, and leveraging AI/ML for intelligent automation. Passionate about writing clean, high-performance code, integrating complex APIs, and automating repetitive tasks.",
  
  skills: [
    { name: "Languages & Frameworks", icon: <Code className="w-5 h-5" />, items: ["Python", "JavaScript (ES6+)", "React", "Node.js", "Flask", "Express.js", "HTML5", "CSS3"] },
    { name: "Databases & Backend", icon: <Database className="w-5 h-5" />, items: ["PostgreSQL", "MongoDB", "SQLite", "SQLAlchemy (ORM)", "RESTful APIs", "JWT Authentication"] },
    { name: "Data & Automation", icon: <Zap className="w-5 h-5" />, items: ["Pandas", "NumPy", "Plotly", "Web Scraping (Selenium)", "OpenAI API", "Twilio", "Email Automation"] },
    { name: "Tools & DevOps", icon: <HardHat className="w-5 h-5" />, items: ["Git", "GitHub", "Docker", "Postman", "AWS", "Azure", "Object-Oriented Programming"] },
  ],

  projects: [
    {
      title: "E-commerce Retail Platform",
      description: "Developed a secure online foodstuff retail store featuring end-to-end encrypted payment processing. Designed an interactive user-admin database system using Flask and integrated the Flutterwave API for transactions.",
      technologies: ["Flask", "Python", "Flutterwave API", "PostgreSQL", "SQLAlchemy", "JWT", "Werkzeug", "HTML/CSS", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/Andrew-nwaneri/cacic-store",
      liveUrl: "https://cacic-synergy.onrender.com/",
      image: cacic
    },
    {
      title: "Cheap Flight Finder (serverless)",
      description: "Engineered a serverless flight search application using React and Node.js. Successfully integrated and authenticated the Amadeus API to return the cheapest flight options based on complex filtering parameters.",
      technologies: ["React", "Node.js", "CSS", "Amadeus API", "JavaScript"],
      githubUrl: "https://github.com/Andrew-nwaneri/flight-finder-serverless",
      liveUrl: "https://cheap-flight-finder.vercel.app/", 
      image: flightFinder
    },
    {
      title: "Cheap Flight Finder (Full-Stack)",
      description: "Engineered a full-stack flight search application using React and Node.js. Successfully integrated and authenticated the Amadeus API to return the cheapest flight options based on complex filtering parameters.",
      technologies: ["React", "Node.js", "CSS", "Express.js", "Amadeus API", "JavaScript", "Axios", "Docker"],
      githubUrl: "https://github.com/Andrew-nwaneri/flight-finder-FullStack",
      image: flightFinder
    },
    {
      title: "Resposive Todo-list app",
      description: "Developed a single page Todo-list app using React and CSS to show-case understanding of array operatives, state management and responsive design.",
      technologies: ["React", "lucide-react", "CSS"],
      githubUrl: "https://github.com/Andrew-nwaneri/todo-list",
      liveUrl: "https://todo-list-sage-chi.vercel.app/",
      image: todo
    },
    {
      title: "Blog Space",
      description: "Designed and implemented scalable Blog Space using Flask and PostgreSQL. Secured the user database using password hashing (Werkzeug) and implemented JWT for token-based secure access across all CRUD operations.",
      technologies: ["Flask", "PostgreSQL", "SQLAlchemy", "JWT", "Werkzeug", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/Andrew-nwaneri/andrew-s-blog",
      liveUrl: "#",
      image: blog,
    },
    {
      title: "Intelligent Automation & Alerts",
      description: "Created customized AI Chat-Bots via the OpenAI API and deployed critical alerting scripts. This includes a Stock Trading News Alert (Twilio) and a Cheap Flight Alert (smtplib) to deliver timely, actionable data.",
      technologies: ["OpenAI API", "Twilio", "Python", "smtplib", "Schedule"],
      githubUrl: "https://github.com/Andrew-nwaneri/chat-bot-assistant",
      liveUrl: "#",
    },
  ],
  
  contact: {
    email: "nwaneriandrew@gmail.com",
    linkedin: "https://www.linkedin.com/in/andrew-nwaneri-can7",
    github: "https://github.com/Andrew-nwaneri",
  }
};

// --- COMPONENTS ---

const Header = () => (
  <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-md shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2 text-indigo-700 font-bold text-xl">
        <img src={profile} alt='profile_img' className='w-6 h-6 rounded'/>
        <span>{PORTFOLIO_DATA.name}</span>
      </div>
      <nav className="space-x-4">
        {['Skills', 'Projects', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150">
            {item}
          </a>
        ))}
        {/* <a href={resume} className='text-gray-600 hover:text-indigo-600 font-medium transition duration-150' download={resume} >Resume</a> */}
      </nav>
    </div>
  </header>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-10 border-b-4 border-indigo-200 inline-block pb-1">
      {title}
    </h2>
    {children}
  </section>
);

const SkillCard = ({ name, icon, items }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex items-center text-indigo-600 mb-4">
      {icon}
      <h3 className="ml-3 text-xl font-semibold text-gray-800">{name}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map(item => (
        <span key={item} className="px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
    {project.image? <img 
        src={project.image} 
        alt="project-image" 
        style={{
          maxWidth: "100%",
          height: "auto",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
        }} 
      /> : <div></div>}
    <div className="p-6 flex-grow">
      
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span key={tech} className="px-3 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="p-6 border-t border-gray-100 flex space-x-3 bg-gray-50">
      <a 
        href={project.githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition duration-150"
      >
        <Github className="w-4 h-4 mr-2" /> Code
      </a>
      {project.liveUrl !== '#' && (
        <a 
          href={project.liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-50 transition duration-150"
        >
          <Link className="w-4 h-4 mr-2" /> Demo
        </a>
      )}
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            {PORTFOLIO_DATA.name}
          </h1>
          <p className="text-2xl font-light mb-8 max-w-3xl mx-auto">
            {PORTFOLIO_DATA.title}
          </p>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            {PORTFOLIO_DATA.summary}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a 
              href={PORTFOLIO_DATA.contact.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white text-indigo-700 rounded-full shadow-lg hover:bg-indigo-100 transition duration-150"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={PORTFOLIO_DATA.contact.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white text-indigo-700 rounded-full shadow-lg hover:bg-indigo-100 transition duration-150"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="p-3 bg-white text-indigo-700 rounded-full shadow-lg hover:bg-indigo-100 transition duration-150"
              aria-label="Email Me"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PORTFOLIO_DATA.skills.map(skill => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </Section>
      
      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PORTFOLIO_DATA.projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's build something together.</h2>
          <p className="text-gray-400 mb-6">
            I'm currently seeking new development opportunities. Feel free to connect or send an email.
          </p>
          <a
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </a>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          Designed and developed by {PORTFOLIO_DATA.name} | © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default App;

