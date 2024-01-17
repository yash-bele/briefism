const LoadingLeftSide = () => {
  return (
    <section className="col-span-3 lg:col-span-2">
      <div className="border-b-4 border-double border-red-100 capitalize mb-2.5">
        <span className="text-sm text-red-600">Home</span> /{" "}
        <span className="text-base inline">.....</span>
      </div>
      <div className="space-y-5">
        {Array(7)
          .fill(0)
          .map((_, j) => (
            <article
              key={j}
              style={{ paddingTop: j === 0 && 0 }}
              className={`flex flex-col md:flex-row items-center space-x-0 md:space-x-2.5 border-t border-slate-400 border-dashed md:border-none pt-5 md:pt-0 ${
                j === 0 && "border-none"
              }`}
            >
              <div className="relative h-40 w-full sm:w-96 bg-slate-200 rounded-xl overflow-hidden" />
              <div className="w-full mt-2.5 md:mt-0">
                <div className="flex items-center space-x-1 font-normal text-slate-400 mb-2">
                  <span className="bg-slate-200 w-20 h-2.5 rounded" />
                </div>
                <div>
                  <h3 className="mb-2 bg-slate-200 w-full h-5 rounded" />
                  <p className="text-slate-500 flex flex-col space-y-1">
                    <span className="bg-slate-200 w-full h-2.5 rounded" />
                    <span className="bg-slate-200 w-full h-2.5 rounded" />
                    <span className="bg-slate-200 w-1/2 h-2.5 rounded" />
                  </p>
                </div>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default LoadingLeftSide;
