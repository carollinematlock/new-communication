function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 bg-white px-6 py-16 text-center">
      {Icon ? <Icon className="mb-4 h-12 w-12 text-gray-300" strokeWidth={1.5} /> : null}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      {description ? <p className="mt-2 max-w-md text-sm text-gray-500">{description}</p> : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}

export default EmptyState;
