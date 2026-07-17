const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`container mx-auto p-4 relative flex-grow flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
