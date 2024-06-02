const Shimmer = () => {
  return (
    <div className="h-[90vh] container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {Array (10)
        .fill ('')
        .map ((ele,index) => (
          <div
            key={index}
            className="bg-gray-400 animate-pulse  mx-auto my-8 py-4 px-4 gap-5 w-[50%]  h-[75%]  "
          />
        ))}
    </div>
  );
};

export default Shimmer;
