import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[240px] xl:w-[300px] absolute -right-8 sm:-right-10 md:-right-12 lg:-right-14 xl:-right-16 -bottom-2 sm:-bottom-3 md:-bottom-4 lg:-bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src="/circles.png?v=1"
        alt="circles"
        width={260}
        height={200}
        priority={false}
        unoptimized
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;
