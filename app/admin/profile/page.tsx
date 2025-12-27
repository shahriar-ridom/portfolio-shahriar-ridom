import { getProfile } from "@/app/actions";
import { ProfileForm } from "./profile-form";

export default async function ProfilePage() {
  const profile = await getProfile();

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Profile Settings</h2>
      <ProfileForm profile={profile} />
    </div>
  );
}
