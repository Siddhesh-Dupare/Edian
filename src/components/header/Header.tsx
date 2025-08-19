import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

import NavMenuButton from "@/components/header/NavMenuButton.tsx"

const Header = () => {
    return (
        <>
            <header className="w-full border-b-2 border-dark p-2 md:p-4 lg:p-5 relative">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-2xl">
                        <h1>Edian</h1>
                    </div>

                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            <NavMenuButton link="./" menuName="Home" />
                            <NavMenuButton link="./" menuName="What We Offer?" />
                            <NavMenuButton link="./" menuName="Features" />
                            <NavMenuButton link="./" menuName="How It Works?" />
                            <NavMenuButton link="./" menuName="Impact/Vision" />
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div>
                        <Button className="mr-1 sm:mr-2">Sign Up</Button>
                        <Button className="ml-1 sm:ml-2">Sign In</Button>
                    </div>
                </div>

            </header >
        </>
    );
}

export default Header;
