import resumePdfUrl from "./Resume.pdf?url";

export const portfolioData = {
  name: "Pansaramanna Peddireddi",
  role: "Software Developer - Backend Engineer",
  resumeLink: resumePdfUrl,
  about:
    "Backend-focused software developer who builds scalable, event-driven systems and resilient APIs. I enjoy turning complex distributed-system problems into practical, production-ready solutions.",
  skills: [
    "C++",
    "MERN Stack",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Kafka",
    "Docker",
    "GitHub",
  ],
  projects: [
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
  ],
  contact: {
    email: "rampeddireddi1@gmail.com",
    github: "https://github.com/Rampeddireddi",
    linkedin: "https://www.linkedin.com/in/rampeddireddi1/",
  },
};
