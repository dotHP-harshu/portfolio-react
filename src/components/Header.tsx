function Header() {
  return (
    <header className="flex justify-between w-full px-6 py-4 items-center border-2 border-muted bg-light/50 dark:bg-dark/50 backdrop-blur-3xl sticky top-0 left-0 z-30">
      <div className="logo">
        <h1 className="text-3xl font-extrabold uppercase font-grotesk">
          harsh prajapati
        </h1>
      </div>
      <div>
        <div className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          <img src="/images/contrast.svg" alt="contrast" className="w-full" />
        </div>
      </div>
    </header>
  );
}

export default Header;
