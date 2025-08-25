import type { Education } from "@/lib/types";

interface EducationSectionProps {
  data: Education[];
}

const EducationSection = ({ data }: EducationSectionProps) => {
  if (!data || !data.length) return null;
  
  return (
    <section className="py-6 mt-6">
      <h3 className="text-2xl font-bold mb-4">Education</h3>
      <div className="space-y-4">
        {data.map((education, index) => {
          const { degree, degree_info, school, location, date } = education;
          return (
            <div key={`project-${index}`} className="pb-4">
              <h4 className="text-lg font-semibold">{degree}</h4>
              <p className="text-sm">{degree_info}</p>
              <p>{school}</p>
              <p>{location}</p>
              <p>{date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EducationSection;