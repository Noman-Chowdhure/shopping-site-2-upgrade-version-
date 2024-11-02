import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const Heros = ({ head }) => {
  return (
    <div id="sama" data-scroll data-scroll-speed='-9'>
      <div className=" w-full h-[50vh] grid justify-center ">
        <h1 className=" md:text-9xl text-4xl uppercase text-center font-serif font-extrabold ">
          here you get <br /> {head} <br /> product
        </h1>
      </div>
    </div>
  );
};

export default Heros;
