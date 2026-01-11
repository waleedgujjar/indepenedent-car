interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo = ({ className = "", showText = true }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
        <span className="text-lg font-bold text-primary-foreground">ID</span>
      </div>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-bold text-foreground tracking-tight">INDEPENDENT</span>
          <span className="text-xs font-semibold text-primary">DEALERS UNITED</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
