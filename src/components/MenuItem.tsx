import Link from "next/link";

export interface MenuItemProps {
  title: string;
  address: string;
  Icon: React.FC<{ className?: string }>;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    <Link href={address} className="sm:mx-6 hover:text-primary">
      <Icon className="mx-4 text-2xl sm:hidden" />
      <p className="hidden my-2 text-sm sm:inline">{title}</p>
    </Link>
  );
};
