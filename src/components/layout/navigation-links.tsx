const navigationItems = [
  { label: "About" },
  { label: "Education" },
  { label: "Work" },
  { label: "Projects" },
];

export function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <ul className={mobile ? "flex flex-col gap-1 p-3" : "flex items-center gap-8 lg:gap-16"}>
      {navigationItems.map(({ label }) => (
        <li key={label}>
          <span
            role="link"
            aria-disabled="true"
            className={`type-label flex min-h-11 items-center ${mobile ? "px-3" : ""}`}
          >
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
