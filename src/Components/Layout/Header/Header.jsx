import { memo, useState } from "react";
import HeaderOverlay from "./HeaderOverlay";
import "./Header.scss";
const Header = memo(() => {
  const HeaderData = [
    { title: "About" },
    { title: "Episodes", color: "text-custom-red" },
    { title: "Testimonials", color: "text-custom-red" },
    { title: "Pricing" },
    { title: "Features" },
    { title: "Blog", color: "text-custom-red" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header bg-custom-cream pt-6">
      <div className="container-custom flex items-center justify-between gap-x-4">
        <img
          className="max-tablet:w-18 w-20"
          src="/LogoPhoto.png"
          alt="Logo"
        />
        <div
          className="g-y-0.5 min-mobile:hidden relative z-60 flex h-5 w-10 flex-col"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`h-0.5 w-full bg-black duration-300 ${isOpen ? "-rotate-45" : ""}`}
          ></span>
          <span
            className={`absolute top-1/2 h-0.5 w-full bg-black duration-300 ${isOpen ? "hidden" : ""}`}
          ></span>
          <span
            className={`absolute bottom-0 h-0.5 w-full bg-black duration-300 ${isOpen ? "-translate-y-4 rotate-45" : ""}`}
          ></span>
        </div>
        <HeaderOverlay
          features={{
            data: HeaderData,
            statusOpen: isOpen,
          }}
        />
      </div>
    </header>
  );
});

export default Header;
