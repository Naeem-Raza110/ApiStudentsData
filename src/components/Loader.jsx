const Loader = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 "></div>
      <p className="mt-4">Loading students...</p>
    </div>
  );
};

export default Loader;
