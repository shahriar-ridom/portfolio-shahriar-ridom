import { getSkills } from "@/app/actions";
import { SkillForm } from "./skill-form";
import { DeleteSkill } from "./delete-skill";
import { Badge } from "@/components/ui/badge";

export default async function SkillsAdminPage() {
  const skills = await getSkills();

  // Group skills by category for better visualization
  const grouped = {
    FRONTEND: skills.filter(s => s.category === "FRONTEND"),
    BACKEND: skills.filter(s => s.category === "BACKEND"),
    DEVOPS: skills.filter(s => s.category === "DEVOPS"),
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Manage Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Form */}
        <div className="md:col-span-1">
          <SkillForm />
        </div>

        {/* Right Column: List */}
        <div className="md:col-span-2 space-y-6">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="bg-zinc-900/50 border border-white/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-zinc-400">{category}</h3>

              {items.length === 0 ? (
                <p className="text-sm text-zinc-600 italic">No skills added yet.</p>
              ) : (
                <div className="space-y-3">
                  {items.map((skill) => (
                    <div key={skill.id} className="flex items-center justify-between bg-black/40 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">{skill.iconName}</span>
                        {skill.showInMarquee && <Badge variant="secondary" className="text-[10px] h-5">Marquee</Badge>}
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-sm font-mono text-blue-400">{skill.level}%</div>
                        <DeleteSkill id={skill.id} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
