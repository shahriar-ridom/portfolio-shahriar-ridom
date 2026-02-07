import { Person, WithContext } from "schema-dts";

export default function JsonLd() {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shahriar Ridom",
    alternateName: "Shahriar",
    jobTitle: "Fullstack Engineer | Cloud Architect | Graphic Designer",
    url: "https://www.shahriardev.me",
    image:
      "https://mkelrgepyvmrqxxmmvix.supabase.co/storage/v1/object/public/image/shahriar-ridom-suit-black-pro.jpg", // Add a real photo URL
    sameAs: [
      "https://github.com/shahriar-ridom",
      "https://linkedin.com/in/shahriar-ridom",
      "https://x.com/shahriar_ridom",
      "https://instagram.com/shahriar-ridom",
      "https://behance.net/shahriar_ridom",
    ],
    description:
      "Fullstack Engineer specializing in Next.js and Cloud Architecture. Building high-performance web applications and chasing the intersection of technology and storytelling.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barisal",
      addressCountry: "Bangladesh",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "Cloud Architecture",
      "DevOps",
      "Graphic Design",
      "Brand Identity & Logo Design",
      "Vector Illustration",
      "UI/UX Design",
      "Typography & Layout",
    ],
    gender: "Male",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
