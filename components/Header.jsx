"use client";
import ThemeToggler from "@/components/ThemeToggler";
import Template from "@/app/template";
import Logo from "@/components/Logo";

function Header(props) {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
