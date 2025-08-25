import { marked } from "marked";
import DOMPurify from "dompurify";
import { cn } from "@/lib/utils";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const MarkdownContent = ({ content, className }: MarkdownContentProps) => {
  const rawContent = marked.parse(content, { async: false });
  const safeContent = DOMPurify.sanitize(rawContent);
  const mergedClasses = cn('markdown', className);

  return(
    <div className={mergedClasses} dangerouslySetInnerHTML={{ __html: safeContent }} />
  )
}


export default MarkdownContent;