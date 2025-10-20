import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import EmptyState from "../components/EmptyState.jsx";

function CommunicationDetailsStub() {
  const navigate = useNavigate();

  return (
    <section className="flex-1 px-4 py-6 md:px-10">
      <Breadcrumbs
        items={[
          { label: "Communications", to: "/" },
          { label: "New communication", to: "/new" },
          "Details",
        ]}
      />
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark"
      >
        <span aria-hidden="true">←</span>
        Back
      </button>
      <EmptyState
        icon={Settings}
        title="Communication details coming soon"
        description="This step will capture the content, audience, and scheduling details for your communication."
      />
    </section>
  );
}

export default CommunicationDetailsStub;
