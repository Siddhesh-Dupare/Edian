
import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"

type NavMenuButtonProps = {
    link: string;
    menuName: string;
};

const NavMenuButton: React.FC<NavMenuButtonProps> = ({ link, menuName }) => {
    return (
        <>
            <NavigationMenuItem>
                <NavigationMenuLink href={link} className="text-lg">
                    {menuName}
                </NavigationMenuLink>
            </NavigationMenuItem>
        </>
    );
}

export default NavMenuButton;
