import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[150px] sm:w-[180px] md:w-[240px] lg:w-[300px] xl:w-[400px] opacity-40 sm:opacity-45 md:opacity-50 pointer-events-none select-none">
      <Image
        src="/top-left-img.png?v=1"
        alt="left cover bg"
        width={400}
        height={400}
        priority={false}
        unoptimized
      />
    </div>
  );
};

export default TopLeftImg;
