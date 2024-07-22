import React from "react";
import Link from "next/link";
import { CodeIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";
import Image from "next/image";
import menu from "@/public/icons8-menu-50.png";

const Navbar = () => {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between text-[#E7E7E4] mt-5">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">Subhan's Portfolio</span>
        </Link>
        <div className="hidden md:block">
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <Image
                src={menu}
                alt="menu"
                width={24}
                height={24}
                className="cursor-pointer "
              />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
              <Link href={"/"} className="tracking-tight font-bold text-lg">
                <CodeIcon className="h-6 w-6" />
              </Link>
              <Separator className="border border-gray-50" />
              <div className="flex flex-col gap-5">
                <Link
                  href="/"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#projects"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Projects
                </Link>
                <Link
                  href="#about"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#education"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Education
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};

export default Navbar;
