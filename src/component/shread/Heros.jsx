
const Heros = ({ head }) => {
  return (
    <div>
      <div className=" w-full h-[50vh] block flex items-center justify-center justify-items-center">
        <h1 className=" md:text-9xl text-4xl uppercase font-extrabold ">
          here you get {head} product
        </h1>
        <div className="bumy">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vitae
            sed deserunt ad, dicta consequuntur quae illum voluptatum
            architecto. Velit unde rerum autem. Mollitia autem libero, ratione
            praesentium minima temporibus.
          </p>
          <button className="px-4 py-2 border-[1px] border-slate-600 rounded-full capitalize mt-4 effect cursor-pointer">
            know more about it
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Heros;
