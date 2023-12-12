"use client";
import ThemeToggler from "@/components/ThemeToggler";
import Template from "@/app/template";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

function Header(props) {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav containerStyles="hidden xl:flex gap-x-8 items-center" />
            <ThemeToggler />
            <div className="xl:hidden ">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
