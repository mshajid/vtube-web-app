const CardComponent = () => {
  return (
    <div>
      <section className="relative w-[400px]">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/664/468/desktop-wallpaper-beautiful-world-best-pic-in-the-world-best-most-beautiful-places-on-earth.jpg"
          alt=""
          className="w-[400px] h-[250px] rounded-2xl object-cover "
        />
        <span className="px-1 py-1 rounded bg-gray-800 text-xs text-white absolute bottom-1 right-2">
          04:50
        </span>
      </section>
      <section className="flex gap-3 mt-4">
        <div>
          <img
            src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?b=1&s=612x612&w=0&k=20&c=XdZqQ92Yk82otKZio_pE0KURn0U08sIr5Vz9bFSm7bM="
            alt=""
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold">TITLE FOR YOUR VIDEO</h1>
          <div className="flex flex-col">
            <p className="text-gray-500 text-[14px]">StartToons</p>
            <div className="flex items-center gap-2 ">
              <p className="text-gray-500 text-[14px]">6.3K views</p>
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
              </svg>
              <p className="text-gray-500 text-[14px]">15 hours ago</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardComponent;
