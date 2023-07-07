function Button({ children }) {
  return (
    <button className="pointer shadow-3xl rounded-3xl border-2 border-white bg-red-800 px-6 py-2 font-bold text-white shadow-2xl shadow-red-900 lg:px-8 lg:py-2">
      {children}
    </button>
  );
}

export default Button;
