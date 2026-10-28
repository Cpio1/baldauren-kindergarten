import { FileText } from "lucide-react";

/** Two tinted sheets fanned behind a white page with a document icon. Decorative, sized by the caller. */
export function DocStack({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`relative ${className ?? ""}`}>
      <span className="absolute inset-[6%_14%_10%_6%] -rotate-[10deg] rounded-[22%] bg-coral" />
      <span className="absolute inset-[4%_6%_12%_14%] rotate-[8deg] rounded-[22%] bg-turquoise-soft" />
      <span className="absolute inset-[10%_12%_4%_12%] grid place-items-center rounded-[22%] bg-white shadow-card">
        <FileText className="h-[46%] w-[46%] text-deep" strokeWidth={1.8} />
      </span>
      <span className="absolute right-[6%] bottom-[2%] h-[22%] w-[22%] rounded-full border-[3px] border-white bg-turquoise" />
    </div>
  );
}
