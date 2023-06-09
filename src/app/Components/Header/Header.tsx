import Image from "next/image";
import { IHeaderItemType } from "./header.types";

function HeaderButtons() {
  const items: IHeaderItemType[] = [
    {
      name: "About",
      link: "#intro",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Socials",
      link: "#socials",
    },
    {
      name: "Resume",
      link: "/Muhammad_Hamza_Khan-CV.pdf",
      target: "_blank",
      isActive: true,
    },
  ];

  return (
    <>
      {items.map((item, index) => (
        <a
          href={item.link}
          className={`${
            item.isActive && "bg-gray-500"
          } text-white rounded-md px-3 py-2 text-sm font-medium block`}
          aria-current="page"
          key={index}
          target={item.target}
        >
          {item.name}
        </a>
      ))}
    </>
  );
}

function Header() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={400}
                height={400}
                priority
                className="block h-8 w-auto"
              />
              <p className="ml-3">HAMZA KHAN</p>
            </div>
            <div className="hidden sm:ml-6 sm:block w-full">
              <div className="flex space-x-4 float-right">
                <HeaderButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 text-center">
          <HeaderButtons />
        </div>
      </div>
    </nav>
  );
}

export default Header;
