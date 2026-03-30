import Image from "next/image";

const Bulb = () => {
  return (
    <div className="hidden lg:block absolute -left-0 sm:-left-8 md:-left-12 lg:-left-20 xl:-left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[260px] select-none pointer-events-none">
      <Image
        src="/bulb.png?v=1"
        alt="bulb"
        width={260}
        height={200}
        priority={false}
        unoptimized
        className="w-full h-full"
      />
    </div>
  );
};

export default Bulb;
