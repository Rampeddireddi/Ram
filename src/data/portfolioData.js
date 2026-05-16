import resumePdfUrl from "./Resume.pdf?url";

export const portfolioData = {
  name: "Pansaramanna Peddireddi",
  role: "Software Developer - Full Stack Developer",
  resumeLink: resumePdfUrl,
  about:
    "Backend-focused software developer who builds scalable, event-driven systems and resilient APIs. I enjoy turning complex distributed-system problems into practical, production-ready solutions.",
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
      title: "Event-Driven Analytics Platform",
      tools: "Node.js, Express.js, RabbitMQ, CQRS, Docker",
      points: [
        "Designed an event-driven analytics platform using RabbitMQ to process real-time events efficiently.",
        "Applied CQRS to separate write services and analytics read models, improving query speed.",
        "Developed asynchronous event consumers to process activity streams with sub-second latency.",
      ],
      github:
        "https://github.com/Rampeddireddi/CQRS-and-Event-Driven-Analytics-System-with-a-Message-Broker",
    },
    {
      title: "Distributed Rate Limiting Service",
      tools: "Node.js, Express.js, Redis, Docker",
      points: [
        "Engineered a Redis-based rate limiter to regulate API requests across microservices.",
        "Implemented distributed API rate limiting using the Sliding Window Log algorithm with Redis.",
        "Ensured strong consistency under high concurrency using Redis atomic operations and Lua scripts.",
      ],
      github:
        "https://github.com/Rampeddireddi/Distributed-Rate-Limiting-microservice-with-Redis",
    },
    {
      title: "Multi-Tenant SaaS Platform",
      tools: "Node.js, Express.js, PostgreSQL, React, Docker, JWT",
      points: [
        "Architected a multi-tenant SaaS platform with RBAC-based access control.",
        "Implemented JWT-based authentication and authorization for secure access control.",
        "Containerized services with Docker Compose, reducing setup and deployment time.",
      ],
      github:
        "https://github.com/Rampeddireddi/Multi-Tenant-SAAS-Platform",
    },
    {
  title: "Event Driven System using Kafka",
  tools: "Node.js, Express.js, Apache Kafka, MySQL, Docker",
  points: [
    "Designed an event driven microservices architecture using Apache Kafka.",
    "Implemented Outbox Pattern for reliable event publishing between services.",
    "Built Inventory and Notification services consuming Kafka events asynchronously.",
    "Containerized Kafka, MySQL, and microservices using Docker Compose for local deployment.",
  ],
  github:
    "https://github.com/Rampeddireddi/Event-Driven-System-using-Kafka",
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

  contact: {
    email: "rampeddireddi1@gmail.com",
    github: "https://github.com/Rampeddireddi",
    linkedin: "https://www.linkedin.com/in/rampeddireddi1/",
  },
};
