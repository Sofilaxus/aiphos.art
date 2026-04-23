export function Label({ children }) {
  return <label className="form-label">{children}</label>;
}

export function PageHeader({ title, symbol, sub }) {
  return (
    <div className="page-header">
      <h2>{title} <em>{symbol}</em></h2>
      <p>{sub}</p>
    </div>
  );
}
