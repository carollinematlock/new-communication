import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import AllCommunications from "./pages/AllCommunications.jsx";
import NewCommunication from "./pages/NewCommunication.jsx";
import CommunicationDetailsStub from "./pages/CommunicationDetailsStub.jsx";
import AllSplitTests from "./pages/AllSplitTests.jsx";
import TemplateManagement from "./pages/TemplateManagement.jsx";

const resolveBasename = () => {
  const rawBase =
    typeof import.meta !== "undefined"
      ? import.meta.env.VITE_BASE_PATH ?? import.meta.env.BASE_URL ?? "/"
      : "/";

  if (!rawBase) return "/";
  if (rawBase.startsWith("./")) return "/";
  const trimmed = rawBase.endsWith("/") && rawBase !== "/" ? rawBase.slice(0, -1) : rawBase;
  if (trimmed.startsWith("/")) return trimmed || "/";
  return `/${trimmed}`;
};

const MobileHeader = () => (
  <header className="flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 py-4 shadow-sm md:hidden">
    <div>
      <p className="text-xs uppercase tracking-wide text-gray-400">Area</p>
      <h1 className="text-lg font-semibold text-gray-900">Communications</h1>
    </div>
    <Link
      to="/new"
      className="rounded-md border border-brand px-3 py-1.5 text-sm font-medium text-brand transition hover:bg-brand hover:text-white"
    >
      New
    </Link>
  </header>
);

function App() {
  const basename = resolveBasename();

  return (
    <BrowserRouter basename={basename}>
      <div className="flex min-h-screen bg-gray-50 text-gray-900">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <MobileHeader />
          <main className="flex flex-1 flex-col">
            <Routes>
              <Route path="/" element={<AllCommunications />} />
              <Route path="/new" element={<NewCommunication />} />
              <Route path="/details" element={<CommunicationDetailsStub />} />
              <Route path="/split-tests" element={<AllSplitTests />} />
              <Route path="/templates" element={<TemplateManagement />} />
              <Route path="*" element={<AllCommunications />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
