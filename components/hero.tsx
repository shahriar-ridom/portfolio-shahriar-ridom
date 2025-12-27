import { getProfile } from "@/app/actions"; // Adjust path to your actions file
import { HeroUi } from "./ui/hero-ui";

export async function Hero() {
  // Fetch data on the server
  // This happens during build time (SSG) or request time (SSR)
  // depending on your page configuration.
  const profile = await getProfile();

  // Pass pure JSON data to the client component
  return <HeroUi profile={profile} />;
}
