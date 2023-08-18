export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "jafer ali portfolio",
  "my-photo": "/my-pic.jpg",
  description: "Front-end React/Next developer",
  available: true,
  mainNav: [
    {
      title: "home",
      path: "/",
    },
    {
      title: "projects",
      path: "/projects",
    },
    {
      title: "experiance",
      path: "/experiance",
    },
    {
      title: "certificates",
      path: "/certificates",
    },
  ],
  links: [
    {
      name: "facebook",
      link: "https://www.facebook.com/jafer.ali.395669?mibextid=ZbWKwL",
    },
    {
      name: "github",
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
  projects: [
    {
      id: 1,
      name: "bloger website",
      image: "bloger-website.png",
      isFinished: false,
      errors: ["no database"],
      tec: [
        "t3 stack",
        "prisma",
        "RTQ",
        "framer-motion",
        "Next (pages)",
        "clerk",
        "radix ui",
      ],
      url: "https://bloger-website-seraphf2p.vercel.app/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fugiat, sequi laudantium non tempora officiis veniam distinctio natus reprehenderit id at deleniti ipsum itaque temporibus eius odit quos soluta enim laborum eligendi. Illo, dolorum non aperiam porro recusandae nostrum tempora!",
    },
    {
      id: 2,
      name: "multi step form",
      image: "multi-step-form.jpg",
      isFinished: true,
      errors: null,
      tec: ["Next", "tailwindcss", "headless ui"],
      url: "https://multi-step-form-eok7-399yvwxfg-seraphf2p.vercel.app/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fugiat, sequi laudantium non tempora officiis veniam distinctio natus reprehenderit id at deleniti ipsum itaque temporibus eius odit quos soluta enim laborum eligendi. Illo, dolorum non aperiam porro recusandae nostrum tempora!",
    },
    {
      id: 3,
      name: "url shortener website",
      image: "shorty.png",
      isFinished: true,
      errors: ["no database"],
      tec: [" Next", "prisma", "jwt", "tailwindcss", "headless ui "],
      url: "https://shorty-omega.vercel.app/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fugiat, sequi laudantium non tempora officiis veniam distinctio natus reprehenderit id at deleniti ipsum itaque temporibus eius odit quos soluta enim laborum eligendi. Illo, dolorum non aperiam porro recusandae nostrum tempora!",
    },
    {
      id: 4,
      name: "Radiant",
      image: "Radiant.png",
      isFinished: true,
      errors: null,
      tec: [
        "react",
        "typscript",
        "framer motion",
        "tailwind",
        "react router dom",
      ],
      url: "https://radiant-c986ebl8i-seraphf2p.vercel.app/",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fugiat, sequi laudantium non tempora officiis veniam distinctio natus reprehenderit id at deleniti ipsum itaque temporibus eius odit quos soluta enim laborum eligendi. Illo, dolorum non aperiam porro recusandae nostrum tempora!",
    },
    {
      id: 5,
      name: "store-api",
      image: "api.jpeg",
      isFinished: true,
      errors: null,
      tec: ["php", "laravel", "my sql"],
      url: "https://github.com/SeraphF2P/store-api",
      description:
        "an api with simple dashboard ,authantication, cascading data fetching",
    },
  ],
  experiances: [
    {
      id: 1,
      title: "internship at XCore corperation",
      duration: "10/2022~2/2023",
      info: " react front-end developer internship ",
    },
    {
      id: 2,
      title: "React tuoter",
      duration: "~",
      info: " react front-end developer internship ",
    },
  ],
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
}
