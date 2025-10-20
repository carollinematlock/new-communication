import { PencilLine, MessageSquare, Trash2 } from "lucide-react";
import EmptyState from "./EmptyState.jsx";

function Table({ rows = [] }) {
  if (!rows.length) {
    return (
      <EmptyState
        title="No templates created yet"
        description="Create your first template to make it available for collaborators."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
          <tr>
            <th className="px-6 py-3 font-medium">Name</th>
            <th className="px-6 py-3 font-medium">Created / Edited</th>
            <th className="px-6 py-3 font-medium">Channel</th>
            <th className="px-6 py-3 font-medium">Shared</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {rows.map((row) => (
            <tr key={row.name}>
              <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
              <td className="px-6 py-4 text-gray-500">{row.date}</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-gray-600">
                  {row.channelIcon ? (
                    <row.channelIcon className="h-4 w-4" strokeWidth={1.5} />
                  ) : null}
                  <span>{row.channel}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                {row.shared ? (
                  <span className="inline-flex items-center rounded-full bg-brand/10 px-2 py-1 text-xs font-medium text-brand">
                    Shared
                  </span>
                ) : (
                  <span className="text-xs text-gray-400">Private</span>
                )}
              </td>
              <td className="px-6 py-4">
                {!row.shared ? (
                  <div className="flex items-center gap-3 text-gray-400">
                    <button
                      type="button"
                      className="rounded-full p-1 transition hover:bg-gray-100 hover:text-gray-700"
                      aria-label="Edit template name"
                    >
                      <PencilLine className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <button
                      type="button"
                      className="rounded-full p-1 transition hover:bg-gray-100 hover:text-gray-700"
                      aria-label="Edit template content"
                    >
                      <MessageSquare className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <button
                      type="button"
                      className="rounded-full p-1 text-red-400 transition hover:bg-red-50 hover:text-red-600"
                      aria-label="Delete template"
                    >
                      <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
