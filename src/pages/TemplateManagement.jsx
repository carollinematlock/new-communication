import { Plus, Mail, MessageSquare, Bell } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Table from "../components/Table.jsx";

const mockTemplates = [
  {
    name: "Welcome email",
    date: "Last edited 15 Oct 2025",
    channel: "Email",
    channelIcon: Mail,
    shared: false,
  },
  {
    name: "Redemption push notification",
    date: "Created 12 Oct 2025",
    channel: "Push notification",
    channelIcon: Bell,
    shared: true,
  },
  {
    name: "Loyalty points update",
    date: "Last edited 05 Oct 2025",
    channel: "SMS / Mobile",
    channelIcon: MessageSquare,
    shared: false,
  },
];

function TemplateManagement() {
  return (
    <section className="flex-1 px-4 py-6 md:px-10">
      <Breadcrumbs items={["Communications", "Template management"]} />
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Template library</h2>
          <p className="text-sm text-gray-500">
            Reuse approved content and share it across teams for consistent messaging.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-brand-dark"
        >
          <Plus className="h-4 w-4" />
          New template
        </button>
      </header>
      <Table rows={mockTemplates} />
    </section>
  );
}

export default TemplateManagement;
