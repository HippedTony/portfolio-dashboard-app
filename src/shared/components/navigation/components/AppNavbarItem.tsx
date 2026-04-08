interface AppNavbarItemProps {
  icon: React.ReactNode;
  text: string;
}

function AppNavbarItem({ icon, text }: AppNavbarItemProps) {
  return (
    <div className="flex items-center">
      {icon}
      <p className="ms-1">{text}</p>
    </div>
  );
}

export default AppNavbarItem;
