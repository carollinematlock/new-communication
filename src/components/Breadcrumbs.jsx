import { Link } from "react-router-dom";

function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const { label, to } = typeof item === "string" ? { label: item } : item;

          return (
            <li key={`${label}-${index}`} className="flex items-center gap-2">
              {to && !isLast ? (
                <Link to={to} className="hover:text-gray-700">
                  {label}
                </Link>
              ) : (
                <span className={isLast ? "font-medium text-gray-700" : undefined}>{label}</span>
              )}
              {!isLast && <span className="text-gray-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
