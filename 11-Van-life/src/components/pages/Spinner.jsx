function Spinner() {
  return (
    <div className="flex items-center justify-center space-x-2 mt-20">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-4 border-gray-300 rounded-full"
        role="status"
      >
        <span className="visually-hidden text-yellow-500">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
