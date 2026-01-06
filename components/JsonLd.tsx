import { Person, WithContext } from "schema-dts";

export default function JsonLd() {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shahriar Ridom",
    jobTitle: "Fullstack Developer",
    url: "https://www.shahriardev.me",
    sameAs: [
      "https://github.com/shahriar-ridom",
      "https://linkedin.com/in/shahriar-ridom",
      "https://instagram.com/shahriar-ridom",
    ],
    knowsAbout: ["Next.js", "React", "Cloud Architecture", "DevOps"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
