function Filters({ children }) {
  return (
    <div className="mb-8 flex flex-col lg:flex-row lg:justify-between lg:px-8 items-start text-homepage">
      {children}
    </div>
  );
}

export default Filters;
