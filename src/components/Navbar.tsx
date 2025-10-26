import {
  NavigationMenu,
  //NavigationMenuContent,
  //NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  //NavigationMenuTrigger,
  //NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Link } from "react-router-dom";
import { ColorModeButton } from "./ui/color-mode";

function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink><Link to="/">Home</Link></NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink><Link to="createpage">Create Post</Link></NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ColorModeButton></ColorModeButton>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

  );
}

export default Navbar;