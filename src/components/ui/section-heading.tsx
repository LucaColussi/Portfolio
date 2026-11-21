type SectionHeadingProps = {
  index: string;
  title: string;
  id: string;
};

export function SectionHeading({ index, title, id }: SectionHeadingProps) {
  return (
    <div className="flex items-start gap-6">
      <span aria-hidden="true" className="type-label w-10 shrink-0 pt-3 text-muted">
        {index} /
      </span>
      <h2 id={id} className="type-section">
        {title}
      </h2>
    </div>
  );
}
