import type { Projects } from "@/lib/types";
import MarkdownContent from "@/components/MarkdownContent";

interface ProjectsSectionProps {
  data: Projects[];
}

const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  if (!data || !data.length) return null;
  
  return (
    <section className="py-6 mt-6">
      <h3 className="text-2xl font-bold mb-4">Projects</h3>
      <div className="space-y-4">
        {data.map((project, index) => {
          const { title, link, description } = project;
          return (
            <div key={`project-${index}`} className="pb-4">
              <h4 className="text-lg font-semibold">{title}</h4>
              { link && 
                <a href={link} className="hover:underline">
                  {link}
                </a>
              }
              <MarkdownContent content={description} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsSection;