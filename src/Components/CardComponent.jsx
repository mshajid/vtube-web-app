const CardComponent = ({ name, title, duration, thumbnail, avatar }) => {
  return (
    <div className="flex flex-col py-5 px-1 m-1 flex-wrap">
      <section className="relative w-[280px] h-[150px]">
        <img
          src={thumbnail}
          alt=""
          className="w-[280px] h-[150px] rounded-2xl object-cover"
        />
        <span className="px-1 py-1 rounded bg-gray-800 text-xs text-white absolute bottom-1 right-2">
          {duration}
        </span>
      </section>
      <section className="flex gap-3 mt-4 items-center">
        <div>
          <img
            src={avatar}
            alt={title}
            className="w-10 h-10 object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="text-[15px] font-medium text-wrap text-white tracking-wide">
            {title}
          </h1>
          <div className="flex flex-col">
            <p className="text-gray-500 text-[14px]">{name}</p>
            <div className="flex items-center gap-2 ">
              {/* <p className="text-gray-500 text-[14px]">6.3K views</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.25em"
                height="0.25em"
                viewBox="0 0 24 24"
                className="text-gray-500"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"
                ></path>
              </svg> */}
              <p className="text-gray-500 text-[10px]">15 hours ago</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardComponent;
