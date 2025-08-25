import type { Contact } from "@/lib/types";
import { getDynamicIcon } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ContactsSectionProps {
  data?: Contact[] | [];
}

const ContactsSection = ({ data }: ContactsSectionProps) => {
  if (!data || !data.length) return null;

  const handleContactClick = (link: string) => {
    window.open(link, '_blank');
  }

  return (
      <ul className="flex gap-6">
        {data.map((contact, idx) => {
          if(contact.type === "email") {
            return (
              <Button 
                key={`${contact.type}-${idx}`}
                onClick={() => handleContactClick(`mailto:${contact.value}`)}
              >
                { getDynamicIcon(contact.label) } Get in touch
              </Button>
            )
          }
          return (
              <Button 
                key={`${contact.type}-${idx}`}
                onClick={() => handleContactClick(contact.value)}
                size="icon" 
              >
                { getDynamicIcon(contact.label) }
              </Button>
            )
        })}
      </ul>
  );
}

export default ContactsSection;