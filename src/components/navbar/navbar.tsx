import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/react-query/utils";

export default function Navbar() {
  return (
    <header className="w-full py-4 bg-gray-900 shadow-md">
    <div className="flex items-center justify-end w-full max-w-7/10 mx-auto">
    <NavigationMenu>
      <NavigationMenuList className="flex  ">
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(),"border-4 border-gray-900 hover:border-x-gray-800 hover:text-[21px] focus:bg-gray-900 focus:text-white text-white bg-gray-900 hover:bg-gray-900 hover:text-white font-mono text-xl subpixel-antialiased font-semibold")}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/phainon" className={cn(navigationMenuTriggerStyle(),"border-4 border-gray-900 hover:border-x-gray-800 hover:text-[21px] focus:bg-gray-900 focus:text-white text-white bg-gray-900 hover:bg-gray-900 hover:text-white font-mono text-xl subpixel-antialiased font-semibold")}>
            Phainon
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/castorice" className={cn(navigationMenuTriggerStyle(),"border-4 border-gray-900 hover:border-x-gray-800 hover:text-[21px] focus:bg-gray-900 focus:text-white text-white bg-gray-900 hover:bg-gray-900 hover:text-white font-mono text-xl subpixel-antialiased font-semibold")}>
            Castorice
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/characters" className={cn(navigationMenuTriggerStyle(),"border-4 border-gray-900 hover:border-x-gray-800 hover:text-[21px] focus:bg-gray-900 focus:text-white text-white bg-gray-900 hover:bg-gray-900 hover:text-white font-mono text-xl subpixel-antialiased font-semibold")}>
            Characters
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
    </div>
    </header>
  );
}