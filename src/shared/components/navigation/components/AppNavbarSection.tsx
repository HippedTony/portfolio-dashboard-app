interface AppNavbarSectionProps {
  children: React.ReactNode;
  className?: string;
}

function AppNavbarSection({ children, className }: AppNavbarSectionProps) {
  return (
    <div className={`flex h-full items-center justify-evenly ${className}`}>
      {children}
    </div>
  );
}

export default AppNavbarSection;
