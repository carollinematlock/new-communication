import { useNavigate } from "react-router-dom";
import { Mail, Plus } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import EmptyState from "../components/EmptyState.jsx";

function AllCommunications() {
  const navigate = useNavigate();

  return (
    <section className="flex-1 px-4 py-6 md:px-10">
      <Breadcrumbs items={["Communications", "All communications"]} />
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">All communications</h2>
          <p className="text-sm text-gray-500">
            Track the communications created across campaigns and automations.
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate("/new")}
          className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-dark"
        >
          <Plus className="h-4 w-4" />
          New communication
        </button>
      </header>
      <EmptyState
        icon={Mail}
        title="No communications to display"
        description="When you have communications to review, they will appear here with filters and quick actions."
      />
    </section>
  );
}

export default AllCommunications;
