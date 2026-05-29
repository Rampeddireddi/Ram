import resumePdfUrl from "./Resume.pdf?url";

export const portfolioData = {
  name: "Pansaramanna Peddireddi",
  role: "Software Developer - Full Stack Developer",
  resumeLink: resumePdfUrl,
  about:
    "Love Building Scalable Software Solutions, Eager to Contribute and Learn in a Dynamic Tech Environment",
  skills: [
    "C++",
    "ReactJS",
    "Python",
    "Django",
    "PostgreSQL",
    "ExpressJS",
    "NodeJS",
    "MongoDB",
    "TailwindCSS",
    "MySQL",
    "Linux",
    "AWS",
    "Redis",
    "RabbitMQ",
    "Docker",
    "GitHub",
    "Git"
  ],
  projects: [
    {
  title: "InsightFlow Multi Tenant Analytics Platform",
  tools: "Django, React.js, Tailwind CSS, PostgreSQL, Redis, Docker",
  points: [
    "Built a multi tenant SaaS analytics platform with secure workspace level data isolation.",
    "Implemented OAuth based authentication and tenant switching with role based access control.",
    "Optimized dashboard APIs using Redis caching and query optimization techniques.",
    "Containerized frontend, backend, PostgreSQL, and Redis services using Docker Compose.",
  ],
  github:
    "https://github.com/Rampeddireddi/Insightflow-Multi-Tenant-Analytics",
},
{
  title: "Distributed URL Shortener with Collision-Resistant ID Generation and Analytics",
  tools: "Node.js, Express.js, PostgreSQL, Redis, Docker, K6",
  points: [
    "Built a distributed URL shortener with collision-resistant ID generation using PostgreSQL.",
    "Implemented Redis caching to optimize redirects and reduce database load.",
    "Developed an event-driven analytics pipeline using Redis Streams and Docker Compose.",
  ],
  github:
    "https://github.com/Rampeddireddi/URL-Shortener-with-Collision-Resistant-ID-Generation-and-Analytics",
},
{
  title: "Real-Time SSE Sports Score Feed Multiplexer",
  tools: "Node.js, Express.js, Redis, Docker, SSE",
  points: [
    "Built a real-time sports score feed using Server-Sent Events (SSE).",
    "Implemented event replay and subscription management for client synchronization.",
    "Containerized the application using Docker and Docker Compose.",
  ],
  github:
    "https://github.com/Rampeddireddi/Real-Time-SSE-Sports-Score-Feed-Multiplexer",
},
{
  title: "Event-Driven Asynchronous Image Processing Service with AWS SQS",
  tools: "Node.js, Express.js, AWS SQS, AWS S3, Docker, LocalStack",
  points: [
    "Built an asynchronous image processing service using Node.js and Express.js.",
    "Designed a decoupled pipeline using AWS SQS and AWS S3.",
    "Deployed containerized worker services with Docker and LocalStack.",
  ],
  github:
    "https://github.com/Rampeddireddi/Event-Driven-Asynchronous-Image-Processing-Service-with-AWS-SQS",
},
{
  title: "Virtual Network Simulator for Packet Tracing",
  tools: "Node.js, Express.js, Docker",
  points: [
    "Built a REST API to simulate network routing and longest prefix matching.",
    "Implemented custom DNS resolution and firewall rule processing.",
    "Containerized the backend using Docker for virtual network testing.",
  ],
  github:
    "https://github.com/Rampeddireddi/Packet-Tracer-Simulation",
},


  ],

  experiences: [
    {
      company: "Partnr Network",
      role: "Trainee",
      duration: "Dec 2025 - Present",
      location: "India",
      points: [
        "Developed backend solutions including distributed rate limiting services and event-driven applications.",
        "Implemented CQRS architecture patterns to improve scalability and separation of concerns.",
        "Worked extensively with Redis, RabbitMQ, Kafka, and Docker for distributed systems development.",
        "Built and managed containerized applications.",
      ],
    },
    {
      company: "Technical Hub",
      role: "AWS Cloud Intern",
      duration: "June 2025 - July 2025",
      location: "Kakinada, India",
      points: [
        "Developed automated backup solutions using AWS S3 and Lambda, improving data reliability and reducing manual intervention.",
        "Automated scheduled start and stop operations for AWS EC2 instances using AWS Lambda triggers.",
      ],
    },
    {
      company: "SBTET AP",
      role: "Front-End Development Intern",
      duration: "Jan 2023 - June 2023",
      location: "Mangalagiri, India",
      points: [
        "Built responsive dashboards and user interfaces for affiliation workflows, improving operational efficiency.",
        "Collaborated within an Agile team on UI/UX enhancements and frontend performance optimization.",
      ],
    },
  ],
 certifications: [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    link:
      "https://www.credly.com/badges/ca786fa2-4448-426c-9d11-5a5ebbc71a26/public_url",
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM",
    link:
      "https://www.credly.com/badges/e481193a-c5b7-4dc1-a36d-5929ff6707c4/public_url",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    link:
      "https://badgr.com/public/assertions/PUzdzHBVQhOMm8Q7_GMdVA?identity__email=23a95a0508%40aec.edu.in",
  },
  {
    title: "Programming Essentials in C++",
    issuer: "Cisco",
    link: "",
  },
],

achievements: [
  {
    title: "Solved 950+ Coding Problems",
    description:
      "Solved 950+ coding problems across LeetCode, GeeksforGeeks, and CodeChef.",
  },
  {
    title: "Project Space 2025 Finalist",
    description:
      "Secured 9th place out of 123 teams in Project Space 2025.",
  },
],
  contact: {
    email: "rampeddireddi1@gmail.com",
    github: "https://github.com/Rampeddireddi",
    linkedin: "https://www.linkedin.com/in/rampeddireddi1/",
  },
};