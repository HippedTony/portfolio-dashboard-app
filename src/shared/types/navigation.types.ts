export interface NavbarProps {
  isAuthenticated: boolean;
  closeMenu: () => void;
  handleLog: () => void;
  toggleResume: () => void;
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
