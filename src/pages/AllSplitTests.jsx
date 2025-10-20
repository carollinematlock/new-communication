import { GitBranch } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import EmptyState from "../components/EmptyState.jsx";

function AllSplitTests() {
  return (
    <section className="flex-1 px-4 py-6 md:px-10">
      <Breadcrumbs items={["Communications", "All split tests"]} />
      <header className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">All split tests</h2>
        <p className="text-sm text-gray-500">
          Experiment with message variants to discover what resonates most with your customers.
        </p>
      </header>
      <EmptyState
        icon={GitBranch}
        title="No split tests to display"
        description="Create a new split test from a communication setup to compare subject lines, content, and scheduling."
      />
    </section>
  );
}

export default AllSplitTests;
