import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import axionLogo from "../../assets/axion_logo.jpg";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith("es") ? "en" : "es");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  const isEs = i18n.language.startsWith("es");

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-2 z-20 flex w-full items-center py-5 rounded-full  ${
        scrolled ? "bg-blur-transparent" : "bg-blur-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={axionLogo} alt="Axion Systems" className="rounded-lg h-9 w-9 object-contain bg-white p-0.5" />
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            {config.html.title}
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-dark" : "text-white"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
            >
              <a href={`#${nav.id}`}>{t(`nav.${nav.id}`)}</a>
            </li>
          ))}
          {/* Language toggle button */}
          <li>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 rounded-full border border-[#0057FF] px-3 py-1 text-[14px] font-semibold transition-colors"
              title={isEs ? "Switch to English" : "Cambiar a Español"}
            >
              <span className={isEs ? "text-[#0057FF]" : "text-white/50"}>ES</span>
              <span className="text-white/30">|</span>
              <span className={!isEs ? "text-[#0057FF]" : "text-white/50"}>EN</span>
            </button>
          </li>
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{t(`nav.${nav.id}`)}</a>
                </li>
              ))}
              {/* Language toggle in mobile menu */}
              <li>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 rounded-full border border-[#0057FF] px-3 py-1 text-[14px] font-semibold"
                >
                  <span className={isEs ? "text-[#0057FF]" : "text-white/50"}>ES</span>
                  <span className="text-white/30">|</span>
                  <span className={!isEs ? "text-[#0057FF]" : "text-white/50"}>EN</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

