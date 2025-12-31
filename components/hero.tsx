import { getProfile } from "@/app/actions";
import { HeroUi } from "./ui/hero-ui";

export async function Hero() {
  const profile = await getProfile();
  return <HeroUi profile={profile} />;
}
