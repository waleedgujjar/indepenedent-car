import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative w-[160px] h-[44px] flex-shrink-0">
        <Image
          src="/logo.webp"
          alt="IDU Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </div>
  );
};

export default Logo;
