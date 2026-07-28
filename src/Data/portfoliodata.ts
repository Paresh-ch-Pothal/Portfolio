import type { PortfolioData } from "../types";
import sc1 from '../assets/projectImages/sc1.png';
import sc2 from '../assets/projectImages/sc2.png';
import sc3 from '../assets/projectImages/sc3.png';
import sc5 from '../assets/projectImages/sc5.png';
import sc6 from '../assets/projectImages/sc6.png';
import sc7 from '../assets/projectImages/sc7.png';
import sc8 from '../assets/projectImages/sc8.png';
import sc11 from '../assets/projectImages/sc11.png';
import sc12 from '../assets/projectImages/sc12.png';
import sc13 from '../assets/projectImages/sc13.png';
import sc14 from '../assets/projectImages/sc14.png';
import sc15 from '../assets/projectImages/sc15.png';
import sc16 from '../assets/projectImages/sc16.png';
import sc17 from '../assets/projectImages/sc17.png';
import sc18 from '../assets/projectImages/sc18.png';
import sc19 from '../assets/projectImages/sc19.png';
import sc20 from '../assets/projectImages/sc20.png';
import sc21 from '../assets/projectImages/sc21.png';
import sc22 from '../assets/projectImages/sc22.png';
import sc23 from '../assets/projectImages/sc23.png';



