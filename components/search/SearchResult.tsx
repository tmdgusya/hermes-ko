import Link from "next/link";
import { FileText } from "lucide-react";

type SearchResultProps = {
  url: string;
  excerpt: string;
  title?: string;
  subResults?: Array<{ title: string; url: string; excerpt: string }>;
};

export default function SearchResult({ url, excerpt, title, subResults }: SearchResultProps) {
  return (
    <div className="border-b border-border last:border-0 py-4">
      {title && (
        <Link href={url} className="block group">
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary mb-1 line-clamp-1">
            <FileText className="inline h-4 w-4 mr-2 text-muted-foreground" />
            {title}
          </h3>
        </Link>
      )}
      {excerpt ? (
        <p
          className="text-sm text-muted-foreground leading-relaxed line-clamp-2"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      ) : (
        <Link href={url} className="text-sm text-primary hover:underline">
          {url}
        </Link>
      )}
      {subResults?.map((sub, i) => (
        <div key={i} className="mt-2 ml-4 pl-3 border-l-2 border-border">
          <Link href={sub.url} className="block group">
            <span className="text-sm font-medium text-foreground group-hover:text-primary">
              {sub.title}
            </span>
          </Link>
          <p
            className="text-xs text-muted-foreground mt-0.5 line-clamp-1"
            dangerouslySetInnerHTML={{ __html: sub.excerpt }}
          />
        </div>
      ))}
    </div>
  );
}
