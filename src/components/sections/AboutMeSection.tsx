import type { AboutMe } from "@/lib/types";
import MarkdownContent from "@/components/MarkdownContent";

interface AboutMeSectionProps {
  data: AboutMe;
}

const AboutMeSection = ({ data }: AboutMeSectionProps) => {
  if (!data) return null;
  
  const { title, subtitle, description } = data;

  return (
    <section className="py-6 mt-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <h4 className="text-sm">{subtitle}</h4>
      <div className="space-y-4">
        <MarkdownContent content={description} />
      </div>
    </section>
  );
}

export default AboutMeSection;