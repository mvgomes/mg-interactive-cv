import type { Experience } from "@/lib/types";
import MarkdownContent from "@/components/MarkdownContent";
import { Badge } from "@/components/ui/badge";

interface ExperienceSectionProps {
  data: Experience[];
}

const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  if (!data || !data.length) return null;
  
  return (
    <section className="py-6 mt-6">
      <h3 className="text-2xl font-bold mb-4">Relevant Work Experience</h3>
      <div className="space-y-4">
        { data.map((item, index) => {
          const { company, company_url, roles, description, skills } = item;
          return (
            <div key={`entry-${index}`} className="pb-4">
              <h3 className="text-lg font-semibold">{company}</h3>
              { company_url && (
                <a href={company_url} className="hover:underline">
                  {company_url}
                </a>
              )}
              { roles.map((role, roleIdx) => (
                <p key={`role-${roleIdx}`}>
                  {role.role} / {role.date}
                </p>
              ))}
              <MarkdownContent content={description} />

              <ul className="flex flex-wrap gap-3">
                { skills.map((skill, skillIndex) => (
                  <li key={`skill-${skillIndex}`}>
                    <Badge>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
