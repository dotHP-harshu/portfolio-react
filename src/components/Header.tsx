import { useTheme } from "../hooks/useTheme";

function Header() {
  const { toggleTheme } = useTheme();
  return (
    <header className="flex justify-between w-full px-6 py-4 items-center border border-border-light dark:border-border-dark bg-light/50 dark:bg-dark/50 backdrop-blur-3xl sticky top-0 left-0 z-30 max-xs:px-2">
      <div className="logo">
        <h1 className="text-3xl font-extrabold uppercase font-grotesk max-xs:text-lg">
          harsh prajapati
        </h1>
      </div>
      <div>
        <div
          onClick={toggleTheme}
          className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer max-xs:w-3 max-xs:h-3"
        >
          <img src="/images/contrast.svg" alt="contrast" className="w-full dark:invert-100" />
        </div>
      </div>
    </header>
  );
}

export default Header;
