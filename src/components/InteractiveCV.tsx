import { useCVData } from "@/hooks/fetch";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import AboutMeSection from "@/components/sections/AboutMeSection";

const jsonData = import.meta.env.VITE_CV_DATA_URL;

const InteractiveCV = () => {
  const { data: cvData, isLoading, error } = useCVData(jsonData);

  if (isLoading) return <p className="text-gray-500">Loading Data...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!cvData) return <p>No CV data found.</p>;

  const { personal_info, experience, projects, education, about } = cvData;

  return (
    <main className="flex-1 py-6 px-4 max-w-7xl mx-auto">
      <Hero data={ personal_info } />
      <ExperienceSection data={ experience } />
      <ProjectsSection data={ projects } />
      <EducationSection data={ education } />
      <AboutMeSection data={ about } />
    </main>
  )
}

export default InteractiveCV;