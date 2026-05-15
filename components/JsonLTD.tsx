export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Soumyadip Maity",
    url: "https://soumyadip.ucoder.in/",

    image:
      "https://res.cloudinary.com/dkqi9h8yw/image/upload/v1768277924/qcywx8qervf0iirwbmvu.png",
    sameAs: [
      "https://www.ucoder.in",
      "https://www.github.com/soumydip",
      "https://insights.ucoder.in",
      "https://www.linkedin.com/in/soumyadip-maity-183ba3310",
      "https://twitter.com/soumyadip2maity",
      "https://www.instagram.com/soumyadip2912",
      "https://www.facebook.com/share/17ZUJY8DMC",
    ],
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack, Next.js, Typescript and AI solutions.",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Ucoder",
       url: "https://insights.ucoder.in"
    },

    brand: {
      "@type": "Brand",
      name: "Ucoder",
       url: "https://insights.ucoder.in"
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Swami Vivekananda University",
      url: "https://swamivivekanandauniversity.ac.in/",
    },
    knowsAbout: [
      "Full Stack Development",
      "MERN Stack",
      "Next.js",
      "React.js",
      "Node.js",
      "Python",
      "Artificial Intelligence",
      "TypeScript",
      "MongoDB",
      "Express.js",
      "Data Structures and Algorithms",
      "REST APIs",
      "Cloud Deployment",
      "sql",
      "Redis"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    email: "mailto:maitysoumyadip22@gmail.com",
    gender: "Male",
    nationality: "Indian",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
