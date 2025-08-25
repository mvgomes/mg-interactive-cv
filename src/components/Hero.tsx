import type { PersonalInfo } from "@/lib/types";
import MarkdownContent from "@/components/MarkdownContent";
import ContactsSection from "@/components/sections/ContactsSection";

interface HeroProps {
  data: PersonalInfo;
}

const Hero = ({ data }: HeroProps) => {
  const { name, jobtitle, tagline, summary, contact_info } = data;

  return (
    <>
      <div className="flex items-end gap-[8rem]">
        <header className="space-y-2 flex-2/5">
          <h1 className="font-primary text-7xl font-extrabold">{name}</h1>
          <h2 className="font-primary text-3xl font-bold text-amber-600">{jobtitle}</h2>
          <p className="font-primary text-2xl font-semibold">{tagline}</p>
          <ContactsSection data={contact_info} />
        </header>

        <MarkdownContent content={summary} className="flex-3/5 text-title text-lg" />
      </div>
    </>
  )
}

export default Hero;