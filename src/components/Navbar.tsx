import {
  NavigationMenu,
  //NavigationMenuContent,
  //NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  //NavigationMenuTrigger,
  //NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { ColorModeButton } from "./ui/color-mode";

function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuLink href="/">Home</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="createpage">Create Post</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <ColorModeButton></ColorModeButton>
      </NavigationMenuItem>
    </NavigationMenu>

  );
}

export default Navbar;