const MainHero = () => {
    return (
      <div className="relative isolate overflow-hidden flex aspect-[2/3] xsm:aspect-[4/5] xmd:aspect-[3/2] xlg:aspect-[2.5/1] p-5 xmd:items-center px-[2rem] py-[5%] xmd:justify-start xmd:pl-[60%]">
        <div className="relative z-10 flex flex-col gap-3">
          <h2 className="text-5xl font-cursive max-w-[13ch]">
            All Sandwiches. All the time.
          </h2>
          <p className="text-2xl max-w-[25ch]">
            The world’s leading sandwich connoisseurs trust sndwch.
          </p>
          <a
            href="/shop"
            className="bg-black text-white font-bold text-lg self-start px-6 py-2 rounded-md"
          >
            Shop Sandwich Kits
          </a>
        </div>
        <img
          src="/sandwich-hero.jpg"
          className="absolute z-0 inset-0 object-cover h-[135%] w-[135%] object-[20%_0%] xsm:h-[120%] xsm:w-[120%] xsm:object-[35%_50%] xmd:h-[110%] xmd:w-[100%] xmd:object-[65%_50%] xlg:h-[100%] xlg:object-[50%_50%]"
          alt=""
        />
      </div>
    );
  };

  export default MainHero;
