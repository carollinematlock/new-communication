import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, MessageSquare, Bell, Globe } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const channelOptions = [
  {
    id: "email",
    label: "Email",
    description: "Rich content delivered to inboxes with tracking and split testing.",
    icon: Mail,
  },
  {
    id: "mobile",
    label: "SMS / Mobile message",
    description: "Concise updates for direct outreach with short code support.",
    icon: MessageSquare,
  },
  {
    id: "push",
    label: "Push notification",
    description: "Instant app notifications to prompt action in-the-moment.",
    icon: Bell,
  },
];

const channelTypes = {
  email: [
    "Campaign communication",
    "Automated communication",
    "Signup response",
    "Redemption response",
    "Triggered / Points communication",
    "Split Test communication",
  ],
  mobile: [
    "Campaign communication",
    "Automated communication",
    "Signup response",
    "Redemption response",
    "Triggered / Points communication",
  ],
  push: [
    "Campaign communication",
    "Automated communication",
    "Redemption response",
    "Triggered / Points communication",
  ],
};

const typeDescriptions = {
  "Campaign communication": "Send to a curated segment as part of a planned campaign.",
  "Automated communication": "Trigger automatically using dynamic criteria and scheduling rules.",
  "Signup response": "Welcome customers immediately after they join the program.",
  "Redemption response": "Follow up with relevant offers after a redemption event.",
  "Triggered / Points communication": "Engage members when their loyalty configuration triggers an event.",
  "Split Test communication": "Experiment with multiple variants to uncover winning combinations.",
};

function NewCommunication() {
  const navigate = useNavigate();
  const [channel, setChannel] = useState("");
  const [type, setType] = useState("");
  const [isService, setIsService] = useState(false);

  const availableTypes = useMemo(() => channelTypes[channel] ?? [], [channel]);

  return (
    <section className="flex-1 px-4 py-6 md:px-10">
      <Breadcrumbs items={["Communications", "New communication"]} />
      <header className="mb-8 space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">Start a new communication</h2>
        <p className="text-sm text-gray-500">
          Pick the delivery channel and communication type. We&lsquo;ll guide you through the
          targeting and content setup next.
        </p>
      </header>

      <section className="mb-10">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Select a communication channel
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {channelOptions.map(({ id, label, description, icon: Icon }) => {
            const isSelected = channel === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setChannel(id);
                  setType("");
                }}
                className={[
                  "flex h-full flex-col items-start gap-3 rounded-lg border p-4 text-left transition",
                  isSelected
                    ? "border-brand bg-brand/5 shadow-sm"
                    : "border-gray-200 hover:border-brand/60 hover:bg-gray-50",
                ].join(" ")}
              >
                <div
                  className={[
                    "inline-flex rounded-full p-2",
                    isSelected ? "bg-brand text-white" : "bg-gray-100 text-gray-500",
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{label}</p>
                  <p className="mt-1 text-sm text-gray-500">{description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {channel ? (
        <>
          <section className="mb-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Select the type of communication
            </h3>
            <div className="space-y-3">
              {availableTypes.map((option) => {
                const isSelected = type === option;
                return (
                  <label
                    key={option}
                    className={[
                      "flex cursor-pointer gap-4 rounded-lg border p-4 transition",
                      isSelected
                        ? "border-brand bg-brand/5"
                        : "border-gray-200 hover:border-brand/60 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    <input
                      type="radio"
                      name="communicationType"
                      value={option}
                      checked={isSelected}
                      onChange={() => setType(option)}
                      className="mt-1 h-4 w-4 border-gray-300 text-brand focus:ring-brand"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{option}</p>
                      <p className="mt-1 text-sm text-gray-500">{typeDescriptions[option]}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </section>

          <section className="mb-12 rounded-lg border border-gray-200 bg-white p-4">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={isService}
                onChange={(event) => setIsService(event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
              />
              <span className="text-sm text-gray-700">
                <span className="font-medium">Service communication</span>
                <span className="block text-gray-500">
                  Send to the entire audience including members who opted out of marketing updates.
                </span>
              </span>
            </label>
          </section>
        </>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Globe className="h-4 w-4" strokeWidth={1.5} />
          <span>
            Channel availability reflects your active integrations. Contact support to enable more options.
          </span>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              setChannel("");
              setType("");
              setIsService(false);
            }}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100"
          >
            Reset
          </button>
          <button
            type="button"
            disabled={!type}
            onClick={() => navigate("/details", { state: { channel, type, isService } })}
            className={[
              "rounded-md px-5 py-2 text-sm font-semibold transition",
              type ? "bg-brand text-white hover:bg-brand-dark" : "cursor-not-allowed bg-gray-200 text-gray-500",
            ].join(" ")}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewCommunication;
