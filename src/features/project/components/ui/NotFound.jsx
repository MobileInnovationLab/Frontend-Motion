const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center">
        <img
          src="/images/product/error/not-found.png"
          alt="Not Found"
          className="mb-4 w-1/2 md:max-w-full h-auto"
        />
        <p className="text-center text-3xl text-black font-bold">
          Sorry... We’re still repairing this page
        </p>
      </div>
    </div>
  );
};

export default NotFound;
