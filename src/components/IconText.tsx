
import Image from "next/image";

interface NavItemProps {
  iconSrc: string;
  iconAlt: string;
  label: string;
  containerClasses: string;
  showBadge?: boolean;
  textColor?: string;
  onClick?: () => void;
}

const IconText: React.FC<NavItemProps> = ({
  iconSrc,
  iconAlt,
  label,
  containerClasses,
  showBadge,
  textColor,
  onClick
}) => (
  <div className={containerClasses} onClick={onClick}>
    <div className="relative">
      <Image src={iconSrc} alt={iconAlt} height={18} width={18} />
      {showBadge && (
        <div className="h-1.5 w-1.5 absolute top-0 right-0 rounded-full bg-red-600" />
      )}
    </div>
    <p className={textColor}>{label}</p>
  </div>
);

export default IconText;