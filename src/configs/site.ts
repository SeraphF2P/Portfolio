export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "jafer ali portfolio",
  profileImage: "/my-pic.jpg",
  description: "Front-end React/Next developer",
  available: true,
  mainNav: [
    {
      icon: "home",
      path: "#home",
    },
    {
      icon: "skills",
      path: "#skills",
    },
    {
      icon: "experiances",
      path: "#experiances",
    },
    {
      icon: "certifications",
      path: "#certifications",
    },
    {
      icon: "projects",
      path: "#projects",
    },
  ],
  links: [
    {
      name: "facebook",
      link: "https://www.facebook.com/jafer.ali.395669?mibextid=ZbWKwL",
    },
    {
      name: "email",
      link: "mailto:fanfar13@gmail.com",
    },
    {
      name: "github",
      link: "https://github.com/SeraphF2P",
    },
    {
      name: "whatsup",
      link: "https://wa.me/+9630934108130",
    },
    {
      name: "telegram",
      link: "https://t.me/SeraphF2P",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/jafer-ali-701b06253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0Hzrf1QYTfWOTOSSTlSpNQ%3D%3D",
    },
  ],
  projects: {
    next: [
      {
        id: 1,
        name: "bloger website",
        image: "bloger-website.png",
        isFinished: true,
        tec: [
          "t3 stack",
          "prisma",
          "RTQ",
          "framer-motion",
          "Next (pages)",
          "clerk",
          "radix ui",
          "asdasdd",
          "werwerwer",
          "asd32"
        ],
        urls: {
          live: "https://bloger-website-seraphf2p.vercel.app/",
          github: "https://github.com/SeraphF2P/bloger-website",
        },
        description: "bloger website more of a facebook app for blog articles ",
      },
      {
        id: 3,
        name: "RecuitEase",
        image: "recruitease.png",
        isFinished: false,
        tec: [" Next", "prisma", "next auth", "tailwindcss", "radix ui", "redux", "react hook form", "zod"],
        urls: {
          live: "https://recuitease.vercel.app/",
          github: "https://github.com/SeraphF2P/RecuitEase",
        },
        description: "application tracking system (ats)",
      },
      {
        id: 2,
        name: "url shortener",
        image: "shorty.png",
        isFinished: true,
        tec: [" Next", "prisma", "jwt", "tailwindcss", "headless ui "],
        urls: {
          live: "https://shorty-omega.vercel.app/",
          github: "https://github.com/SeraphF2P/shorty",
        },
        description: "full working url shortener website with authantication",
      },
    ],
    react: [
      {
        id: 1,
        name: "Radiant",
        image: "Radiant.png",
        isFinished: true,
        tec: [
          "react",
          "typscript",
          "framer motion",
          "tailwind",
          "react router dom",
        ],
        urls: {
          live: "https://radiant-c986ebl8i-seraphf2p.vercel.app/",
          github: "https://bloger-website-seraphf2p.vercel.app/",
        },
        description: "cosmatique product website consest of three pages ",
      },
      {
        id: 2,
        name: "chatme",
        image: "chatme.png",
        isFinished: true,
        tec: [
          "react",
          "typscript",
          "framer motion",
          "tailwind",
          "react router dom",
          "supabase",
        ],
        urls: {
          live: "https://chat-r0zmkzxyg-seraphf2p.vercel.app/",
          github: "https://github.com/SeraphF2P/ChatMe",
        },
        description: "full stack chat app  with real time feture",
      },

    ]
  },
  experiances: [
    {
      id: 1,
      title: "internship at XCore corperation",
      duration: "10/2022~2/2023",
      image: "xcore.logo.jpg",
      info: " react front-end developer internship ",
    },
    {
      id: 2,
      title: "sync intern",
      duration: "1/3~31/3 2023",
      image: "sync.intern.jpg",
      info: "one month online remote internship  ",
    },
  ],
  skills: {
    core: {
      frontEnd: [
        "typscript/Javascript",
        "tailwind",
        "framer motion",
        "react hook form",
        "zod",
        "axios",
        "radix ui",
        "react router dom",
        "RTQ",
      ],
      backEnd: [
        "next",
        "prisma",
        "next auth",
        "TRPC",
      ]
    },
    intermediate: {
      frontEnd: [
        "redux",
        "sass",
        "bootstrap",
        "formik",
        "yup",
        "styled component",
        "material ui",
      ],
      backEnd: [
      ],
    },
    beginner: {
      frontEnd: [
        "react fiber", "three js"],
      backEnd: [
        "node",
        "express",
        "php",
        "laravel",
        "MySQL",
      ],
    },

  },
  certificates: [
    {
      id: 1,
      name: "Advanced React",
      Issuing_organization: "Coursera",
      Credential_URL:
        "https://www.coursera.org/account/accomplishments/certificate/QUYRPMMH3L82",
      Credential_ID: "QUYRPMMH3L82",
    },
    {
      id: 2,
      name: "React Basics",
      Issuing_organization: "Coursera",
      Credential_URL:
        "https://www.coursera.org/account/accomplishments/certificate/6DDZ8S7NZZWS",
      Credential_ID: "6DDZ8S7NZZWS",
    },
    {
      id: 3,
      name: "HTML and CSS in depth",
      Issuing_organization: "Coursera",
      Credential_URL:
        "https://www.coursera.org/account/accomplishments/certificate/LGQ6DEV3GV6T",
      Credential_ID: "LGQ6DEV3GV6T",
    },
    {
      id: 4,
      name: "Principles of UX/UI Design",
      Issuing_organization: "Coursera",
      Credential_URL:
        "https://www.coursera.org/account/accomplishments/certificate/HYJ6LCG9NEAL",
      Credential_ID: "HYJ6LCG9NEAL",
    },
    {
      id: 5,
      name: "Introduction to Front-End Development",
      Issuing_organization: "Coursera",
      Credential_URL:
        "https://www.coursera.org/account/accomplishments/certificate/73EKE8TD8ERP",
      Credential_ID: "73EKE8TD8ERP",
    },
    {
      id: 6,
      name: "Programming with JavaScript",
      Issuing_organization: "Coursera",
      Credential_URL:
        "https://www.coursera.org/account/accomplishments/certificate/AWEJQ9J76QUU",
      Credential_ID: "AWEJQ9J76QUU",
    },
    {
      id: 7,
      name: "Version Control",
      Issuing_organization: "Coursera",
      Credential_URL:
        "https://www.coursera.org/account/accomplishments/certificate/756NXBWQFGZK",
      Credential_ID: "756NXBWQFGZK",
    },
    {
      id: 8,
      name: "EF SET Certificate™",
      Issuing_organization: "EF Standard English Test (EF SET) ",
      Credential_URL: "https://www.efset.org/cert/tCDBab",
      Credential_ID: "73EKE8TD8ERP",
    },
    {
      id: 9,
      name: "web development",
      Issuing_organization: "national education network",
      Credential_URL: "http://nen-global.org/verification",
      Credential_ID: "3265297BD75",
    },
  ],
  cv: "Jaffar.ali.cv.pdf"
} as const
