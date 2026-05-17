export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Shubhankar Sarkar",
    url: "https://shubhankar.ucoder.in/",

    image:
"/me.png",
    sameAs: [
      "https://github.com/shubhankarsarkar558-netizen",
      "https://www.linkedin.com/",
    ],

    jobTitle: "Machine Learning Engineer & Data Analyst",

    description:
      "Machine Learning Engineer and Data Analyst specializing in AI, Deep Learning, Data Analytics and predictive systems using Python and modern ML frameworks.",

    worksFor: {
      "@type": "Organization",
      name: "Freelance",
      url: "https://github.com/shubhankarsarkar558-netizen",
    },

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Swami Vivekananda University",
      url: "https://swamivivekanandauniversity.ac.in/",
    },

    knowsAbout: [
      "Machine Learning",
      "Artificial Intelligence",
      "Deep Learning",
      "Data Analytics",
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Data Visualization",
      "SQL",
      "MongoDB",
      "Flask",
      "Predictive Modeling",
      "Neural Networks",
    ],

    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },

    email: "mailto:shubhankarsarkar558@gmail.com",

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