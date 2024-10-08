import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button"; // Import Button component
import { Menu } from "lucide-react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "About 🐺",
  },
  // Commented out routes
  // {
  //   href: "#features",
  //   label: "Features ✨",
  // },
  // {
  //   href: "#testimonials",
  //   label: "Testimonials 💬",
  // },
  // {
  //   href: "#pricing",
  //   label: "Pricing 💰",
  // },
  {
    href: "#faq",
    label: "FAQ ❓",
  },

  {
    href: "https://map.communitywolf.com/", 
    label: "Live Community Map 🗺️",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="top-0 z-40 w-full mt-4">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-black text-2xl flex"
            >
              Wolf 🐺
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            {/* <ModeToggle /> */}

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="px-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu Icon</span>
                </Button>
              </SheetTrigger>

              <SheetContent side={"top"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Wolf 🐺
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Button
                      key={label}
                      variant={label === "Live Community Map 🗺️" ? "default" : "outline"}
                      asChild
                      className="w-full"
                    >
                      <a
                        rel="noreferrer noopener"
                        href={href}
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </a>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Button
                key={i}
                variant={route.label === "Live Community Map 🗺️" ? "default" : "outline"}
                asChild
              >
                <a
                  rel="noreferrer noopener"
                  href={route.href}
                  className="text-[17px] shadow-xl"
                >
                  {route.label}
                </a>
              </Button>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              asChild
            >
            </Button>

            {/* <ModeToggle /> */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
