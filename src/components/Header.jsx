function Header({ children }) {
  return (
    <header className="h-24 bg-dark-elements flex justify-between items-center px-4 mb-8">
      {children}
    </header>
  );
}

export default Header;
