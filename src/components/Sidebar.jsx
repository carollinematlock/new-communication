import { NavLink } from "react-router-dom";
import { Mail, PlusCircle, GitBranch, Layers } from "lucide-react";

const menuItems = [
  { to: "/", label: "All communications", icon: Mail },
  { to: "/new", label: "New communication", icon: PlusCircle },
  { to: "/split-tests", label: "All split tests", icon: GitBranch },
  { to: "/templates", label: "Template management", icon: Layers },
];

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 flex-shrink-0 border-r border-gray-200 bg-white px-6 py-8 md:flex md:flex-col">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-wide text-gray-400">Area</p>
        <h1 className="text-2xl font-semibold text-gray-900">Communications</h1>
      </div>

      <nav className="space-y-1">
        {menuItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-brand text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              ].join(" ")
            }
          >
            <Icon className="h-4 w-4" strokeWidth={1.75} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
