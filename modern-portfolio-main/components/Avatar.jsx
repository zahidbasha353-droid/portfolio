import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png?v=1"
        alt="avatar"
        width={737}
        height={678}
        priority={false}
        unoptimized
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
