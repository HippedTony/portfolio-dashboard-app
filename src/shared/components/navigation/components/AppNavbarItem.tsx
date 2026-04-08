interface AppNavbarItemProps {
  icon: React.ReactNode;
  text: string;
  style?: string;
}

function AppNavbarItem({ icon, text, style }: AppNavbarItemProps) {
  return (
    <div className="hidden items-center xl:flex" style={{ display: style }}>
      {icon}
      <p className="ms-1">{text}</p>
    </div>
  );
}

export default AppNavbarItem;