export const portfolioData: PortfolioData = {
  personal: {
    name: "Paresh Pothal",
    title: "Full Stack Developer, AI/ML Enthusiast",
    location: "Bhubaneswar, India",
    email: "pareshchandrapothal44@gmail.com",
    bio: "Software Engineer specializing in Full-Stack Development and Machine Learning, with experience building 10+ production-level projects using React, Node.js, and Python. National hackathon finalist, solved 400+ DSA problems, and delivered scalable AI-driven applications.",
    tagline: "Create, Learn and Grow with Code.",
    logo: "",
    profileImage: ""
  },

  social: {
    github: "https://github.com/Paresh-ch-Pothal",
    linkedin: "https://www.linkedin.com/in/paresh-chandra-pothal-2b5950295",
    twitter: "https://x.com/Paresh_Pothal",
    leetcode: "https://leetcode.com/u/pareshchandrapothal44/",
    gfg: "https://www.geeksforgeeks.org/profile/pareshchanduhie",
    resume: "https://www.dropbox.com/scl/fi/g1b5acfkwu1sg1ggm5gud/Resume_1-2.pdf?rlkey=0f70u9hf2wpd1jtzozg2wsp1o&st=2uz2ho95&dl=0"
  },

  skills: [
    { category: "Frontend", items: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5/CSS3"], progress: 85 },
    { category: "Backend", items: ["Node.js", "Flask", "Python", "SQL", "Express"], progress: 80 },
    { category: "AI & Machine Learning", items: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "NLP", "Deep Learning", "Seaborn"], progress: 90 },
    { category: "Databases", items: ["MongoDB", "MySQL"], progress: 80 },
    { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "PyCharm", "Jupyter Notebook", "Colab"], progress: 85 },
    { category: "Core Competencies", items: ["Data Structures", "Algorithms", "Full-Stack Development", "Problem Solving"], progress: 90 }
  ],

  experiences: [
    {
      id: 1,
      role: "React Development Intern",
      company: "AceHours",
      duration: "July 2025 - September 2025",
      location: "Remote",
      description: "Working on a team of 7+ members focusing on API development and frontend tech stack. Collaborating on building scalable React applications with modern development practices.",
      responsibilities: [
        "Developed responsive UI components using React.js and Tailwind CSS",
        "Collaborated with backend team for seamless API integration",
        "Participated in code reviews and agile development processes"
      ]
    },
    {
      id: 2,
      role: "Computer Science Instructor (CBSE Class 12)",
      company: "JJ Institute Of Science",
      duration: "December 2025 - January 2026",
      location: "On-site",
      description: "Taught CBSE Class 12 students core computer science subjects with a focus on conceptual clarity and exam-oriented preparation.",
      responsibilities: [
        "Taught Java, Python, and SQL to Class 12 CBSE students",
        "Explained programming concepts using real-world examples",
        "Helped students prepare for board exams and practical assessments",
        "Provided doubt-solving sessions and personalized guidance"
      ]
    },
    {
      id: 3,
      role: "Computer Science Instructor (CBSE Class 11)",
      company: "JJ Institute Of Science",
      duration: "June 2026 - July 2026",
      location: "On-site",
      description: "Delivered comprehensive Computer Science instruction to CBSE Class 11 students, emphasizing foundational programming logic and academic excellence.",
      responsibilities: [
        "Instructed students in core Python programming, syntax, and data structures.",
        "Simplified complex coding concepts using real-world analogies.",
        "Conducted targeted preparation for theoretical exams and practical assessments.",
        "Provided personalized mentorship and interactive doubt-solving sessions."
      ]
    }
  ],


  timeline: [
    {
      year: "2026",
      title: "Generative AI Developer",
      company: "",
      description: "Developed multiple RAG-based applications, including an AI Legal Assistant and a YouTube chatbot."
    },
    {
      year: "2025",
      title: "AI/ML Enthusiast",
      company: "",
      description: "Started exploring AI and Machine Learning concepts through projects and research."
    },
    {
      year: "2024",
      title: "MERN Stack Developer",
      company: "IIIT Bhubaneswar",
      description: "Completed multiple projects using MongoDB, Express, React, and Node.js."
    },
    {
      year: "2023",
      title: "Computer Science Engineering Student",
      company: "IIIT Bhubaneswar",
      description: "Started learning C, C++, and basic web development concepts."
    }
  ],




  projects: [
    {
      "id": -4,
      "title": "Legal AI Research Assistant",
      "description": "A domain-specific Retrieval-Augmented Generation (RAG) platform customized for Indian legal contexts. Developed an end-to-end ingestion pipeline utilizing OCR for scanned documents, chunking text via InLegalBERT embeddings, and indexing them into a ChromaDB vector store. Orchestrated a LangChain pipeline with Google Gemini to provide grounded Q&A with direct citations, featuring an independent web search module and a dynamic PDF report generator via ReportLab.",
      "image": null,
      "technologies": ["Python", "Streamlit", "LangChain", "Gemini API", "ChromaDB", "InLegalBERT", "ReportLab", "DuckDuckGo API"],
      "github": "https://github.com/Paresh-ch-Pothal/Legal-AI-Assistant",
      "live": null
    },
    {
      "id": -3,
      "title": "AskTube: AI YouTube Chatbot",
      "description": "An interactive knowledge exploration platform that transforms passive video watching into an active Q&A experience. Built a Retrieval-Augmented Generation (RAG) pipeline to chunk and process YouTube transcripts, generating vector embeddings stored in a FAISS database. Utilized LangChain to orchestrate semantic similarity searches and leverage the Gemini API for context-aware, precise responses.",
      "image": null,
      "technologies": ["Python", "Streamlit", "LangChain", "Gemini API", "FAISS", "Vector Embeddings", "YouTube Transcript API"],
      "github": "https://github.com/Paresh-ch-Pothal/AskTube",
      "live": null
    },
    {
      "id": -2,
      "title": "Finance Dashboard Backend",
      "description": "A production-ready, secure backend server for financial record management featuring a robust Role-Based Access Control (RBAC) system for Admin, Analyst, and Viewer profiles. Integrated JWT authentication, Express Validator for input filtering, and rate-limiting middleware to prevent API abuse. Fully documented using Swagger API and optimized for enterprise-grade maintainability.",
      "image": sc22,
      "technologies": ["Node.js", "TypeScript", "Express.js", "MongoDB", "Mongoose", "JWT", "Swagger", "Render"],
      "github": "https://github.com/Paresh-ch-Pothal/Finance-Dashboard-Backend",
      "live": "https://finance-dashboard-awg3.onrender.com/api-docs/"
    },
    {
      "id": -1,
      "title": "Community Feed with Gamification",
      "description": "A full-stack social platform featuring an unlimited-depth nested comment tree and a real-time gamification engine. Implemented a 24-hour rolling leaderboard calculating user ranking based on dynamic karma point assignment. Built with a hybrid database architecture that automatically toggles between PostgreSQL for production and SQLite for local development.",
      "image": sc23,
      "technologies": ["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "Django", "Django REST Framework", "PostgreSQL", "SQLite"],
      "github": "https://github.com/Paresh-ch-Pothal/Community-Feed",
      "live": "https://community-feed-theta.vercel.app"
    },
    {
      id: 0,
      title: "AI Text Detection",
      description: "The AI Text Detection Model distinguishes between AI-generated and human-written text using features like word length, stopword ratio, and perplexity. With an AUC-ROC score of 0.94, it demonstrates high accuracy. Future work includes expanding features and fine-tuning for improved performance.",
      image: null,
      technologies: ['python', 'Scikit-Learn', 'Pandas', 'Numpy', 'Transformers', 'BERT', 'XgBoost', 'Perflexity'],
      github: "https://github.com/Paresh-ch-Pothal/AI-Text-Detection",
      live: null
    },
    {
      id: 1,
      title: "Click Resume",
      description: "Click Resume analyzes your resume and calculates an ATS score to optimize it for job applications.",
      image: sc15,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Scikit Learn', 'Flask', 'Gemini API', 'NLP'],
      github: "https://github.com/Paresh-ch-Pothal/Click-Resume",
      live: "https://clickresume.vercel.app/"
    },
    {
      id: 2,
      title: "Crop Yield Prediction Model",
      description: "A crop yield prediction model uses data like weather and soil conditions to estimate harvest output, helping farmers plan better.",
      image: sc17,
      technologies: ['Streamlit', 'Scikit-Learn', 'Pandas', 'Matplotlib', 'Numpy'],
      github: "https://github.com/Paresh-ch-Pothal/Crop-Yield-Prediction",
      live: "https://crop-yield-sys.streamlit.app/"
    },
    {
      id: 3,
      title: "BUzzY : A Smart Bus Booking System",
      description: "A smart bus booking system that allows users to search, book, and manage bus tickets online with ease and efficiency.",
      image: sc18,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind'],
      github: "https://github.com/Paresh-ch-Pothal/BUzzY---A-Smart-Bus-Booking-System",
      live: "https://b-uzz-y-a-smart-bus-booking-system.vercel.app/"
    },
    {
      id: 4,
      title: "Chase The Cloud : Cloud Motion Detection",
      description: "Built a ConvLSTM model to predict the next satellite cloud frame by learning spatiotemporal patterns from 10 previous frames.",
      image: sc20,
      technologies: ['Tensorflow', 'Keras', 'ConvLSTM', 'Numpy', 'Matplotlib'],
      github: "https://github.com/Paresh-ch-Pothal/Cloud-Motion-Detection_ConvLSTM",
      live: null
    },

    // Existing projects (IDs 5 and onward)
    {
      id: 5,
      title: "Trash Detection Model",
      description: "YOLO-based trash detection identifies and locates waste objects in real-time images or videos.",
      technologies: ['Streamlit', 'Python', 'YOLO Model', 'Matplotlib', 'Numpy'],
      github: "https://github.com/Paresh-ch-Pothal/Trash-Detection-Using-YOLO",
      live: null,
      image: sc21
    },
    {
      id: 6,
      title: "Disease Prediction Model",
      description: "A disease prediction model uses data to identify the risk of illness early, aiding faster diagnosis and treatment.",
      technologies: ['Flask', 'Scikit-Learn', 'NLP', 'Pandas', 'Matplotlib', 'Numpy'],
      github: "https://github.com/Paresh-ch-Pothal/Disease-Prediction-System-Flask",
      live: "https://disease-prediction-sys.streamlit.app/",
      image: sc16
    },
    {
      id: 7,
      title: "Drag And Drop : Form Builder",
      description: "Drag-and-drop form builder with customizable components, responsive design, and smooth element reordering.",
      technologies: ['React', 'DND Kit', 'Tailwind CSS'],
      github: "https://github.com/Paresh-ch-Pothal/Drag-And-Drop-Form-Builder",
      live: "https://drag-and-drop-form-builder-red.vercel.app/",
      image: sc19
    },
    {
      id: 8,
      title: "TechXpert",
      description: "TechXpert is a platform to teach, learn, track progress, earn certificates, and collaborate.",
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'html2canvas', 'jspdf'],
      github: "https://github.com/Paresh-ch-Pothal/TechXpert",
      live: null,
      image: sc11
    },
    {
      id: 9,
      title: "Anubandh",
      description: "Anubandh is an alumni networking system that connects alumni and current students, fostering collaboration and mentorship.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Paresh-ch-Pothal/Anubandh",
      live: null,
      image: sc12
    },
    {
      id: 10,
      title: "Code Compiler",
      description: "Code Compiler is an online platform that allows users to compile and run HTML, CSS, and JavaScript files in real-time.",
      technologies: ["React", "monaco-editor"],
      github: "https://github.com/Paresh-ch-Pothal/Code-Complier",
      live: "https://code-complier-rosy.vercel.app/",
      image: sc13
    },
    {
      id: 11,
      title: "E-Commerce Website",
      description: "The E-commerce website, built with Next.js, delivers fast, responsive shopping experiences and dynamic content.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Paresh-ch-Pothal/E-Commerce",
      live: null,
      image: sc14
    },
    {
      id: 12,
      title: "Juris Spectra",
      description: "Juris Spectra is a MERN stack website providing law students with daily news and internship opportunities.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Paresh-ch-Pothal/Juris-Spectra",
      live: "https://juris-spectra-ir7b.vercel.app/",
      image: sc1
    },
    {
      id: 13,
      title: "Chat-App",
      description: "Chat-app built using the MERN stack and Socket.IO, offers real-time messaging and seamless communication.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      github: "https://github.com/Paresh-ch-Pothal/Chat-App",
      live: null,
      image: sc2
    },
    {
      id: 14,
      title: "Food Store",
      description: "A food-store website developed with MERN stack, providing a seamless shopping experience for food products.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Paresh-ch-Pothal/Food-Store",
      live: null,
      image: sc3
    },
    {
      id: 15,
      title: "iNotebook",
      description: "iNotebook offers digital note-taking, built using the MERN stack for robust functionality and sleek interface.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/Paresh-ch-Pothal/iNotebook",
      live: null,
      image: sc5
    },
    {
      id: 16,
      title: "Weather App",
      description: "Weather app using API provides real-time updates with React.js and modern UI.",
      technologies: ["React", "HTML", "Weather API", "CSS"],
      github: "https://github.com/Paresh-ch-Pothal/Weather-App",
      live: null,
      image: sc6
    },
    {
      id: 17,
      title: "Calculator",
      description: "A simple calculator built using HTML, CSS, and JavaScript for basic arithmetic operations.",
      technologies: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Paresh-ch-Pothal/Calculator",
      live: null,
      image: sc7
    },
    {
      id: 18,
      title: "Netflix Clone",
      description: "A Netflix clone created using HTML and CSS to replicate the streaming UI.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/Paresh-ch-Pothal/Netflix-Clone",
      live: null,
      image: sc8
    }
  ],

  achievements: [
    {
      "id": 1,
      "title": "Amazon ML Hackathon (Rank: 2316)",
      "organization": "Amazon",
      "date": "2025",
      "description": "Engineered a multimodal e-commerce price prediction model utilizing CLIP for image embeddings and BERT for text processing. Combined features into an optimized XGBoost model to achieve a 52.024 SMAPE score on large-scale datasets."
    },
    {
      "id": 2,
      "title": "D3 Hackathon Finalist",
      "organization": "IIIT Bhubaneswar",
      "date": "2024",
      "description": "Developed an institutional inventory management system to stream-line tracking of official files and assets, significantly improving resource optimization."
    },
    {
      "id": 3,
      "title": "Nirman Hackathon Finalist",
      "organization": "Silicon University, Odisha",
      "date": "2025",
      "description": "Developed a real-time disease prediction and cost-optimization platform to lower healthcare barriers. Features include nearest-hospital mapping and a medicine price-comparison engine designed to minimize out-of-pocket patient costs."
    }
  ],

  certifications: [
    {
      id: 1,
      title: "GeeksForGeeks 160 Days Coding Challenge",
      issuer: "GeeksForGeeks",
      date: "2025"
    },
    {
      id: 2,
      title: "AIML for Geo Data Analysis",
      issuer: "IIRS",
      date: "2024"
    },
    {
      id: 3,
      title: "LOR - GeetRam Holdings",
      issuer: "GeetRam Holdings",
      date: "2025"
      // no credentialUrl — tests "no button" state
    },

  ]
};