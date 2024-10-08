import { cn } from "@/lib/utils";

export function Paragraph(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 text-base text-f-200 leading-relaxed",
        props.className,
      )}
    >
      {props.children}
    </p>
  );
}
